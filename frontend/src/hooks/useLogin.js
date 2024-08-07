import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)
    const { dispatch,url } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${url}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setIsLoading(false)
        }

        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
        }
    }
    return { error,isLoading,login }
}

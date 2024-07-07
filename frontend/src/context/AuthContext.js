import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    const url = "https://packmyscrap-server.onrender.com";

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) {
            dispatch({type: 'LOGIN', payload: user})
        }
    }, [])

    console.log(state)

    return (
        <AuthContext.Provider value={{ ...state,dispatch,url }}>
            { children }
        </AuthContext.Provider>
    )
}

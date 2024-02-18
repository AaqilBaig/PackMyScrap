import { useAuthContext } from "./useAuthContext"
import { useBookingsContext } from './useBookingsContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: book_dispatch } = useBookingsContext()

    const logout = () => {
        localStorage.removeItem('user')

        book_dispatch({type:'SET_BOOKINGS',payload: null})
        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}
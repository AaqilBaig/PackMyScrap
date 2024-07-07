import { useEffect } from "react";
import { useBookingsContext } from "../hooks/useBookingsContext";
import { useAuthContext } from '../hooks/useAuthContext'

const Bookings = () => {
    
    const { bookings,dispatch } = useBookingsContext()
    const { user,url } = useAuthContext()

    const deleteBook = async (_id) => {
        console.log(_id)
        const response = await fetch(`${url}/bookings/${_id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        
        if(response.ok) {
            dispatch({type:'DELETE_BOOKING',payload: _id});
        }
    
    }

    useEffect(() => {
    const fetchBookings = async () => {
        try {
            const response = await fetch(`${url}/bookings`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();
            dispatch({type: 'SET_BOOKINGS', payload: json})
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };
    if(user) {fetchBookings();}
    
}, [dispatch,user]);

    
    return (
        <div className="bookings">
            {bookings && bookings.length > 0 ? (
                bookings.map((booking) => (
                    <div key={booking._id} className="booking-details">
                        <h4>Recycle-Item: {booking.material}</h4>
                        <strong>Address: {booking.address}</strong>
                        <p>Booking date: {booking.date}</p>
                        <span onClick={() => deleteBook(booking._id)}>Delete</span>
                    </div>
                ))
            ) : (
                <div>
                    <strong className="NA">No Bookings available</strong>
                </div>
            )}
        </div>
    );
}
 
export default Bookings;

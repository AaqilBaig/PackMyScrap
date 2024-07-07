import { useState } from "react";
import '../styles/Bookings.css';
import { useBookingsContext } from "../hooks/useBookingsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const BookingForm = () => {
    const { dispatch } = useBookingsContext()
    const { user,url } = useAuthContext()

    const [material, setMaterial] = useState('')
    const [phone,setPhone] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const booking = {material, phone, date, time, address};

        const response = await fetch(url + '/bookings', {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
        }
        else {
            setError(null)
            setAddress('')
            setDate('')
            setTime('')
            setMaterial('')
            setPhone('')
            dispatch({type: 'CREATE_BOOKING', payload: json})
        }
    }

    return ( 
        <section className="container_book">
            <header>Booking Form</header>
            <hr style={{marginTop: '5vh'}}/>
                <form action="#" className="form" onSubmit={handleSubmit}>
                    <div className="input-box">
                    <label>Recycle-Material</label>
                        <input type="text" placeholder="Enter Material" onChange={(e) => {setMaterial(e.target.value)}} value={material} required />
                    </div>
                    <div className="column">
                        <div className="input-box">
                            <label>Phone Number</label>
                            <input type="number" placeholder="Enter phone number" onChange={(e) => {setPhone(e.target.value)}} value={phone} required />
                        </div>
                        <div className="input-box">
                            <label>Pick up Date</label>
                            <input type="date" placeholder="Enter pickup date" onChange={(e) => {setDate(e.target.value)}} value={date} required />
                        </div>
                    </div>
                    <div className="input-box">
                        <label for=""> Time</label>
                        <input type="time" placeholder="Enter the Time" onChange={(e) => {setTime(e.target.value)}} value={time} required />
                    </div>
                    <div className="input-box address">
                        <label>Your Address</label>
                        <input type="text" placeholder="Enter street address" onChange={(e) => {setAddress(e.target.value)}} value={address} required />
                        <div className="column">
                            <input type="text" placeholder="Enter your region" required />
                            <input type="number" placeholder="Enter postal code" required />
                        </div>
                    </div>
                    <button>Submit</button>
                    {error && <div className="error-book">{error}</div>}
                </form>
            
        </section>  
    );
}
 
export default BookingForm;

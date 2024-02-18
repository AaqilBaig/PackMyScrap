import {useState} from 'react'
import '../styles/FloatingButton.css'
import { Link } from 'react-router-dom'

const FloatingButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    return (
        <Link to={'/newbooking'} className="FloatingButton" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{textDecoration: 'none'}}>
            <img width="64" height="64" src={isHovered ? "https://img.icons8.com/sf-black-filled/64/008000/plus-math.png" : "https://img.icons8.com/sf-black-filled/64/FFFFFF/plus-math.png"} alt='plus-math' />
            <span className='text'>New</span>
        </Link>
    );
}
 
export default FloatingButton;
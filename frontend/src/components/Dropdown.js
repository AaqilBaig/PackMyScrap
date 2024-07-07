import React, { useState } from 'react';
import '../styles/Dropdown.css'; // Import your CSS file for styling
import profile from '../video/icons8-male-user-48.png'
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from "../hooks/useLogout";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
}

  return (
    <div className="dropdown">
      <img style={{width: '35px'}} src={profile} alt="" onClick={()=>{toggleDropdown()}} />
      {isOpen && (
        <div className="dropdown-content">
          <p style={{color: 'green'}}>{user.email}</p>
          <hr />
          <a href="#">My Booking</a>
          <hr />
          <button onClick={handleClick} className="logout-btn" style={{background: 'transparent'}}>LOGOUT</button>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

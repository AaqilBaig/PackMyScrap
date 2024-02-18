import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import '../styles/Navbar.css'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            const title_2 = document.querySelector("p.title-2")
            const title_1 = document.querySelector("p.title-1")
            const isScrolling = window.scrollY;
            const isScrollingT = window.scrollY > 300;
            if(nav && title_1 && title_2) {
                if (isScrolling) {
                    title_2.style.opacity = (100/(isScrolling/1));
                    title_1.style.opacity = (100/(isScrolling/1));
                } else {
                    title_2.style.opacity = '1';
                    title_1.style.opacity = '1';
                }
                nav.classList.toggle('scrolling', isScrollingT);
            }
            if(window.location.pathname !== '/' && !nav.classList.contains('scrolling')) {
                nav.classList.toggle('scrolling');
            }
        };
    
        document.addEventListener('scroll', handleScroll);
    
        return () => {
        document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar">
            <ul className="nav-left">
                <li><Link className="navL-items" to={'/'}>Home</Link></li>
                <li><Link className="navL-items" to={'/aboutus'}>About US</Link></li>
                <li><Link className="navL-items" to={'/mybookings'}>My Bookings</Link></li>
            </ul>
            <div className="logo">PackMyScrap</div>
            <ul className="nav-right">
                {!user && (
                    <>
                        <Link className="navR-items" to="/login">Login</Link>
                        <Link className="navR-items" to="/signup">Sign Up</Link>
                    </>
                )}
                {user && (
                    <div className="logout">
                        <p>{user.email}</p>
                        <button onClick={handleClick} className="navR-items" style={{background: 'transparent'}}>LogOut</button>
                    </div>
                )}
            </ul>
        </nav>
    );
}
 
export default Navbar;
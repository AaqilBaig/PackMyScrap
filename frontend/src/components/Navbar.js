import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import '../styles/Navbar.css'
import Dropdown from "./Dropdown";

const Navbar = () => {
    const { user } = useAuthContext()
    // const location = useLocation();

    

    // useEffect(() => {
    //     const nav = document.querySelector('nav')
    //     const path = location.pathname
    //     if (path === '/home' && nav.classList.contains('scrolling')) {
    //         nav.classList.remove('scrolling')
    //         document.addEventListener('scroll',() => {
    //             if(window.scrollY > 30) {
    //                 nav.classList.add('scrolling')
    //             }
    //             else if(nav.classList.contains('scrolling') && window.scrollY < 30) {
    //                 nav.classList.remove('scrolling')
    //             }
    //         })
    //     }
    //     else if(path !== '/home' && !nav.classList.contains('scrolling')) {
    //         nav.classList.add('scrolling')
    //     }
    // }, [location.pathname]);

    return (
        <nav className="navbar scrolling">
            <ul className="nav-left">
                <li><Link className="navL-items" to={'/home'}>Home</Link></li>
                <li><Link className="navL-items" to={'/aboutus'}>About US</Link></li>
                <li><Link className="navL-items" to={'/mybookings'}>My Bookings</Link></li>
            </ul>
            <div className="logo">PackMyScrap</div>
            <ul className="nav-right">
                {!user && (
                    <>
                        <Link className="navR-items" to="/login">Login</Link>
                        <Link className="navR-items" to="/signup">Sign Up</Link>
                        <Link className="navR-items" to="/scraprates"></Link>
                    </>
                )}
                {user && (
                    <div className="logout">
                        <Link className="navR-items" to="/scraprates" style={{marginRight: '100px'}}>Scrap</Link>
                        <Dropdown/>
                    </div>
                )}
            </ul>
        </nav>
    );
}
 
export default Navbar;
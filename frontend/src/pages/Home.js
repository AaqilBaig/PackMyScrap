import vid from '../video/PackMyScrapVid-2.mp4'
import calender from '../video/calender.png'
import pickup from '../video/pickup.png'
import coins from '../video/coins.png'
import '../styles/Home.css';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="homepage">
            <video src={vid} loop autoPlay muted />
            <div className='title'>
                <p className='title-1'>WELCOME TO</p>
                <p className='title-2'>PackMyScrap</p>
            </div>
            <h1 className='header'>How To Use</h1>
            <div className='HowToUse'>
                
                <div className='use'>
                    <img src={calender} alt="" />
                    <hr />
                    <p>Schedule an Appointment</p>
                </div>
                <div className='use'>
                    <img src={pickup} alt="" />
                    <hr />
                    <p>Handover the items</p>
                </div>
                <div className='use'>
                    <img src={coins} alt="" />
                    <hr />
                    <p>Recieve points & rewards</p>
                </div>
            </div>
            <div className='Rates'>
                <strong><h1>Want to be a driver?</h1></strong>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit alias fugiat beatae facilis labore optio veniam incidunt rerum perspiciatis consequatur? Libero nisi sint ducimus quas consectetur quidem delectus ipsam, enim magni doloribus quo nam modi voluptates aspernatur explicabo autem dolores animi veniam ab tempora voluptate repellat optio sunt. Necessitatibus, quae.</p>
                <button>
                    <Link to="/driverlogin" style={{color: 'black'}}>Driver</Link>
                </button>
            </div>
        </div>
    );
}
 
export default Home;
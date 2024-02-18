import '../styles/ContactUs.css';
import call from '../video/phone_icon.png';

const ContactUs = () => {
    return ( 
        <body className='contact-page'>
            <section className="contact">
                <div className="content">
                    <h2>Contact Us</h2>
                    <div className="main ">
                        
                    </div>
                </div>
                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><ion-icon name="location-outline"></ion-icon></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>402671 Sugar Camp Road,<br/>Owatonna,Minnesota,<br/>55025060</p>
                            </div>
                        </div>
                        <div className="box">
                            
                            <div className="text">
                                <h3>Phone</h3>
                                <p>000-000-0000</p>
                            </div>
                            <div className="icon"><img src={call} alt=''/></div>
                        </div>
                        <div className="box">
                            <div className="icon"><ion-icon name="mail-outline"></ion-icon></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>wrub7d78i0e@temporary-mail</p>
                            </div>
                        </div>
                        <h2 className="txt">Connect with us</h2>
                        <ul className="sci">
                            <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        </ul>
                    </div>

                    <div className="contactForm">
                        <form>
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea required="required"></textarea>
                                <span>Type your Message...</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
        </body>
    );
}
 
export default ContactUs;
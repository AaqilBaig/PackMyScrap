import '../styles/AboutUs.css';

const AboutUs = () => {
    return ( 
    <body>
      <section className="about">
        <h1>About Us</h1>
          <p1>  Welcome to PackMyScrap!
  
            </p1>
          <div className="about-info">
              
              <div>
                <h1>Our Mission :</h1>
                <p className="shadow-effect">
                  At PackMYScrap, we are on a mission to create a sustainable and eco-friendly future by promoting responsible waste management and recycling practices. We believe that every small effort counts, and by encouraging people to recycle, we contribute to building a cleaner and healthier planet for generations to come.
                </p>
                <button>Read More...</button>
              </div>
              <div className="about-img">
                  <img src='https://th.bing.com/th/id/OIP.BYD22kW1Sq-ANiTAuzVL2AHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain' alt="scrap" className="img-shadow" />
              </div>
          </div>
          <div className="about-info">
            <div className="about-img">
              <img src='https://1.bp.blogspot.com/-QWNpl5YXKM8/Xw6Qph7AlyI/AAAAAAAAJyM/eYmlbOdhrcghfzwlYhGpvJO6nsyJgFufwCNcBGAsYHQ/s1536/sourcetoday_2962_gettyimages_984719162.png' alt="scrap" className="img-shadow" />
            </div>
            <div>
              <h1>Recycling Guides:</h1>
              <p className="shadow-effect">Navigating the world of recycling can be overwhelming. That's why we've curated easy-to-follow recycling guides to help you understand what can be recycled, where to recycle it, and how to do it responsibly. Whether you're a beginner or a seasoned recycler, our guides are designed to make your recycling journey hassle-free.
              </p>
              
              <button>Read More...</button>
            </div>
        </div>
        <div className="about-info">
              
          <div>
            <h1>Join Us in Making a Difference </h1>  
            <p className="shadow-effect">
              PackMyScrap invites you to be a part of the solution. Every action you take towards responsible recycling contributes to a healthier planet. Explore our resources, connect with our community, and embark on your recycling journey with us.
  
              Together, let's create a world where recycling is not just a choice but a way of life.
              
            </p>
            <button>Read More...</button>
          </div>
          <div className="about-img">
              <img src='https://enterslice.com/learning/wp-content/uploads/2019/08/E-Waste-Management-.jpg' alt="scrap" className="img-shadow" />
          </div>
        </div>
      </section>
    </body>
    );
}
 
export default AboutUs;
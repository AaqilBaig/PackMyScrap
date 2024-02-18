import vid from '../video/PackMyScrapVid-2.mp4'
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="homepage">
            <video src={vid} loop autoPlay muted />
            <div className='title'>
                <p className='title-1'>WELCOME TO</p>
                <p className='title-2'>PackMyScrap</p>
            </div>
            <div className='whyus'>
                <h1></h1>
            </div>
            <div className='getstarted'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos quam ipsa hic accusantium laborum, et quibusdam quo quas vitae officia aut, cupiditate iure impedit. Quidem dicta non enim eligendi asperiores in esse deleniti natus ab eos, minus iure nam distinctio, nesciunt saepe odio quasi autem, fugiat accusantium? Quae rem earum delectus maiores dicta sint autem facilis id eveniet cupiditate nulla recusandae aut cum repudiandae nostrum, odio quo consequatur nobis perspiciatis! Nesciunt id consequatur modi quasi molestias molestiae doloribus, ducimus quam eveniet deserunt. Voluptatem dolor magnam aspernatur odit libero assumenda cumque, perspiciatis minus distinctio, officia aliquam, explicabo quis nostrum alias!</p>
            </div>
        </div>
    );
}
 
export default Home;
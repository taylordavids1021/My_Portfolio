import podcastImg from '../assets/podcastproject.png'
import bookConnect from '../assets/bookconnect.png'
import kitchenImg from '../assets/kitchen.png'
import airBnbImg from '../assets/Airbnbclone.png'

const MyProjects = () => {
    return (
        <section className='project_section'>
            <h3>What I Bring to the Table</h3>
                <ul>
                    <li>Technical Skills: Proficient in [List of Programming Languages], [List of Frameworks], and [List of Tools].</li>
                    <li>Problem Solver: I enjoy tackling challenges and finding creative solutions to complex problems.</li>
                    <li>Collaborative Spirit: I thrive in team environments and value open communication and shared success.</li>
                </ul>
            <h2>My Projects</h2>
            <div className="project--container">
                <h2>Podcast</h2>
                <h6>Description</h6>
                <img src={podcastImg} alt='Podcast Image' className='project_Img'/>
            </div>
            <div className="project--container">
                <h2>Book Connect</h2>
                <h6>Description</h6>
                <img src={bookConnect} alt='Book Connect Image' className='project_Img'/>
            </div>
            <div className="project--container">
                <h2>Kitchen</h2>
                <h6>Description</h6>
                <img src={kitchenImg} alt='Kitchen Image' className='project_Img'/>
            </div>
            <div className="project--container">
                <h2>AirBnB Clone</h2>
                <h6>Description</h6>
                <img src={airBnbImg} alt='AirBnB Image' className='project_Img'/>
            </div>
        </section>
    );
};

export default MyProjects;
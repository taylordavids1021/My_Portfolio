import AboutMe from './AboutMe'
import Navbar from './Navbar'

function Home() {
    return (
        <section>
            <Navbar />
            <div className='welcome'>
                <h1>Welcome to Taylor's Portfolio!</h1>
                <h3>Passionate Software Developer</h3>
                <p>Hello and welcome! I'm Taylor Abrahams, a dedicated and enthusiastic entry-level software developer with a passion for creating efficient and user-friendly applications. I'm excited to share my journey, projects, and skills with you</p>
            </div>
            <AboutMe />
        </section>
    )
}

export default Home
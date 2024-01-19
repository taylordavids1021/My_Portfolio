import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import atom from '../assets/atom.png'

function Navbar() {
    return (
        <div className="navbar--container">
            <div className="div">
                <img src={html}/>
                <img src={css}/>
                <img src={js}/>
                <img src={atom}/>
            </div>
            <ul className="navbar--list">
                <li className="navbar--list--items">About Me</li>
                <li className="navbar--list--items">Projects</li>
                <li className="navbar--list--items">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
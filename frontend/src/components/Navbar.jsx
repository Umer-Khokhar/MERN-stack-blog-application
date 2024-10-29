import {useContext, useState} from 'react'
import {Link} from 'react-router-dom';
import {images} from "../constant/index.js";
import {ThemeContext} from "./";

const Navbar = () => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const navToggle = () => {
        if (isOpen) {
            setIsClosing(true)

            setTimeout(() => {
                setIsOpen(false);
                setIsClosing(false);
            }, 300);
        } else {
        setIsOpen(true);
        }
    }
    return (
        <div className="navbar__container">
            <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className="nav__items">
                    <header>
                        <Link to='/'>
                            <h1 className="logo">Blogi</h1>
                        </Link>
                    </header>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about-us"}>About Us</Link></li>
                        <li><Link to={"/services"}>Services</Link></li>
                        <li><Link to={"/contact-us"}>Contact</Link></li>
                    </ul>
                </div>
                <div className={`btns ${isDarkMode ? "dark-mode" : ''}`}>
                    <img className='theme-toggle' src={!isDarkMode ? images.darkTheme : images.lightTheme}
                         alt="Dark and light theme icons" onClick={() => toggleTheme()} width={27}/>
                    <Link to="/dashboard">
                        <button className="subs__btn">Dashboard</button>
                    </Link>
                </div>
            </nav>
            <div className={`navbar-menu ${isDarkMode ? "dark-mode" : ""}`}>
                <header>
                    <Link to='/'>
                        <h1 className="logo">Blogi</h1>
                    </Link>
                </header>
                <div className="menu-logos">
                <img className='theme-toggle' src={!isDarkMode ? images.darkTheme : images.lightTheme}
                     alt="Dark and light theme icons" onClick={() => toggleTheme()} width={22}/>
                <img onClick={() => navToggle()} src={images.menu} alt="menu icon" width={25}/>
                </div>
                {isOpen && (
                    <>
                        <div className={`menu ${isClosing ? 'close' : 'open'}`}>
                            <img src={images.closeMenu} onClick={() => navToggle()} alt="close menu icon" width={30}/>
                            <ul>
                                <li><Link onClick={() => navToggle()} to={"/"}>Home</Link></li>
                                <li><Link onClick={() => navToggle()} to={"/about-us"}>About Us</Link></li>
                                <li><Link onClick={() => navToggle()} to={"/services"}>Services</Link></li>
                                <li><Link onClick={() => navToggle()} to={"/contact-us"}>Contact</Link></li>
                            </ul>
                        <div className={`btns ${isDarkMode ? "dark-mode" : ''}`}>
                            <Link onClick={() => navToggle()} to="/dashboard">
                                <button className="sub__btn">Dashboard</button>
                            </Link>
                        </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar
import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import './navbar.css';


// The used nameing convention is BEM -> Block Element Mofifier 
const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT-3</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#feauters">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
    </>
)
const Navbar =()=> {
    const [toggleMenu, setToggelMenu] = useState(false)
    return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="gpt3__navbar-links_container">
                <Menu />
            </div>
        </div>
        <div className="gpt3__navbar-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggelMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggelMenu(true)} />    
            }
            {toggleMenu && (
                <div className="gpt3__navbar-menu_container scale-up-center">
                    <div className="gpt3__navbar-menu_container-links">
                        <Menu />
                    </div>
                    <div className="gpt3__navbar-menu_container-links-sign">
                        <p>Sign in</p>
                        <button type="button">Sign up</button>
                    </div>
                </div>
            )}
        </div>
    </div>
    )
}

export default Navbar
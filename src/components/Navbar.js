import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [ click, setClick ] = useState(false);
    const [ button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{color: '#ffffff'}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            {/* <MdFingerprint className="navbar-icon" /> */}
                            <img src= "https://testimageupload28102020.s3.amazonaws.com/snack-overflow-logo-no-text.png" alt="snack logo" className="navbar-logo"/>
                            snackOverflow
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item" onClick={closeMobileMenu}>
                                <Link to='/' className="nav-links">
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item" onClick={closeMobileMenu}>
                                <Link to='/services' className="nav-links">
                                    CATERING
                                </Link>
                            </li>
                            <li className="nav-item" onClick={closeMobileMenu}>
                                <Link to='/products' className="nav-links">
                                    SUCCESS STORY
                                </Link>
                            </li>
                            <li className="nav-item" onClick={closeMobileMenu}>
                                <Link to='/products' className="nav-links">
                                    POPULAR
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (<Link to='/sign-up' className="btn-link"><Button buttonStyle='btn--outline'>SIGN UP</Button></Link>) : (<Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}><Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button></Link>)}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

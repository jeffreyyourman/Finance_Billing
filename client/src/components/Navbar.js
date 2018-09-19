import React from 'react';
import '.././styles/Navbar.css';


const Navbar = (props) => {
    const firstName = props.userFirstName;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">AppName</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/maintable">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Welcome {firstName}
                    </span>
                </div>
            </nav>
        </div>
    );    
 
}
export default Navbar;

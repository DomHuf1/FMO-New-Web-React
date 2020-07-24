import React from "react";

function Header() {
    return(
        <div className="head-container">
            <img src="../../public/img/header.jpeg" />
            <div className="head-container-lower-bar">
                <ul id="menu">
                    <li>
                        <a href="index.html" className="list-item">Home</a>
                    </li>
                    <li>
                        <a href="about.html" className="list-item">About</a>
                    </li>
                    <li>
                        <a href="members.html" className="list-item">Members</a>
                    </li>
                    <li>
                        <a href="events.html" className="list-item">Past Events</a>
                    </li>
                    <li>
                        <a href="#contact" className="list-item">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
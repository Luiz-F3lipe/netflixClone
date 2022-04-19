import React from "react";
import './Header.css';

export default () => {
    return (
        <header>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Netflix_logo_%282%29.svg/640px-Netflix_logo_%282%29.svg.png" alt="img" />
                </a> 
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" />
                </a>
            </div>
        </header>
    )
}
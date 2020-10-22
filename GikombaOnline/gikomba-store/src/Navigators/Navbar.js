import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="title">
                Gikosh.com
            </div>
            <div className="navigation">
                <button>Home</button>
                <button>Store</button>
                <button>About Us</button>
                <button>Contact us</button>
            </div>
            <div className="search">
                <input type="text" value="" placeholder="Search"/>
            </div>
        </div>
    )
}

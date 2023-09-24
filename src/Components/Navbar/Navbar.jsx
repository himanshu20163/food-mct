import React from 'react'
import { Link } from 'react-router-dom'
import foodlogo from "../images/logo.svg"

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" class="navbar-brand" href="#">
                    <img src={foodlogo} />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                            <Link to="/" class="nav-link"> Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/foodsearch" class="nav-link"> Food Search </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
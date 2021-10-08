import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary mb-4">
                <div className="container-fluid d-flex justify-content-center">
                    <a className="navbar-brand text-light" href="#">
                    <img src="./logo192.png" alt="" width={30} height={30} className="d-inline-block align-text-top" />
                    Image Gallery
                    </a>
                </div>
            </nav>
        </div>
    )
}

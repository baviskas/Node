import React from 'react';

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
                Navbar &nbsp;
                <span className='badge badge-secondary badge-pill'> {totalCounters}</span>
            </div>
        </nav>
    );
};

export default NavBar;

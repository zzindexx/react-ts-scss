import * as React from 'react';
import './LeftNav.scss';
import { NavLink } from 'react-router-dom';

export const LeftNav: React.SFC = () => {
    return <div className="col-md-3 col-xl-2 bd-sidebar">
        <nav className="collapse bd-links">
                <ul className="nav bd-sidenav">
                    <li>
                        <NavLink to="/about">About page 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about/secondpage">About page 2</NavLink>
                    </li>
                </ul>
        </nav>
    </div>;
}
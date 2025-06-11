// TO Avoid Page Refreshing on Nav Bar click :
import { NavLink } from "react-router-dom";

import './Navbar.css';

export const Navbar = () => {
    return (
        <>
            <header>
                <div className="contianer">

                    <div className="logo-brand">
                        <NavLink to="/">Pranav Aggarwal </NavLink>
                    </div>

                    <nav>
                        <ul>
                            <li> <NavLink to="/"> Home </NavLink> </li>
                            <li> <NavLink to="/about"> About </NavLink> </li>
                            <li> <NavLink to="/contact"> Contact </NavLink> </li>
                            <li> <NavLink to="/Login"> Login </NavLink> </li>
                            <li> <NavLink to="/Register"> Register </NavLink> </li>
                            <li> <NavLink to="/service"> Service </NavLink> </li>

                        </ul>
                    </nav>
                </div>
            </header>

        </>
    );
};



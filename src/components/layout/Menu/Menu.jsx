import React from "react";
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="sidebar-wrapper sidebar-theme">

                <nav id="sidebar">

                    <ul className="navbar-nav theme-brand flex-row  text-center">
                        <li className="nav-item theme-text">
                            <Link to="/" className="nav-link"> Dobclick </Link>
                        </li>
                        <li className="nav-item toggle-sidebar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather sidebarCollapse feather-chevrons-left"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                        </li>
                    </ul>

                    <div className="shadow-bottom"></div>
                    <ul className="list-unstyled menu-categories" id="accordionExample">
                        <li className="menu active" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">

                        </li>

                        <li className="menu">
                            <Link to="/" className="dropdown-toggle">

                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                    <span>Dashboard</span>
                                </div>
                            </Link>
                        </li>

                        <li className="menu">
                            <Link to="/estoque" className="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                    <span>Estoque</span>
                                </div>
                            </Link>
                        </li>

                        <li className="menu">
                            <Link to="/graficos" className="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                                    <span>Gráficos</span>
                                </div>
                            </Link>
                        </li>

                    </ul>

                </nav>

            </div>
        


    )
}


export default Menu;
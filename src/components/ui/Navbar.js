import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {useDispatch} from 'react-redux'          
import { startLogout } from '../../actions/auth';       

export const Navbar = () => {

       const dispatch = useDispatch()

       const handleLogout=()=>{
              dispatch(startLogout())

       }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/home"
            >
                CONEXA CHALLENGE
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/phrases"
                    >
                        Phrases
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/photos"
                    >
                        Photos
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
            <button 
                className="btn btn-outline-danger"
                onClick={ handleLogout }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>
                </ul>
            </div>
        </nav>
    )
}
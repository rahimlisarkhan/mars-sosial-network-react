import React from 'react';
import { NavLink } from 'react-router-dom';
// import {withRouter} from 'react-router-dom';

const Navbar = () => {
    // console.log(props.history.replace('/1'))
    
    return(
        <nav className="navbar container-N" >
            <NavLink to='/' exact activeClassName="active-nav">Profile</NavLink>
            <NavLink to='/news'  activeClassName="active-nav">News</NavLink>
            <NavLink to={'/messages'?'/messages/1':false}   activeClassName="active-nav">Messages</NavLink>
            <NavLink to='/setting'  activeClassName="active-nav">Setting</NavLink>
        </nav>
    )
}

export default  Navbar;

// export default  withRouter(Navbar);
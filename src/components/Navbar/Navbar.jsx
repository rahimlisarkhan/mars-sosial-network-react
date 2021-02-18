import React from "react";
import {connect} from 'react-redux'
import { NavLink } from "react-router-dom";

const Navbar = (props) => {

  return (
    <nav className="navbar container-N">
      <div className="navbar-content">

      <NavLink to="/mars-group/" exact activeClassName="active-nav">
        {props.data.profile}
      </NavLink>
      <NavLink to="/mars-group/news" activeClassName="active-nav">
        {props.data.news}
      </NavLink>
      <NavLink to={"/mars-group/messages/id=:id?"} activeClassName="active-nav">
        {props.data.messages}
      </NavLink>
      <NavLink to="/mars-group/friends" activeClassName="active-nav">
        {props.data.friends}
      </NavLink>
      </div>

    </nav>
  );
};


let mapStateToProps = (state) => {
  return{
    data:state.navBar
  }
}

export default connect(mapStateToProps)(Navbar);

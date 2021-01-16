import React from 'react' 
import { NavLink } from 'react-router-dom';


const UsersColumnList = (props) => {
    // console.log(props)
    return(
    <NavLink to={`${props.parentPathName}/${props.userKey}`}  activeClassName='active-user'>{props.userdata.name} {props.userdata.surname}</NavLink>
    )
}

export default UsersColumnList
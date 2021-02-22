import React from "react";
import { NavLink } from "react-router-dom";

const UsersColumnList = (props) => {
  return (
    <NavLink
      to={`/mars-group/messages/id=${props.userId}`}
      onClick={() => props.getUserMessagesById(props.userId)}
      activeClassName="active-user"
    >
      {props.userdata.first_name} {props.userdata.last_name}
    </NavLink>
  );
};

export default UsersColumnList;

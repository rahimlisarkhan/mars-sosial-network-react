import React from "react";
import UsersColumnList from "./UsersColumnList";

const UsersColumn = (props) => {
  return (
    <div className="content-messages__users">
      {props.data.filter(el => el.id !==6).map((el) => (
        <UsersColumnList
          key={el.id}
          getUserMessagesById={props.getUserMessagesById}
          userdata={el}
          userId={el.id}
        />
      ))}
    </div>
  );
};

export default UsersColumn;

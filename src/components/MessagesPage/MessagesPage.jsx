import React from "react";

//Message child column page
import MessageColumn from "./MessageColumn/MessageColumn";
import UsersColumn from "./UsersColumn/UsersColumn";

const MessagesPage = (props) => {
  
  return (
   
    <div className="content-messages container-C">

          {/* USERS COLUMN */}
          <UsersColumn 
          data={props.data.users} 
          getUserMessagesById={props.getUserMessagesById}
          />

          {/* MESSAGE COLUMN */}
          {props.data.usersMessage && props.userFilterImage ? (
            <MessageColumn
              updateData={props.data}
              userImage={props.userFilterImage.image}
              data={props.data.usersMessage}
              handleChange={props.handleChange}
              handleClick={props.handleClick}
            />
          ) : (
            <div className="begin-messages">
              <p>
                Welcome! <br /> Please section message box
              </p>
            </div>
          )}

    </div>
  );
};

export default MessagesPage;

import React from "react";
import Loader from "../../common/Loader";
import MessageColumnList from "./MessageColumnList";
import UserAddMessage from "./UserAddMessage";

const MessageColumn = (props) => {

  return (
    <div className="content-messages__message">
        
       { !props.updateData.isLoadingMsg 
          ? <div className="content-messages__message__content">
                    {props.data.map((el, i) => (
                      <MessageColumnList
                        key={i}
                        userImage={props.userImage}
                        userData={el}
                      />
                    ))}
            </div> 
          : <Loader/>
        }

      <UserAddMessage
        disableInput ={props.updateData.disableInput}
        handleChange={props.handleChange}
        handleClick={props.handleClick}
      />
    </div>
  );
};

export default MessageColumn;

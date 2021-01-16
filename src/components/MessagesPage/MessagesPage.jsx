import React from 'react'
import {withRouter} from 'react-router-dom';

//Message child column page
import MessageColumn from './MessageColumn/MessageColumn';
import UsersColumn from './UsersColumn/UsersColumn';

const MessagesPage = (props) => {
  
    // console.log(props.userMessage)
    let locationPathId = props.location.pathname.split('/')[2],
        locationFilterData = props.userMessage.filter(el=>el.id == locationPathId),
        userFilterImage = props.users.filter(el=>el.id==locationPathId)
    
    return (
        <div className="content-messages container-C">
            <UsersColumn parentPathName={props.match.path} data={props.users} />
            <MessageColumn  userImage={userFilterImage[0].image}   data={locationFilterData}/>
        </div>
    )
}


export default withRouter(MessagesPage);
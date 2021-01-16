import React from 'react'
import UserAddPost from '../../ProfilePage/UserAddPost/UserAddPost'
import MessageColumnList from './MessageColumnList'

const MessageColumn = (props) =>{

    return(
        <div className="content-messages__message">
            <div className="content-messages__message__content">
             {props.data[0].messages.map((el,i)=> <MessageColumnList key={i} userImage={props.userImage} userData={el} />)}
            </div>
            <UserAddPost headerName="Write message" objKey='message' data={props.data[0].messages} placeholder="Write your message" btnName="Send"/>
        </div>
    )
}


export default MessageColumn
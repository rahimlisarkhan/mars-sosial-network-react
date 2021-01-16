import React from 'react'

const MessageColumnList = (props) =>{
    
    return(
        <div className="content-messages__message__content__group">
            <img src={props.userImage}/>
            <div className="content-messages__message__content__group__answer">
                <p>{props.userData.message}</p>
                <span>{props.userData.create_at}</span>
            </div> 
        </div>
    )
}


export default MessageColumnList
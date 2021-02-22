import React from 'react'

let ProfilePageUserInfo = (props) => {
    return (
        <div className='user-profil-card__info__desc'>
        <div className="username-content">
        <h1>{props.userdata.first_name} {props.userdata.last_name}</h1>
        </div>
        
        <p>Username:<span className='text-lowercase'>{props.userdata.username} </span></p>
        <p>Birthday:<span>{props.userdata.birthday} </span></p>
        <p>Email:<span className='text-lowercase'>{props.userdata.email} </span></p>
        <p>Education:<span>{props.userdata.education} </span></p>
        <p>Position:<span>{props.userdata.position} </span></p>
        <p>City:<span>{props.userdata.city} </span></p>

    </div>
    )
}

export default  ProfilePageUserInfo
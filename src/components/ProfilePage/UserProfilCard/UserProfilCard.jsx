import React from 'react'

const UserProfilCard = (props) =>{
    return(
        <div className="user-profil-card">
            <div className='user-profil-card__cover'>
                <img src={props.userdata.coverImage}/>    
            </div>
            <div className='user-profil-card__info'>
                <img src={props.userdata.image}/>

                <div className='user-profil-card__info__desc'>
                    <h1>{props.userdata.name} {props.userdata.surname}</h1>
                    <p>Date of Birth: <span>{props.userdata.born} </span></p>
                    <p>City: <span>{props.userdata.city}</span></p>
                    <p>Education: <span>{props.userdata.education}</span></p>
                    <p>Position: <span>{props.userdata.jobs}</span></p>
                </div>

            </div>
        </div>
    )
}

export default UserProfilCard;
import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { MdComment } from "react-icons/md";

const UserPostList = (props) =>{
    return(
        <div className='user-share-posts'>
              <div className='user-share-posts__card'>
                <div className='user-share-posts__card__header'>
                    <img src={props.profileData.image} />
                    <div className='user-share-posts__card__header__desc'>
                        <h1>{props.profileData.name} {props.profileData.surname} </h1>  
                        <p>{props.data.create_at} </p>
                    </div>
              </div>    
                <div className='user-share-posts__card__item'>
                    <p>{props.data.post} </p>
                </div>

                <div className='user-share-posts__card__btn'>
                    <AiFillHeart className='heart-icon'/>
                    <MdComment className='comment-icon'/>
                </div>
              </div>

    </div>
    )
}


export default UserPostList
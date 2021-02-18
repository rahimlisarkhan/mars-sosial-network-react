import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { MdComment } from "react-icons/md";

const UserPostList = (props) =>{
    
    console.log(props);

    return(
        <div className='user-share-posts'>
              <div className='user-share-posts__card'>
                <div className='user-share-posts__card__header'>
                {/* <img src={'http://www.hellojob.az/uploads/elanlar-cv/min/2020/10/31/5f9c7ac9551f0-69pd16Fi7KZIBr-.jpg'} /> */}
                    <img src={props.profileData.image} />
                    <div className='user-share-posts__card__header__desc'>
                        <h1>{props.profileData.first_name} {props.profileData.last_name} </h1>  
                        <p>{props.data.create_at} </p>
                    </div>
              </div>    
                <div className='user-share-posts__card__item'>
                    <p>{props.data.post_content} </p>
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
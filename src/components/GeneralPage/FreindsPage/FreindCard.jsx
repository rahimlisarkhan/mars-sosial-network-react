import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImUserMinus, ImUserPlus } from "react-icons/im";

let FreindCard = (props) => {

  const [editmode, seteditmode] = useState(false)

  return (
    <div className="freind-card">
      <NavLink
        className="freind-card__overlay"
        to={`/mars-group/friends/id=${props.data.id}`}
      ></NavLink>
      <img src={props.data.image} alt='FreindCard' />

      <div className="freind-card__desc">
        <h1> {props.data.first_name}</h1>
        <h1> {props.data.last_name}</h1>
      </div>

      <button className={editmode?'unFollowBtn':''} onClick={() =>{ 
                            seteditmode(!editmode)
                            props.followUser(props.data.id) }}>
        {editmode?
        <>
        <ImUserMinus /> <span>unfollow</span>
        </>
         :  
         <>
         <ImUserPlus /> <span>follow</span>
         </>
         }
        </button>
    </div>
  );
};

export default FreindCard;

import React from "react";
import { NavLink } from "react-router-dom";
import { ImUserPlus } from "react-icons/im";

let FreindCard = (props) => {
  return (
    <div className="freind-card">
      <NavLink
        className="freind-card__overlay"
        to={`/mars-group/friends/id=${props.data.id}`}
      ></NavLink>
      <img src={props.data.image} />

      <div className="freind-card__desc">
        <h1> {props.data.first_name}</h1>
        <h1> {props.data.last_name}</h1>
      </div>

      <button>
        <ImUserPlus /> <span>follow</span>
      </button>
    </div>
  );
};

export default FreindCard;

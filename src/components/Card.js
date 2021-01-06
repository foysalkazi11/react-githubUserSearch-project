import React, { useContext } from "react";
import { GithbuContext } from "../context/ContextProvider";

import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
const Card = () => {
  const { userData } = useContext(GithbuContext);

  const {
    avatar_url,
    bio,
    blog,

    location,
    name,

    twitter_username,
    company,
    html_url
  } = userData;
  return (
    <>
      <header>
        <div className="card-basic-info">
          <div className="card-img-container">
            <img src={avatar_url} alt={name} />
          </div>
          <div className="card-img-container-info">
            <h4>{name}</h4>
            {twitter_username ? <p>{twitter_username}</p> : null}
          </div>
        </div>
        <a href={html_url}>Follow</a>
      </header>
      <p>{bio}</p>
      <div className="card-links">
        <p>
          <MdBusiness className="card-icon" /> {company}
        </p>
        <p>
          <MdLocationOn className="card-icon" /> {location}
        </p>
        <a href={`https://${blog}`}>
          <MdLink className="card-icon" />
          {blog}
        </a>
      </div>
    </>
  );
};

export default Card;

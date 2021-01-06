import React, { useContext } from "react";
import { GithbuContext } from "../context/ContextProvider";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const Info = () => {
  const { userData } = useContext(GithbuContext);
  const { public_repos, public_gists, followers, following } = userData;
  const info = [
    {
      id: 1,
      icon: <GoRepo className="icon-info" />,
      label: "Reops",
      value: public_repos
    },
    {
      id: 2,
      icon: <GoGist className="icon-info" />,
      label: "Gists",
      value: public_gists
    },
    {
      id: 3,
      icon: <FiUsers className="icon-info" />,
      label: "Followers",
      value: followers
    },
    {
      id: 4,
      icon: <FiUserPlus className="icon-info" />,
      label: "following",
      value: following
    }
  ];
  return (
    <div className="user-info">
      {info.map((item) => {
        return (
          <div className="inv-info" key={item.id}>
            <div className="inv-icon">{item.icon}</div>
            <div className="inv-details">
              <h4>{item.value}</h4>
              <p>{item.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;

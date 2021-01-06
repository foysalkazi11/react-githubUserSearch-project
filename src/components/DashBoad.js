import React, { useContext } from "react";
import SearchUser from "./SearchUser";
import { GithbuContext } from "../context/ContextProvider";
import Info from "./Info";
import User from "./User";
import loadingImage from "../images/preloader.gif";

const DashBoad = () => {
  const { error, isLoading } = useContext(GithbuContext);

  if (isLoading) {
    return (
      <div className="dashboad section">
        <SearchUser />
        <div className="spinner">
          <img src={loadingImage} alt="loading spinner" />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="dashboad section">
        <div className="alert">
          <p>{error}</p>
        </div>
        <SearchUser />
      </div>
    );
  }

  return (
    <div className="dashboad section">
      <SearchUser />
      <Info />
      <User />
    </div>
  );
};

export default DashBoad;

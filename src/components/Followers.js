import React, { useContext } from "react";
import { GithbuContext } from "../context/ContextProvider";

const Followers = () => {
  const { userRepos, isLoading } = useContext(GithbuContext);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {userRepos.length !== 0 ? (
        userRepos.map((follower) => {
          const { avatar_url, html_url, id, login } = follower;
          return (
            <div className="user-container" key={id}>
              <div className="follower-img-container">
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "50%"
                  }}
                  src={avatar_url}
                  alt={login}
                />
              </div>
              <div className="follower-info">
                <h4>{login}</h4>
                <p>{html_url}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p>No followers...</p>
      )}
    </>
  );
};

export default Followers;

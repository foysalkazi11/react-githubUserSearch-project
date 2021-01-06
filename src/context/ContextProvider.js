import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const GithbuContext = createContext();

const ContextProvider = ({ children }) => {
  const [userSearch, setuserSearch] = useState("wesbos");

  const [userData, setuserData] = useState("");
  const [userRepos, setuserRepos] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState("");
  const [searchLimit, setsearchLimit] = useState(60);

  useEffect(() => {
    setisLoading(true);
    const fatchUser = async () => {
      try {
        const response = await axios.all([
          axios(`https://api.github.com/users/${userSearch}`),
          axios(`https://api.github.com/users/${userSearch}/followers`),
          axios("https://api.github.com/rate_limit")
        ]);
        if (response) {
          setuserData(response[0].data);
          setuserRepos(response[1].data);
          setsearchLimit(response[2].data.rate.remaining);
        }
      } catch (error) {
        seterror(error.message);
      }
      setisLoading(false);
    };
    fatchUser();
  }, [userSearch]);

  return (
    <GithbuContext.Provider
      value={{
        userData,
        setuserSearch,
        searchLimit,
        error,
        seterror,
        userRepos,
        isLoading
      }}
    >
      {children}
    </GithbuContext.Provider>
  );
};

export { ContextProvider, GithbuContext };

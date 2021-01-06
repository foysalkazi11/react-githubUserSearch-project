import React, { useContext, useState } from "react";
import { GithbuContext } from "../context/ContextProvider";
import { AiOutlineSearch } from "react-icons/ai";

const SearchUser = () => {
  const {
    setuserSearch,
    searchLimit,

    seterror
  } = useContext(GithbuContext);

  const [user, setuser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      setuserSearch(user.trim());
      setuser("");
      seterror("");
    }
  };

  return (
    <div className="searchUser">
      <div className="icon">
        <AiOutlineSearch className="search-icon" />
      </div>

      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          placeholder="Search github user"
          onChange={(e) => setuser(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="request">
        <h4>Search Limit : {searchLimit} / 60</h4>
      </div>
    </div>
  );
};

export default SearchUser;

import React from "react";

import Card from "./Card";
import Followers from "./Followers";
const User = () => {
  return (
    <section className="user-card-followers">
      <div className="user-card">
        <Card />
      </div>
      <div className="user-followers">
        <Followers />
      </div>
    </section>
  );
};
export default User;

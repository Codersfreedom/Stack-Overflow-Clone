import React from "react";
import { useSelector } from "react-redux";

import User from "./User";
import "./Users.css";

const UsersList = ({styles}) => {
  const users = useSelector((state) => state.usersReducer);

  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} styles={styles} />
      ))}
    </div>
  );
};

export default UsersList;

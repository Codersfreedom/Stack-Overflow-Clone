import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn,styles,logoStyle }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} styles={styles} logoStyle={logoStyle} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList styles = {styles} />
      </div>
    </div>
  );
};

export default Users;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [mobile, setMoblie] = useState("");
  const addPostHandler = () => {
    let obj = {
      userName,
      mobile,
    };
    axios
      .post("http://localhost:3002/", obj)
      .then((res) => {
        setUsername("");
        setMoblie("");
        console.log(res);
      })
      .catch((err) => console.log(err));
    console.log(userName, mobile);
  };
  return (
    <>
      <button onClick={() => navigate("/")}>Home Page</button>
      <button onClick={() => navigate("/edit-user")}>Edit User</button>
      <div>Add User</div>
      <br />
      <br />

      <label>UserName</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <label>Mobile</label>
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMoblie(e.target.value)}
      />
      <br />
      <button onClick={addPostHandler}>Add post</button>
    </>
  );
};

export default AddUser;

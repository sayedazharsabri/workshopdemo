import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3002/").then((res) => {
      setPosts(res.data.data);
      console.log("9 res", res.data.data);
    });
  }, [flag]);
  const onDeleteHandler = (_id) => {
    let obj = {
      _id,
    };
    axios
      .delete("http://localhost:3002/", { data: obj })
      .then((res) => setFlag(!flag))
      .catch((err) => console.log(err));
  };
  console.log(posts);
  return (
    <>
      <button onClick={() => navigate("/add-user")}>Add User</button>
      <button onClick={() => navigate("/edit-user")}>Edit User</button>
      <div>Home Page</div>
      <br />
      <br />
      <table className="moduleSection">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>Mobile</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            posts &&
            posts.map((post) => {
              return (
                <tr key={post._id}>
                  <td>{post._id}</td>
                  <td>{post.userName}</td>
                  <td>{post.mobile}</td>
                  <td
                    className="hoverable"
                    onClick={() => onDeleteHandler(post._id)}
                  >
                    Delete
                  </td>
                </tr>
              );
            })
          ) : (
            <div>No data</div>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Homepage;

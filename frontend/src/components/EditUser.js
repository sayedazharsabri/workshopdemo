import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(false);

  const editHandler = (e, _id, key) => {
    console.log("posts", posts);
    const editedData = posts && posts.find((item) => item._id === _id);
    let tempData = { ...editedData, [key]: e.target.innerHTML };

    axios.put("http://localhost:3002/", tempData).then((res) => {
      setPosts(editedData);
      setFlag(!flag);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3002/").then((res) => {
      setPosts(res.data.data);
      console.log("9 res", res.data.data);
    });
  }, [flag]);
  return (
    <>
      <button onClick={() => navigate("/")}>Home Page</button>
      <button onClick={() => navigate("/add-user")}>Add User</button>
      <div>Edit User</div>
      <br />
      <br />
      <table className="moduleSection">
        <thead>
          <tr>
            <th>userName</th>
            <th>mobile</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0
            ? posts &&
              posts.map((post) => {
                return (
                  <tr key={post._id}>
                    <td
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => editHandler(e, post._id, "userName")}
                    >
                      {post.userName}
                    </td>
                    <td
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => editHandler(e, post._id, "mobile")}
                    >
                      {post.mobile}
                    </td>
                  </tr>
                );
              })
            : "No Data"}
          {}
        </tbody>
      </table>
    </>
  );
};

export default EditUser;

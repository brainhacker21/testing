import axios from "./axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Categories = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("category?page=1&limit=15&is_active=1&name=ca")
      .then((response) => {
        setList(response.data.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(list);
  return (
    <div className="category">
      <div className="container">
        <div className="titleText">
          <h1>Categories</h1>
          <ul>
            {list.map((item) => (
              <li key={item.objectID}>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;

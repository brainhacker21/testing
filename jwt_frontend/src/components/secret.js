import React, { useState, useEffect } from "react";
import axios from "axios";

const Secret = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSecret = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get("/user/getSecret", config);
        setMessage(data.msg);
      } catch (error) {
        setError(error.response.data.message);
      }
    };
    fetchSecret();
  }, []);

  return (
    <div>
      {message && <h1>{message}</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Secret
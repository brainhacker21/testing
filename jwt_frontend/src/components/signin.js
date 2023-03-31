import React, { useState } from "react";
import baseApi from "./axios";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await baseApi.post("user/login", form);
      const token = response.data.data.token;
      console.log(response);
      localStorage.setItem("token", token);
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (field) => (e) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <form onSubmit={onsubmit}>
      <h1>JSON Web Token Sign In</h1>
      <div className="inputLogin">
        <div className="error"></div>
        <label>Email:</label>
        <input
          type="email"
          value={form.email}
          onChange={handleChange("email")}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={form.password}
          onChange={handleChange("password")}
        />
        <br />
        <br />

        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default SignIn;

import React, { useState } from "react";
import baseApi from "./axios";
import { Navigate, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await baseApi.post("user/register", form);
      const result = response;
      console.log(result);
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
      <h1>JSON Web Token Sign Up</h1>
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
        <label>Phone:</label>
        <input
          type="text"
          value={form.phone}
          onChange={handleChange("phone")}
        />
        <label>Name:</label>
        <input type="text" value={form.name} onChange={handleChange("name")} />
        <br />
        <br />

        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default SignUp;

import React from "react";
import useInput from "./Multi.js";

const MyForm = () => {
  // Initialize the form with multiple inputs
  const { values, handleChange, resetValues } = useInput({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={resetValues}>
        Reset
      </button>
      {values.firstName}
      {values.lastName}
      {values.email}
    </form>
  );
};

export default MyForm;

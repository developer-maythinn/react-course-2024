import React, { useState } from "react";

function InputFormUseState() {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Jobs",
    email: "aa@gmail.com",
  });
  console.log(form.firstName);
  return (
    <>
      <label>First Name</label>
      <input
        type="text"
        value={form.firstName}
        onChange={(e) => {
          setForm({
            ...form,
            firstName: e.target.value,
          });
        }}
      />
      <br />
      <label>Last Name</label>
      <input
        type="text"
        value={form.lastName}
        onChange={(e) => {
          setForm({
            ...form,
            lastName: e.target.value,
          });
        }}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        value={form.email}
        onChange={(e) => {
          setForm({
            ...form,
            email: e.target.value,
          });
        }}
      />
      <p>{form.firstName}</p>
      <p>{form.lastName}</p>
      <p>{form.email}</p>
    </>
  );
}

export default InputFormUseState;

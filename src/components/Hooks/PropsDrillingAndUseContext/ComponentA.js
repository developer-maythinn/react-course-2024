import React, { useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = React.createContext();

function ComponentA() {
  const [user, setUser] = useState("MT Coding");
  return (
    <>
      <div className="box">
        <h1>Component A</h1>
        <UserContext.Provider value={user}>
          <ComponentB />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default ComponentA;

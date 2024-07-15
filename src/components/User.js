import { useEffect, useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  console.log("constructor of functional component");

  useEffect(() => {
    console.log("did mount phase of functional comp");
  }, []);

  return (
    <div className="user-card">
      <p>{console.log("render of functional component")}</p>
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Pune</h3>
      <h4>Contact: aakanksha@123.gmail.com</h4>
    </div>
  );
};
export default User;

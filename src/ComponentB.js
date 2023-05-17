import React from "react";
import { useSelector } from "react-redux";

const ComponentB = () => {
  const data = useSelector((state) => state.data);

  return <div>Data from Component A: {data}</div>;
};

export default ComponentB;

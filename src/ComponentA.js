import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ComponentA = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleClick = () => {
    dispatch({ type: "SET_DATA", payload: inputData });
  };

  return (
    <div>
      <input type="text" value={inputData} onChange={handleChange} />
      <button onClick={handleClick}>Set Data</button>
    </div>
  );
};

export default ComponentA;

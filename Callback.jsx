import React, { useState } from "react";
import img from "./assets/copy.jpg";
const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState("#b17777");
  const [isCopied, setIsCopied] = useState(false);
  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  const copyToClipboard = async () => {
    try {
      setIsCopied(true);
      await navigator.clipboard.writeText(activeColor);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error){
      console.error("Failed to copy: ", error);
    }
  };
  return (
   <>
    <div className="color-box">
        <input type="color" value={activeColor} onChange={handleChange} />
        <div>{activeColor}</div>
        <button onClick={copyToClipboard}>
          <img src={img} alt="copy" />
        </button>
    </div>
    <p>
      {isCopied && "Copied!"}
    </p>
    </>
  );
};

export default Callback
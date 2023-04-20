import React, { useState } from "react";
import "./textform1.css";
// jab bhi text likheinge box mein toh uski jagah brackets waali cheez aa jaayegi
export default function Textform(props) {
  const [text, setText] = useState("");
  const [isBold, setBold] = useState(false);
  // text= "new text" //wrong way to change text
  // setText("new text"); //right way
  const handleUpClick = () => {
    console.log("handle up click is pressed");
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("handle low click is pressed");
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    console.log("handle clear is pressed");
    const newText = "";
    setText(newText);
  };
  const handleEmail = () => {
    console.log("handle email is pressed");
    const newText = text.match(
      /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );
    if (newText !== null) {
      setText(newText.join(" "));
    } else {
      handleClear();
    }
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleBold = () => {
    setBold((prevValue) => {
      return !prevValue;
    });
  };
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
  };
  return (
    <>
      <div
        style={{
          backgroundColor: props.mode === "dark" ? "#395b64" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
            className="form-control my-3"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#e7f6f2" : "white",
              color: props.mode === "dark" ? "#2c3333" : "black",
              fontWeight: isBold ? "bold" : "normal",
            }}
            placeholder="enter your text"
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <div className="bbtn">
          <button className="btn-primary mx-2" onClick={handleUpClick}>
            Convert To UpperCase
          </button>
          <button className="btn-primary mx-2" onClick={handleLowClick}>
            Convert To LowerCase
          </button>
          <button className="btn-primary mx-2" onClick={handleEmail}>
            Extract Email
          </button>
          <button className="btn-primary mx-2" onClick={handleClear}>
            Clear Text
          </button>
          <button className="btn-primary mx-2" onClick={handleExtraSpace}>
            Remove ExtraSpaces
          </button>
          <button className="btn-primary mx-2" onClick={handleBold}>
            Make Bold
          </button>
          <button className="btn-primary mx-2" onClick={copy}>
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        id="div2"
        style={{
          backgroundColor: props.mode === "dark" ? "#395b64" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary</h2>
        <div className="summary">
          <p>Words = {text.split(" ").length}</p>
          <p>Characters = {text.length}</p>
          <p>Time to Read = {0.008 * text.split(" ").length} minutes</p>
        </div>
      </div>
    </>
  );
}

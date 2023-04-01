import React, { useState } from "react";

export default function Textutiles(props) {
  const handleUpClick = () => {
    console.log("convert to upper case" + text);
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("convert to upper case" + text);
    const newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleCopyClick = () => {
    const copy = text;
    navigator.clipboard.writeText(copy);

    setText(text);
  };
  const handleClearClick = () => {
    console.log("convert to upper case" + text);
    const newText = "";
    setText(newText);
  };

  const onChangeHnadle = (event) => {
    console.log("on change is hanlded");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label for="my-box" className="form-label">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            className="form-control my-3"
            id="my-box"
            value={text}
            onChange={onChangeHnadle}
            rows="8"
          ></textarea>
          <button className="btn btn-primary " onClick={handleUpClick}>
            Convert to upper
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert to lower
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
            Copy to clipboard
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="conatiner my-3">
        <h3>Text Summary</h3>
        <p>
          {text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        <br />
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

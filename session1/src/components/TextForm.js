import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log('Uppercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container mb-3 bg-info-subtle text-info-emphasis text-light p-3 rounded my-3 box-shadow-">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-outline-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-outline-success mx-3"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button className="btn btn-outline-danger mx-3" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container bg-info-subtle text-info-emphasis text-light p-3 rounded msy-3 my-3">
        <h2>Your text summary</h2>
        <p className="fw-bold fs-4">
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p className="fw-bold fs-4">
          {0.008 * text.split(' ').length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something to preview it here'}</p>
      </div>
    </>
  );
}

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

  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleSpelling = () => {
    let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    setText(newText);
  }



  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#042743'

  }

  return (
    <>
      <div className="container mb-3 rounded-4" style={myStyle}>
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
          className="btn btn-outline-primary mx-3 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button className="btn btn-outline-danger mx-3 my-3" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-outline-danger mx-3 my-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-outline-success mx-3 my-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-outline-success mx-3 my-3" onClick={handleSpelling}>
          Spelling Check
        </button>
        <div className='mt-3'>
          <h2>Your text summary</h2>
          <p className="fw-bold fs-4">
            {text.split(' ').filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
          </p>
          <p className="fw-bold fs-4">
            {0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes read
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : 'Enter something to preview it here'}</p>

        </div>
      </div>

    </>
  );
}

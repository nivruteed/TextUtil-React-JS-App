import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText ="";
        setText(newText);
    }
    const handleCopyClick = () => {
        var text =document.getElementById("myBox");
         text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className = "container  ">
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Paste here" id="myBox" rows="8"></textarea> 
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra Space</button>
           
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} Word and {text.length} Charactor</p>
            <p>{0.008*text.split(" ").length} Minute to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
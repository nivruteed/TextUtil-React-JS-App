import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has cleared", "success");
    }
    
    const handleCopyClick = async () => {
        const textarea = document.getElementById("myBox");

        try {
            await navigator.clipboard.writeText(textarea.value);
            props.showAlert("Text has been copied to clipboard", "success");
        } catch (error) {
            console.error('Error copying text to clipboard:', error);
            props.showAlert("Failed to copy text to clipboard", "error");
        }
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container " style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} placeholder="Paste here" id="myBox" rows="8"></textarea>
                </div>
                <button disabled = {text.length ===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled = {text.length ===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled = {text.length ===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled = {text.length ===0}className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled = {text.length ===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter ((element) =>{return element.length !==0}).length} Word and {text.length} Charactor</p>
                <p>{0.008 * text.split(" ").filter ((element) =>{return element.length !==0}).length} Minute to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}

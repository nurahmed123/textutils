import React, { useState } from "react";


export default function TextForm(props) {
    const [text, setText] = useState("");
    const [btnText, setBtnText] = useState("Upper");
    const [word, setWord] = useState(0);
    const handleUpClick = () => {
        // console.log("clicked on upper case changing button");
        let myUpText = text.toUpperCase();
        setText(myUpText);
        if (btnText === "Upper") {
            setBtnText("Lower");
            props.showAlert("Converted to upper case", "success");
        } else {
            setBtnText("Upper");
            let myUpText = text.toLowerCase();
            setText(myUpText);
            props.showAlert("Converted to lower case", "success");
        }

    }
    // setText(event.target.value);
    // const wordCount = text.trim().split(/\s+/).length;
    // setWord(wordCount);

    const handleOnChange = (event) => {
        setText(event.target.value);
        const wordCount = text.trim().split(/\s+/).length;
        setWord(wordCount);

    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Area is cleared", "success")
    }

    const readText = () => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success")
    }

    const downloadFile = () =>{
        const file = new File([text], "New Text Document.txt", {type:"text/plain;charset=utf-8"});
        console.log(file);
        const url = window.URL.createObjectURL(file);
        const element = document.createElement('a');
        element.style.display="none"
        element.href = url;
        element.download = file.name;
        element.click();
        window.URL.revokeObjectURL(url);
        props.showAlert("Download started", "success")
    }
    
    const printText = () => {
        childWindow = window.open('','childWindow','location=yes, menubar=yes, toolbar=yes');
        childWindow.document.open();
        childWindow.document.write('<html><head></head><body>');
        childWindow.document.write(document.getElementById('textBox').value.replace(/\n/gi,'<br>'));
        childWindow.document.write('</body></html>');
        childWindow.print();
        childWindow.document.close();
        childWindow.close();
    }
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}> {props.heading}</h1>
                    <textarea
                        className="form-control mb-3"
                        id="textBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === "light" ? "white" : "#262626", color: props.mode === "dark" ? "white" : "black" }}
                    ></textarea>

                    <button disabled={text.length===0} type="button" onClick={handleUpClick} className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} mx-1 my-1`}>{btnText} case</button>
                    <button disabled={text.length===0} type="button" onClick={handleClearClick} className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} mx-1 my-1`}>Clear area</button>
                    <button disabled={text.length===0} type="button" onClick={downloadFile} className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} mx-1 my-1`}>Download document</button>
                    <button disabled={text.length===0} type="button" onClick={printText} className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} mx-1 my-1`}>Print</button>
                    <button disabled={text.length===0} type="button" onClick={handleCopy} className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} mx-1 my-1`}>Copy text</button>
                    {/* <button onClick={readText} className="fas fa-volume-down btn btn-outline-dark mx-1 fs-4 px-3"></button> */}
                    <button disabled={text.length===0} onClick={readText} className={`fas fa-volume-down btn btn-outline-${props.mode === "dark" ? "light" : "dark"} mx-1 fs-4 px-3`}></button>
                </div>
            </div>
            <div className="container">
                <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>Your text summery</h1>
                <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{text===""?"0":word} words and {text.length} characters</p>
                <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{text===""?"0":0.008 * text.trim().split(/\s+/).length} Minutes read</p>

                <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>Preview</h2>
                <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{text.length <= 0 ? "Nothing To Preview" : text}</p>
            </div>
        </>
    );
}

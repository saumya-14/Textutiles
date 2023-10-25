import React,{useState} from "react";


export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handeldownclick=(event)=>{
        console.log("lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }
    const[text,setText]=useState(' ')
   
   
    return (
        <>
        <div className="container"  style={{color:props.mode==='white'?'white':'dark'}}>
        
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="myBox" className="form-label">
                   
                </label>
                <textarea
                    className="form-control"
                    id="myBox"
                    rows="8"
                    value={text}
                    onChange={handleOnChange}
                    style={{backgroundColor:props.mode==='light'?'dark':'light'}}
                ></textarea>
            </div>
            
            <button className="btn btn-primary " onClick={handleUpClick} >convert to uppercase</button>
            <span style={{ marginLeft: '10px' }}></span>
            <button className="btn btn-primary " onClick={handeldownclick}>convert to lowercase</button>
           
        </div>
        <div className="container my-3" style={{color:props.mode==='white'?'white':'dark'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length-1} words {text.length} characters</p>
        </div>
        </>
    );
}

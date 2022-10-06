import React , {useState}from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to Uppercase","success")
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to Lowercase","success")
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Data","success")
    }    
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","success")
    }

    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',
            color:props.mode==='light'?'black':'white'}}  
            id="myBox" value={text} rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode ==='light'?'primary':'light'} mx-2`} onClick={handleUpClick}>
                 Convert To Uppercase
            </button>
            <button className={`btn btn-${props.mode ==='light'?'primary':'light'} mx-2`} onClick={handleLowClick}>
                 Convert To Lowercase
            </button>
            <button className={`btn btn-${props.mode ==='light'?'primary':'light'} mx-2`} onClick={handleClearClick}>
                 Clear Text 
            </button>
            <button className={`btn btn-${props.mode ==='light'?'primary':'light'} mx-2`} onClick={handleExtraSpaces}>
                 Clear Extra Spaces 
            </button>

        </div> 
        <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes required to read</p>
            <h2>Preview</h2>
            <p>{text===''?'Please enter some text in the above box':text}</p>
        </div>
        </>
    )
}

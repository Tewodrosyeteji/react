import React from "react"

const validation=(props)=>{

    let message='Text to long';
    if(props.inputLength <= 5){
        message='text to short'
    }
return (
<div>

    <p>{message}</p>
    
</div>);
};


export default validation;
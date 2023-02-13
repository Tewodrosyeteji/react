import React from "react";
import "../App.js";
import styled from "styled-components";
// import './Person.css'

const StyledDiv=styled.div`

    width:50%;
    margin: 15px auto;
    padding: 5px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;

    @media (min-width: 500px){
        width:450px;

`
const person=(props)=>{
    return <StyledDiv>
                <p onClick={props.clicked}> I'm {props.name} and {props.age} years old </p>
                <p >{props.children}</p>
                <input type='text' onChange={props.changed} value={props.name}/>
           </StyledDiv>

}

export default person;
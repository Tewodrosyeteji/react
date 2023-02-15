import React,{Component} from "react";
// import styled from "styled-components";
import classes from './Person.module.css'


// const StyledDiv=styled.div`

//     width:50%;
//     margin: 15px auto;
//     padding: 5px;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     text-align: center;

//     @media (min-width: 500px){
//         width:450px;

// `
class Person extends Component{
static getDerivedStateFromProps(props){
    console.log('[Persons.js ] getDrivedStateFromProps')
}


shouldComponentUpdate(nextProps,nexState){
console.log('[Prsons.js] shouldComponentUpdate');
}

getSnapshotBeforeUpdate(prevProps,prevState){
console.log('[Persons.js] getSnapshotBeforeUpdate')
return null;
}

componentDidUpdate(){
    console.log('[Person.js] componentDidUpdate')
}
    render(){
        console.log('Person.js rendering.....')
        return <div className={classes.Person}>
                    <p onClick={this.props.clicked}> I'm {this.props.name} and {this.props.age} years old </p>
                    <p >{this.props.children}</p>
                    <input type='text' onChange={this.props.changed} value={this.props.name}/>
               </div>
    
    }
    }
   

export default Person;
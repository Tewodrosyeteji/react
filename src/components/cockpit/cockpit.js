import React from "react";
import classes from './Cockpit.module.css'

const cockpit=(props)=> {

    const assignedClass=[];
    let btnClass='';
    if(props.showPerson){
        btnClass=classes.Red;
    }
    if(props.persons.length <= 2){
      assignedClass.push('red');
    }
    if(props.persons.length <=1){
      assignedClass.push('bold');
    }

return <div  className={classes.Cockpit}>
            <h1 > {props.title}</h1>
            <p className={assignedClass.join(' ')}> Today is the day start everything from ground</p>
            <button onClick={props.toggled}  className={btnClass}>Toggle Person</button>
      </div>
}

export default cockpit;
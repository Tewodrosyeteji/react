import React from "react";
import classes from "./BulidControl.module.css"

const bulidControl=(props)=>{
return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.lable}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);
}


export default bulidControl;
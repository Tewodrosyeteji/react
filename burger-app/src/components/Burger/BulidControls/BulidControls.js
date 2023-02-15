import React from "react";
import classes from "./BulidControls.module.css"
import BulidControl from "./BulidControl/BulidControl" 

const controls=[
    {lable:'Salad', type:'salad'},
    {lable:'Bacon', type:'bacon'},
    {lable:'Cheese', type:'cheese'},
    {lable:'Meat', type:'meat'}
]
const buildControls= (props) =>{
return (<div className={classes.BulidControls}>
 {controls.map(ctrl => {
    return <BulidControl key={ctrl.lable} lable={ctrl.lable} />
 })}

</div>);

}

export default buildControls;
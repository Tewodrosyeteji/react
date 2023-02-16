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

    return (
    <div className={classes.BulidControls}>
        <p>Current price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BulidControl 
                    key={ctrl.lable} 
                    lable={ctrl.lable}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
            })}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}>Order Now</button>
                        
</div>);

}

export default buildControls;
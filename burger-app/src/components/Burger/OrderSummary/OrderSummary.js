import React from "react";
import Auxilary from "../../../hoc/Auxilary"
import Button from "../../UI/Button/Button"



const orderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients).map(igKey =>{
        return (<li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span> {props.ingredients[igKey]}
        </li>);
    })

    return (
        <Auxilary>
            <h3> Your order</h3>
            <p> Your Burger with the following ingredients:</p>
            <ul>
          {ingredientSummary}
            </ul>
            <p><strong>Total Price:{props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button  btnType={'Success'}  clicked={props.continuedPurchase}> Continue </Button>
            <Button  btnType={'Danger'}   clicked={props.canceledPurchase}>  Cancel</Button>

        </Auxilary>
    );
}

export default orderSummary;
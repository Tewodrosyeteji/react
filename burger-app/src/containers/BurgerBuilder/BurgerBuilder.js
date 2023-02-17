import React,{Component} from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BulidControls/BulidControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";


 const INGREDIENT_PRICES={
    cheese:0.5,
    salad:0.6,
    bacon:0.7,
    meat:1.2,
 }


class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:0,
            cheese:0,
            bacon:0,
            meat:0,
        },
        totalPrice:3,
        purchasable:false,
        purchasing:false,
    }

    updatePurchasable(ingredients){
        const sum=Object.keys(ingredients).map(igKey =>{
            return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum + el;
        },0)
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
            const oldCount=this.state.ingredients[type];
            const newCount=oldCount + 1;
            const updateIngredients={
                ...this.state.ingredients
            }
            updateIngredients[type]=newCount;
                const addedPrice=INGREDIENT_PRICES[type];
                const oldPrice=this.state.totalPrice;
                const newPrice=oldPrice + addedPrice;
                this.setState({ingredients:updateIngredients,totalPrice:newPrice});
                this.updatePurchasable(updateIngredients)
    }


    removeIngredientHandler = (type) =>{
          const oldCount=this.state.ingredients[type];
          if(oldCount <= 0) return;
          const newCount=oldCount - 1;
          const updateIngredients={...this.state.ingredients};
          updateIngredients[type]=newCount;
          const oldPrice=this.state.totalPrice;
          const reducedPrice=INGREDIENT_PRICES[type];
          const dedectionPrice= oldPrice -reducedPrice
          this.setState({ingredients:updateIngredients,totalPrice:dedectionPrice})
          this.updatePurchasable(updateIngredients)
    }

    showOrder=()=>{
        this.setState({purchasing:true})
    }

    closedPurchaseHandler=()=>{
    this.setState({purchasing:false})   

    }
    continuePurchaseHandler=()=>{
        alert('continue to purchase');
    }

    render(){

        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <=0
        }
        return <Auxilary>
                  <Modal show={this.state.purchasing} modalClosed={this.closedPurchaseHandler}>
                    <OrderSummary 
                      ingredients={this.state.ingredients}
                      price={this.state.totalPrice}
                      continuedPurchase={this.continuePurchaseHandler}
                      canceledPurchase={this.closedPurchaseHandler}/>
                  </Modal>
                  <Burger   ingredients={this.state.ingredients} />
                  <BuildControls  
                       ingredientAdded={this.addIngredientHandler}
                       ingredientRemoved={this.removeIngredientHandler}
                       disabled={disabledInfo}
                       price={this.state.totalPrice}
                       purchasable={this.state.purchasable}
                       ordered={this.showOrder}/>
               </Auxilary>
    }

}

export default BurgerBuilder;
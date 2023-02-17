import React from "react";

import classes from "./SideDrawer.module.css"
import NavigationItems from "../NavigationItems/NavigationItems"
import Logo from "../../Logo/Logo"
import Auxilary from "../../../hoc/Auxilary/Auxilary";
import Backdrop from "../../UI/Backdrop/Backdrop"
const sideDrawer=(props) => {

    let attachedClass=[classes.SideDrawer,classes.Close];
    if(props.open){
         attachedClass=[classes.SideDrawer,classes.Open]
    }
    return (
        <Auxilary>
        <Backdrop  show={props.open} clicked={props.closed}/>
         <div className={attachedClass.join(' ')}>
             <div className={classes.Logo}>
              <Logo />
             </div>
             <nav>
                 <NavigationItems />
             </nav>
         </div>
        </Auxilary>
       
   
    );
}

export default sideDrawer;

import React from "react";
import classes from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";


const navigationItems=(props)=>( 
<ul className={classes.NavigationItems}>
    <NavigationItem link='/' active> builder </NavigationItem>
    <NavigationItem link='/' > checkout</NavigationItem>
 </ul>
 )


export default navigationItems;
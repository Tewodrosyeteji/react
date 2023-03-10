import React from "react";
import classes from "./ToggleDrawer.module.css"

const toggleDrawer=(props) =>(
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toggleDrawer;
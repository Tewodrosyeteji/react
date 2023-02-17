import React,{Component} from "react";
import Auxilary from "../Auxilary/Auxilary"
import classes from "./Layout.module.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component{
    state={
        showSideDrawer:false,
    }

    closeSideDrawerHandler=()=>{
        this.setState({
            showSideDrawer:false,
        })
    }

    toggleDrawerHandler=()=>{
      this.setState((prevState)=>{
        return {showSideDrawer:!prevState.showSideDrawer}
      })
    }
    render(){
        return (
            <Auxilary>
           <SideDrawer closed={this.closeSideDrawerHandler} open={this.state.showSideDrawer}/>
            <Toolbar   toogledDrawer={this.toggleDrawerHandler} />
            <main className={classes.Content}> {this.props.children}</main>
           </Auxilary>
        );
    }
  
}

export default Layout;
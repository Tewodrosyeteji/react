
import './App.css';
import { Component } from 'react';
import UserOutput from './User/UserOutput'
import UserInput from './User/UserInput';

class App extends Component{
  state={
    name:'teddyyo'
}

changeNameHandler=(e)=>{
   this.setState({
    name:e.target.value
   })
}


  render(){return (
    <div className="App">
     <UserInput  changed={this.changeNameHandler} currentName={this.state.name}/>
     <UserOutput name={this.state.name} job='programmer'/>

    </div>
  );
}
}

export default App;

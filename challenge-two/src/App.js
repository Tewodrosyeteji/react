
import './App.css';
import { Component } from 'react';
import Validation from './ValidationComponent/validationComponent';
import Char from './CharComponent/char';

class App extends Component{

  state={
    inputName:''
  }



  nameChangedHandler=(e) => {
      this.setState(
      {
        inputName:e.target.value
      }
      )
  }

  deleteChangedHandler=(index)=>{
      const text=this.state.inputName.split('');
    text.splice(index,1);
    const updateName=text.join('')
    this.setState({inputName:updateName})
    
  }


  render(){

   const charList=this.state.inputName.split('').map((char,index) =>{
    return (
    <Char 
       character={char}
       key={index}
       clicked={()=>this.deleteChangedHandler(index)} />
    ) } )
    return (
      <div className="App">
       <input type='text' onChange={this.nameChangedHandler} />
       <p> { this.state.inputName} </p>
       <Validation inputLength={this.state.inputName.length} />
       {charList}
      </div> 
    );
  }
  }
  

export default App;

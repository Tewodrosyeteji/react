
import { Component } from 'react';
import './App.css';
import Persons from '../components/persons/persons';
import Cockpit from '../components/cockpit/cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }

  state={
    persons:[
      {
        name:'teddy',
        age:25,
        id:'asdo3',
      },
      {
        name:'ermi',
        age:10,
        id:'jase12'
      }
    ]
  }
 

  static getDerivedStateFromProps(props,state){
   console.log('[App.js] getDerivedStatefromProps');
   return state;
  }

  nameChangedHandler=(e,id)=>{
   const personIndx=this.state.persons.findIndex(per => per.id === id);
   const person={...this.state.persons[personIndx]};
  person.name=e.target.value;

   const persons=[...this.state.persons];
   persons[personIndx]=person;
   this.setState({
    persons:persons,
   })
  }

  toggleNameHandler=()=>{
   const doesShow=this.state.showName;
   this.setState({
       showName:!doesShow,
   })

  }

deleteNameHandler=(personIndes) =>{

  const persons=[...this.state.persons];
  persons.splice(personIndes,1);
  this.setState({persons:persons})
}

  
  render(){
  console.log('[App.js] render')
    const style={
      backgroundColor:'green',
      ':hover':{
        backgroundColor:'lightgray',
        color:'black'
      }
    }


    let person=null;
    if(this.state.showName){
      person=(
        <div>
          <Persons 
               persons={this.state.persons} 
               clicked={this.deleteNameHandler} 
               changed={this.nameChangedHandler} />
        </div>
      );
      style.backgroundColor='red';
     
    }

  
    
    
    return (
    <div className="App">
        <Cockpit 
              persons={this.state.persons} 
              toggled={this.toggleNameHandler} 
              showPerson={this.state.showName}
              title={this.props.appTitle}/>
        {person}
    </div>
   
  );
}}

export default App;

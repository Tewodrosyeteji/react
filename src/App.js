
import { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

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
          {this.state.persons.map((per,index)=>{
            return <Person 
                key={per.id}
                name={per.name} 
                age={per.age}
                clicked={()=> this.deleteNameHandler(index)}
                changed={(e)=> this.nameChangedHandler(e,per.id)}/>
          })}
        </div>
      );
      style.backgroundColor='red';
     
    }

  
    const classes=[];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
    
    return (
    <div className="App">
      <h1 > react</h1>
      <p className={classes.join(' ')}> Today is the day start everything from ground</p>
      <button onClick={this.toggleNameHandler} style={style} >Toggle Person</button>
        {person}
    </div>
   
  );
}}

export default App;

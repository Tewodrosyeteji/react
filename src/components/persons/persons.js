import React,{Component} from "react";
import Person from './Person/Person'
class Persons extends Component {

    // static getDerivedStateFromProps(props){
    //     console.log('[Persons.js ] getDrivedStateFromProps')
    // }
    
    
    shouldComponentUpdate(nextProps,nexState){
    console.log('[Prsons.js] shouldComponentUpdate');
    return true;
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return null;
    }
    
    componentDidUpdate(){
        console.log('[Person.js] componentDidUpdate')
    }
    render(){
        console.log('Persons.js rendering....');
        return this.props.persons.map((per,index)=>{
        return <Person 
            key={per.id}
            name={per.name} 
            age={per.age}
            clicked={()=> this.props.clicked(index)}
            changed={(e)=> this.props.changed(e,per.id)}/>
      })}
    }
   

  export default Persons;
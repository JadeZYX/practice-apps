import React from 'react';
import ReactDOM from 'react-dom';

class Buttons extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
      addTerm:'',
      addDefinition:''
    };
  }
  render(){
    return (
      <div>
        <input type ='text' placeholder='term' onChange={(event)=>(this.setState({addTerm:event.target.value}))}></input>
        <input type = 'text' placeholder='definition' onChange={(event)=>(this.setState({addDefinition:event.target.value}))}></input>
        <button onClick={() => this.props.onClickAdd(this.state.addTerm,this.state.addDefinition)}>Add</button>
        <br/>
        <br/>
        <input type='text' placeholder='' onChange={(event)=>(this.setState({text:event.target.value}))}></input>
        <button onClick={() => this.props.onSearch(this.state.text)}>Search</button>
      </div>
    )
  }

}

export default Buttons;
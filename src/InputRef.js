import React, { Component } from 'react'

export class InputRef extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.inputRef = React.createRef();
    }
    componentDidMount(){
        //console.log(this.inputRef);
        this.inputRef.current.focus();
    }
    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    
  render() {
    return (
      <div>
         <input type='text' ref={this.inputRef} />
         <button onClick={this.clickHandler}>Get the Value</button>
      </div>
    )
  }
}

export default InputRef


//1 create the ref using React.createRef()
//2 applying the ref using ref attribute 
//3 access the ref attribute properties using
// propertyName.current.property/method
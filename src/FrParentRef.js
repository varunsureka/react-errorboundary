import React, { Component } from 'react'
import FrChildref from './FrChildref'
export class FrParentRef extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      //1 create the Ref
      this.inputRef  = React.createRef();
    }
    onClickHandler = () => {
        this.inputRef.current.focus();
    }
    
  render() {
    return (
      <div>
         <FrChildref ref={this.inputRef} />
         <button onClick={this.onClickHandler}>Forward Ref</button>
      </div>
    )
  }
}

export default FrParentRef;

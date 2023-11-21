import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    
    static getDerivedStateFromError(error){
         return {
            hasError:true
         }
    }
    componentDidCatch(err){
        console.log('Please try again later', err.message);
    }
    
  render() {
    let display = null;
     if(this.state.hasError){
        display = (<h1>Something Went Wrong!!</h1>)
     }
     else {
        display = (this.props.children)
     }
    return (
      <>
         {display}
      </>
    )
  }
}

export default ErrorBoundary

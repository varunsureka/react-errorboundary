import React from 'react'

export default function Persons(props) {
    const {name} = props;
    let para = null;
    if(props.children){
     para =   <p>{props.children}</p>;
    }
  return (
    <div>
        <h1>Hii I am {name}</h1>
       {para}
    </div>
  )
}

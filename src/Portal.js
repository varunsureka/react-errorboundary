import React from 'react';
import ReactDOM  from 'react-dom';

 function Portal() {
  return ReactDOM.createPortal(
     <div>
        <h1>Hello World</h1>
     </div>,
    document.querySelector('#portal')
  );
}

export default Portal;

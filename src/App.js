import logo from './logo.svg';
import './App.css';
import Persons from './Persons';
import Country from './Country';
import ErrorBoundary from './ErrorBoundary';
import InputRef from './InputRef';
import FrParentRef from './FrParentRef';
import Portal from './Portal';

function App() {
  return (
    <div className="App">
      {/* <Persons name="Max" />
      <Persons name="Sam" />
      <Persons name="Peter">My Hobbie is Playing cricket</Persons> */}
    {/*   <ErrorBoundary>
      <Country countryName="India" />
      </ErrorBoundary>
       <ErrorBoundary>
       <Country countryName="USA" />
       </ErrorBoundary>
     <ErrorBoundary>
     <Country countryName="UAE" />
     </ErrorBoundary>
       <ErrorBoundary>
       <Country countryName="Russia" />
       </ErrorBoundary> */}
     {/*   <InputRef /> */}
    {/*  <FrParentRef /> */}
    < Portal />
     
    
    

    </div>
  );
}

export default App;

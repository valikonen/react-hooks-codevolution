import React from 'react';
import './App.css';


import ComponentA  from './context/old_way/ComponentA';

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

function App() {
  return (
    <div className="App">
      
      <UserContext.Provider value={"Zorro"}>
        <AgeContext.Provider value={39}>
          <ComponentA />
        </AgeContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;

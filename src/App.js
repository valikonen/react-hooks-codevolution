import React from 'react';
import './App.css';

import ClassCounter  from './components/ClassCounter'
import HookCounter  from './components/HookCounter'
import HookCounter3  from './components/HookCounter3'
import HookCounter4  from './components/HookCounter4'


function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter3 /> */}
      <HookCounter4 />
    </div>
  );
}

export default App;

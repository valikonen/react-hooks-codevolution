import React from 'react';
import './App.css';

import ClassCounter  from './useState/ClassCounter'
import HookCounter  from './useState/HookCounter'
import HookCounter3  from './useState/HookCounter3'
import HookCounter4  from './useState/HookCounter4'

import UseEffect1  from './useEffect/UseEffect1'
import MouseEffect  from './useEffect/MouseEffect'
import MouseDisplay  from './useEffect/MouseDisplay'
import IntervalHook  from './useEffect/IntervalHook'
import FetchData  from './useEffect/FetchData'


function App() {
  return (
    <div className="App">
      
      <FetchData />

    </div>
  );
}

export default App;

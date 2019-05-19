import React from 'react';
import './App.css';
import Header from './Components/Header';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import Fourth from './Components/Fourth';
import Fifth from './Components/Fifth';



function App() {
  return (
    <div>
      <div >    
        <Header />
      </div>
      <div className="app-container">
        <div className="app-content">
          <First />
          <Second />
          <Third />
          <Fourth />
          <Fifth />
        </div>
      </div>
    </div>
  );
}

export default App;

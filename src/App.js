import React from 'react';
import './App.css';
import Header from './Components/Header';
import First from './Components/First';
import Second from './Components/Second';


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
        </div>
      </div>
    </div>
  );
}

export default App;

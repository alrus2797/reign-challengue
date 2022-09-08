import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent'
import ContentComponent from './components/content/ContentComponent'

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <ContentComponent/>
    </div>
  );
}

export default App;

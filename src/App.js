import React from 'react';
import './App.less';
import Header from './components/Header/Header';
import CardArea from './components/CardList/CardArea';

function App() {
  return (     
      <div className="container">
        <Header />
        <CardArea />
      </div>
  );
}

export default App;

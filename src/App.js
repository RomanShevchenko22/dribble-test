import React from 'react';
import './App.less';
import Header from './components/Header/Header';
import CardListWrapper from './components/CardList/CardListWrapper';



function App() {
  return (     
      <div className="container">
        <Header />
        <CardListWrapper />
      </div>
  );
}

export default App;

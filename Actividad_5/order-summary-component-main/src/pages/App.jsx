import React from 'react';
import '../styles/global.scss';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Button from '../components/Button';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Cards />
      <Button>Ir a pagar</Button>
    </div>
  );
};

export default App;

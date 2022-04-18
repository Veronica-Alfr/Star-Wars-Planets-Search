import React from 'react';
import './App.css';
import Provider from './AppContext/Provider';
import Table from './Componets/Table';

function App() {
  return (
    <div>
      <Provider>
        <h1>Star Wars</h1>
        <Table />
      </Provider>
    </div>
  );
}

export default App;

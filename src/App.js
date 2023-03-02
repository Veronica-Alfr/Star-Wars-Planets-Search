import React from 'react';
import Provider from './AppContext/Provider';
import Table from './Componets/Table';
import ContainerStarWarsFilter from './style/App';
import './index.css';

function App() {
  return (
    <ContainerStarWarsFilter>
      <Provider>
        <Table />
      </Provider>
    </ContainerStarWarsFilter>
  );
}

export default App;

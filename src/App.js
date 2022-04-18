import React from 'react';
import './App.css';
import Provider from './AppContext/Provider';

function App() {
  return (
    <div>
      <Provider>
        <span>Hello, App!</span>
      </Provider>
    </div>
  );
}

export default App;

import React from 'react';

import Header from './components/Header';

function App() {
  //Compenente recebendo propriedade "title" 
  return (
    <div>      
      <Header title="Homepage">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Header>
      <Header title="Projects">
      <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';

function App() {
  //aplicando conceito de estado(useState)
  const [projects, setProjects ] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    /*
    * Anotação 01
    * '...'(spread operation) utilizado pra copiar todo valor que já existe no 
    * array, e adicionar o que está após ao operador.
    * 
    * Anotação 02
    * aplicando imutabilidade, gerando um novo array com as informações originais + novas informações.
    */
    setProjects([...projects, `Novo projeto ${Date.now()}`])  
  }

  //Compenente recebendo propriedade "title" 
  return (
    <>      
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;

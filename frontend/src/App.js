import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  //aplicando conceito de estado(useState)
  const [projects, setProjects ] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    /*
    * Anotação 01
    * '...'(spread operation) utilizado pra copiar todo valor que já existe no 
    * array, e adicionar o que está após ao operador.
    * 
    * Anotação 02
    * aplicando imutabilidade, gerando um novo array com as informações originais + novas informações.
    */
   // setProjects([...projects, `Novo projeto ${Date.now()}`])  

    const response = await api.post('projects', {
     title: `Novo projeto ${Date.now()}`,
     owner: "Rafael Modesto"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  //Compenente recebendo propriedade "title" 
  return (
    <>      
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;

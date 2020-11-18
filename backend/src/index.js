const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());

//request é onde fica armazenado as informações enviadas pela requisição.
//response é o retorno que enviaremos para o cliente

const projects = [];

function logRequest(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()} ${url}]`;

  console.log(logLabel);

  return next();//Chama o próximo middleware.
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID.'});
  }

  return next();
}

app.use(logRequest);
app.use('/projects/:id', validateProjectId);

app.get('/projects', (request,response) => {
  const { title } = request.query;

  /*
    Verifica se possui algum filtro na query params, caso possua ele verifica os
    projetos e se algum atender ao filtro ele armazena na variável "results", caso
    nenhum atenda ele armazena todos os projetos do array "projects". 
    Foi utilizado o if ternário(? e :).
  */
  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return response.json(results);
})

app.post('/projects', (request, response) => {
  const { title, owner } = request.body; //usando a desestruturação consigo isolar os valores que foram enviados no body.
  
  const project = { id: uuid(), title, owner };

  projects.push(project); //o push coloca o valor que está dentro do "()" para a última posição no array "projects".
  
  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;
  /* 
    Percorerá todos o array "projects" passando o valor para a variável "project"
    caso o id seja igual ao id passado no route params será armazenado na variável
    "projectIndex".
  */
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' });
  }

  //Criando um objeto para armazenar os valores que serão utilizados para atualizar os dados do projeto que foi encontrado.
  const project = {
    id,
    title,
    owner
  }

  /*
    Atualizando o valor na posição encontrada no "projectIndex" do array "projects" 
    com as informações que foram inseridas no objeto "project". 
  */
  projects[projectIndex] = project;

  return response.json(project);

});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.'});
  }

  /*
    splice é utilizado para remover o valor do array, primeiro parâmetro informa o índice do array e o segundo parâmetro indica quantos valores serão removidos a partir do índice indicado.
  */
  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333);

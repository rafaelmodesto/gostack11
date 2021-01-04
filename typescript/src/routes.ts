import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'rafaelmodesto@gmail.com',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'Delphi',
    ],
  });

  return response.json({ message: 'Hello World'})
}

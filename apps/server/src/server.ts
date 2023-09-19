import express from 'express';
import morgan from 'morgan';
import data from '../db.json';
import type { Todo } from "../../model";

const apiRouter = () => {
  const router = express.Router();

  router.get('/todos', (_req, res) => {
    const todos: Todo[] = data.todos.map(todo => ({
      id: todo.id,
      todo: todo.todo,
      isDone: todo.isDone,
    }));
    res.json(todos);
  });

  return router;
};

export const createServer = () => {
  const app = express();

  app.use(morgan('dev')).use(express.json()).use('/api', apiRouter());

  return app;
};

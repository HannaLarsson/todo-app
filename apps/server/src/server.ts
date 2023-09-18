import express from 'express';
import morgan from 'morgan';
import { v4 as uuidv4 } from 'uuid';

import { EMOJI_KIND, type Emoji } from 'api';

export const randomEmoji = (): Emoji['kind'] => {
  const randomIndex = Math.floor(Math.random() * EMOJI_KIND.length);
  // Typecasted since we know that the index is within bounds
  return EMOJI_KIND[randomIndex] as Emoji['kind'];
};

const apiRouter = () => {
  const router = express.Router();
  router.get('/', (_req, res) => {
    res.json('Hello, world!');
  });

  router.get('/emoji', (_req, res) => {
    const emojiObject: Emoji = {
      id: uuidv4(),
      kind: randomEmoji(),
      timestamp: new Date().toISOString(),
    };
    res.json(emojiObject);
  });

  return router;
};

export const createServer = () => {
  const app = express();

  app.use(morgan('dev')).use(express.json()).use('/api', apiRouter());

  return app;
};

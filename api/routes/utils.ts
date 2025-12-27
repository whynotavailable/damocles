import express from 'express';
import { HandledError } from '../../shared/errors';

function health(_: express.Request, res: express.Response) {
  throw new HandledError('hi');
  res.json({
    status: 'hi',
  });
}

export default function (app: express.Express) {
  app.get('/health', health);
}

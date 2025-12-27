import express from 'express';

function health(_: express.Request, res: express.Response) {
  res.json({
    status: 'hi',
  });
}

export default function (app: express.Express) {
  app.get('/health', health);
}

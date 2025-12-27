// This will use expressjs

import express from 'express';
import routes from '../api/routes';
import { ParseError } from '../shared/errors';

const app = express();

app.use(express.json());

const port = 3101;

routes(app);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, _req: any, res: any, next: any) => {
  if (err instanceof ParseError) {
    res.status(400).json(err.err.issues);
    return;
  }

  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

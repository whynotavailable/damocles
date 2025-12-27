// This will use expressjs

import express from 'express';
import routes from '../api/routes';
import { HttpError } from '../shared/errors';

const app = express();

app.use(express.json());

const port = 3101;

routes(app);

app.use((err: unknown, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err) {
    if (err instanceof HttpError) {
      if ((typeof err.data) === 'string') {
        res.status(err.getCode()).send(err.data);
      }
      else {
        res.status(err.getCode()).json(err.data);
      }
      return;
    }
    else if (err instanceof Error) {
      res.status(500).send(err.message);
      return;
    }
    else {
      res.status(500).send('Error');
      return;
    }
  }

  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

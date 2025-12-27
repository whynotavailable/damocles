// This will use expressjs

import express from 'express';
import routes from '../api/routes';
import { HandledError } from '../shared/errors';

const app = express();

app.use(express.json());

const port = 3101;

routes(app);

app.use((err: unknown, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err) {
    if (err instanceof HandledError) {
      // Send something if nothing's been sent, though that'll count as a server error.
      console.error('HandledError sent but something\'s already been sent.');
      if (res.headersSent) {
        res.status(500).send(err.message);
      }
      return;
    }
    else if (err instanceof Error) {
      res.status(500).send(err.message);
    }
    else {
      res.status(500).send('Error');
    }
  }

  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

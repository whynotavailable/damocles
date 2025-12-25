// This will use expressjs

import express from 'express';
import routes from '../api/routes';

const app = express();
const port = 3101;

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

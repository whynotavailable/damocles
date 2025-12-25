import express from 'express';

import utils from './utils.ts';
import { rpcRequest } from '../../shared/transport-types.ts';
import { getRoute } from './router.ts';

export default function (express: express.Express) {
  utils(express);

  express.post('/api', async (req, res) => {
    console.log(req.body);

    const parsedBody = rpcRequest.safeParse(req.body);

    if (parsedBody.success === false) {
      res.status(400).json(parsedBody.error);
      return;
    }

    // The assertion is due to zod being weird.
    const body = parsedBody.data!;

    const route = getRoute(body.key);
    await route(body.body, res);
  });
}

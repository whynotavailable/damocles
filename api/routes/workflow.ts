import type z from 'zod';
import express from 'express';
import { getActionManifestRequest } from '../../shared/transport-types';
import { addRoute } from './router';
import { HandledError } from '../../shared/errors';

addRoute('workflow-get', async (body, res) => {
  res.json({
    name: 'dave',
  });
});

function checkParse<T>(parsed: z.ZodSafeParseResult<T>, res: express.Response) {
  if (parsed.success === false) {
    res.status(400).json(parsed.error.issues);
    throw new HandledError();
  }
}

addRoute('get-action-manifest', async (body, res) => {
  const parsed = getActionManifestRequest.safeParse(body);

  checkParse(parsed, res);

  res.json({
    bob: 'bob',
  });
});

import type z from 'zod';
import express from 'express';
import { getActionManifestRequest } from '../../shared/transport-types';
import { addRoute } from './router';
import { ParseError } from '../../shared/errors';

addRoute('workflow-get', async (body, res) => {
  res.json({
    name: 'dave',
  });
});

function checkParse<T>(parsed: z.ZodSafeParseResult<T>) {
  if (parsed.success === false) {
    throw new ParseError(parsed.error);
  }
}

addRoute('get-action-manifest', async (body, res) => {
  const parsed = getActionManifestRequest.safeParse(body);

  checkParse(parsed);

  res.json({
    bob: 'bob',
  });
});

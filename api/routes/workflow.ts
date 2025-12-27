import type z from 'zod';
import { getActionManifestRequest } from '../../shared/transport-types';
import { addRoute } from './router';
import { HttpError } from '../../shared/errors';

addRoute('workflow-get', async (body, res) => {
  res.json({
    name: 'dave',
  });
});

function checkParse<T>(parsed: z.ZodSafeParseResult<T>) {
  if (parsed.success === false) {
    throw HttpError.badRequest(parsed.error.issues);
  }
}

addRoute('get-action-manifest', async (body, res) => {
  const parsed = getActionManifestRequest.safeParse(body);

  checkParse(parsed);

  res.json({
    bob: 'bob',
  });
});

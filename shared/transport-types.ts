// These types are used for API requests.

import z from 'zod';

// May use this, may not. Doesn't really matter.
export const rpcRequest = z.object({
  key: z.string(),
  body: z.unknown(),
});

export interface RpcRequest<T> {
  kind: string;
  body: T;
}

export const helloRequest = z.object({
  name: z.string(),
});

export type HelloRequest = z.infer<typeof helloRequest>;

export const getActionManifestRequest = z.object({
  org: z.string(),
  repo: z.string(),
  path: z.optional(z.string()),
  ref: z.string(),
  isWorkflow: z.boolean(),
});

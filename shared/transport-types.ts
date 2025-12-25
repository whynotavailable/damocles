// These types are important as they are used for the UI as well.

import z from 'zod';

// May use this, may not. Doesn't really matter.
export const rpcRequest = z.object({
  kind: z.string(),
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

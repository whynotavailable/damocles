import express from 'express';

type RpcHandler = (body: unknown, res: express.Response) => Promise<void>;

const routes: Record<string, RpcHandler> = {};

async function keyNotFound(_: unknown, res: express.Response): Promise<void> {
  res.status(404).send('Key Not Found');
}

export function getRoute(key: string): RpcHandler {
  if (key in routes) {
    // This shouldn't need that but who knows.
    return routes[key]!;
  }
  else {
    return keyNotFound;
  }
}

export function addRoute(key: string, handler: RpcHandler) {
  routes[key] = handler;
}

import type z from 'zod';

export class ParseError {
  constructor(public err: z.ZodError<unknown>) {

  }
}

export class HandledError extends Error { }

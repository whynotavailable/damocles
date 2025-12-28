export type httpStatus = 'not_found' | 'bad_request' | 'server_error';

const statusMap: Record<httpStatus, number> = {
  not_found: 404,
  bad_request: 400,
  server_error: 500,
};

export class HttpError {
  constructor(public status: httpStatus, public data: unknown) { }

  getCode(): number {
    return statusMap[this.status];
  }

  static badRequest(data: unknown): HttpError {
    return new HttpError('bad_request', data);
  }

  static notFound(): HttpError {
    return new HttpError('not_found', 'Not Found');
  }
}

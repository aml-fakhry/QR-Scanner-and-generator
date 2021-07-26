import { Request, Response, NextFunction } from 'express';
import { AxiosError } from 'axios';
import { Logger, InternalServerError, UnAuthenticated, Forbidden, NotFound, UnknownError } from '../utils';

/**
 * A middleware that handles the errors that may occurs in express routes callbacks.
 *
 * This middleware MUST come at the very end of express application middleware pipeline.
 * @param error The error object.
 * @param req The express request instance.
 * @param res The express response instance.
 * @param next The next middleware but actually this should be the last middleware in the pipeline, don't remove this parameter it's important.
 */
export function errorHandler(error: AxiosError, req: Request, res: Response, next: NextFunction): void {
  if (error.isAxiosError) {
    switch (error.response?.status) {
      case 401:
        UnAuthenticated(res);
        break;
      case 403:
        Forbidden(res);
        break;
      case 404:
        NotFound(res);
        break;
      case 500:
        Logger.error(error.message, error);
        InternalServerError(res, error);
        break;
      default:
        UnknownError(res);
        break;
    }
  } else {
    Logger.error(error.message, error);
    InternalServerError(res, error);
  }
}

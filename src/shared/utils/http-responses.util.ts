import { Response } from 'express';

/**
 * Returns an un-authenticated response with 401 status code.
 * @param response The http-response to be modified.
 */
export function UnAuthenticated(response: Response): void {
  response.render('shared/errors/401');
}

/**
 * Returns a forbidden response with 403 status code.
 * @param response The http-response to be modified.
 */
export function Forbidden(response: Response): void {
  response.render('shared/errors/403');
}

/**
 * Returns a notfound response with 404 status code.
 * @param response The http-response to be modified.
 */
export function NotFound(response: Response): void {
  response.render('shared/errors/404');
}

/**
 * Returns an unknown error response.
 * @param response The http-response to be modified.
 */
export function UnknownError(response: Response): void {
  response.render('shared/errors/unknown-error');
}

/**
 * Returns an internal server error response with 500 status code.
 * @param response The http-response to be modified.
 */
export function InternalServerError(response: Response, error: string | Error): void {
  response.render('shared/errors/500');
}

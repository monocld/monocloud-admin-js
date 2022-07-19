/* eslint-disable @typescript-eslint/no-explicit-any */
import { unflatten } from 'flat';
import { BadRequestException } from './bad-request-exception';
import { ResourceExhaustedException } from './resource-exhausted-exception';
import { ForbiddenException } from './forbidden-exception';
import { ServerErrorException } from './server-error-exception';
import { NotFoundException } from './not-found-exception';
import { UnauthorizedException } from './unauthorized-exception';
import { ValidationError, ValidationException } from './validation-exception';

export class MonoCloudException extends Error {
  constructor(public readonly message: string) {
    super();
  }

  public static throwErr(
    _message: string,
    status: number,
    response: any,
    _headers: { [key: string]: any },
    _result?: any
  ): void {
    if (status === 400) {
      if (response?.errors) {
        throw new ValidationException(
          response?.title ?? 'Validation error',
          unflatten(response.errors) as ValidationError<any>,
          response
        );
      }
      throw new BadRequestException(response?.title ?? 'Bad Request');
    }
    if (status === 401) {
      throw new UnauthorizedException(response?.title ?? 'Unauthorized');
    }
    if (status === 403) {
      throw new ForbiddenException(response?.title ?? 'Forbidden');
    }
    if (status === 404) {
      throw new NotFoundException(response?.title ?? 'Not Found');
    }
    if (status === 429) {
      throw new ResourceExhaustedException(
        response?.title ?? 'Resource Exhausted'
      );
    }
    if (status >= 500) {
      throw new ServerErrorException(
        response?.title ?? 'An Internal Error Occured on the server',
        status
      );
    }
  }
}

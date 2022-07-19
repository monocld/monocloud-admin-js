/* eslint-disable @typescript-eslint/no-explicit-any */
export class ValidationException<T = any> extends Error {
  constructor(
    public readonly message: string,
    public readonly errors: ValidationError<T>,
    public readonly raw: any
  ) {
    super();
  }
}

export type ValidationError<T> = T extends object
  ? T extends Array<any>
    ? T[number] extends object
      ? {
          [P in keyof T]?: ValidationError<T[P]>;
        }
      : string[][]
    : {
        [P in keyof T]?: ValidationError<T[P]>;
      }
  : string[];

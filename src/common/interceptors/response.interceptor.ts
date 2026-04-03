import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Response } from 'express';
import { STATUS_CODES } from 'http';
import { Observable, map } from 'rxjs';

export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const response: Response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => ({
        status: STATUS_CODES[response.statusCode],
        data,
      })),
    );
  }
}

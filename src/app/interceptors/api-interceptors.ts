// api-interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseConfig } from '../shared/constants/base-config';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private apiKey = BaseConfig.apiKey;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add the API key to the request headers
    const modifiedRequest = request.clone({
      setParams: { access_key: this.apiKey },
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler,  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpRequest, HttpHandlerFn, } from '@angular/common/http';
     export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {        
         return next(req).pipe(
            catchError((error: HttpErrorResponse) => {
                // Handle the error response
                let errorMessage: string;

                if (error.error instanceof ErrorEvent) {
                    // Client-side error
                    errorMessage = `Error: ${error.error.error}`;
                } else {
                    // Server-side error
                    errorMessage = `Error ${error.status}: ${error.error}`;
                }

                // Optionally log the error to the console or a logging service
                console.error('HTTP Error:', errorMessage);
                if (error.status === 400) {
                  console.log('errors in control now');
                  
                  
                }

                // Show an error message to the user
            

                return throwError(errorMessage); // Propagate the error
            })
        );
  }


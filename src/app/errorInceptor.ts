import { HttpErrorResponse, HttpEvent, HttpHandlerFn,  HttpRequest } from "@angular/common/http";
import { error } from "console";
import { catchError, Observable, throwError } from "rxjs";
throwError
export class ErrorServiceClass{
    errorMessage: any


    errorInserptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>{      
    return next(req).pipe(catchError(this.handleError)) 
        
    
} 


  handleError(error: HttpErrorResponse) {
    

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      this.errorMessage = `Client Error: ${error.error.message}`;
      console.log(this.errorMessage);
      
    } else {
      // Server-side error
      this.errorMessage = `Server Error: ${error.status} - ${error.message}`;
      

    }


        
    

    // Propagate the error using throwError
    return throwError(() => new Error(this.errorMessage));
  }

}
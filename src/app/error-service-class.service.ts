import { HttpErrorResponse, HttpEvent, HttpHandlerFn,  HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { error } from "console";
import { catchError, Observable, throwError } from "rxjs";
throwError
@Injectable({providedIn: 'root'})
export class ErrorServiceClassService{
    errorMessage: any
    clientSideError: any

    errorInserptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>{      
    return next(req).pipe(catchError((error)=> this.handleError(error))) 
        
    
} 


  handleError =(error: HttpErrorResponse)=> {
    console.log(error);
    
    

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      this.clientSideError = `Client Error: ${error.error}`;
      
    } else {
      // Server-side error
      this.errorMessage = `Server Error: ${error.status} - ${error.error}`;
      

    }


        
    
      console.log(this.errorMessage);
      
    // Propagate the error using throwError
    return throwError(() => new Error(this.errorMessage));
  }

}
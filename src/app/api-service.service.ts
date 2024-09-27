import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/api/register';

  registerUser(formData: any){
    return this.http.post(this.apiUrl,formData, {responseType: 'json'}).pipe()
  }


}

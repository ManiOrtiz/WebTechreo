import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  urlBase = 'https://devtechreo.azurewebsites.net/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private http: HttpClient) { }


  getAuth(params): Observable<any> {    
    const uri = this.urlBase + 'changes/password'
    console.log(params);
  
    let response = this.http.post<any>(uri, params, this.httpOptions);
    return response;
  }
}

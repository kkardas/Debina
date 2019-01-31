import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {of} from "rxjs/index";
import {Observable} from "rxjs/Rx";
import {catchError, tap} from "rxjs/internal/operators";

@Injectable()
export class MailService {
  sendMailUrl = 'http://localhost:4002/sendMail';
  successMessage = 'Wiadomość pomyślnie wysłana';
  failMessage = 'Nie udało się wysłać wiadomości';

  constructor(private http: HttpClient) { }

  public sendMail(name, date, phoneNumber, email): Observable<any>{
    let body: HttpParams = new HttpParams();
    body = body.append('name', name);
    body = body.append('date', date);
    body = body.append('phoneNumber', phoneNumber);
    body = body.append('email', email);

    return this.http.post(this.sendMailUrl, body, {observe: 'response'})
      .pipe(
        tap(this.handleResp<any>(this.successMessage)),
        catchError(this.handleResp<any>(this.failMessage))
    );
  }

  private handleResp<T> (result) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}

/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface Book {
        docs: Array<JSON>,





@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

getLOTRBooks(){
    this.http.get<JSON>("https://the-one-api.dev/v2/book")

    this.http
    .get<any[]>("https://the-one-api.dev/v2/book")
    .map(data => _.values(data))
    .do(console.log);    
}

}

*/
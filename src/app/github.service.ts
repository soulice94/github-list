import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class GithubService {
  url : string = "https://api.github.com/users/";   
  constructor( private http: HttpClient ) { }

  getRepos(userName: string): Observable<any>{
    return this.http.get(this.url+userName+"/repos");
  }

}

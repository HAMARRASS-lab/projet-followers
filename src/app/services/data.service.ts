import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(@Inject('https://jsonplaceholder.typicode.com/posts')  private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .map(response=>response)
      .pipe(
        catchError(this.handleError)
      );
  }
  create(resource: any) {
    return this.http.post(this.url, resource)
    .map(response=>response)
      .pipe(
        catchError(this.handleError)
      );

  }
  update(resource: any) { 
    return this.http.put(this.url + '/' + resource.id,resource)
    .map(response=>response)
      .pipe(
        catchError(this.handleError)
      );
  }
  delete(resource: any) {
    return this.http.delete(this.url + '/' + resource.id)
    .map(response=>response)
      .pipe(
        catchError(this.handleError)
      );

  }
  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError);
    }
    if (error.status === 400) {
      return Observable.throw(new BadInput);
    }
    return Observable.throw(new AppError);
  }
}

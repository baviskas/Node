import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {AppError} from '../app-error';
import {NotFoundError} from '../not-found-error';
import {BadInput} from '../bad-input';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient) { }
  getAll() {
    return this.http.get(this.url).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError)
    );
  }
  create(resourse) {
    return this.http.post(this.url, JSON.stringify(resourse)).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError)
    );
  }
  update(resourse) {
    const url = this.url + `/${resourse.id}`;
    return this.http.patch(url, {title: 'Updated post'}).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError)
    );
  }
  deleteForId(id) {
    const url = this.url + `/${id}`;
    return this.http.delete(url).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError)
    );
  }
  getPostById(id) {
    const url = this.url + `/${id}`;
    return this.http.get(url).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError)
    );
  }
  private handleError (error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput());
    }
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}

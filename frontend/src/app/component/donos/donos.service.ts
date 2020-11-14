import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Dono } from './donos-model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonosService {
  baseUrl = "http://localhost:3001/donos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: Boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"]
    });
  }

  create(dono: Dono): Observable<Dono> {
    return this.http.post<Dono>(this.baseUrl, dono).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Dono[]>{
    return this.http.get<Dono[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id:number):Observable<Dono>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Dono>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(dono: Dono): Observable<Dono> {
    const url = `${this.baseUrl}/${dono.id}`;
    return this.http.put<Dono>(url, dono).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  delete(id: number): Observable<Dono> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Dono>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!,true");
    return EMPTY;
  }
}

import { Pet } from './pets-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  baseUrl = "http://localhost:3001/pets";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: Boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"]
    });
  }

  create(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.baseUrl, pet).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  readById(id: number): Observable<Pet> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pet>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  update(pet: Pet): Observable<Pet> {
    const url = `${this.baseUrl}/${pet.id}`;
    return this.http.put<Pet>(url, pet).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  delete(id: number): Observable<Pet> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Pet>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!,true");
    return EMPTY;
  }

}

import { Pet } from './pets-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  baseUrl = "http://localhost:3001/pets";

  constructor(private snackBar:MatSnackBar, private http:HttpClient) {  }
  showMessage(msg:string):void{
      this.snackBar.open(msg, 'X',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:"top"
      });
  }
  create(pet:Pet): Observable<Pet>{
   return this.http.post <Pet>(this.baseUrl, pet);
  }
}

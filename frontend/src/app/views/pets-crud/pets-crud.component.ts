import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';

@Component({
  selector: 'app-pets-crud',
  templateUrl: './pets-crud.component.html',
  styleUrls: ['./pets-crud.component.css']
})
export class PetsCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPetCreate():void{
    this.router.navigate(['pets/create'])
  }
}

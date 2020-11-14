import { PetsService } from './../pets.service';
import { Pet } from './../pets-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-create',
  templateUrl: './pets-create.component.html',
  styleUrls: ['./pets-create.component.css']
})
export class PetsCreateComponent implements OnInit {

  pet: Pet = {
    Nome:'',
    Apelido:'',
    Raca: '',
    Especie:'',
    idDono:null
  }

  constructor(private PetsService: PetsService, private router:Router) { }

  ngOnInit(): void {
   
  }

  createPet():void{
    this.PetsService.create(this.pet).subscribe(( )=>{
    this.PetsService.showMessage("Pet cadastrado!")
    this.router.navigate(['pets'])});
  }

  cancel():void{
    this.router.navigate(['pets'])
  }
}

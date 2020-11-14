import { PetsService } from './../pets.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from './../pets-model';

@Component({
  selector: 'app-pets-read',
  templateUrl: './pets-read.component.html',
  styleUrls: ['./pets-read.component.css']
})

export class PetsReadComponent implements OnInit {
  pets: Pet[];
  displayedColumns=['id','Nome','Apelido','Raca','Especie','idDono','action'];
  constructor(private PetsService: PetsService) { }

  ngOnInit(): void {
    this.PetsService.read().subscribe(pets=>{
      this.pets = pets;
    })
  }

}

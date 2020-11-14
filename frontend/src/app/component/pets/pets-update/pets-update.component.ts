import { ActivatedRoute, Router } from '@angular/router';
import { PetsService } from './../pets.service';
import { Pet } from './../pets-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets-update',
  templateUrl: './pets-update.component.html',
  styleUrls: ['./pets-update.component.css']
})
export class PetsUpdateComponent implements OnInit {

  pet: Pet;

  constructor(private petService: PetsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.readById(id).subscribe(pet => {
      this.pet = pet;
    })
  }

  updatePets(): void {
    this.petService.update(this.pet).subscribe(() => {
      this.petService.showMessage("Pet atualizado com sucesso!")
      this.router.navigate(['/pets'])
    })
  };

  cancel(): void {
    this.router.navigate(['/pets']);
  }
}

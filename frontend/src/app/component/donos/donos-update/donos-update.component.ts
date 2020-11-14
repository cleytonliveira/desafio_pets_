import { Dono } from './../donos-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DonosService } from '../donos.service';

@Component({
  selector: 'app-donos-update',
  templateUrl: './donos-update.component.html',
  styleUrls: ['./donos-update.component.css']
})
export class DonosUpdateComponent implements OnInit {

  dono:Dono;

  constructor(private donosService:DonosService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.donosService.readById(id).subscribe(dono => {
      this.dono = dono;
    })
  }

  updateDono(): void {
    this.donosService.update(this.dono).subscribe(() => {
      this.donosService.showMessage("Dono atualizado com sucesso!")
      this.router.navigate(['/donos'])
    })
  };

  cancel(): void {
    this.router.navigate(['/donos']);
  }

}

import { Router } from '@angular/router';
import { DonosService } from './../donos.service';
import { Dono } from './../donos-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donos-create',
  templateUrl: './donos-create.component.html',
  styleUrls: ['./donos-create.component.css']
})
export class DonosCreateComponent implements OnInit {
  dono:Dono ={
    Nome:'',
    Email:'',
    Telefone:null
  }
  constructor(private donosService:DonosService, private router:Router) { }

  ngOnInit(): void {
  }

  createDono():void{
    this.donosService.create(this.dono).subscribe(()=>{
      this.donosService.showMessage("Dono cadastrado!")
      this.router.navigate(['donos']);
    })
  }

  cancel():void{
    this.router.navigate(['donos'])
  }
}

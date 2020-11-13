import { PetsCreateComponent } from './component/pets/pets-create/pets-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {HomeComponent} from "./views/home/home.component";
import {PetsCrudComponent} from "./views/pets-crud/pets-crud.component";


const routes: Routes =[
  {
  path:"",
  component:HomeComponent
  },
  {
  path:"pets",
  component:PetsCrudComponent
  },
  {
  path:"pets/create",
  component:PetsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

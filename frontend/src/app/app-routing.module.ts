import { PetsCreateComponent } from './component/pets/pets-create/pets-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from "./views/home/home.component";
import { PetsCrudComponent } from "./views/pets-crud/pets-crud.component";
import { PetsUpdateComponent } from "./component/pets/pets-update/pets-update.component";
import { PetsDeleteComponent } from "./component/pets/pets-delete/pets-delete.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pets",
    component: PetsCrudComponent
  },
  {
    path: "pets/create",
    component: PetsCreateComponent
  },
  {
    path: "pets/update/:id",
    component: PetsUpdateComponent
  }
  ,
  {
    path: "pets/delete/:id",
    component: PetsDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

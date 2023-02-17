import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'categorias', component:CategoriasComponent}
 // {path:'contacto', component:contactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarCategoriaComponent } from './actualizar-categoria/actualizar-categoria.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {path:'categorias', component:CategoriasComponent},
  {path:'listado', component:ListadoComponent},
  {path: 'actualizar-categoria/:id', component:ActualizarCategoriaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

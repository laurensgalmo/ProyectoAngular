import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import { ActualizarCategoriaComponent } from './actualizar-categoria/actualizar-categoria.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriasComponent,
    ListadoComponent,
    ActualizarCategoriaComponent,
    //FALTA CONTACTO
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule //Acceso a los métodos de formulario
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

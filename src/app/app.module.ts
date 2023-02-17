import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriasComponent,
    InicioComponent
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

import { Component } from '@angular/core';
import { ConexionService } from './conexion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'proyectoTienda';
  listado: any[] = [];

  constructor(private conexion: ConexionService){
    const dato: Observable<any> = this.conexion.leerApi('categorias');
    console.log("ENTRO EN EL LISTADO");
    dato.subscribe(
      (resp: any)=>{
        this.listado = resp; //any porque no sabemos la respuesta, es mejor recibirla y porcesarla
      console.log(this.listado);
    })
  }
}

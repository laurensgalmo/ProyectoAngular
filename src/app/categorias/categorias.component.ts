import { Component } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { Observable } from 'rxjs';
import { interfaceCategoria } from '../interfaceCategoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  listado: interfaceCategoria[] = [];

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

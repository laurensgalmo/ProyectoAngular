import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { categoria } from '../categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listado: categoria[];
  constructor(private conexion: ConexionService, private router: Router){
  }
  ngOnInit(): void {
    this.obtenerCategorias();
  }
  
  private obtenerCategorias(){
    this.conexion.obtenerListaCategorias().subscribe(
      datos =>{
        this.listado = datos;
      }
    );
  }

  eliminarCategoria(id:number){
    this.conexion.eliminarCategoria(id).subscribe(dato => {
      console.log(dato);
      this.obtenerCategorias();
    })
  }

  actualizarCategoria(id:number){
    this.router.navigate(['actualizar-categoria/',id]);
  }
}



  






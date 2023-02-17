import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { categoria } from '../categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoria: categoria = new categoria();

  constructor(private conexion: ConexionService, private route: Router){}
  ngOnInit(): void {
   

  }

  guardarCategoria(){
    this.conexion.crearCategoria(this.categoria).subscribe(dato =>{
      console.log(dato);
      this.route.navigate(['listado']);
    });
    
  }

  onSubmit(){
    console.log(this.categoria);
    this.guardarCategoria();
    
  }


}

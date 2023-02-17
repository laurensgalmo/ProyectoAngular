import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { categoria } from '../categoria';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrls: ['./actualizar-categoria.component.css']
})
export class ActualizarCategoriaComponent implements OnInit{

 id: number;

categoria: categoria;

  constructor(private conexion: ConexionService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
   this.id= this.route.snapshot.params['id'];
   this.categoria = new categoria;
   this.conexion.obtenerUnaCategoria(this.id).subscribe(
    dato => this.categoria = dato
   );

  }

  guardarCategoria(){
    this.conexion.crearCategoria(this.categoria).subscribe(dato =>{
      console.log(dato);
      this.router.navigate(['listado']);
    });
    
  }

  onSubmit(){
    console.log(this.categoria);
    this.guardarCategoria();
    
  }


}
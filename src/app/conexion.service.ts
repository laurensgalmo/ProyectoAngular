import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, share } from  'rxjs';
import { categoria } from './categoria';

@Injectable({providedIn: 'root'})

export class ConexionService {

private url = 'http://localhost:8080/categorias';
  
  constructor(private http: HttpClient) { }
  
  obtenerListaCategorias():Observable<categoria[]>{
    return this.http.get<categoria[]>(`${this.url}`);
  } 

  crearCategoria(categoria: categoria): Observable<any>{
    return this.http.post(`${this.url}`, categoria);
  }
 
  actualizarCategoria(id:number, categoria: categoria):Observable<any>{
    return this.http.put(`${this.url}/${id}`, categoria);
  }

  eliminarCategoria(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

  obtenerUnaCategoria(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
}

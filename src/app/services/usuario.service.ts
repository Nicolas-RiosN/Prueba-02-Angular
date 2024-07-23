import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listAlumnos: Usuario[] = [
    {usuario: 'nrios', nombre: 'Nicolas', apellido: 'Rios', curso: 'Matematicas'},
    {usuario: 'karl', nombre: 'Karla', apellido: 'Contreras', curso: 'Lenguaje'},
  ];

  constructor() { }

  getAlumnos(){
    return this.listAlumnos.slice();
  }

  eliminarAlumnos(index: number){
    this.listAlumnos.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listAlumnos.unshift(usuario)
  }
}

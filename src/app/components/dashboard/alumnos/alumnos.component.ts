import { Component, ViewChild } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from '../../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  
  listAlumnos: Usuario[] = [];

    displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'curso', 'acciones'];
    dataSource!: MatTableDataSource<any>

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    
    constructor(private _alumnoService: UsuarioService, private _snackBar: MatSnackBar){
    
    }

    ngOnInit(){
      this.cargarAlumnos();
    }

    cargarAlumnos(){
      this.listAlumnos = this._alumnoService.getAlumnos();
      this.dataSource = new MatTableDataSource(this.listAlumnos)
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
      
    eliminarAlumno(index: number){
      console.log(index);

      this._alumnoService.eliminarAlumnos(index);
      this.cargarAlumnos();

      this._snackBar.open('El usuario fue eliminado con exito', '',{
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition:'bottom'
      })
    }

}

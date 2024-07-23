import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearAlumnoComponent } from './alumnos/crear-alumno/crear-alumno.component';

const routes: Routes = [
  {path: '',component: DashboardComponent, children:[
    {path: '', component: InicioComponent},
    {path: 'alumno', component: AlumnosComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'crear-alumno', component: CrearAlumnoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

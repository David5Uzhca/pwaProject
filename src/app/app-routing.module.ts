import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificacionComponent } from './pages/calificacion/calificacion.component';
import { ViewCalificacionComponent } from './pages/view-calificacion/view-calificacion.component';
import { ListaCalificacionComponent } from './pages/lista-calificacion/lista-calificacion.component';

const routes: Routes = [
  {path:"pages/calificacion",component:CalificacionComponent},
  {path:"pages/calificacion/:id",component:ViewCalificacionComponent},
  {path:"pages/lista-calificacion",component:ListaCalificacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  {
    path: 'ingresarPresupuesto',
    component: IngresarPresupuestoComponent,
  },
  {
    path: 'gastos',
    component: GastosComponent,
  },
  {
    path: '',
    redirectTo: '/ingresarPresupuesto',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/ingresarPresupuesto',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

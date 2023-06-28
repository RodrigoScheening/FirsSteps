import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./users/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recordatorios',
    loadChildren: () => import('./recordatorios/recordatorios.module').then( m => m.RecordatoriosPageModule)
  },
  {
    path: 'guias',
    loadChildren: () => import('./guias/guias.module').then( m => m.GuiasPageModule)
  },
  {
    path: 'linea-de-tiempo',
    loadChildren: () => import('./linea-de-tiempo/linea-de-tiempo.module').then( m => m.LineaDeTiempoPageModule)
  },
  {
    path: 'lista-recordatorios',
    loadChildren: () => import('./recordatorios/lista-recordatorios/lista-recordatorios.module').then( m => m.ListaRecordatoriosPageModule)
  },
  {
    path: 'actualizar-recordatorio/:id',
    loadChildren: () => import('./recordatorios/actualizar-recordatorio/actualizar-recordatorio.module').then( m => m.ActualizarRecordatorioPageModule)
  },
  {
    path: 'esquema-vacunas',
    loadChildren: () => import('./guias/esquema-vacunas/esquema-vacunas.module').then( m => m.EsquemaVacunasPageModule)
  },
  {
    path: 'mostrar-vacuna/:infante/:edad',
    loadChildren: () => import('./guias/esquema-vacunas/mostrar-vacuna/mostrar-vacuna.module').then( m => m.MostrarVacunaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

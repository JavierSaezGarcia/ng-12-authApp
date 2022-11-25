/////////////////////////////////
// Este es el router principal que maneja los routers secundarios (auth/auth-routing.module.ts y el protected/protected-routing.module.ts )
/////////////////////////////////


import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

// en este caso tendremos dos padres => auth y protected y sus respectivos hijos
const routes: Routes = [
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )    
  },
  {
    path: 'dashboard', 
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule ),
    canActivate: [ ValidarTokenGuard],
    canLoad: [ ValidarTokenGuard]   
  },
  {
    path: '**', 
    redirectTo: 'auth'   
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

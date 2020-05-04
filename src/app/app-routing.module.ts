import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'usuario', loadChildren: () => import("./pages/usuarios/usuarios.module").then(m => m.UsuariosModule)},
  { path:'log-acesso', loadChildren: () => import("./pages/log-acesso/log-acesso.module").then(m => m.LogAcessoModule)},
  { path:'log-relatorio', loadChildren: () => import("./pages/log-relatorio/log-relatorio.module").then(m => m.LogRelatorioModule)},
  { path:'relatorios', loadChildren: () => import("./pages/relatorios/relatorios.module").then(m => m.RelatoriosModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

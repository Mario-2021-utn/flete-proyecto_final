import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'quienessomos', component: QuienesSomosComponent},
  { path: 'informacion', component: InformacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

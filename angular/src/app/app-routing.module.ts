import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component'; // CLI imports AppRoutingModule
import { AjustesComponent,PopUpReconocimiento } from './ajustes/ajustes.component';
import { ControlManualComponent } from './control-manual/control-manual.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: InicioComponent },
{ path: 'ajustes', component: AjustesComponent },
{ path: 'control-manual', component: ControlManualComponent },
]; 
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

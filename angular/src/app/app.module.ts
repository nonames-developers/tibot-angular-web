import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JuegoComponent , JuegoSnackComponent} from './juego/juego.component';
import { JuegosComponent } from './juegos/juegos.component';
import { TituloComponent } from './titulo/titulo.component';
import { BotonAjustesComponent , PopUpEdadComponent} from './boton-ajustes/boton-ajustes.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';

import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BotonCerrarComponent } from './boton-cerrar/boton-cerrar.component';
import { AjustesComponent,PopUpReconocimiento,ConfirmacionExploracion } from './ajustes/ajustes.component';
import { ControlManualComponent } from './control-manual/control-manual.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component'; // CLI imports AppRoutingModule
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxJoystickModule } from 'ngx-joystick';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    JuegosComponent,
    TituloComponent,
    BotonAjustesComponent,
    BotonCerrarComponent,
    AjustesComponent,
    ControlManualComponent,
    PopUpEdadComponent,
    PopUpReconocimiento,
    InicioComponent,
    JuegoSnackComponent,
    ConfirmacionExploracion
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    MatSnackBarModule,
    HttpClientModule,
    NgxJoystickModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private route: ActivatedRoute) {

    
    library.add(faCog);

    library.add(faChevronRight);
    library.add(faChevronLeft);

  }
 }

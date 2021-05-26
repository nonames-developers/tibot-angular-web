import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-boton-ajustes',
  templateUrl: './boton-ajustes.component.html',
  styleUrls: ['./boton-ajustes.component.css']
})
export class BotonAjustesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }


  openDialog() {
    const dialogRef = this.dialog.open(PopUpEdadComponent, {panelClass: 'edadContainer'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'pop-up-edad',
  templateUrl: './../pop-ups/pop-up-edad/pop-up-edad.html',
  styleUrls: ['./../pop-ups/pop-up-edad/pop-up-edad.componente.css']

})
export class PopUpEdadComponent {}
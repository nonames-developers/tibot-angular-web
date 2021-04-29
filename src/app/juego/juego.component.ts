import { Component, Input, OnInit } from '@angular/core';
import { Juego } from '../models/juego';
import {MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {


  @Input() juego: Juego = new Juego();

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(JuegoSnackComponent, {
      duration:5*1000,
    });
  }

  ngOnInit(): void {
    
    

  }

}




@Component({
  selector: 'juego-snack',
  templateUrl: 'juego-snack.html',

})
export class JuegoSnackComponent {}



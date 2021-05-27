import { Component, Input, OnInit } from '@angular/core';
import { Juego } from '../models/juego';
import {MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
    providers: [DataService]
})
export class JuegoComponent implements OnInit {


  @Input() juego: Juego = new Juego();
  constructor(private _snackBar: MatSnackBar,private dataSvc: DataService) {}

  openSnackBar() {

    this.dataSvc.playSound(2);
    let listaFigura = [""]
    let figura = this.getRandomFigure();
    let color = this.getRandomColor();
    console.log("Busco un "+figura+" de color "+color)
    this._snackBar.open("Busco un "+figura+" de color "+color);
    this.dataSvc.searchFigure(figura,color).subscribe(res => {
      console.log('Res', res);
      this._snackBar.open("LO HE ENCONTRADO");
    });


  }

   getRandomFigure(): string {
    let placeList = ["cuadrado", "triangulo", "circulo"];
    let index:number = Math.round(Math.random() * (3 - 1));
    let place:string = placeList[index]
    return place;
}
getRandomColor(): string {
  let placeList = ["azul", "rojo", "verde"];
  let index:number = Math.round(Math.random() * (3 - 1));
  let place:string = placeList[index]
  return place;
}


  ngOnInit(): void {
    
  }

}

@Component({
  selector: 'juego-snack',
  templateUrl: 'juego-snack.html',
})
export class JuegoSnackComponent {}



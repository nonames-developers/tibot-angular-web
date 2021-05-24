import { Component, OnInit } from '@angular/core';
import {Juego} from '../models/juego'
@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  juegos: Juego[] = [];

  constructor() { }

  ngOnInit(): void {

    this.juegos = [

      {
        id:1,
        nombre: "figuras",
        urlImage:"../assets/img/figuras.png"
      },
      {
        id:2,
        nombre: "pilla pilla",
        urlImage: "../assets/img/pilla.png"
      },
      {
        id:3,
        nombre:"escondite",
        urlImage:"../assets/img/escondite.png"
      }
    ]
  }



}

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
    let place = this.getRandomPlace();


    this.dataSvc.move(place).subscribe(res => {
      console.log('Res', res)
      this._snackBar.open("Me he escondido en "+place);
    });


  }

   getRandomPlace(): string {
    let placeList = ["bed", "table", "wardrobe"];
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



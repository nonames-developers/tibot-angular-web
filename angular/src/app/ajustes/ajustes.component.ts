import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import {MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog() {
    const dialogRef = this.dialog.open(PopUpReconocimiento);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'pop-up-reconocimiento',
  templateUrl: './../pop-ups/pop-up-reconocimiento/pop-up-reconocimiento.html',
  styleUrls: ['./../pop-ups/pop-up-reconocimiento/pop-up-reconocimiento.css'],
  providers: [DataService]

})
export class PopUpReconocimiento implements OnInit {


  constructor(private _snackBar: MatSnackBar,private route: ActivatedRoute, private dataSvc: DataService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap)
    })
  }

  explore(): void {
    
    this.dataSvc.startExploring().subscribe(res => {
      console.log('Res', res)
      this._snackBar.open("He acabado de reconocer!")
    }) 
  }

}


@Component({
  selector: 'confirmacion-snack',
  templateUrl: 'confirmacion-snack.html',
})
export class ConfirmacionExploracion {}
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [DataService]
})
export class InicioComponent implements OnInit {

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.dataSvc.playSound(1)
  }

}

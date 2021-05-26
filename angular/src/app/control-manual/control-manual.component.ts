import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { Data } from '@angular/router';
import { JoystickEvent, NgxJoystickComponent } from 'ngx-joystick';
import { JoystickManagerOptions, JoystickOutputData } from 'nipplejs';
@Component({
  selector: 'app-control-manual',
  templateUrl: './control-manual.component.html',
  styleUrls: ['./control-manual.component.css'],
  providers: [DataService]
})
export class ControlManualComponent implements OnInit {


  @ViewChild('staticJoystic') staticJoystick: NgxJoystickComponent;
  constructor(private dataSvc: DataService) { }
  
  ngOnInit(): void {

  }

  staticOptions: JoystickManagerOptions = {
    mode: 'static',
    position: { left: '50%', top: '50%' },
    color: 'blue',
  };

  staticOutputData: JoystickOutputData;

  directionStatic: string;
  interactingStatic: boolean;

  onStartStatic(event: JoystickEvent) {
    this.interactingStatic = true;
  }

  onEndStatic(event: JoystickEvent) {
    this.interactingStatic = false;
    this.moveToString("Stop")
  }

  onMoveStatic(event: JoystickEvent) {
    this.staticOutputData = event.data;
  }

  onPlainUpStatic(event: JoystickEvent) {
    this.directionStatic = 'Delante';
    this.moveToString("Delante");
  }

  onPlainDownStatic(event: JoystickEvent) {
    this.directionStatic = 'Atras';
    this.moveToString("Atras");
  }

  onPlainLeftStatic(event: JoystickEvent) {
    this.directionStatic = 'Izquierda';
    this.moveToString("Izquierda");
  }

  onPlainRightStatic(event: JoystickEvent) {
    this.directionStatic = 'Derecha';
    this.moveToString("Derecha");
  }
  // esto es guarrisimo pero ven y dimelo a la cara crack que hoy me levante re loco
  moveToString(value): void {
    console.log(value);
    this.dataSvc.move(value).subscribe(res => {
      console.log('Res', res)
    }) 
  }

  moveTo(btn): void {
    let target = btn.target || btn.srcElement || btn.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    console.log(value);
    this.dataSvc.move(value).subscribe(res => {
      console.log('Res', res)
    }) 
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-control-manual',
  templateUrl: './control-manual.component.html',
  styleUrls: ['./control-manual.component.css'],
  providers: [DataService]
})
export class ControlManualComponent implements OnInit {

  constructor(private dataSvc: DataService) { }
  ngOnInit(): void {

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

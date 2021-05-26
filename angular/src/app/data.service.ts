import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  startExploring():Observable<any>{
    return this.http.get<any>('http://localhost:8080/explorar/');
  }

  move(dir):Observable<any>{
    if(dir == "bed" || dir =="wardrobe" || dir == "table"){
      return this.http.get<any>('http://localhost:8080/mover?place='+dir);
    }

    return this.http.get<any>('http://localhost:8080/mover'+dir);
  }
}

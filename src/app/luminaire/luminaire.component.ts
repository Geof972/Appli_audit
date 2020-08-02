import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-luminaire',
  templateUrl: './luminaire.component.html',
  styleUrls: ['./luminaire.component.css']
})
export class LuminaireComponent implements OnInit {
  jsongeof = 'src/json_geof.json';
  constructor(private http: HttpClient) {
   this.getJSON().subscribe(data => {
    console.log(data);
   });
 }
 public getJSON(): Observable<any> {
   return this.http.get(this.jsongeof);
 }

  ngOnInit() {
  }

}
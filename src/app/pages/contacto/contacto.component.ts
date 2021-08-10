import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mostrar=false;
  toggleInformation(){
    this.mostrar = !this.mostrar;
  }
  saludar(){
    alert("oh hiciste click");
  }
}

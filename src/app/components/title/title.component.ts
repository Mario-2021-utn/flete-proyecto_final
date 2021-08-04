import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }

  // title = "soy un titulo"
  // subtitle= "soy un subtitulo"
  @Input() title = "contenido";
  @Input() subtitle?: string;
  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(
    private climaservice:ClimaService
  ) { }
  datita:any;
  showClima(){
    this.climaservice.getClima().subscribe((data:any)=>{
      console.log(data);
      this.datita = data;
    });
  }

  // title = "soy un titulo"
  // subtitle= "soy un subtitulo"
  @Input() title = "contenido";
  @Input() subtitle?: string;
  ngOnInit(): void {
    this.showClima();
  }

}

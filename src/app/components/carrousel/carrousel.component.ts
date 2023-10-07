import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  display: string = 'flex';
  transition: string = 'transform 0.5s ease-in-out';
  transform: string = 'translateX(0)';
  marginLeft: string = '20rem';
  justify: string = 'center';
  containerWidth: string = '36vh';
  containerHeight: string = '40vh';
  shadow: string = '2px 2px 4px black';
  radius: string = '10px';
  idX: number = 0;



  constructor() { }

  ngOnInit(): void {
    console.log(this.transform);
    setInterval(() => this.carrousel(), 3200);
  }


carrousel(): void {
    this.idX++;

    if(this.idX > 4) {
        this.idX = 0;
    }

    this.transform = `translateX(${this.idX * -50}vw)`;
}




}

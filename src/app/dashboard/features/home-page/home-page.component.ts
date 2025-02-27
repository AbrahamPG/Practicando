import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  list = [
    "manzana para jugo",
    "tomate",
    "lechuga",
    "papa huayro",
    "papa unica",
    "berenjena",
    "pepino",
    "limon",
    "camote morado",
    "camote amarillo",
  ]

  images = [
    'oferta.png',
    'carrousel2.png',
    'delivery.png',
    // 'https://picsum.photos/3000/1000?random=4',
    // 'https://picsum.photos/3000/1000?random=5',
    // 'https://picsum.photos/3000/1000?random=6',
    // 'https://picsum.photos/3000/1000?random=7',
  ]
}

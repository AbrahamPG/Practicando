import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {

  constructor(private router: Router) {}
    navigateTo(route: string) {
      this.router.navigate([route]);
    }
}

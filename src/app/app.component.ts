import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images: string[];
  constructor() {
    this.images = [
      'https://unsplash.it/1600/400?random=1',
      'https://unsplash.it/1600/400?random=2',
      'https://unsplash.it/1600/400?random=3',
      'https://unsplash.it/1600/400?random=4',
      'https://unsplash.it/1600/400?random=5',
      'https://unsplash.it/1600/400?random=6',
      'https://unsplash.it/1600/400?random=7',
      'https://unsplash.it/1600/400?random=8',
      'https://unsplash.it/1600/400?random=9',
      'https://unsplash.it/1600/400?random=10',
    ];
  }
}

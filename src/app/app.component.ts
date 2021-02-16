import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'This is feedback feature for FullSession';
  postionValue: number;

  onChange(vlaue) {
    this.postionValue = Number(vlaue);
  }
}

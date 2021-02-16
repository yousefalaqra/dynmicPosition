import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
@Input('position') position: number; // 0: top-left, 1: top-right, 2: center:left, 3: center-right, 4: bottom-left, 5: bbottom-right
  constructor() { }

  ngOnInit(): void {
    console.log('object');
    console.log('object', this.position);
  }

}

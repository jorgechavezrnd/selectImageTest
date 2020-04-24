import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-image2',
  templateUrl: './select-image2.component.html',
  styleUrls: ['./select-image2.component.css']
})
export class SelectImage2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onItemSelected(item: string): void {
    console.log(`SIC 2: Item selected: ${item}`);
  }

}

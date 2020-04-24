import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.css']
})
export class SelectImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onItemSelected(item: string): void {
    console.log(`SIC 1: Item selected: ${item}`);
  }

}

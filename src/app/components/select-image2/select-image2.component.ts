import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-image2',
  templateUrl: './select-image2.component.html',
  styleUrls: ['./select-image2.component.css']
})
export class SelectImage2Component implements OnInit {

  public stampsURLList: Array<{ id: number, url: string }>;

  constructor() {
    this.stampsURLList = new Array<{ id: number, url: string }>();

    this.stampsURLList.push({
      id: 1,
      url: 'https://www.usps.com/ecp/asset/images/749704-L0.jpg'
    });
    this.stampsURLList.push({
      id: 2,
      url: 'https://previews.123rf.com/images/nalinn/nalinn1508/nalinn150800018/44272522-red-grunge-approved-rubber-stamp-isolated-on-white-background.jpg'
    });
    this.stampsURLList.push({
      id: 3,
      url: 'https://image.shutterstock.com/image-vector/red-grunge-approved-rubber-stamp-260nw-287233613.jpg'
    });

    this.stampsURLList.push({
      id: 4,
      url: 'https://previews.123rf.com/images/nalinn/nalinn1508/nalinn150800018/44272522-red-grunge-approved-rubber-stamp-isolated-on-white-background.jpg'
    });
    this.stampsURLList.push({
      id: 5,
      url: 'https://www.usps.com/ecp/asset/images/749704-L0.jpg'
    });
    this.stampsURLList.push({
      id: 6,
      url: 'https://image.shutterstock.com/image-vector/red-grunge-approved-rubber-stamp-260nw-287233613.jpg'
    });

    this.stampsURLList.push({
      id: 7,
      url: 'https://image.shutterstock.com/image-vector/red-grunge-approved-rubber-stamp-260nw-287233613.jpg'
    });
    this.stampsURLList.push({
      id: 8,
      url: 'https://www.usps.com/ecp/asset/images/749704-L0.jpg'
    });
    this.stampsURLList.push({
      id: 9,
      url: 'https://previews.123rf.com/images/nalinn/nalinn1508/nalinn150800018/44272522-red-grunge-approved-rubber-stamp-isolated-on-white-background.jpg'
    });
  }

  ngOnInit(): void {
  }

  onItemSelected(item: string): void {
    console.log(`SIC 2: Item selected: ${item}`);
  }

}

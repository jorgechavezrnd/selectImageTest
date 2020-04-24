import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectImage2Component } from './select-image2.component';

describe('SelectImage2Component', () => {
  let component: SelectImage2Component;
  let fixture: ComponentFixture<SelectImage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectImage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectImage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicepagePage } from './dicepage.page';

describe('DicepagePage', () => {
  let component: DicepagePage;
  let fixture: ComponentFixture<DicepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

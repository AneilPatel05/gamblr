import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotGamePage } from './slot-game.page';

describe('SlotGamePage', () => {
  let component: SlotGamePage;
  let fixture: ComponentFixture<SlotGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackPage } from './blackjack.page';

describe('BlackjackPage', () => {
  let component: BlackjackPage;
  let fixture: ComponentFixture<BlackjackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackjackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackjackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

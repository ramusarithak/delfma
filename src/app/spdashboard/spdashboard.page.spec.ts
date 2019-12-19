  import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpdashboardPage } from './spdashboard.page';

describe('SpdashboardPage', () => {
  let component: SpdashboardPage;
  let fixture: ComponentFixture<SpdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpdashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

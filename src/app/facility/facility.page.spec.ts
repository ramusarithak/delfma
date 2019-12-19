import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityPage } from './facility.page';

describe('FacilityPage', () => {
  let component: FacilityPage;
  let fixture: ComponentFixture<FacilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

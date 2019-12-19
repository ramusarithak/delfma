import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifypagePage } from './verifypage.page';

describe('VerifypagePage', () => {
  let component: VerifypagePage;
  let fixture: ComponentFixture<VerifypagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifypagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

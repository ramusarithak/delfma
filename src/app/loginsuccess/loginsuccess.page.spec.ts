import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsuccessPage } from './loginsuccess.page';

describe('LoginsuccessPage', () => {
  let component: LoginsuccessPage;
  let fixture: ComponentFixture<LoginsuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsuccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

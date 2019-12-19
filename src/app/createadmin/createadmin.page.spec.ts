import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadminPage } from './createadmin.page';

describe('CreateadminPage', () => {
  let component: CreateadminPage;
  let fixture: ComponentFixture<CreateadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

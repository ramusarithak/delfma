import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaddComponent } from './spadd.component';

describe('SpaddComponent', () => {
  let component: SpaddComponent;
  let fixture: ComponentFixture<SpaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaddComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

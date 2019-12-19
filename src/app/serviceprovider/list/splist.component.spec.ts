import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplistComponent } from './splist.component';

describe('SplistComponent', () => {
  let component: SplistComponent;
  let fixture: ComponentFixture<SplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplistComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

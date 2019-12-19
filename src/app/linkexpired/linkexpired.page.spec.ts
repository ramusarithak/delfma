import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkexpiredPage } from './linkexpired.page';

describe('LinkexpiredPage', () => {
  let component: LinkexpiredPage;
  let fixture: ComponentFixture<LinkexpiredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkexpiredPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkexpiredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

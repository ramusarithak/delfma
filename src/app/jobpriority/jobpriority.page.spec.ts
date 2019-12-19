import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpriorityPage } from './jobpriority.page';

describe('JobpriorityPage', () => {
  let component: JobpriorityPage;
  let fixture: ComponentFixture<JobpriorityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobpriorityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpriorityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

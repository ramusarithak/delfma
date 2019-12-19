import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPage } from './skill.page';

describe('SkillPage', () => {
  let component: SkillPage;
  let fixture: ComponentFixture<SkillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

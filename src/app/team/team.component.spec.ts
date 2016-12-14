/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Team } from './team.component';

describe('Team', () => {
  let component: Team;
  let fixture: ComponentFixture<Team>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Team ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Team);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

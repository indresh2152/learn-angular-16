import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotfix4Component } from './hotfix-4.component';

describe('Hotfix4Component', () => {
  let component: Hotfix4Component;
  let fixture: ComponentFixture<Hotfix4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hotfix4Component]
    });
    fixture = TestBed.createComponent(Hotfix4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

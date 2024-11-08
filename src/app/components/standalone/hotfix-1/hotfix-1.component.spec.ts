import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotfix1Component } from './hotfix-1.component';

describe('Hotfix1Component', () => {
  let component: Hotfix1Component;
  let fixture: ComponentFixture<Hotfix1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hotfix1Component]
    });
    fixture = TestBed.createComponent(Hotfix1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

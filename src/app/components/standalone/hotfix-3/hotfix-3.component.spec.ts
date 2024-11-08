import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotfix3Component } from './hotfix-3.component';

describe('Hotfix3Component', () => {
  let component: Hotfix3Component;
  let fixture: ComponentFixture<Hotfix3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Hotfix3Component]
    });
    fixture = TestBed.createComponent(Hotfix3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

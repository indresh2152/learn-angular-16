import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterComponent1Component } from './master-component-1.component';

describe('MasterComponent1Component', () => {
  let component: MasterComponent1Component;
  let fixture: ComponentFixture<MasterComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterComponent1Component]
    });
    fixture = TestBed.createComponent(MasterComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterComponent2Component } from './master-component-2.component';

describe('MasterComponent2Component', () => {
  let component: MasterComponent2Component;
  let fixture: ComponentFixture<MasterComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterComponent2Component]
    });
    fixture = TestBed.createComponent(MasterComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

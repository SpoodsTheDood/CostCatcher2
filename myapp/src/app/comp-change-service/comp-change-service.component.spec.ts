import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompChangeServiceComponent } from './comp-change-service.component';

describe('CompChangeServiceComponent', () => {
  let component: CompChangeServiceComponent;
  let fixture: ComponentFixture<CompChangeServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompChangeServiceComponent]
    });
    fixture = TestBed.createComponent(CompChangeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

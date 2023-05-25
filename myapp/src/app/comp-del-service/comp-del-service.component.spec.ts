import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDelServiceComponent } from './comp-del-service.component';

describe('CompDelServiceComponent', () => {
  let component: CompDelServiceComponent;
  let fixture: ComponentFixture<CompDelServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompDelServiceComponent]
    });
    fixture = TestBed.createComponent(CompDelServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

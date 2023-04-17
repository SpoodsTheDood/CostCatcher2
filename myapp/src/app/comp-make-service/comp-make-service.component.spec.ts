import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMakeServiceComponent } from './comp-make-service.component';

describe('CompMakeServiceComponent', () => {
  let component: CompMakeServiceComponent;
  let fixture: ComponentFixture<CompMakeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompMakeServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompMakeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

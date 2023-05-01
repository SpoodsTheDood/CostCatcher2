import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompUserloginComponent } from './comp-userlogin.component';

describe('CompUserloginComponent', () => {
  let component: CompUserloginComponent;
  let fixture: ComponentFixture<CompUserloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompUserloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompUserloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

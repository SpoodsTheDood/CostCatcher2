import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompUpcomingComponent } from './comp-upcoming.component';

describe('CompUpcomingComponent', () => {
  let component: CompUpcomingComponent;
  let fixture: ComponentFixture<CompUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

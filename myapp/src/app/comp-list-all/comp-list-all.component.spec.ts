import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompListAllComponent } from './comp-list-all.component';

describe('CompListAllComponent', () => {
  let component: CompListAllComponent;
  let fixture: ComponentFixture<CompListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompListAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

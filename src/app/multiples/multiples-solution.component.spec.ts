import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplesSolutionComponent } from './multiples-solution.component';

describe('MultiplesSolutionComponent', () => {
  let component: MultiplesSolutionComponent;
  let fixture: ComponentFixture<MultiplesSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiplesSolutionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplesSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

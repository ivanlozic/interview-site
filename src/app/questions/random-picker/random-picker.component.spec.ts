import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPickerComponent } from './random-picker.component';

describe('RandomPickerComponent', () => {
  let component: RandomPickerComponent;
  let fixture: ComponentFixture<RandomPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

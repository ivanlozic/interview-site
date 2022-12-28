import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlQuestionsComponent } from './sql-questions.component';

describe('SqlQuestionsComponent', () => {
  let component: SqlQuestionsComponent;
  let fixture: ComponentFixture<SqlQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

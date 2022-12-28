import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitQuestionsComponent } from './git-questions.component';

describe('GitQuestionsComponent', () => {
  let component: GitQuestionsComponent;
  let fixture: ComponentFixture<GitQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

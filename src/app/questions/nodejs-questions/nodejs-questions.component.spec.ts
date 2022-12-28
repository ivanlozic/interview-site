import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsQuestionsComponent } from './nodejs-questions.component';

describe('NodejsQuestionsComponent', () => {
  let component: NodejsQuestionsComponent;
  let fixture: ComponentFixture<NodejsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodejsQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodejsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

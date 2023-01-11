import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-javascript-questions',
  templateUrl: './javascript-questions.component.html',
  styleUrls: ['./javascript-questions.component.scss'],
})
export class JavascriptQuestionsComponent implements OnInit {
  JavaScriptQuestions: any[] = [];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getJavaScriptQuestions();
  }

  getJavaScriptQuestions() {
    this.service.getJavaScriptQuestions().subscribe({
      next: (questions: []) => {
        this.JavaScriptQuestions = questions;
      },
    });
  }
}

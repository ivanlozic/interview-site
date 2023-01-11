import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-react-questions',
  templateUrl: './react-questions.component.html',
  styleUrls: ['./react-questions.component.scss'],
})
export class ReactQuestionsComponent implements OnInit {
  reactQuestions: any[] = [];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getReactQuestions();
  }

  getReactQuestions() {
    this.service.getReactQuestions().subscribe({
      next: (questions: []) => {
        this.reactQuestions = questions;
      },
    });
  }
}

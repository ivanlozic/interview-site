import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-git-questions',
  templateUrl: './git-questions.component.html',
  styleUrls: ['./git-questions.component.scss'],
})
export class GitQuestionsComponent implements OnInit {
  gitQuestions: any[] = [];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getGitQuestions();
  }

  getGitQuestions() {
    this.service.getGitQuestions().subscribe({
      next: (questions: []) => {
        this.gitQuestions = questions;
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-random-picker',
  templateUrl: './random-picker.component.html',
  styleUrls: ['./random-picker.component.scss'],
})
export class RandomPickerComponent implements OnInit {
  questions: [] = [];

  random: string = '';
  answer: string = '';

  showAnswer: boolean = false;
  answerButton: boolean = false;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions(): void {
    this.service.getAllQuestions().subscribe({
      next: (res: any) => {
        this.questions = res;
        console.log(this.questions);
      },
    });
  }

  randomQuestion() {
    let r: any =
      this.questions[Math.floor(Math.random() * this.questions.length)];
    console.log(r);

    this.random = r.question;
    this.answer = r.answer;
    this.showAnswer = false;
    this.answerButton = true;
  }

  answerShow() {
    this.showAnswer = !this.showAnswer;
  }
}

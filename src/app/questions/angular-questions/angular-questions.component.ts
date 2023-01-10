import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-angular-questions',
  templateUrl: './angular-questions.component.html',
  styleUrls: ['./angular-questions.component.scss']
})
export class AngularQuestionsComponent implements OnInit {
  angularQuestions:any[] = []

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.getAngularQuestions()
  }

  getAngularQuestions(){
    this.service.getAngularQuestions().subscribe({
      next:(questions:[]) => {
        this.angularQuestions = questions
      }
    })
  }
}

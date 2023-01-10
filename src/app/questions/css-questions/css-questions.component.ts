import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-css-questions',
  templateUrl: './css-questions.component.html',
  styleUrls: ['./css-questions.component.scss']
})
export class CssQuestionsComponent implements OnInit {
  CSSQuestions:any[] = []

  constructor(private service:DataService) { }

  ngOnInit(): void {

    this.getCSSQuestions()
  }

  
  getCSSQuestions(){
    this.service.getCSSQuestions().subscribe({
      next:(questions:[]) => {
        this.CSSQuestions = questions
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-html-questions',
  templateUrl: './html-questions.component.html',
  styleUrls: ['./html-questions.component.scss']
})
export class HtmlQuestionsComponent implements OnInit {
  htmlQuestions:any[] = []

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.getHtmlQuestions()
  }

  getHtmlQuestions(){
    this.service.getHtmlQuestions().subscribe({
      next:(questions:[]) => {
        this.htmlQuestions = questions
      }
    })
  }

}

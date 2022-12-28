import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
      
  }

  scrollToTop():void{
    window.scrollTo(0,0)
  }
}

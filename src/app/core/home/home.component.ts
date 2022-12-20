import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  updateCarousel(index: number): void {
    const items = document.querySelectorAll('.slide');
    items.forEach((item) => item.classList.remove('active'));
    items[index].classList.add('active');
    this.counter = index;
  }

  prevButton(): void {
    const items = document.querySelectorAll('.slide');

    let newIndex = this.counter - 1;
    if (newIndex < 0) {
      newIndex = items.length - 1;
    }
    this.updateCarousel(newIndex);
  }

  nextButton(): void {
    const items = document.querySelectorAll('.slide');

    let newIndex = this.counter + 1;

    if (newIndex >= items.length) {
      newIndex = 0;
    }
    this.updateCarousel(newIndex);
  }
}

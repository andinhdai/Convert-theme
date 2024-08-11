import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent  {
  slides = [
    { image: '/assets/images/slide/bg.webp', showContent: true},
    { image: '/assets/images/slide/bg.webp', showContent: false},
    { image: '/assets/images/slide/slide1.webp', showContent: false}
  ];
  banner = [
    { image: '/assets/images/banner/1.webp' },
    { image: '/assets/images/banner/2.webp' },
    { image: '/assets/images/banner/3.webp' }
  ];

  currentIndex = 0;
  currentRating = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  navigateToLink(url: string) {
    window.location.href = url;
  }

  rate(value: number) {
    this.currentRating = value;
  }
}

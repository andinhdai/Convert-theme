import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  slides = [
    { image: '/assets/images/slide/bg.png', showContent: true, link: '#' },
    { image: '/assets/images/slide/bg.png', showContent: false, link: '#' },
    { image: '/assets/images/slide/slide1.webp', showContent: false, link: '#' }
  ];
  banner = [
    { image: '/assets/images/banner/1.jpg' },
    { image: '/assets/images/banner/2.jpg' },
    { image: '/assets/images/banner/3.jpg' }
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

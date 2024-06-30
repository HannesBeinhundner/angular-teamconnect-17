import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-testimonials-section',
    templateUrl: './testimonials-section.component.html',
    styleUrls: ['./testimonials-section.component.scss'],
    standalone: true,
    imports: [MatIcon]
})
export class TestimonialsSectionComponent implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    gsap.from(this.container.nativeElement, { opacity: 0, y: 100, duration: 0.5, ease: 'power1.in' });
  }
}

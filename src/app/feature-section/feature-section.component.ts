import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
    selector: 'app-feature-section',
    templateUrl: './feature-section.component.html',
    styleUrls: ['./feature-section.component.scss'],
    standalone: true
})
export class FeatureSectionComponent implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    gsap.from(this.container.nativeElement, { opacity: 0, y: 100, duration: 0.5, ease: 'power1.in' });
  }
}

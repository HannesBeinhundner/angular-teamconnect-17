import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { RouterLink } from '@angular/router';
import { MatButton, MatAnchor } from '@angular/material/button';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrls: ['./hero-section.component.scss'],
    standalone: true,
    imports: [MatButton, MatAnchor, RouterLink]
})
export class HeroSectionComponent implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    gsap.from(this.container.nativeElement, { opacity: 0, y: 100, duration: 0.5, ease: 'power1.in' });
  }
}

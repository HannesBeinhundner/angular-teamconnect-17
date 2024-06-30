import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-dashboard-section',
    templateUrl: './dashboard-section.component.html',
    styleUrls: ['./dashboard-section.component.scss'],
    standalone: true,
    imports: [MatIcon]
})
export class DashboardSectionComponent implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    gsap.from(this.container.nativeElement, { opacity: 0, y: 100, duration: 0.5, ease: 'power1.in' });
  }
}

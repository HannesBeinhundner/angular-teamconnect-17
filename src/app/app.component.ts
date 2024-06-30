import { Component } from '@angular/core';
import { ThemeRegistryComponent } from './theme-registry/theme-registry.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { DashboardSectionComponent } from './dashboard-section/dashboard-section.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { NumbersSectionComponent } from './numbers-section/numbers-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HeaderComponent, HeroSectionComponent, NumbersSectionComponent, FeatureSectionComponent, DashboardSectionComponent, TestimonialsSectionComponent, FooterComponent, ThemeRegistryComponent]
})
export class AppComponent {
  title = 'team-connect';
}

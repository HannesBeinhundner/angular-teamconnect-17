import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintPrivacyComponent } from './imprint-privacy.component';

describe('ImprintPrivacyComponent', () => {
  let component: ImprintPrivacyComponent;
  let fixture: ComponentFixture<ImprintPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ImprintPrivacyComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ImprintPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

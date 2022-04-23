import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentSectionComponent } from './web-development-section.component';

describe('WebDevelopmentSectionComponent', () => {
  let component: WebDevelopmentSectionComponent;
  let fixture: ComponentFixture<WebDevelopmentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDevelopmentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

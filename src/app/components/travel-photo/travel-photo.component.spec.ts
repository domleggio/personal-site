import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPhotoComponent } from './travel-photo.component';

describe('TravelPhotoComponent', () => {
  let component: TravelPhotoComponent;
  let fixture: ComponentFixture<TravelPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

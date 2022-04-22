import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIDoCardComponent } from './what-i-do-card.component';

describe('WhatIDoCardComponent', () => {
  let component: WhatIDoCardComponent;
  let fixture: ComponentFixture<WhatIDoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIDoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIDoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouressComponent } from './couress.component';

describe('CouressComponent', () => {
  let component: CouressComponent;
  let fixture: ComponentFixture<CouressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouserComponent } from './touser.component';

describe('TouserComponent', () => {
  let component: TouserComponent;
  let fixture: ComponentFixture<TouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

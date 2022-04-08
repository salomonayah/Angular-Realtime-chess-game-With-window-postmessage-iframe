import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineGameHomeComponent } from './online-game-home.component';

describe('OnlineGameHomeComponent', () => {
  let component: OnlineGameHomeComponent;
  let fixture: ComponentFixture<OnlineGameHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineGameHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineGameHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

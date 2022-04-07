import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTwoFrameComponent } from './player-two-frame.component';

describe('PlayerTwoFrameComponent', () => {
  let component: PlayerTwoFrameComponent;
  let fixture: ComponentFixture<PlayerTwoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTwoFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTwoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

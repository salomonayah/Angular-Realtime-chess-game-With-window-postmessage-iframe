import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOneFrameComponent } from './player-one-frame.component';

describe('PlayerOneFrameComponent', () => {
  let component: PlayerOneFrameComponent;
  let fixture: ComponentFixture<PlayerOneFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerOneFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerOneFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

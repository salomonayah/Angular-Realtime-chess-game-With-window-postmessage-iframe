import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineGameSourceFrameComponent } from './online-game-source-frame.component';

describe('OnlineGameSourceFrameComponent', () => {
  let component: OnlineGameSourceFrameComponent;
  let fixture: ComponentFixture<OnlineGameSourceFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineGameSourceFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineGameSourceFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

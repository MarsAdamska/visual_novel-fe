import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpriteComponent } from './sprite';

describe('Sprite', () => {
  let component: SpriteComponent;
  let fixture: ComponentFixture<SpriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpriteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

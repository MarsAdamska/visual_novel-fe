import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogue } from './dialogue';

describe('Dialogue', () => {
  let component: Dialogue;
  let fixture: ComponentFixture<Dialogue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dialogue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialogue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoockieClicker } from './coockie-clicker';

describe('CoockieClicker', () => {
  let component: CoockieClicker;
  let fixture: ComponentFixture<CoockieClicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoockieClicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoockieClicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

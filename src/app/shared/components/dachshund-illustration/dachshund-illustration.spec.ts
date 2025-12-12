import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachshundIllustration } from './dachshund-illustration';

describe('DachshundIllustration', () => {
  let component: DachshundIllustration;
  let fixture: ComponentFixture<DachshundIllustration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DachshundIllustration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DachshundIllustration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

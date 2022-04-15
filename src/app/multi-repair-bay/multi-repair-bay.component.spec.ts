import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRepairBayComponent } from './multi-repair-bay.component';

describe('MultiRepairBayComponent', () => {
  let component: MultiRepairBayComponent;
  let fixture: ComponentFixture<MultiRepairBayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiRepairBayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRepairBayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

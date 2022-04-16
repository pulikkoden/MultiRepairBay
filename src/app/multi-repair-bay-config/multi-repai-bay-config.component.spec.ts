import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRepairBayConfigComponent } from './multi-repai-bay-config.component';

describe('MultiRepairBayConfigComponent', () => {
  let component: MultiRepairBayConfigComponent;
  let fixture: ComponentFixture<MultiRepairBayConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiRepairBayConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRepairBayConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

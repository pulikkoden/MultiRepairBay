import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRepaiBayConfigComponent } from './multi-repai-bay-config.component';

describe('MultiRepaiBayConfigComponent', () => {
  let component: MultiRepaiBayConfigComponent;
  let fixture: ComponentFixture<MultiRepaiBayConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiRepaiBayConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRepaiBayConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

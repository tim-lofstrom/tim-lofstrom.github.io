import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamfallighetComponent } from './samfallighet.component';

describe('SamfallighetComponent', () => {
  let component: SamfallighetComponent;
  let fixture: ComponentFixture<SamfallighetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamfallighetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamfallighetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

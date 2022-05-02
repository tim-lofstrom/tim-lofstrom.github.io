import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KyrkanComponent } from './kyrkan.component';

describe('KyrkanComponent', () => {
  let component: KyrkanComponent;
  let fixture: ComponentFixture<KyrkanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KyrkanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KyrkanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

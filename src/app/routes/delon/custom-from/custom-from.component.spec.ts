import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFromComponent } from './CustomFromComponent';

describe('CustomFromComponent', () => {
  let component: CustomFromComponent;
  let fixture: ComponentFixture<CustomFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomFromComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateReadingComponent } from './add-or-update-reading.component';

describe('AddOrUpdateReadingComponent', () => {
  let component: AddOrUpdateReadingComponent;
  let fixture: ComponentFixture<AddOrUpdateReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

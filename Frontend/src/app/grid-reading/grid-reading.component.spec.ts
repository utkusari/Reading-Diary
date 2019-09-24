import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridReadingComponent } from './grid-reading.component';

describe('GridReadingComponent', () => {
  let component: GridReadingComponent;
  let fixture: ComponentFixture<GridReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

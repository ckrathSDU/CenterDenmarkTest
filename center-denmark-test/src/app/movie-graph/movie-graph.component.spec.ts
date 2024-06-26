import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGraphComponent } from './movie-graph.component';

describe('MovieGraphComponent', () => {
  let component: MovieGraphComponent;
  let fixture: ComponentFixture<MovieGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieGraphComponent]
    });
    fixture = TestBed.createComponent(MovieGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

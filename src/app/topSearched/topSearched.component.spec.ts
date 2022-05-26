import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSearchedComponent } from './topSearched.component';

describe('DashboardComponent', () => {
  let component: TopSearchedComponent;
  let fixture: ComponentFixture<TopSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSearchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

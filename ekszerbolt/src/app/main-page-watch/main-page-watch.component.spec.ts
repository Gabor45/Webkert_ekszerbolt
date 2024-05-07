import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageWatchComponent } from './main-page-watch.component';

describe('MainPageWatchComponent', () => {
  let component: MainPageWatchComponent;
  let fixture: ComponentFixture<MainPageWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageWatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageNecklaceComponent } from './main-page-necklace.component';

describe('MainPageNecklaceComponent', () => {
  let component: MainPageNecklaceComponent;
  let fixture: ComponentFixture<MainPageNecklaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageNecklaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageNecklaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

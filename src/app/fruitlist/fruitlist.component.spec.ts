import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitlistComponent } from './fruitlist.component';

describe('FruitlistComponent', () => {
  let component: FruitlistComponent;
  let fixture: ComponentFixture<FruitlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

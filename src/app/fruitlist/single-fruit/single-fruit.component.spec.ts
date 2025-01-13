import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFruitComponent } from './single-fruit.component';

describe('SingleFruitComponent', () => {
  let component: SingleFruitComponent;
  let fixture: ComponentFixture<SingleFruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleFruitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

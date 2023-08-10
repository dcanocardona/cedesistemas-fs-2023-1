import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothedetailComponent } from './clothedetail.component';

describe('ClothedetailComponent', () => {
  let component: ClothedetailComponent;
  let fixture: ComponentFixture<ClothedetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothedetailComponent]
    });
    fixture = TestBed.createComponent(ClothedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

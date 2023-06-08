import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdAddProductComponent } from './curd-add-product.component';

describe('CurdAddProductComponent', () => {
  let component: CurdAddProductComponent;
  let fixture: ComponentFixture<CurdAddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurdAddProductComponent]
    });
    fixture = TestBed.createComponent(CurdAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

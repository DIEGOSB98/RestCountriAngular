import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesPageViewComponent } from './paises-page-view.component';

describe('PaisesPageViewComponent', () => {
  let component: PaisesPageViewComponent;
  let fixture: ComponentFixture<PaisesPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

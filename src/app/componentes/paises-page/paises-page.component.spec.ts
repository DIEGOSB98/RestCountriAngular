import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesPageComponent } from './paises-page.component';

describe('PaisesPageComponent', () => {
  let component: PaisesPageComponent;
  let fixture: ComponentFixture<PaisesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

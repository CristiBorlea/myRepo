import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThdataComponent } from './thdata.component';

describe('ThdataComponent', () => {
  let component: ThdataComponent;
  let fixture: ComponentFixture<ThdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IuploaderComponent } from './iuploader.component';

describe('IuploaderComponent', () => {
  let component: IuploaderComponent;
  let fixture: ComponentFixture<IuploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IuploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMenuItemComponent } from './todo-menu-item.component';

describe('TodoMenuItemComponent', () => {
  let component: TodoMenuItemComponent;
  let fixture: ComponentFixture<TodoMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

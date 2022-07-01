import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditorContainerComponent } from './todo-editor-container.component';

describe('TodoEditorContainerComponent', () => {
  let component: TodoEditorContainerComponent;
  let fixture: ComponentFixture<TodoEditorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoEditorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

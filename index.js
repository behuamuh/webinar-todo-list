const todos = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars',
];

const todosListElement = document.querySelector('.todos__list');
const todosFormElement = document.querySelector('.todos__form');
const todosInputElement = todosFormElement.querySelector('.todos__input');
const todoTemplateElement = document.querySelector('.todo-template');

function addTodo(text) {
  const todo = todoTemplateElement.content.cloneNode(true);

  todo.querySelector('.todo__text').textContent = text;
  todo.querySelector('.todo__btn_type_delete').addEventListener('click', deleteTodo);

  todosListElement.prepend(todo);
}

function deleteTodo(e) {
  const todo = e.target.closest('.todo');

  todo.remove();
}

todos.forEach(text => {
  addTodo(text);
});

todosFormElement.addEventListener('submit', e => {
  e.preventDefault();

  const text = todosInputElement.value;
  todosInputElement.value = '';
  addTodo(text);
})
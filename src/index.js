import { clearAllCompleted, checkTodo } from '../modules/checkAndClear.js';
import editTodo from '../modules/editTodo.js';
import './style.css';

const todoList = document.querySelector('.wrapper');
const inputTodo = document.querySelector('#todo-name');
let todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

const getValueFromInput = () => {
  const todoValue = inputTodo.value;
  inputTodo.value = '';
  return todoValue;
};

const createTodo = (todoValue) => {
  const todo = document.createElement('li');
  todo.classList.add('item');
  todo.innerHTML = `
  <div>
  <input id=${todoValue.index} type="checkbox" ${todoValue.completed ? 'checked' : ''}>
  <input type="text" id="todo-${todoValue.index}" class="todo-desc" value="${todoValue.description}">
</div>
<svg class="w-6 h-6 ${todoValue.description}" id=${todoValue.index} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
    `;
  todoList.appendChild(todo);
  // Reload the page
};

const createTodoFromTheLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  if (todos) {
    todosArray = [];
    todos.forEach((todo) => {
      todosArray.push({
        index: todo.index,
        description: todo.description,
        completed: todo.completed,
      });
      createTodo(todo);
    });
  }
};

const saveTodoToLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todosArray));
};

// Add todo when enter key is pressed
inputTodo.addEventListener('keypress', (e) => {
  // Check if input is empty by removing the spaces
  if (e.key === 'Enter' && inputTodo.value.trim() !== '') {
    const todoValue = getValueFromInput();
    todosArray.push({
      index: todosArray.length + 1,
      description: todoValue,
      completed: false,
    });
    saveTodoToLocalStorage();
    createTodo(todosArray[todosArray.length - 1]);
    deleteTodo();
  }
} );


const deleteTodo = () => {
  // Delete todo when the svg is clicked
  document.querySelectorAll('.w-6').forEach((item) => {
    if (item) {
      item.addEventListener('click', (e) => {
        let todos = JSON.parse(localStorage.getItem('todos'));
        // If there is only one todo item
        if (todos.length === 1) {
          todos = [];
          localStorage.setItem('todos', JSON.stringify(todos));
          window.location.reload();
          return;
        }
        // Find the parent of the svg
        const parent = e.target.parentElement.parentElement;
        // Find the index of the todo
        const index = e.target.parentElement.id;
        todos = todos.filter((todo) => todo.index !== parseInt(index, 10));
        todosArray = todos;
        saveTodoToLocalStorage();
        parent.remove();
        // Iterate through the todos and update the index
        todos.forEach((todo, i) => {
          todo.index = i + 1;
        });
        todosArray = todos;
        localStorage.setItem('todos', JSON.stringify(todos));
        // Reload the page
        window.location.reload();
      });
    }
  });
};

window.onload = () => {
  deleteTodo();
};

document.querySelector('.clear-btn').addEventListener('click', () => clearAllCompleted(todosArray));

// Get todos from local storage on page load
document.addEventListener( 'DOMContentLoaded', createTodoFromTheLocalStorage );

// Reload the page whenever the innerHTML of the todo list changes
todoList.addEventListener('DOMSubtreeModified', () => {
  editTodo(todosArray);
  checkTodo(todosArray);
});

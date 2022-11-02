const editTodo = (todosArray) => {
  document.querySelectorAll('.todo-desc').forEach((item) => {
    if (item) {
      item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && item.value.trim() !== '') {
          todosArray = JSON.parse(localStorage.getItem('todos'));
          // Find the element with the same index
          const todo = todosArray.find((todo) => todo.index === parseInt(item.id.replace('todo-', ''), 10));
          // Add the new value to the todo
          todo.description = item.value;
          // Save the new value to the local storage
          localStorage.setItem('todos', JSON.stringify(todosArray));
          // Reload the page
          window.location.reload();
        }
      });
    }
  });
};

export default editTodo;
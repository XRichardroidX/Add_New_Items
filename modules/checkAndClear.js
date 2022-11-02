const clearAllCompleted = (todosArray) => {
  const checkedTodos = document.querySelectorAll('input[type="checkbox"]:checked');
  // If there are no checked todos
  if (checkedTodos.length === 0) {
    // Do nothing
  } else {
    // Get the todos from the local storage
    let todos = JSON.parse(localStorage.getItem('todos'));
    // Filter out the todos that are not checked
    todos = todos.filter((todo) => todo.completed === false);
    // Save the new todos to the local storage
    todosArray = todos;
    localStorage.setItem('todos', JSON.stringify(todosArray));
    // Reload the page
    window.location.reload();
  }
};

const checkTodo = (todosArray) => {
  document.querySelectorAll('input[type="checkbox"]').forEach((item) => {
    item.addEventListener('change', (e) => {
      // Only on the index being checked
      if (e.target.checked) {
        todosArray = JSON.parse(localStorage.getItem('todos'));
        // Find the element with the same index
        const todo = todosArray.find((todo) => todo.index === parseInt(e.target.id, 10));
        // Add the new value to the todo
        todo.completed = true;
        // Save the new value to the local storage
        localStorage.setItem('todos', JSON.stringify(todosArray));
        // // Reload the page
        window.location.reload();
      } else {
        todosArray = JSON.parse(localStorage.getItem('todos'));
        // Find the element with the same index
        const todo = todosArray.find((todo) => todo.index === parseInt(e.target.id, 10));
        // Add the new value to the todo
        todo.completed = false;
        // Save the new value to the local storage
        localStorage.setItem('todos', JSON.stringify(todosArray));
        // // Reload the page
        window.location.reload();
      }
    });
  });
};

export { clearAllCompleted, checkTodo };
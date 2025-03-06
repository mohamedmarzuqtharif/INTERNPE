document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const doneList = document.getElementById('done-list');
  
    function addTask() {
      const taskText = newTaskInput.value.trim();
      if (!taskText) return;
  
    
      const li = document.createElement('li');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'task-checkbox';
  
      
      const span = document.createElement('span');
      span.className = 'task-text';
      span.textContent = taskText;
  
     
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.parentElement.removeChild(li);
      });
  
     
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          doneList.appendChild(li);
        } else {
          todoList.appendChild(li);
        }
      });
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(removeBtn);
  
      
      todoList.appendChild(li);
      newTaskInput.value = '';
    }
  
    
    addBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });
  });
  
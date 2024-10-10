'use strict';

(function () {
    const form = document.getElementById('todoForm');
    const todoList = document.getElementById('todoItems');

    const handleDeleteTask = (taskElement) => {
        taskElement.remove(); // Видаляємо конкретний елемент
    };

    const generateTodoElement = (title, description) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('col-4');

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskWrapper');

        const taskTitle = document.createElement('h5');
        taskTitle.textContent = title;
        taskTitle.classList.add('taskHeading');

        const taskBody = document.createElement('p');
        taskBody.textContent = description;
        taskBody.classList.add('taskDescription');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'mt-2');

        deleteButton.addEventListener('click', () => handleDeleteTask(itemDiv));

        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskBody);
        taskDiv.appendChild(deleteButton);
        itemDiv.appendChild(taskDiv);

        return itemDiv;
    };

    const clearFormFields = () => {
        form.reset();
    };

    const isFormValid = () => {
        const title = form.querySelector('#title').value.trim();
        const description = form.querySelector('#description').value.trim();
        return title !== '' && description !== '';
    };

    const toggleSubmitButton = () => {
        const submitButton = form.querySelector('button[type=submit]');
        submitButton.disabled = !isFormValid();
    };

    const handleInputChange = () => {
        toggleSubmitButton();
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            const title = form.querySelector('#title').value.trim();
            const description = form.querySelector('#description').value.trim();

            const todoItem = generateTodoElement(title, description);
            todoList.prepend(todoItem);

            clearFormFields();
            toggleSubmitButton();
        }
    };

    form.addEventListener('input', handleInputChange);
    form.addEventListener('submit', handleFormSubmit);
})();

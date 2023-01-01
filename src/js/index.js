let todoInput; //miejesce gdzie użytkowanik wpisuje treść zadania
let errorInfo; //informacje o braku zadań/konieczność wpsiania do listy
let addBtn; //przycisk dodaje nowe elemnty do listy;
let ulList; // lista zadań tagi ul
let newTodo;

let popup;
let popupInfo; 
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
    
    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupCloseBtn = document.querySelector('.cancel');
    popupAddBtn = document.querySelector('.accept');
}



const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
    todoInput.addEventListener('keyup', onEnterClick); 
}



const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value;
        createDivTools()
        ulList.append(newTodo);
        todoInput.value = '';
        errorInfo.textContent = '';
    } else {
        errorInfo.textContent = 'Wpisz treść zadania';
    }
}

const createDivTools = () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('tools');
    newTodo.append(newDiv);

    const completeBtn = document.createElement('button');
    newDiv.appendChild(completeBtn);
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button');
    newDiv.appendChild(editBtn);
    editBtn.classList.add('edit');
    editBtn.textContent = 'EDIT';

    const deleteBtn = document.createElement('button');
    newDiv.appendChild(deleteBtn);
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    //newDiv.append(completeBtn, editBtn, deleteBtn);

}


const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('complete');
        e.target.classList.toggle('complete');
    } else if (e.target.matches('.edit')) {
        editTodo(e);
    } else if (e.target.matches('.delete')) {
        deleteTodo(e);
    }
}

const editTodo = e => {
    todoToEdit = e.target.closest('li');
    popupInput.value = todoToEdit.firstChild.textContent;
    popup.style.display = 'flex';
}

const closePopup = e => {
    popup.style.display = 'none';
    popupInfo.textContent = '';
}


const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value;
        popup.style.display = 'none';
        popupInfo.textContent = '';
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść';
    }
}

const deleteTodo = (e) => {
    e.target.closest('li').remove()

    const allTodos = ulList.querySelectorAll('li');

    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście';
    }
}

const onEnterClick = (e) => {
    if (e.key === "Enter") {
        addNewTodo();
    }
}
document.addEventListener('DOMContentLoaded', main);
let todoInput; //miejesce gdzie użytkowanik wpisuje treść zadania
let errorInfo; //informacje o braku zadań/konieczność wpsiania do listy
let addBtn; //przycisk dodaje nowe elemnty do listy;
let ulList; // lista zadań tagi ul


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
}



const prepareDOMEvents = () => {
    addBtn.addEventListener('clisk', newTask);
}



const newTask = () => {
    if (todoInput.value !== '') {
        console.log('ok')
    } else {
        errorInfo.textContent = 'Wpisz treść zadania';
    }
}


document.addEventListener('DOMContentLoaded', main);
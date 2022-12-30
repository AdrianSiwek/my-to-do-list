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
    
}

document.addEventListener('DOMContentLoaded', main);
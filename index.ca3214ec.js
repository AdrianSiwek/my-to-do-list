var todoInput,errorInfo,addBtn,ulList,newTodo,main=function(){prepareDOMElements(),prepareDOMEvents()},prepareDOMElements=function(){todoInput=document.querySelector(".todo-input"),errorInfo=document.querySelector(".error-info"),addBtn=document.querySelector(".btn-add"),ulList=document.querySelector(".todolist ul")},prepareDOMEvents=function(){addBtn.addEventListener("click",addNewTodo),ulList.addEventListener("click",checkClick)},addNewTodo=function(){""!==todoInput.value?((newTodo=document.createElement("li")).textContent=todoInput.value,createDivTools(),ulList.append(newTodo),todoInput.value="",errorInfo.textContent=""):errorInfo.textContent="Wpisz treść zadania"},createDivTools=function(){var e=document.createElement("div");e.classList.add("tools"),newTodo.append(e);var t=document.createElement("button");e.appendChild(t),t.classList.add("complete"),t.innerHTML='<i class="fas fa-check"></i>';var o=document.createElement("button");e.appendChild(o),o.classList.add("edit"),o.textContent="EDIT";var n=document.createElement("button");e.appendChild(n),n.classList.add("delete"),n.innerHTML='<i class="fas fa-times"></i>'},checkClick=function(e){e.target.matches(".complete")?(e.target.closest("li").classList.toggle("complete"),e.target.classList.toggle("complete")):e.target.matches(".edit")?(e.target.closest("li").classList.toggle("edit"),e.target.classList.toggle("edit")):e.target.matches(".delete")&&(e.target.closest("li").classList.toggle("delete"),e.target.classList.toggle("delete"))};document.addEventListener("DOMContentLoaded",main);
//# sourceMappingURL=index.ca3214ec.js.map

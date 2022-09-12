'use strict'
// tạo class Todotask
class TodoTask {
    constructor(task, owner, isDone) {
        this.task = task;
        this.owner = owner;
        this.isDone = isDone;
    }
}
// gọi thông tin user hiện tại
getCurrentUser()
// tạo mảng todo
let todoArr = [];

let inputTask = document.querySelector('#input-task');
let todos = document.querySelector('#todo-list');

// sự kiện click nút add todo
const submitBtn = document.getElementById('btn-add');
submitBtn.addEventListener('click', function (e) {

    // biến data chứa thông tin todo nhập vào
    const data = {
        task:inputTask.value.trim(),
        owner: userCurrent[0][0].userName,
        isDone: false
    }
    inputTask.value = "";
    const todo = new TodoTask (data.task, data.owner, data.isDone);
    // thêm todo vào mảng todo
    todoArr.push(todo);
    // lưu thông tin lên localStorage
    saveTodoList();
    // gọi hàm hiển thị thông tin todo
    addTodo(todoArr);
})

// hàm hiển thị thông tin todo
function addTodo (todo) {
    getCurrentUser()
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';

        for(let i = 0; i < todo.length; i++) {
            // chỉ hiện các todo trùng với thông tin user đăng nhập hiện tại
            if (todoArr[i].owner == userCurrent[0][0].userName) {
            let li = document.createElement('li')
            li.innerHTML =`
                                ${todo[i].task}
                                <span class="close">×</span>
            `
            if (todo[i].isDone){
                li.setAttribute('class', 'checked')
            }
            // sự kiện đánh dâu todo đã hoàn thành hay chưa hoàn thành
            li.addEventListener("click", function(){
                if (this.classList.contains('checked')){
                    todo[i].isDone = false;
                    saveTodoList();
                } else {
                    todo[i].isDone = true;
                    saveTodoList();
                }
                this.classList.toggle('checked');
            })
            // sự kiện click xóa 1 todo
            li.querySelector(".close").addEventListener('click', function(){
                deleteTodo(i);
            })
            todos.appendChild(li)
        }
    }
}

// hàm xoa thông tin 1 todo
function deleteTodo(x){
    todoArr.splice(x, 1);
    addTodo(todoArr);
    saveTodoList();
}

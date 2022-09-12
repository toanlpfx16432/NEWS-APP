'use strict'
// Lưu thông tin user lên Local Storage
let saveToStorage = function () {
    localStorage.setItem('userArr', JSON.stringify(userArr));
}
// Lấy dữ liêu Local Storage hiển thị thông tin lên web  
const getFormStorage = function () {
    if (localStorage.getItem('userArr')) {
        userArr = JSON.parse(localStorage.getItem('userArr'));
    } else {
        userArr = [];
    }
}

// hàm lưu thông tin user hiện tại lên localStorage
let saveCurrentUser = function () {
    localStorage.setItem('userCurrent', JSON.stringify(userCurrent));
}

// hàm lấy thông tin
const getCurrentUser = function () {
    if (localStorage.getItem('userCurrent')) {
        userCurrent = JSON.parse(localStorage.getItem('userCurrent'));
    } else {
        userCurrent = [];
    }
}

// Hàm lưu thông tin todo lên Local Storage
let saveTodoList = function () {
    localStorage.setItem('todoArr', JSON.stringify(todoArr));
}
// Hàm lấy dữ liêu Local Storage hiển thị thông tin lên web  
const getTodoList = function () {
    if (localStorage.getItem('todoArr')) {
        todoArr = JSON.parse(localStorage.getItem('todoArr'));
        addTodo(todoArr);
    } else {
        todoArr = [];
    }
}


let saveSetting = function () {
    localStorage.setItem('setting', JSON.stringify(setting));
}

let getSetting = function () {
    if (localStorage.getItem('setting')) {
        setting = JSON.parse(localStorage.getItem('setting'));
    } else {
        setting = [];
    }
}
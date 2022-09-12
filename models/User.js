'use strict'

// tạo mảng chứa các user
let userArr = [];
// tạo mảng chứa user hiện tại đang đăng nhập
let userCurrent = [];

// Class thông tin người dùng
class User {
    constructor(firstName, lastName, userName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
    }
}

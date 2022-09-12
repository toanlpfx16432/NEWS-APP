'use strict'


// sự kiện click button submit
const submitBtn = document.getElementById('btn-submit');
submitBtn.addEventListener('click', function (e) {
    const firstNameInput = document.getElementById('input-firstname').value;
    const lastNameInput = document.getElementById('input-lastname').value;
    const userInput = document.getElementById('input-username').value;
    const passwordInput = document.getElementById('input-password').value;
    const confirmpassword = document.getElementById('input-password-confirm').value;
    const data = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        userName: userInput,
        password: passwordInput,
    }

    // validate thông tin nhập vào
    const findUser = userArr.every((user) => user.userName !== data.userName);
    if((firstNameInput).trim() === '' || lastNameInput.trim() === '' || userInput.trim() === '' || passwordInput === '' || confirmpassword === '') {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    } else if (!findUser) {
        alert('Tên User đã có người sử dụng vui lòng nhập tên khác!');
        return;
    } else if (passwordInput.length < 8) {
        alert('Password phải nhiều hơn 8 ký tự!')
        return;
    } else if (confirmpassword !== passwordInput) {
        alert('Confirm Password phải giống với Password!')
        return;
    }
    // tạo biến chứa thông tin mới nhập
    const nUser = new User(firstNameInput, lastNameInput, userInput, passwordInput);
    // thêm biến vào mảng thông tin người dùng
    userArr.push(nUser);
    // lưu lên localStorage
    saveToStorage();
    // đăng ký thành công chuyển về trang Login
    window.location="login.html";
});

'use strict'

// sự kiện click button login
const submitBtn = document.getElementById('btn-submit');
submitBtn.addEventListener('click', function (e) {
    const userInput = document.getElementById('input-username').value;
    const passwordInput = document.getElementById('input-password').value;
    // gọi thông tin mảng user trên localStorage để so sánh
    getFormStorage();

    // validate thông tin input nhập vào
    if (userInput === '' || passwordInput === ''){
        alert('Vui long nhap day du thong tin');
        return
    }

    // so sánh input nhập vào có trong mảng user hay không
    const finduser = userArr.filter((user) => userInput == user.userName && passwordInput == user.password);
    if(finduser != '') {
        alert('Đăng nhập thành công!');
    } else {
        alert('Tài khoản hoặc mặt khẩu không đúng!')
        return;
    }
    // đăng nhập thành công lưu thông tin người dùng hiện tại vào mảng
    userCurrent.push(finduser);
    // lưu thông tin người dùng hiện tại lên localStorage
    saveCurrentUser();
    // chuyển người dùng về trang chủ
    window.location.href="../index.html";
});
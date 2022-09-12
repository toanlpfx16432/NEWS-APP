'use strict'

// gọi thông tin user hiện đang đăng nhập
getCurrentUser();

if (userCurrent.length == 1) {
    // nếu thông tin người vừa đăng nhập ẩn modal login
    document.getElementById('welcome-message').innerText = `Welcome ${userCurrent[0][0].firstName}`
    document.getElementById('login-modal').style.display='none';
} else {
    // nếu hiện chưa có thông tin đăng nhập ẩn modal logout
    document.getElementById('main-content').style.display='none';
}

// sự kiện click nút button logout
const LogoutBtn = document.getElementById('btn-logout');
LogoutBtn.addEventListener('click', function (e) {
    // xóa thông tin người dùng hiện tại
    userCurrent.splice(0, 1);
    // lưu lại trên localStorage
    saveCurrentUser();
    // chuyển trang login 
    window.location.href="./pages/login.html";
});
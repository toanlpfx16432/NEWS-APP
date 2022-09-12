'use strict'
let setting;
// sự kiện click submit trang setting
const submitBtn = document.getElementById('btn-submit');
submitBtn.addEventListener('click', function(){
    setting = [];
    const pagesizeInput = document.getElementById('input-page-size');
    const categoryInput = document.getElementById('input-category');
    const data = {
        pagesize: pagesizeInput.value,
        category: categoryInput.value
    }

    // Validate 
    if (data.pagesize === ''){
        alert('Vui lòng nhập thông tin số trang hiển thị!');
        return
    } else {
        alert('Đã lưu thành công!')
    }
    setting.push(data); // thêm thông tin vào setting
    saveSetting();// lưu trên localStorage
})
'use strict';

let setting;
let num = 1;
getSetting();
const searchInput = document.getElementById('input-query');

// sự kiện click button submit
const submitBtn = document.getElementById('btn-submit');
submitBtn.addEventListener('click', function (e) {
    if (searchInput.value.trim() === '') {
        alert('Vui lòng nhập từ khóa cần tìm kiếm!!')
        return;
    }
    // gọi hàm hiển thị tin tức
    getPagePosts(num , setting[0].pagesize, searchInput.value);
})

const getPagePosts = function (page, pagesize, q) {
fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${q}&pagesize=${pagesize}&page=${page}&apiKey=6d635745a2754b13a1d45434c60f7ba6`)
    .then((response) => response.json())
    .then(function (posts) {
        console.log(posts)
        var htmls = posts.articles.map(function(post) {
            return `<div style="width: 1000px ; height: 300px; border: 2px solid rgb(209, 188, 188); padding:10px; border-radius:5px ; margin: 10px">
            <img src = "${post.urlToImage}" alt = "${post.name}" style="width:400px; height:100%; float: left; margin-right: 10px">
            <a href = "${post.url}" target = "_blank"><h5>${post.title}</h5></a>
            <p>${post.content}</p>
            <button type="button" onclick="location.href='${post.url}';" class="btn btn-primary">View</button>   
            </div>`
        });
        let html = htmls.join('');
        document.getElementById('news-container') .innerHTML = html;
        if (Number(num) === 1) {
            document.querySelector('#btn-prev').style.display = "none";
        } 
        let totalResults = Math.ceil(posts.totalResults / setting[0].pagesize);
        if (Number(num) === (totalResults)) {
            document.querySelector('#btn-next').style.display = "none";
        }
        
    })
};
// sự kiện click nut prev
const nextBtn = document.getElementById('btn-next');
nextBtn.addEventListener('click', function (e) {
    getPagePosts(num + 1, setting[0].pagesize, searchInput.value);
    num ++;
    document.querySelector('#page-num').textContent = num;
    document.querySelector('#btn-prev').style.display = "block";
});
// sự kiện click nút next
const prevBtn = document.getElementById('btn-prev');
prevBtn.addEventListener('click', function (e) {
    getPagePosts(num - 1, setting[0].pagesize, searchInput.value);
    num --;
    document.querySelector('#page-num').textContent = num;
    if (Number(num) === 1) {
        document.querySelector('#btn-prev').style.display = "none";
    }
});
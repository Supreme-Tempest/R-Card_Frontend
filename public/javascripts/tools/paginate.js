let prev = document.getElementById("prevPage");
let next = document.getElementById("nextPage");
let center = document.getElementById("page");
let last = document.getElementById("endPage");
let first = document.getElementById("startPage");

var nextpage = (event) => {
    page = {
        page: next.textContent,
        size: 5,
    };
    onload(page);
}

var prevpage = (event) => {
    page = {
        page: prev.textContent,
        size: 5,
    };
    onload(page);
}

var centerpage = (event) => {
    page = {
        page: center.textContent,
        size: 5,
    };
    onload(page);
}
var firstpagination = (event) => {
    page = {
        page: 1,
        size: 5,
    };
    onload(page);
}
var lastpagination = (event) => {
    page = {
        page: lastpage,
        size: 5,
    };
    onload(page);
}

function paginateAux(datas){
    prev.style.display = 'block'
    next.style.display = 'block'
    lastpage = datas.pages
    datas.preview != null ? prev.innerText = datas.preview : prev.style.display = 'none';
    center.innerText = datas.current;
    datas.next != null ? next.innerText = datas.next : next.style.display = 'none';
}

center.addEventListener('click', centerpage);
next.addEventListener('click', nextpage);
prev.addEventListener('click', prevpage);
first.addEventListener('click', firstpagination);
last.addEventListener('click', lastpagination);
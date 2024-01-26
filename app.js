const body=document.querySelector('body');
const container = document.querySelector('#container');
const toggle = document.getElementById('toggle');
const h4= document.querySelector('h4');
const select = document.querySelector('#menuList');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    container.classList.toggle('active');
    h4.classList.toggle('active');
    select.classList.toggle('active');   
}
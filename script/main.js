let btn = document.querySelector('.btn');
let cat = document.querySelector('.cat');

btn.addEventListener('click', (ev) => {
    cat.classList.toggle('cat-up');
   
})
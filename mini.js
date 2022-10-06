let btn = document.querySelector('button');
let div1 = document.querySelector('div1');

btn.addEventListener('click',() =>{
    if(div1.style.display === 'none'){
        div1.style.display = 'block';

    }else {
        div1.style.display = 'none';
    }
})


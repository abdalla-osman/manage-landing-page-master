let navBtn=document.querySelector('.btn-bar img');
let navbar=document.querySelector('nav')
let overlay=document.querySelector('.overlay');
navBtn.addEventListener('click',()=>{
    navbar.classList.toggle('active')
    overlay.classList.toggle('overlay-block')
    if(navbar.className.includes('active')){
        navBtn.src='../images/icon-close.svg'       
    }
    else{
        console.log(false);
        navBtn.src='../images/icon-hamburger.svg' 
    }
});
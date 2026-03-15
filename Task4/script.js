let box = document.querySelectorAll('.box');
window.addEventListener('scroll', () => {
    box.forEach(box => {
        if(box.getBoundingClientRect().top < window.innerHeight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
});

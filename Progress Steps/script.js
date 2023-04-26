// Getting all the required Id's and classes;

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () =>{
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () =>{
    currentActive--;
    if(currentActive < 1)
        currentActive = 1;
    update();
});

function update(){
    circles.forEach((circle, index) =>{
        if(index < currentActive)
            circle.classList.add('active');
        else {
            circle.classList.remove('active');
        }
    });

    // Getting all the actives
    let actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length-1)/(circles.length-1) * 100 + '%';
    
    // Disabling part
    if(currentActive == 1)
        prev.disabled = true;
    else if(currentActive == circles.length)
        next.disabled = true;
    else{
        prev.disabled = false;
        next.diabled = false;
    }
}
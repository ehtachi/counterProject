let count = 0;
const val = document.querySelector("#value");
const reset = document.querySelector('.reset');
const up = document.querySelector('.increase');
const down = document.querySelector('.decrease');
const btn = document.querySelectorAll('.btn');

up.addEventListener('click', () => {
    count = count + 1;
    val.textContent = count; 
    col(count);   
});

down.addEventListener('click', () => {
    count = count - 1;
    val.textContent = count;
    col(count);   
});

reset.addEventListener('click', () => {
    count = 0;
    val.textContent = count;
    col(count);   
});

function col(count){
    if(count < 0){
        val.style.color = "red"; 
    } else if(count > 0){
        val.style.color = "green";
    } else {
        val.style.color = "grey";
    }
};




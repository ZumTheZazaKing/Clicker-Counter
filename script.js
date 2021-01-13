let highestScore = document.getElementById('best');

let count = document.getElementById('count');

let counter = 0;

let bestScore = localStorage.getItem('bestScore');

highestScore.innerHTML = bestScore;

function addCount(){

    counter++;

    count.innerHTML = counter;

    if(counter > bestScore){

        bestScore = counter;

        highestScore.innerHTML = bestScore;

        localStorage.setItem('bestScore', highestScore.innerHTML);

    }

}
// Select the button element with class 'btn-game'
let btn = document.querySelector('.btn-game');

// Add event listener to the button
btn.addEventListener('click', function() {
    // Redirect the user to thomas/project1/index.html
    window.location.href = '../thomas/project1/index.html';
});

let btn2 = document.querySelector('.btn2');


btn2.addEventListener('click', function() {
    
    window.location.href = '../thomas/project2/index.html';
});

let btn3 = document.querySelector('.btn3');


btn3.addEventListener('click', function() {
    
    window.location.href = '../thomas/project3/index.html';
});

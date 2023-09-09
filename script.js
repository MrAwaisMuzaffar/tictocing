window.onload = function() {
    var grids = document.getElementsByClassName('grid');


// Converting the HTML Collection to an array.
var gridArray = Array.from(grids);

// so player1 =1 and player2 =0
var turn = randomBinary = Math.round(Math.random());

    gridArray.forEach(function(grid){
        grid.addEventListener('click', function(event){
            const clickedDiv = event.target;
            if(turn ==1){
            clickedDiv.innerHTML ='X';
            turn =0;    
        }
            else{
            clickedDiv.innerHTML ='O'
            turn=1;    
        }
        });
    });

};
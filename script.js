window.onload = function() {
    var grids = document.getElementsByClassName('grid');
    const cover = document.getElementById('cover');
    const grid1 = document.getElementById('grid1');
    const grid2 = document.getElementById('grid2');
    const grid3 = document.getElementById('grid3');
    const grid4 = document.getElementById('grid4');
    const grid5 = document.getElementById('grid5');
    const grid6 = document.getElementById('grid6');
    const grid7 = document.getElementById('grid7');
    const grid8 = document.getElementById('grid8');
    const grid9 = document.getElementById('grid9');








// Converting the HTML Collection to an array.
var gridArray = Array.from(grids);

// so player1 =1 and player2 =0
var turn = randomBinary = Math.round(Math.random());

    gridArray.forEach(function(grid){
        grid.addEventListener('click', function(event){
            
      



            
            //defines whose turn it is.
            const clickedDiv = event.target;
             if((turn ==1 && clickedDiv.textContent !="X")&& clickedDiv.textContent !="O"){
            clickedDiv.innerHTML ='X';
            turn =0;    
            }
            else if((turn ==0 && clickedDiv.textContent !="X")&& clickedDiv.textContent !="O"){
            clickedDiv.innerHTML ='O'
            turn=1;    
            }
        
        // Here is player 1
         if((grid1.textContent=='X' && grid2.textContent=='X') &&grid3.textContent == 'X'){
         alert("Player 1 won");
         }
         if((grid1.textContent=='X' && grid4.textContent=='X') &&grid7.textContent == 'X'){
            alert("Player 1 won");
         }
         if((grid1.textContent=='X' && grid5.textContent=='X') &&grid9.textContent == 'X'){
            alert("Player 1 won");
         }
         if((grid7.textContent == 'X' && grid8.textContent =='X') && grid9.textContent == 'X'){
            alert("Player 1 won.")
         }
         if((grid4.textContent == 'X' && grid5.textContent =='X') && grid6.textContent == 'X'){
            alert("Player 1 won.")
         }
         if((grid3.textContent == 'X' && grid6.textContent =='X') && grid9.textContent == 'X'){
            alert("Player 1 won.")
         }
         
     if((grid2.textContent == 'X' && grid5.textContent =='X') && grid8.textContent == 'X'){
        alert("Player 1 won.")
     }
         


  // Here is player 2
    if((grid1.textContent=='O' && grid2.textContent=='O') &&grid3.textContent == 'O'){
    alert("Player 2 won");
    }
    if((grid1.textContent=='O' && grid4.textContent=='O') &&grid7.textContent == 'O'){
       alert("Player 2 won");
    }
    if((grid1.textContent=='O' && grid5.textContent=='O') &&grid9.textContent == 'O'){
       alert("Player 2 won");
    }
    if((grid7.textContent == 'O' && grid8.textContent =='O') && grid9.textContent == 'O'){
       alert("Player 2 won.")
    }
    if((grid4.textContent == 'O' && grid5.textContent =='O') && grid6.textContent == 'O'){
        alert("Player 2 won.")
     }

     if((grid3.textContent == 'O' && grid6.textContent =='O') && grid9.textContent == 'O'){
        alert("Player 2 won.")
     }
     

        });

        

    });

   


};
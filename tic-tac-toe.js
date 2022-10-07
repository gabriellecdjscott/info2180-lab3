
window.addEventListener("load",function(){
	var board = document.getElementById("board");
	var squares = board.getElementsByTagName("div");
	var counter=0;
	var arr = ["","","","","","","","","",];
	console.log(counter);
	for(let a = 0; a < squares.length; a++){
      
      squares[a].classList.add("square")
     squares[a].addEventListener('click',function(){
     	if (counter%2==0){
     		counter++
     		squares[a].textContent='X'
     		squares[a].classList.add('X');
     	}
     	else{
     		counter++
     		squares[a].textContent='O'
     		squares[a].classList.add('O');
     	}

	

      
      });

     squares[a].addEventListener('mouseover',function(){
     	squares[a].classList.add("hover")
     });

     squares[a].addEventListener('mouseleave',function(){
     	squares[a].classList.remove("hover")
     })

     	}



	


})





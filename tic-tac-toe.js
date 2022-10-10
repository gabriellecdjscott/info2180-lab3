
window.addEventListener("load",function(){
	var board = document.getElementById("board");
	var squares = board.getElementsByTagName("div");
	var counter=0;
	var arr = ["g","a","b","r","i","e","l","l","e"];
	var status= document.getElementById("status")
	var newgame= document.getElementsByTagName("button")

	
	for(let a = 0; a < squares.length; a++){
      
      squares[a].classList.add("square")
     squares[a].addEventListener('click',function(){
     	if (counter%2==0 && squares[a].textContent==""){
     		counter++
     		squares[a].textContent='X'
     		squares[a].classList.add('X');
     		arr.splice( a, 1, 10 );
     		console.log(arr)

     		if (arr[0]+arr[1]+arr[2] == 30 || arr[3]+arr[4]+arr[5] == 30 || arr[6]+arr[7]+arr[8] == 30 || arr[0]+arr[3]+arr[6] == 30 || arr[1]+arr[3]+arr[6] == 30 || arr[2]+arr[5]+arr[8] == 30 || arr[0]+arr[4]+arr[8] == 30 || arr[2]+arr[4]+arr[6] == 30){
     			status.textContent="Congratulations!X is the Winner!"
     			status.classList.add('you-won')	

     		}
     	}
     	else if ( squares[a].textContent==""){
     		counter++
     		squares[a].textContent='O'
     		squares[a].classList.add('O');
     		arr.splice( a, 1, 20 );
     		console.log(arr)
     		if (arr[0]+arr[1]+arr[2] == 60 || arr[3]+arr[4]+arr[5] == 60 || arr[6]+arr[7]+arr[8] == 60 || arr[0]+arr[3]+arr[6] == 60 || arr[1]+arr[3]+arr[6] == 60 || arr[2]+arr[5]+arr[8] == 60 || arr[0]+arr[4]+arr[8] == 60 || arr[2]+arr[4]+arr[6] == 60){
     			status.textContent="Congratulations!O is the Winner!"
     			status.classList.add('you-won')
     		}


     	}

	

      
      });



     squares[a].addEventListener('mouseover',function(){
     	squares[a].classList.add("hover")
     });

     squares[a].addEventListener('mouseleave',function(){
     	squares[a].classList.remove("hover")
     })



     	}


     	newgame[0].addEventListener('click',function(){
     		for(let a = 0; a < squares.length; a++){
     			squares[a].className="square"
     			squares[a].textContent=""
     			arr = ["g","a","b","r","i","e","l","l","e"]
     			status.textContent="Move your mouse over a square and click to play an X or an O."
     			status.className=""
     			counter=0






     		}

     	});



	


})







var pos_x = 0;
var pos_y = 0;
const step = 40;
const bs=50

var random_number=Math.floor(Math.random()*600)+"px"
var square = document.getElementById("sq");   
var b=document.getElementById("hello");


function loop(){
  let i=10
  b.style.top=random_number
  b.style.left+=i
   pos_y+=10
  square.style.top = pos_y + "px"; 

  if(pos_y==540){
    window.location="./lose.html"
  }
  if(pos_x&&pos_y==random_number){
    window.location="./lose.html"
  }
}



console.log(Math.floor(Math.random()*600))
console.log(Math.floor(Math.random()*600))

setInterval(loop,100)

function checkIsOverBorder() {
  (pos_x < 0) && (pos_x = 0);
  (pos_y < 0) && (pos_y = 0);
  (pos_x > 540) && (pos_x = 540);
  (pos_y > 540) && (pos_y = 540);
  square.style.top = pos_y + "px"; 
  square.style.left = pos_x + "px"; 
}



document.addEventListener('keypress', function(p) {

  if(p.key ==="w"){
    pos_y -= step; 
    square.style.top = pos_y + "px"; 

  }

  if(p.key ==="s"){
    pos_y += step; 
    square.style.top = pos_y + "px"; 

  } 

  if(p.key ==="a"){
    pos_x -= step; 
    square.style.left = pos_x + "px"; 

  }

  if(p.key ==="d"){
    pos_x += step; 
    square.style.left = pos_x + "px"; 
  }
  checkIsOverBorder()
})


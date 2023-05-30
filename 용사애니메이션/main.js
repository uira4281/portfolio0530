import  {ManagerGame}  from "./managerGame.js";

function draw(){
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);    
    //-----------------------------------------------
    ManagerGame.getInstance().update();
    ManagerGame.getInstance().draw();
    //-----------------------------------------------
}
function loading(){
    // 여기에 로딩화면을 넣는다.
    setInterval(draw, 10);
}

//-----------[캔버스]----------------------------
var $canvas = document.getElementById("myCanvas");
var ctx = $canvas.getContext("2d"); 
//-----------[시작]----------------------------
ManagerGame.getInstance().start(ctx);
$canvas.style.border = "1px solid black";

setTimeout( loading , 10);





import { ManagerGame } from "./managerGame.js";
import { ManagerImage } from "./managerImage.js";

export class NodeButton {
    constructor(normalImage , overImage){  
        this.normalImage = ManagerImage.getInstance().managerImageGet(normalImage);
        this.overImage =  ManagerImage.getInstance().managerImageGet(overImage);
     //   console.log(this.normalImage.image.width);
        this.path = new Path2D(); // 충돌체크용
      
        document.addEventListener("mousemove", this.mouseOverEvent , true);
      
        this.mouseOver = false;
      
    }
   
    nodeButtonDraw(x , y){
        this.xPosButton = x;
        this.yPosButton = y;
        if (this.mouseOver){
            this.overImage.nodeImageDraw(this.xPosButton , this.yPosButton );
        }else{
            this.normalImage.nodeImageDraw(this.xPosButton , this.yPosButton );
        }
    //    this.nodeButtonDrawBox();
    }
    nodeButtonDrawBox(){
        ManagerGame.getInstance().ctx.beginPath () ;
        ManagerGame.getInstance().ctx.stroke(this.path);
        ManagerGame.getInstance().ctx.closePath () ;
    }

    nodeButtonPointCollision(xMouse , yMouse){
        this.path.rect(this.xPosButton, this.yPosButton, 
            this.normalImage.image.width, this.normalImage.image.height);
        return ManagerGame.getInstance().ctx.isPointInPath(this.path , xMouse , yMouse);
    }

    mouseOverEvent = (event) => {   
        var x = event.pageX;
        var y = event.pageY;
        
        this.mouseOver = this.nodeButtonPointCollision(x , y);
    }
}
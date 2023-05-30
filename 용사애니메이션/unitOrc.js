import { ManagerGame } from "./managerGame.js";
import { NodeAnimList } from "./nodeAnimList.js";

export class UnitOrc  {
    constructor(xPos , yPos){

        this.xPos = xPos;
        this.yPos = yPos;

        this.speed = 0.8;
        this.hpMax = 200;
        this.hp = this.hpMax;
        this.power = 12;
        
        this.direction = "right";
        this.dead = false;    
        this.animationList = new NodeAnimList("orc");
        this.animationList.nodeAnimListChangeAnim("orc_idle_l");
        
        this.ai = "idle";
        this.aiDelay = 150;
        this.startTime = 0;
        this.target = null;

        this.unitType = "monster";   
        
        this.setCollision();


        
        this.hit = false;
        this.hitStartTime = 0;
        this.hitDelayTime = 100;
    }
    setCollision(){
        if(this.direction == "left"){

            this.xCol = this.xPos + 160;
        }else{
            this.xCol = this.xPos + 80;
        }
        this.yCol = this.yPos + 100;
        this.wCol = 240;
        this.hCol = 270; 
        this.zCol = this.yCol + this.hCol;
        this.xColCenter = this.xCol + Number(this.wCol/2);
        this.yColCenter = this.yCol + Number(this.hCol/2);
    }

    update(){ 
        this.animationList.nodeAnimListUpdate();
        this.setCollision();
        
        this.hitTimer();

        this.aiTimer();
      
    }
    setAiTarget(target){
        this.target = target;
    }

    setHit(otherPower){
        if(this.hit == true){
            return;
        }
        this.hp -= otherPower;
        if(this.hp <= 0){
            this.hp = 0;
            this.dead = true;
            return;
        }
        this.hit = true;
    }

    hitTimer(){
 
        if(this.hit == true){
            this.hitStartTime += 1;
        }
        if(this.hitDelayTime <= this.hitStartTime){
            this.hit = false;
            this.hitStartTime = 0;
        }
    }

    aiTimer(){
        this.startTime += 1;
        if(this.startTime >= this.aiDelay){
 
            this.aiAction(); 
            this.startTime = 0;
        }

        if(this.target == null){

            this.ai = "idle";
            this.animationList.nodeAnimListChangeAnim("orc_idle_l");
            return;
        }

        if(this.ai == "idle"){

            if(this.direction == "left"){
                this.animationList.nodeAnimListChangeAnim("orc_idle_l");
            }else if(this.direction == "right"){
                this.animationList.nodeAnimListChangeAnim("orc_idle_r");
            }

        }else if(this.ai == "moveleft"){

            this.direction = "left";
            this.animationList.nodeAnimListChangeAnim("orc_work_l");
            this.xPos -= this.speed;

        }else if(this.ai == "moveright"){

            this.direction = "right";
            this.animationList.nodeAnimListChangeAnim("orc_work_r");
            this.xPos += this.speed;

        }else if(this.ai == "moveup"){

            if(this.direction == "left"){
                this.animationList.nodeAnimListChangeAnim("orc_work_l");
            }else if(this.direction == "right"){
                this.animationList.nodeAnimListChangeAnim("orc_work_r");
            }
            this.yPos -= this.speed;

        }else if(this.ai == "movedown"){

            if(this.direction == "left"){
                this.animationList.nodeAnimListChangeAnim("orc_work_l");
            }else if(this.direction == "right"){
                this.animationList.nodeAnimListChangeAnim("orc_work_r");
            }
            this.yPos += this.speed;
        }else if(this.ai == "skill"){
             
        }
    }

    
    aiAction(){

        if(this.target.xColCenter < this.xColCenter && this.target.xColCenter + 400 >= this.xColCenter){
            this.direction = "left";
            var r = Math.floor(Math.random() * 2);
            if( r == 0){
                if(this.target.yColCenter < this.yColCenter){
                    this.ai = "moveup";
                }else {
                    this.ai = "movedown";
                }
            }else{
                this.ai = "skill";
            }
       } if(this.target.xColCenter < this.xColCenter && this.target.xColCenter + 400 < this.xColCenter){
            this.direction = "left";
            var r = Math.floor(Math.random() * 2);
            if( r == 0){
                this.ai = "moveleft";
            }else{
                this.ai = "idle";
            }
       } if(this.target.xColCenter >= this.xColCenter && this.target.xColCenter - 400 <= this.xColCenter){
            this.direction = "right";
            var r = Math.floor(Math.random() * 2);
            if( r == 0){
                if(this.target.yColCenter < this.yColCenter){
                    this.ai = "moveup";
                }else {
                    this.ai = "movedown";
                }
            }else{
                this.ai = "skill";
            }
       } if(this.target.xColCenter >= this.xColCenter && this.target.xColCenter - 400 > this.xColCenter){
            this.direction = "right";
            var r = Math.floor(Math.random() * 2);
            if( r == 0){
                this.ai = "moveright";
            }else{
                this.ai = "idle";
            }
       }
    }

    draw(){
        if(this.hit == true){
            if(this.startTime % 10 < 5){
                this.animationList.nodeAnimListDraw(this.xPos , this.yPos);
            }

        }else{
            this.animationList.nodeAnimListDraw(this.xPos , this.yPos);
        }
     //   this.drawBox();
    }

    drawBox(){
        ManagerGame.getInstance().ctx.beginPath () ;
        ManagerGame.getInstance().ctx.strokeRect(this.xCol, this.yCol, this.wCol, this.hCol);
        ManagerGame.getInstance().ctx.closePath () ;
    }

}
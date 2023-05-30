import { ManagerGame } from "./managerGame.js";
import { NodeAnimList } from "./nodeAnimList.js";

export class UnitCyclops  {
    constructor(xPos , yPos){

        this.xPos = xPos;
        this.yPos = yPos;


        this.speed = 1.1;
        this.hpMax = 100;
        this.hp = this.hpMax;
        this.power = 8;

        
        this.direction = "right";
        this.dead = false;    
        this.animationList = new NodeAnimList("cyclops");
        this.animationList.nodeAnimListChangeAnim("cyclops_idle_l");
           
        this.unitType = "monster";   
        

        this.ai = "idle";
        this.aiDelay = 100;
        this.startTime = 0;
        this.target = null;


        this.setCollision();

        this.hit = false;
        this.hitStartTime = 0;
        this.hitDelayTime = 100;

    }
    setCollision(){
        if(this.direction == "left"){
            this.xCol = this.xPos + 100;
           
        }else{
            this.xCol = this.xPos + 50;
            
        }
        this.yCol = this.yPos + 60;
        this.wCol = 130;
        this.hCol = 180; 
        this.zCol = this.yCol + this.hCol;
        this.xColCenter = this.xCol + Number(this.wCol/2);
        this.yColCenter = this.yCol + Number(this.hCol/2);

    }

    update(){ 
        this.hitTimer();

        this.aiTimer();

        this.animationList.nodeAnimListUpdate();

        this.setCollision();
       
    }

    draw(){
 
        if(this.hit == true){
            if(this.startTime % 10 < 5){
                this.animationList.nodeAnimListDraw(this.xPos , this.yPos);
            }

        }else{
            this.animationList.nodeAnimListDraw(this.xPos , this.yPos);
        }
           //    this.drawBox();
    }

    drawBox(){
        ManagerGame.getInstance().ctx.beginPath () ;
        ManagerGame.getInstance().ctx.strokeRect(this.xCol, this.yCol, this.wCol, this.hCol);
        ManagerGame.getInstance().ctx.closePath () ;
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
            this.animationList.nodeAnimListChangeAnim("cyclops_idle_l");
            return;
        }

        if(this.ai == "idle"){

            if(this.direction == "left"){
                this.animationList.nodeAnimListChangeAnim("cyclops_idle_l");
            }else if(this.direction == "right"){
                this.animationList.nodeAnimListChangeAnim("cyclops_idle_r");
            }

        }else if(this.ai == "moveleft"){

            this.direction = "left";
            this.animationList.nodeAnimListChangeAnim("cyclops_work_l");
            this.xPos -= this.speed;

        }else if(this.ai == "moveright"){

            this.direction = "right";
            this.animationList.nodeAnimListChangeAnim("cyclops_work_r");
            this.xPos += this.speed;

        }else if(this.ai == "moveup"){

            if(this.direction == "left"){
                this.animationList.nodeAnimListChangeAnim("cyclops_work_l");
            }else if(this.direction == "right"){
                this.animationList.nodeAnimListChangeAnim("cyclops_work_r");
            }
            this.yPos -= this.speed;

        }else if(this.ai == "movedown"){

            if(this.direction == "left"){
                this.animationList.nodeAnimListChangeAnim("cyclops_work_l");
            }else if(this.direction == "right"){
                this.animationList.nodeAnimListChangeAnim("cyclops_work_r");
            }
            this.yPos += this.speed;
        }else if(this.ai == "skill"){
             
        }
    }
    

    aiAction(){

        if(this.target.xColCenter < this.xColCenter && this.target.xColCenter + 300 >= this.xColCenter){
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
       } if(this.target.xColCenter < this.xColCenter && this.target.xColCenter + 300 < this.xColCenter){
            this.direction = "left";
            var r = Math.floor(Math.random() * 2);
            if( r == 0){
                this.ai = "moveleft";
            }else{
                this.ai = "idle";
            }
       } if(this.target.xColCenter >= this.xColCenter && this.target.xColCenter - 300 <= this.xColCenter){
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
       } if(this.target.xColCenter >= this.xColCenter && this.target.xColCenter - 300 > this.xColCenter){
            this.direction = "right";
            var r = Math.floor(Math.random() * 2);
            if( r == 0){
                this.ai = "moveright";
            }else{
                this.ai = "idle";
            }
       }
    }
}
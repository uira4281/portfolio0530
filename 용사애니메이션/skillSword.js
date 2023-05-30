import { ManagerGame } from "./managerGame.js";
import { ManagerMonster } from "./managerMonster.js";
import { NodeAnimList } from "./nodeAnimList.js";

export class SkillSword  {
    constructor(xPos, yPos , unitType){

        this.xPos = xPos;
        this.yPos = yPos;
       
        this.animationList = new NodeAnimList("skillSword"); 
        this.status = "ready"; // ready , play
        this.animationTimeOn = false;
        
        this.setCollision();
        
        this.direction = "left";
        this.unitType = unitType;
       
    }
    

    setCollision(){
        if(this.direction == "left"){
            this.xCol = this.xPos + 20;
            this.yCol = this.yPos + 40;
            this.wCol = 210;
            this.hCol = 220; 
            this.zCol = this.yCol + this.hCol;
            this.xColCenter = this.xCol + Number(this.wCol/2);
            this.yColCenter = this.yCol + Number(this.hCol/2);
        }else{
            this.xCol = this.xPos + 80;
            this.yCol = this.yPos + 40;
            this.wCol = 210;
            this.hCol = 220; 
            this.zCol = this.yCol + this.hCol;
            this.xColCenter = this.xCol + Number(this.wCol/2);
            this.yColCenter = this.yCol + Number(this.hCol/2);
        }
    }

    skillPlay(curSkillName , x , y , direction , power){
        this.direction = direction;
        this.xPos = x;
        this.yPos = y;
        this.animationList.nodeAnimListSkillAnim(curSkillName);
        this.status = "play";
        this.animationTimeOn = true;
        this.power = power;
        this.setCollision();
        this.monsterListCollision();
    }

    update(){    
        this.setCollision();
        this.setAnimationCheck();

    }

    setAnimationCheck(){
        this.animationTimeOn = this.animationList.nodeAnimListUpdate();
        if(this.animationTimeOn == false){
            this.xPos = -1000;
            this.yPos = -1000;
        }
    }

    draw(){    
        this.animationList.nodeAnimListDraw(this.xPos , this.yPos); 
     //   this.drawBox();
    }

    drawBox(){
        ManagerGame.getInstance().ctx.beginPath () ;
        ManagerGame.getInstance().ctx.strokeRect(this.xCol, this.yCol, this.wCol, this.hCol);
        ManagerGame.getInstance().ctx.closePath () ;
    }

    monsterListCollision(){
        var monsterListAll = ManagerMonster.getInstance().monsterListAll;

        for (var name in monsterListAll){
            var monstertList = monsterListAll[name];
            for (var i = 0; i < monstertList.length; i++ ){
                var monster  = monstertList[i];
                var result = this.getRectCollision(monster.xCol , monster.yCol , monster.wCol , monster.hCol);
                if(result){
                    monster.setHit(this.power);

                }
            }
        }  
    }

    getRectCollision(xOther , yOther , wOther , hOther){
        this.path = new Path2D(); // 충돌용    
        this.path.rect(this.xCol, this.yCol, this.wCol, this.hCol);

        console.log(this.xCol, this.yCol, this.wCol, this.hCol);
        console.log(xOther , yOther , wOther , hOther);
  

        var result = ManagerGame.getInstance().ctx.isPointInPath(this.path , xOther , yOther);
        console.log(result);
        if(result){
            this.path = null;
            return true;
        }

        result = ManagerGame.getInstance().ctx.isPointInPath(this.path , xOther + wOther, yOther);
        console.log(result);
        if(result){
            this.path = null;
            return true;
        }

        result = ManagerGame.getInstance().ctx.isPointInPath(this.path , xOther , yOther + hOther) 
        console.log(result);

        if(result){
            this.path = null;
            return true;
        }

        result = ManagerGame.getInstance().ctx.isPointInPath(this.path , xOther + wOther, yOther + hOther);
        console.log(result);

        if(result){
            this.path = null;
            return true;
        }
        return false;
    }


};
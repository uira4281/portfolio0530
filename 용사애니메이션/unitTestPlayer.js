import { ManagerGame } from "./managerGame.js";
import { ManagerKey } from "./managerKey.js";
import { NodeAnimList } from "./nodeAnimList.js";
import { ManagerSkill } from "./managerSkill.js";

export class UnitTestPlayer {
    constructor(xPos , yPos , speed , hpMax , power){

        this.xPos = xPos;
        this.yPos = yPos;
       
        this.speed = speed;
        this.hp = hpMax;
        this.hpMax = hpMax;
        this.power = power;

        //-------------------------------------------------
        this.direction = "right";
        this.dead = false;    

        this.animationList = new NodeAnimList("player");
        this.animationList.nodeAnimListChangeAnim("player_idle_l");

        
        this.unitType = "player";

        //-------------------------------------------------
        this.setCollision();
        
    }

    update(){     
        if(this.dead == true){
            return;
        }
        this.animationList.nodeAnimListUpdate();
        this.keyMenu();
        this.setCollision();
  
    }
    setCollision(){
        this.xCol = this.xPos + 85;
        this.yCol = this.yPos + 110;
        this.wCol = 170;
        this.hCol = 210; 
        this.zCol = this.yCol + this.hCol;
        this.xColCenter = this.xCol + Number(this.wCol/2);
        this.yColCenter = this.yCol + Number(this.hCol/2);
    }

   

    keyMenu(){

        var d = ManagerKey.getInstance().getKeyStay("KeyD");
        var a = ManagerKey.getInstance().getKeyStay("KeyA");
        var w = ManagerKey.getInstance().getKeyStay("KeyW");
        var s = ManagerKey.getInstance().getKeyStay("KeyS");

        var j = ManagerKey.getInstance().getKeyOnce("KeyJ");
        var k = ManagerKey.getInstance().getKeyOnce("KeyK");

        if(j){
            if(this.direction == "left"){    
                ManagerSkill.getInstance().managerSkillPlay("skillSword" , "skill_sword_l", this.xPos - 150 , this.yPos +50  , "left" , this.power);
            }else if(this.direction == "right"){
                ManagerSkill.getInstance().managerSkillPlay("skillSword" , "skill_sword_r", this.xPos + 150 , this.yPos +50 , "right" , this.power);
            }
        }

        if(k){
            if(this.direction == "left"){        
             
            }else if(this.direction == "right"){
             
            }
         }

        if(d){
            this.animationList.nodeAnimListChangeAnim("player_work_r");
            this.direction  = "right";
            this.xPos += this.speed;
        }

        if(a){
            this.animationList.nodeAnimListChangeAnim("player_work_l");
            this.direction  = "left";
            this.xPos -= this.speed;
        }

        if(w){
            if(this.direction == "right"){
                this.animationList.nodeAnimListChangeAnim("player_work_r");
            }else if(this.direction == "left"){
                this.animationList.nodeAnimListChangeAnim("player_work_l");
            }
            this.yPos -= this.speed;
        }       
        if(s){
            if(this.direction == "right"){
                this.animationList.nodeAnimListChangeAnim("player_work_r");
            }else if(this.direction == "left"){
                this.animationList.nodeAnimListChangeAnim("player_work_l");
            }
            this.yPos += this.speed;
        }
        
        if(d == false && a == false && w == false && s == false)
        {
            if(this.direction == "right"){
                this.animationList.nodeAnimListChangeAnim("player_idle_r");
            }else if(this.direction == "left"){
                this.animationList.nodeAnimListChangeAnim("player_idle_l");
            }
        }
    }

    draw(){
        this.animationList.nodeAnimListDraw(this.xPos , this.yPos);
      //  this.drawBox();

    }

    drawBox(){
        ManagerGame.getInstance().ctx.beginPath () ;
        ManagerGame.getInstance().ctx.strokeRect(this.xCol, this.yCol, this.wCol, this.hCol);
        ManagerGame.getInstance().ctx.closePath () ;
    }
}
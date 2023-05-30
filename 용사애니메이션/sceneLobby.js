import { ManagerButton } from "./managerButton.js";

import { ManagerImage } from "./managerImage.js";
import { ManagerPlayer } from "./managerPlayer.js";
import { ManagerScene } from "./managerScene.js";
import { ManagerText } from "./managerText.js";

export class SceneLobby{

    start(){       
        document.addEventListener("click", this.mouseClickEvent , true);
        this.shopPower = 400;
        this.shopHp = 500;
        this.shopSpeed = 600;
        this.shopPowerPlus = 10;
        this.shopHpPlus = 30;
        this.shopSpeedPlus = 0.1;
    }
    update(){}

    draw(){
        ManagerImage.getInstance().managerImageDraw("로비_배경화면" , 0, 0); 
        ManagerButton.getInstance().managerButtonDraw("로비_버튼_start_on" , 820, 480); 
        ManagerButton.getInstance().managerButtonDraw("로비_버튼_공격증가_on" , 548, 178);
        ManagerButton.getInstance().managerButtonDraw("로비_버튼_체력증가_on" , 548, 350);
        ManagerButton.getInstance().managerButtonDraw("로비_버튼_이속증가_on" , 548, 522);
        ManagerButton.getInstance().managerButtonDraw("로비_버튼_뒤로가기_on" , 1180, 30);
       
        ManagerText.getInstance().managerTextDraw(690, 62, 40 , "brown" ,  ManagerPlayer.getInstance().money , true);
        ManagerText.getInstance().managerTextDraw(170, 218, 30 , "green" ,  this.shopPower , true);
        ManagerText.getInstance().managerTextDraw(170, 390, 30 , "green" ,  this.shopHp , true);
        ManagerText.getInstance().managerTextDraw(170, 560, 30 , "green" ,   this.shopSpeed , true);

        ManagerText.getInstance().managerTextDraw(340, 218, 27 , "brown" ,   "향상된 공격력" , true);
        ManagerText.getInstance().managerTextDraw(560, 210, 23 , "green" ,   "+" + this.shopPowerPlus, true);
        ManagerText.getInstance().managerTextDraw(250, 288, 27 , "red" ,   "최대 공격력 " + ManagerPlayer.getInstance().power , true);

        ManagerText.getInstance().managerTextDraw(340, 390, 27 , "brown" ,   "향상된 체력" , true);
        ManagerText.getInstance().managerTextDraw(560, 382, 23 , "green" ,   "+" + this.shopHpPlus, true);
        ManagerText.getInstance().managerTextDraw(250, 460, 27 , "red" ,   "최대 체력 "  + ManagerPlayer.getInstance().hpMax , true);

        ManagerText.getInstance().managerTextDraw(340, 560, 27 , "brown" ,   "향상된 속도" , true);
        ManagerText.getInstance().managerTextDraw(560, 552, 23 , "green" ,   "+" + this.shopSpeedPlus, true);
        ManagerText.getInstance().managerTextDraw(250, 630, 27 , "red" ,   "최대 속도 " + ManagerPlayer.getInstance().speed.toFixed(1) , true);
    }

    mouseClickEvent = (event) => {    
        if(ManagerScene.getInstance().curSceneName != "lobby"){
            return;
        }   
        
        var x = event.pageX;
        var y = event.pageY;
        
        if(ManagerButton.getInstance().managerButtonClick("로비_버튼_start_on" , x , y)){
            ManagerScene.getInstance().changeScene("select");
            event.stopImmediatePropagation();

        } 
        else if(ManagerButton.getInstance().managerButtonClick("로비_버튼_뒤로가기_on" , x , y)){
            ManagerScene.getInstance().changeScene("title");
            event.stopImmediatePropagation();
        }
        else if(ManagerButton.getInstance().managerButtonClick("로비_버튼_공격증가_on" , x , y)){
            if(ManagerPlayer.getInstance().money >= this.shopPower){
                ManagerPlayer.getInstance().money -= this.shopPower;
                ManagerPlayer.getInstance().power += this.shopPowerPlus;
            }
            event.stopImmediatePropagation();
        } 
        else if(ManagerButton.getInstance().managerButtonClick("로비_버튼_체력증가_on" , x , y)){
            if(ManagerPlayer.getInstance().money >= this.shopHp){
                ManagerPlayer.getInstance().money -= this.shopHp;
                ManagerPlayer.getInstance().hpMax += this.shopHpPlus;
            }
            event.stopImmediatePropagation();
        } 
        else if(ManagerButton.getInstance().managerButtonClick("로비_버튼_이속증가_on" , x , y)){
            if(ManagerPlayer.getInstance().money >= this.shopSpeed){
                ManagerPlayer.getInstance().money -= this.shopSpeed;
                ManagerPlayer.getInstance().speed += this.shopSpeedPlus;
            }
            event.stopImmediatePropagation();
        }


    }
}
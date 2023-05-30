import { ManagerButton } from "./managerButton.js";
import { ManagerImage } from "./managerImage.js";
import { ManagerScene } from "./managerScene.js";

export class SceneSelect{

    start(){   
        document.addEventListener("click", this.mouseClickEvent , true);      
    }
    
    update(){}

    draw(){
        ManagerImage.getInstance().managerImageDraw("셀렉트_배경화면" , 0, 0);     
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_뒤로가기_on" , 1180, 30);

        var y = 300;
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_01_on" , 300 , y);
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_02_on" , 450 , y);
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_03_on" , 600 , y);
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_04_on" , 750 , y);
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_05_on" , 900 , y);
        y = 500;
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_06_on" , 300 , y);
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_07_on" , 450 , y);
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_08_on" , 600 , y);
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_09_on" , 750 , y);
        ManagerButton.getInstance().managerButtonDraw("셀렉트_버튼_10_on" , 900 , y);
    }

    mouseClickEvent = (event) => {       
        if(ManagerScene.getInstance().curSceneName != "select"){
            return;
        }

        var x = event.pageX;
        var y = event.pageY;
     
        if(ManagerButton.getInstance().managerButtonClick("셀렉트_버튼_뒤로가기_on" , x , y)){
            ManagerScene.getInstance().changeScene("lobby");
            event.stopImmediatePropagation();
            
        }

        else if(ManagerButton.getInstance().managerButtonClick("셀렉트_버튼_01_on" , x , y)){
        //    ManagerScene.getInstance().changeScene("stage");
        //    event.stopImmediatePropagation();
        } 

        else if(ManagerButton.getInstance().managerButtonClick("셀렉트_버튼_10_on" , x , y)){
            ManagerScene.getInstance().changeScene("stage");
            event.stopImmediatePropagation();
        } 
    }
}
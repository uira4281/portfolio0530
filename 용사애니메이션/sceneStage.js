import { ManagerButton } from "./managerButton.js";
import { ManagerScene } from "./managerScene.js";
import { ManagerStage } from "./managerStage.js";

export class SceneStage{

    start(){  
        
        this.curStage = ManagerStage.getInstance().getCurStage();
        this.curStage.start();
        document.addEventListener("click", this.mouseClickEvent , true);
    }
   
    update(){
        this.curStage.update();
    }

    draw(){
        this.curStage.draw();
        ManagerButton.getInstance().managerButtonDraw("로비_버튼_뒤로가기_on" , 1180, 30);
    }
 

    mouseClickEvent = (event) => {  
        
        if(ManagerScene.getInstance().curSceneName != "stage"){
            return;
        }   
        
        var x = event.pageX;
        var y = event.pageY;
        
        var result = ManagerButton.getInstance().managerButtonClick("로비_버튼_뒤로가기_on" , x , y);
        if(result){
            ManagerScene.getInstance().changeScene("select");
            event.stopImmediatePropagation();
        } 

    }
}
import { SceneTitle } from "./sceneTitle.js";
import { SceneLobby } from "./sceneLobby.js";
import { SceneSelect } from "./sceneSelect.js";
import { SceneStage } from "./sceneStage.js";

export class ManagerScene {
    static instance = new ManagerScene();
    static getInstance(){
        return this.instance;
    }

    start(){
        this.sceneList =  {};
        this.setScene();

        this.curScene = null;
        this.curSceneName = "";
    }

    update(){
        if(this.curScene != null){
            this.curScene.update();
           
        }
    }
    draw(){
        if(this.curScene != null){
            this.curScene.draw();
           
        }   
    }


    setScene(){
        this.sceneList["title"] = new SceneTitle();
        this.sceneList["lobby"] = new SceneLobby();
        this.sceneList["select"] = new SceneSelect();
        this.sceneList["stage"] = new SceneStage();
    }

    changeScene(sceneName){
        if(this.curSceneName == sceneName){
            return;
        }
        this.curScene = this.sceneList[sceneName];        
    
        if(this.curScene != null){
            this.curSceneName = sceneName;
            this.curScene.start();
        }
    }
}
import { ManagerKey } from "./managerKey.js";
import { ManagerImage } from "./managerImage.js";
import { ManagerButton } from "./managerButton.js";
import { ManagerScene } from "./managerScene.js";
import { ManagerStage } from "./managerStage.js";
import { ManagerPlayer } from "./managerPlayer.js";

import { ManagerAnim } from "./managerAnim.js";
import { ManagerSkill } from "./managerSkill.js";
import { ManagerMonster } from "./managerMonster.js";
import { ManagerSort } from "./managerSort.js";


export class ManagerGame{
    static instance = new ManagerGame()
    static getInstance(){
        return this.instance;
    }

    start(ctx){
        this.loading = false;
        this.ctx = ctx;
        ManagerKey.getInstance().start();
        ManagerImage.getInstance().start();
        ManagerButton.getInstance().start();
        ManagerScene.getInstance().start();
        ManagerStage.getInstance().start();
        //--------------------------------------
        ManagerAnim.getInstance().start();
        ManagerPlayer.getInstance().start();
        ManagerSkill.getInstance().start();
        ManagerMonster.getInstance().start();
        ManagerSort.getInstance().start();
        
        ManagerScene.getInstance().changeScene("title");
        this.loading = true;
    }
    update(){
        if(this.loading == false){
            return;
        }
        ManagerScene.getInstance().update();
    }
    draw(){
        if(this.loading == false){
            return;
        }
        ManagerScene.getInstance().draw();
    }

}
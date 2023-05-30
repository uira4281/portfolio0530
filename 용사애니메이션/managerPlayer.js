//import { UnitPlayer } from "./unitPlayer.js";

import { UnitTestPlayer } from "./unitTestPlayer.js";

export class ManagerPlayer {
    static instance = new ManagerPlayer();
    static getInstance(){
        return this.instance;
    }

    start(){
        this.money = 5000;
        this.power = 10;
        this.hpMax = 50;
        this.speed = 1.0;
        // this.player = null;
        this.testPlayer = null;
    }

    setPlayer(x , y){     
        this.testPlayer = new UnitTestPlayer(x , y , this.speed , this.hpMax , this.power);
    }

    update(){
        if(this.testPlayer){
            this.testPlayer.update();
        }
    }

    draw(){
        if(this.testPlayer){
            this.testPlayer.draw();
        }
    }
    
}
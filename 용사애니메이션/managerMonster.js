import { ManagerPlayer } from "./managerPlayer.js";
import { UnitCyclops } from "./unitCyclops.js";
import { UnitOrc } from "./unitOrc.js";

export class ManagerMonster {
    static instance = new ManagerMonster();
    static getInstance(){
        return this.instance;
    }

    start(){
        this.monsterListAll = {};
        
    }
    setCyclopsList(size , x , y){
        var monsterName = "cyclops";     
        this.monsterSize = size;
        this.monsterListAll[monsterName] = [];
        for (var j = 0; j < this.monsterSize; j++){  
            var monster = new UnitCyclops(x , y);
            var target = ManagerPlayer.getInstance().testPlayer;
            monster.target = target;
            this.monsterListAll[monsterName].push(monster);
        }
    }

    setOrcList(size , x , y ){

        var monsterName = "orc";     
        this.monsterSize = size;
        this.monsterListAll[monsterName] = [];
        for (var j = 0; j < this.monsterSize; j++){  
            var monster = new UnitOrc(x , y)
            var target = ManagerPlayer.getInstance().testPlayer;
            monster.target = target;
            this.monsterListAll[monsterName].push(monster);
        }
    }

    update(){
        for (var name in this.monsterListAll){
            var monstertList = this.monsterListAll[name];
            for (var i = 0; i < monstertList.length; i++ ){
                if( monstertList[i].hp <= 0){
                    monstertList[i].hp = 0;
                    monstertList[i].dead = true;
                    monstertList.splice(i , 1);
                    break;
                }
                if(monstertList[i].dead == false){
                    monstertList[i].update();
                }
            }
        }
      
    }

    draw(){
        for (var name in this.monsterListAll){
            var monstertList = this.monsterListAll[name];
            for (var i = 0; i < monstertList.length; i++ ){
                if(monstertList[i].dead == false){
                    monstertList[i].draw();
                }
            }
        }    
    }

   
    
}
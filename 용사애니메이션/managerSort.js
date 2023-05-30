import { ManagerMonster } from "./managerMonster.js";
import { ManagerPlayer } from "./managerPlayer.js";
import { ManagerSkill } from "./managerSkill.js";


export class ManagerSort{
    static instance = new ManagerSort()
    static getInstance(){
        return this.instance;
    }

    start(){
    }

    getUnitList(){
        var drawUnitList = [];
        var monsterListAll = ManagerMonster.getInstance().monsterListAll;

        for (var name in monsterListAll){
            var monstertList = monsterListAll[name];
            for (var i = 0; i < monstertList.length; i++ ){
                drawUnitList.push( monstertList[i]);
            }
        }  

        var skillObjectListAll = ManagerSkill.getInstance().skillObjectListAll;
        for (var name in skillObjectListAll){
            var skillList = skillObjectListAll[name];
            for (var i = 0; i < skillList.length; i++ ){
                drawUnitList.push(skillList[i]);
            }
        }  
        
        var player = ManagerPlayer.getInstance().testPlayer;
        drawUnitList.push(player);

        return drawUnitList;

    }

    unitSortDraw(){
        var drawUnitList = this.getUnitList();

        drawUnitList.sort(function (a, b) {
            if (a.zCol > b.zCol) {
                return 1;
            }else{
                return -1;
            }
        });

        for(var i = 0; i < drawUnitList.length; i++){
            drawUnitList[i].draw();
        }
    }
}
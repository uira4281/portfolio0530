import { ManagerImage } from "./managerImage.js";
import { ManagerMonster } from "./managerMonster.js";
import { ManagerPlayer } from "./managerPlayer.js";
import { ManagerSkill } from "./managerSkill.js";
import { ManagerSort } from "./managerSort.js";

export class StageTest1{
    start(){  
        ManagerPlayer.getInstance().setPlayer(100, 300);
   //     ManagerMonster.getInstance().setOrcList(1 , 1000, 100);
        ManagerMonster.getInstance().setCyclopsList(10, 1700, 200);
    }
   
    update(){
        ManagerPlayer.getInstance().update();
        ManagerSkill.getInstance().update();
        ManagerMonster.getInstance().update();
    }

    draw(){
        ManagerImage.getInstance().managerImageDraw("스테이지01_파란배경" , 0, 0);   
        ManagerImage.getInstance().managerImageDraw("스테이지01_왕실배경" , 0, 0);  
        ManagerSort.getInstance().unitSortDraw();

    //    ManagerPlayer.getInstance().draw();
    //    ManagerSkill.getInstance().draw();
    //    ManagerMonster.getInstance().draw();
    }

   
}
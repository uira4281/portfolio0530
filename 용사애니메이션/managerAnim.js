import { NodeAnimList } from "./nodeAnimList.js";
import { ManagerImage } from "./managerImage.js";
import { NodeAnim} from "./nodeAnim.js";
import { NodeAnimSample } from "./nodeAnimSample.js";

export class ManagerAnim {
    static instance = new ManagerAnim();
    static getInstance(){
        return this.instance;
    }

    start(){
        this.animSampleListAll = {};
        this.setAnimSampleListAll();
    }
   
    setAnimSampleListAll(){
        this.setAnimPlayer();
        this.setAnimCyclops();
        this.setAnimOrc();
        this.setAnimSkillSword();
    }

    setAnimSkillSword(){
        var unitName = "skillSword";
        this.animSampleListAll[unitName] = [];      

        var nodeAnimSample = new NodeAnimSample("once", 10, "skill_sword_l", 
            ["스킬_검_l_01" , "스킬_검_l_02" , "스킬_검_l_03"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("once", 10, "skill_sword_r", 
            ["스킬_검_r_01" , "스킬_검_r_02" , "스킬_검_r_03"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);
        
    }

    setAnimPlayer(){
        var unitName = "player";
        this.animSampleListAll[unitName] = [];      

        var nodeAnimSample = new NodeAnimSample("loop", 20, "player_idle_l", 
            ["player_idle_l_01" , "player_idle_l_02" , "player_idle_l_03"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("loop", 20, "player_idle_r", 
            ["player_idle_r_01" , "player_idle_r_02" , "player_idle_r_03"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("loop", 20, "player_work_l", 
            ["player_work_l_01" , "player_work_l_02" , "player_work_l_03" , "player_work_l_04"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("loop", 20, "player_work_r", 
            ["player_work_r_01" , "player_work_r_02" , "player_work_r_03" , "player_work_r_04"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("once", 10, "player_dead_l", 
        ["player_dead_l_01" , "player_dead_l_02" , "player_dead_l_03" , "player_dead_l_04" , "player_dead_l_05"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);


        var nodeAnimSample = new NodeAnimSample("once", 10, "player_dead_r", 
        ["player_dead_r_01" , "player_dead_r_02" , "player_dead_r_03" , "player_dead_r_04" , "player_dead_r_05"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);


    }

    setAnimCyclops(){
        var unitName = "cyclops";
        this.animSampleListAll[unitName] = [];      

        var nodeAnimSample = new NodeAnimSample("loop", 20, "cyclops_idle_l", 
            ["사이클롭스_가만히_l_01" , "사이클롭스_가만히_l_02" , "사이클롭스_가만히_l_03"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("loop", 20, "cyclops_idle_r", 
            ["사이클롭스_가만히_r_01" , "사이클롭스_가만히_r_02" , "사이클롭스_가만히_r_03"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("loop", 20, "cyclops_work_l", 
            ["사이클롭스_이동_l_01" , "사이클롭스_이동_l_02" , "사이클롭스_이동_l_03" , "사이클롭스_이동_l_04" , "사이클롭스_이동_l_05"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("loop", 20, "cyclops_work_r", 
            ["사이클롭스_이동_r_01" , "사이클롭스_이동_r_02" , "사이클롭스_이동_r_03" , "사이클롭스_이동_r_04" , "사이클롭스_이동_r_05"]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        

    }

    setAnimOrc(){
        var unitName = "orc";
        this.animSampleListAll[unitName] = [];      

        var nodeAnimSample = new NodeAnimSample("loop", 20, "orc_idle_l", 
            ["오크_가만히_l_01" , "오크_가만히_l_02" , "오크_가만히_l_03",]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("loop", 20, "orc_idle_r", 
        ["오크_가만히_r_01" , "오크_가만히_r_02" , "오크_가만히_r_03",]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("loop", 5, "orc_work_l", 
        ["오크_이동_l_01" , "오크_이동_l_02" , "오크_이동_l_03",
        "오크_이동_l_04" , "오크_이동_l_05" , "오크_이동_l_06",
        "오크_이동_l_07" , "오크_이동_l_08" , "오크_이동_l_09",
        "오크_이동_l_10" , "오크_이동_l_11" , ]);
        this.animSampleListAll[unitName].push(nodeAnimSample);

        var nodeAnimSample = new NodeAnimSample("loop", 5, "orc_work_r", 
        ["오크_이동_r_01" , "오크_이동_r_02" , "오크_이동_r_03",
        "오크_이동_r_04" , "오크_이동_r_05" , "오크_이동_r_06",
        "오크_이동_r_07" , "오크_이동_r_08" , "오크_이동_r_09",
        "오크_이동_r_10" , "오크_이동_r_11" , ]);
        this.animSampleListAll[unitName].push(nodeAnimSample);
        
    }

    getNodeAnimList(unitName){
        var animationUnit = {};
        var animSampleList = this.animSampleListAll[unitName];
      //  console.log(animSampleList);
        for(var index1 in animSampleList){
            var animationList = []
            var animSample = animSampleList[index1];
            var imageNameList = animSample.imageNameList;
            for(var index2 in  imageNameList){
                var image = ManagerImage.getInstance().managerImageGet(imageNameList[index2]);
                animationList.push(image);
            }
            var nodeAnim = new NodeAnim(animSample.loopType , animSample.frameDelay, animationList);
            animationUnit[animSample.animationName] = nodeAnim;    
        }  
        return animationUnit;
    }  
}
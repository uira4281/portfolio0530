import { SkillSword } from "./skillSword.js";

export class ManagerSkill{
    static instance = new ManagerSkill()
    static getInstance(){
        return this.instance;
    }

    start(){
        this.skillObjectListAll = {};

        this.setSkillSword();
    }

    setSkillSword(){
        var skillCount = 1;
        this.skillNameList = ["skillSword"];
        for(var i = 0; i < this.skillNameList.length; i++){
            var skillName = this.skillNameList[i];
            this.skillObjectListAll[skillName] = []
            for (var j = 0; j < skillCount; j++){  
                var sword = this.getSkillSword();
                this.skillObjectListAll[skillName].push(sword);
            }
        }
    }

    getSkillSword(){
        var xPos = 1300;
        var yPos = 1300;
        var unitType = "player";
        var skillSword = new SkillSword(xPos, yPos, unitType);

        return skillSword;
    }

    managerSkillPlay(skillName, skillDirName, x , y  , direction , power){
        var skillObjectList = this.skillObjectListAll[skillName];
        for(var j = 0; j < skillObjectList.length; j++){
            var skillObject = skillObjectList[j];      
            if(skillObject.status == "ready"){
                skillObject.skillPlay(skillDirName, x , y , direction  , power);
                break;
            }
        }       
    }

    update(){
        for(var i = 0; i < this.skillNameList.length; i++){
            var skillName = this.skillNameList[i];
            var skillObjectList = this.skillObjectListAll[skillName];
            for(var j = 0; j < skillObjectList.length; j++){
                var skillObject = skillObjectList[j];   
                if(skillObject.status == "play" && skillObject.animationTimeOn == false){
                    skillObject.status = "ready";               
                }             
                skillObject.update();              
            }       
        }
    }
    
    draw(){
        for(var i = 0; i < this.skillNameList.length; i++){
            var skillName = this.skillNameList[i];
            var skillObjectList = this.skillObjectListAll[skillName];
            for(var j = 0; j < skillObjectList.length; j++){
                var skillObject = skillObjectList[j];
                skillObject.draw();
               
            }          
        }
    }
}
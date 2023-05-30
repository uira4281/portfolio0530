import { ManagerAnim } from "./managerAnim.js";

export class NodeAnimList {

    constructor(unitName){
        this.curAnimName = "";
        this.animationList = ManagerAnim.getInstance().getNodeAnimList(unitName);  
    }
    

    nodeAnimListChangeAnim(nextAnimName){
      
        if(this.curAnimName == nextAnimName){
            return;
        }

        this.curAnimName = nextAnimName;
    
        var nodeAnim = this.animationList[this.curAnimName];
        if(nodeAnim == null){
            return ;
        }
        nodeAnim.nodeAnimPlay();
    }

    nodeAnimListSkillAnim(nextAnimName){
   
        this.curAnimName = nextAnimName;
    
        var nodeAnim = this.animationList[this.curAnimName];
        if(nodeAnim == null){
            return ;
        }
        nodeAnim.nodeAnimPlay();
    }

    nodeAnimListUpdate(){
        var nodeAnim = this.animationList[this.curAnimName];
        if(nodeAnim == null){
            return false;
        }
      
        return nodeAnim.nodeAnimUpdate();
    }

  
    nodeAnimListDraw(x , y ){
        var nodeAnim = this.animationList[this.curAnimName];
        if(nodeAnim == null){
            return ;
        }
        nodeAnim.nodeAnimDraw(x , y);   
    }
};
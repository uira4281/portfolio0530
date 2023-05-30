import { ManagerGame } from "./managerGame.js";


export class ManagerText {
    static instance = new ManagerText();
    static getInstance(){
        return this.instance;
    }

    
    managerTextDraw(posx , posy , px , color , text , bold){
        // 색상조합 참고사이트 
        // https://colorhunt.co/palette/f2cd5cf2921da61f69400e32 
        var sampleColor = {
            "black" :["#000000" , "#282A3A"] , 
            "white" : ["#FFFBF5" , "#F7EFE5"] , 
            "red" : ["#CD0404" , "#F2CD5C" ] , 
            "blue" : ["#0081C9" , "#5BC0F8"] , 
            "yellow" : ["#FFEA20" , "#8DCBE6"] ,
            "brown" : ["#562B08" , "#F2CD5C"] , 
            "green" : ["#1F8A70" , "#BFDB38"]  , 
            "pupple" : ["#A31ACB" , "#F2921D"] , 
            "gray" : ["#7B8FA1" , "#567189"]
        };
        var colorArr = sampleColor[color];
        var fontsize = (px)+ "px verdana";

        if(bold == true){
            fontsize = "bold " + fontsize;
        }
        ManagerGame.getInstance().ctx.font = fontsize;
        ManagerGame.getInstance().ctx.strokeStyle = colorArr[0];
        ManagerGame.getInstance().ctx.lineWidth = 7;
        ManagerGame.getInstance().ctx.strokeText(text , posx , posy);
        ManagerGame.getInstance().ctx.fillStyle = colorArr[1];
        ManagerGame.getInstance().ctx.fillText(text , posx, posy);
    }
}

import { ManagerGame } from "./managerGame.js";

export class NodeImage {
    constructor(w , h , imagePath){  
       
        this.image = new Image();
       
        this.image.width = w;
        this.image.height = h;
        this.image.src = imagePath;
    }

    nodeImageDraw(x , y){
        ManagerGame.getInstance().ctx.drawImage(this.image , x , y , this.image.width , this.image.height);
    }
}
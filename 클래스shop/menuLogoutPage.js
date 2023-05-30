
import{Main} from "./main.js";

export class MenuLogoutPage{

    excute(data){
        console.log("logout");
        Main.getInstance().login = null;
        Main.getInstance().changePage("menu-headerPage",null);
        Main.getInstance().changePage("menu-mainPage",null);
    }
}
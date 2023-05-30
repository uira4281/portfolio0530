
import { ManagerMember } from "./mangerMember.js";
import{Main} from "./main.js";

export class MenuJoinPro{

    excute(data){
        ManagerMember.getInstance().putMember(data);
        alert("회원가입을 축하합니다");
        Main.getInstance().changePage("menu-mainPage" , null);
    }
}
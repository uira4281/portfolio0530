
import { ManagerMember } from "./mangerMember.js";
import{Main} from "./main.js";

export class MenuLoginPro{
 
    excute(data){
        console.log(data);
        var member = ManagerMember.getInstance().loginMember(data);
        if(member != null){
            alert("로그인이 성공했습니다.");
            Main.getInstance().login = member.memberId;
            Main.getInstance().changePage("menu-headerPage" , null);
            Main.getInstance().changePage("menu-mainPage" , null);
        }else{
            alert("로그인이 실패했습니다.");
            Main.getInstance().changePage("menu-loginPage", null);
        }
    }
}
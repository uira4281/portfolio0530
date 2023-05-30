import { ManagerMember } from "./mangerMember.js";
import { Main } from "./main.js";


export class MenuMemberRemovePro{
    
    excute(data){
        var login = Main.getInstance().login;
        ManagerMember.getInstance().removeMember(login);

        alert("회원탈퇴를 성공했습니다.");
        Main.getInstance().changePage("menu-mainPage" , null);     
    }
}
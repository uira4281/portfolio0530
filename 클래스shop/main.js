import { MenuHeaderPage } from "./menuHeaderPage.js";
import { MenuNavPage } from "./menuNavPage.js";
import { MenuFooterPage } from "./menuFooterPage.js";
//-----------------------------------------------------------------
import { MenuMainPage } from "./menuMainPage.js";
import { MenuJoinPage } from "./menuJoinPage.js";
import { MenuLoginPage } from "./menuLoginPage.js";
import { MenuLogoutPage } from "./menuLogoutPage.js";
import { MenuJoinPro } from "./menuJoinPro.js";
import { MenuLoginPro } from "./menuLoginPro.js";
import { MenuCartPage } from "./menuCartPage.js";
import { MenuBoardPage } from "./menuBoardPage.js";
//-----------------------------------------------------------------
import { MenuBookAllPage } from "./menuBookAllPage.js";
import { MenuMemberRemovePro } from "./menuMemberRemovePro.js";
import { MenuBookInfoPage } from "./menuBookInfoPage.js";
//-----------------------------------------------------------------
import { ManagerBook } from "./managerBook.js";
import { ManagerMember } from "./mangerMember.js";
import { ManagerBoard } from "./managerBoard.js";


export class Main{
    static instance = new Main()
    static getInstance(){
        return Main.instance;
    }
    start(){
        this.login = null;
        ManagerMember.getInstance().start();
        ManagerBook.getInstance().start();
        ManagerBoard.getInstance().start();

        this.setClassList();
        this.setPage();
    }

    setPage(){
        this.pageList["menu-headerPage"].excute(null);
        this.pageList["menu-navPage"].excute(null);
        this.changePage("menu-mainPage" , null); // content 만 계속 바뀐다. 
        this.pageList["menu-footerPage"].excute(null);
    }


    setClassList(){
        this.pageList = {};
        this.pageList["menu-headerPage"] = new MenuHeaderPage();
        this.pageList["menu-navPage"] = new MenuNavPage();
        this.pageList["menu-footerPage"] = new MenuFooterPage();


         //-------------------------------------------------------------------------
        this.pageList["menu-mainPage"] = new MenuMainPage();
        this.pageList["menu-joinPage"] = new MenuJoinPage();
        this.pageList["menu-joinPro"] = new MenuJoinPro();
        this.pageList["menu-loginPage"] = new MenuLoginPage();
        this.pageList["menu-logoutPage"] = new MenuLogoutPage();
        this.pageList["menu-loginPro"] = new MenuLoginPro();
        this.pageList["menu-memberRemovePro"] = new MenuMemberRemovePro();


        //-------------------------------------------------------------------------
        this.pageList["menu-bookAllPage"] = new MenuBookAllPage();
        this.pageList["menu-bookInfoPage"] = new MenuBookInfoPage();


        //-------------------------------------------------------------------------
        this.pageList["menu-cartPage"] = new MenuCartPage();
        

        //-------------------------------------------------------------------------
        this.pageList["menu-boardPage"] = new MenuBoardPage();
    }

    changePage(pageName , data){
        this.pageList[pageName].excute(data);
    }
 
}

// 여기가 시작지점이다. 
Main.getInstance().start();

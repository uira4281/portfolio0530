
import {Main} from "./main.js";

export class MenuHeaderPage{

    excute(data){
        var $tag = document.querySelector("#header");  
        var tag = "";
        tag += 
        `
        <style>
            .a {
                color: #3a3a3a;
                text-decoration: none;
                
            }
            .a:hover {
                color: #196ab3;
                cursor: pointer;
            }
            .top {
                font-size: 13px;
            }
        </style>
    
        <br><br>
        <div align="center">
            <span class="a">
                <img id="btn-mainPage" src="img/logo.png" height="90px">
            </span>
        </div>
        `;

        //console.log("login : ", Main.getInstance().login);

        if(Main.getInstance().login == null){
            tag += 
            `
            <div class="top" align="right">
                <span class="a" id="btn-joinPage">회원가입</span> &nbsp;

                <img src="img/01_top.jpg">  &nbsp;

                <span class="a" id=btn-loginPage>로그인</span> &nbsp;
            `;
        }else if(Main.getInstance().login != null){
            tag += 
            `   
            <div class="top" align="right">

                <b>${Main.getInstance().login  }</b>님&nbsp;

                <img  src="img/01_top.jpg">  &nbsp;

                <span class="a" id="btn-logoutPage">로그아웃</span> &nbsp;

                <img src="img/01_top.jpg">  &nbsp;

                <span class="a" >회원탈퇴</span> &nbsp;

                <img src="img/01_top.jpg">  &nbsp;

                <span class="a" id="btn-cartPage">장바구니</span> &nbsp;
            `;
        }
        tag += 
           `
                <img src="img/01_top.jpg">  &nbsp;
                <span class="a" id="btn-boardPage">고객센터</span> &nbsp;
            </div>
            `;

        $tag.innerHTML = (tag);

        var $btn= document.querySelector('#btn-mainPage');
        $btn.addEventListener('click', this.mainPage);

        if(Main.getInstance().login == null){
            $btn= document.querySelector('#btn-joinPage');
            $btn.addEventListener('click', this.joinPage);    

            $btn= document.querySelector('#btn-loginPage');
            $btn.addEventListener('click', this.loginPage);

        }else if(Main.getInstance().login != null){
            $btn= document.querySelector('#btn-logoutPage');
            $btn.addEventListener('click', this.logoutPage);    

            $btn= document.querySelector('#btn-cartPage');
            $btn.addEventListener('click', this.cartPage);    

        }

        $btn= document.querySelector('#btn-boardPage');
        $btn.addEventListener('click', this.boardPage);    

    }

    joinPage = (event) => {
        Main.getInstance().changePage("menu-joinPage" , null);
    }

    loginPage = (event) => {
        Main.getInstance().changePage("menu-loginPage" , null);
    }

    mainPage = (event) => {
        Main.getInstance().changePage("menu-mainPage" , null);
    }

    logoutPage = (event) => {
        Main.getInstance().changePage("menu-logoutPage" , null);
    }

    cartPage = (event) => {
        Main.getInstance().changePage("menu-cartPage" , null);
    }

    boardPage = (event) => {
        Main.getInstance().changePage("menu-boardPage" , [0, 5]);
    }
}

import{Main} from "./main.js";

export class MenuLoginPage{
 
    excute(data){


        var $tag = document.querySelector("#content");  

        var tag = "";
        tag += `     
        <style>
            .first {
                vertical-align: top;
                width: 158px; 
                height: 60px;	
                padding: 15px 0px 0px 10px;
            }
            .second {
                width: 158px; 
                height: 60px;	
                padding: 15px 0px 0px 10px;
            }
            .inputForm {
                width: 332px;
                height: 44px;
                font-size: 15px;
                border: 1px solid lightgray;
                border-radius: 5px;
                outline: none;
                padding-left: 10px;
            }
        </style>
        `;
        tag += 
        `
        <div align="center">
            <br><br>
            <font size="5" color="#3a3a3a"><b>로그인</b></font>
            <hr width="300px" color="#196ab3">
            <br><br>

            <table>
                <tr>
                    <td>
                        <input type="text" class="inputForm" id="data-memberId" placeholder="아이디" autofocus="autofocus" style="width: 300px">
                    </td>
                </tr>
                <tr>
                    <td height="15"></td>
                </tr>
                <tr>
                    <td>
                        <input type="password" class="inputForm"  id="data-memberPw" placeholder="비밀번호" style="width: 300px">
                    </td>
                </tr>
                <tr height="50px"><td></td></tr>
                <tr>
                    <td>
                        <input type="image" id="btn-loginPro" src="img/login.jpg" style="width: 310px">
                    </td>
                </tr>
            </table>
        </div>
        <br><br>
        `;


        $tag.innerHTML = (tag);

        var $btn= document.querySelector('#btn-loginPro');
        $btn.addEventListener('click', this.loginPro);    
    }

    loginPro = (event) =>{
        var id= document.querySelector('#data-memberId').value;
        var pw= document.querySelector('#data-memberPw').value;
        var data = [];
        data.push(id);
        data.push(pw);
        Main.getInstance().changePage("menu-loginPro",  data);
    }

}

import{Main} from "./main.js";

export class MenuJoinPage{
  
    excute(data){
        var $tag = document.querySelector("#content");  
        var tag = "";
        tag +=
        `
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
            <font size="5" color="#3a3a3a"><b>회원가입</b></font>
            <hr width="300px" color="#196ab3">
            <br><br>

            <table>
                <tr>
                    <td class="first">아이디</td>
                    <td class="second">
                        <input type="text" class="inputForm" id="data-memberId" placeholder="아이디를 입력해주세요." autofocus="autofocus">
                    </td>
                </tr>
                <tr>
                    <td class="first">비밀번호</td>
                    <td class="second">
                        <input type="password" class="inputForm" id="data-memberPw" placeholder="비밀번호를 입력해주세요">
                    </td>
                </tr>
                <tr>
                    <td class="first">이름</td>
                    <td class="second">
                        <input type="text" class="inputForm" id="data-memberName" placeholder="이름을 입력해주세요">
                    </td>
                </tr>
                <tr>
                <tr>
                    <td class="first">이메일</td>
                    <td class="second">
                        <input type="text" class="inputForm" id="data-memberEmail" placeholder="예:hong@itbook.com">
                    </td>
                </tr>
                <tr height="150px">
                    <td colspan="2" align="center">
                        <input type="image" id="btn-joinPro" src="img/join.jpg" style="width: 300px">
                    </td>
                </tr>
            </table>
        </div>
        `;
        $tag.innerHTML = (tag);

        var $btn= document.querySelector('#btn-joinPro');
        console.log($btn);
        $btn.addEventListener('click', this.joinPro);    
   
    }

    joinPro = (event) => {
        var id= document.querySelector('#data-memberId').value;
        var pw= document.querySelector('#data-memberPw').value;
        var name= document.querySelector('#data-memberName').value;
        var email= document.querySelector('#data-memberEmail').value;
        var data = [];
        data.push(id);
        data.push(pw);
        data.push(name);
        data.push(email);
        Main.getInstance().changePage("menu-joinPro" ,  data);
    }

}
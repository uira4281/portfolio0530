import {Main} from "./main.js";

export class MenuNavPage{

    excute(data){
        var $tag = document.querySelector("#nav");  
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
            
        </style>

        <br><br>
        <div align="center">
            <table>
                <tr height="50px">
                    <th width="130px">
                        <span class="a" id="btn-bookAllPage">전체도서 보기</span>
                    </th>
                    <th width="10px">
                        <img  src="img/01_top.jpg">
                    </th>
                    <th width="130px">
                        <span class="a" >베스트</span>
                    </th>
                    <th width="10px">
                        <img src="img/01_top.jpg">
                    </th>
                    <th width="130px">
                        <span class="a">OS</span>
                    </th>
                    <th width="10px">
                        <img src="img/01_top.jpg">
                    </th>
                    <th width="130px">
                        <span class="a">프로그래밍</span>
                    </th>
                    <th width="10px">
                        <img  src="img/01_top.jpg">
                    </th>
                    <th width="130px">
                        <span class="a">컴퓨터공학</span>
                    </th>
                   
                    <th width="150px">
                        <input type="text">
                    </th>
                    <th>
                        <input type="image" src="img/findcate.png" height="30px" alt="검색">
                    </th>
                </tr>
            </table>
        </div>
        `;
        $tag.innerHTML = (tag);

        var $btn= document.querySelector('#btn-bookAllPage');
        $btn.addEventListener('click', this.bookAllPage);
    }

    bookAllPage = (event) => {
        Main.getInstance().changePage("menu-bookAllPage", null );
    }
}
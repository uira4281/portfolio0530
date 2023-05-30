import { ManagerBook } from "./managerBook.js";
import { Main } from "./main.js";

export class MenuBookAllPage{

    excute(data){
        var $tag = document.querySelector("#content");  
        var tag = "";
        tag +=
        `
        <style>
            .a:hover {
                cursor: pointer;
            }

        </style>
        <div align="center">
            <br><br>
            <font size="5" color="#3a3a3a"><b>전체 도서</b></font>
            <hr width="300px" color="#196ab3">
            <br><br>

            <table>`;
            var bookList = ManagerBook.getInstance().bookList;
            for(var i in bookList){
                var book = bookList[i];
                if(i % 6 == 0){
                    tag +=
                    `
                    <tr align="center" height="250px">
                    `;
                }       
                        tag +=
                        `
                        <td width="400px">
                            <span class="a">
                                <img id="btn-bookInfoPage" name=${i} src="img/${ book.bookImage }" width="200px" height="300px" border="1px">
                                <p><font size="3"><b>${ book.bookName }</b></font></p>
                                <font size="3" color="#196ab3"><b>${book.bookPrice}원</font>
                                <p><font size="2">${book.bookInfo}</font></p>
                            <span>
                        </td>
                        `;
                if(i % 6 == 5){
                    tag +=
                    `
                    </tr>
                    `;
                }
            }
        tag +=
        `
            </table>
        </div>
        `;  
        $tag.innerHTML = (tag);


        var $btnList= document.querySelectorAll('#btn-bookInfoPage'); //querySelectorAll
        var size = $btnList.length;
        
        // console.log(size);
        for(var i = 0; i < size; i++){
            $btnList[i].addEventListener('click', this.bookInfoPage);    
        }
    }

    bookInfoPage = (event) =>{
        console.log(event.target.name);
        var bookIndex = Number(event.target.name);
        Main.getInstance().changePage("menu-bookInfoPage" , bookIndex);

    };
    
}
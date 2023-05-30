import { ManagerBoard } from "./managerBoard.js";


export class MenuBoardPage{

    excute(data){
        
        var boardStart = data[0];
        var boardEnd = data[1];

        var boardList = ManagerBoard.getInstance().getBoardList(boardStart , boardEnd);

        var $tag = document.querySelector("#content");  
        var tag = "";
        tag += 
        `
        <div align="center">
            <br><br>
            <h2>고객센터</h2>
            <hr width="300px" color="#196ab3">
            
            <br><br>
            <br><br>

            <table>
                <tr height="50">
                    <td width="50" align="center">
                        <font size="3" color="#196ab3">번호</font>
                    </td>
                    <td width="50" align="center">
                        <font size="3" color="#196ab3">작성자</font>
                    </td>
                    <td width="100" align="center">
                        <font size="3" color="#196ab3">제목</font>
                    </td>
                    <td width="50" align="center">
                        <font size="3" color="#196ab3">조회수</font>
                    </td>
                </tr>
                
                <tr height="10">
                    <td colspan="7">
                        <hr size="2" color="gray" width="800">
                    </td>
                </tr>
            `;

            for(var i = 0; i < boardList.length; i++ ){
                var board = boardList[i];
                tag += 
                `
                <tr height="50">
                    <td width="50" align="center">
                        <font size="2">${board.boardNo}</font>
                    </td>
                    <td width="50" align="center">
                        <font size="2">${board.boardMemberId}</font>
                    </td>
                    <td width="100" align="center">
                        <span class="a">
                            <font size="2">${board.boardSubject}</font>
                        </span>
                    </td>
                    <td width="50" align="center">
                        <font size="2">${board.boardReadCount}</font>
                    </td>
                </tr>
                `;
            }
            tag += 
            `
            </table>
            <br><br><br><br><br><br>
        </div>
        `;
        $tag.innerHTML = (tag);
    }
}
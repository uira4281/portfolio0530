import { ManagerBook } from "./managerBook.js";


export class MenuBookInfoPage{

    excute(data){
        console.log("MenuBookInfoPage");
        var book = ManagerBook.getInstance().getBook(data);

        var $tag = document.querySelector("#content");  
        var tag = "";
        tag += 
        `
        <div align="center">
            <br>
            <hr width="770px">
            <br>

            <p>
                <font size="5"><b>${book.bookName}</b></font>
                <br>
                <font size="2">${book.bookInfo}</font>
            </p>
            <br>
            <hr width="770px">
            <br>
            <table>
                <tr height="60px">
                    <td rowspan="6" width="350px">
                        <img alt="상품" src="img/${book.bookImage}" height="350px" align="left" border="1px">
                    </td>
                    <td colspan="2" width="400px">
                        <font size="5"><b>정가${book.bookPrice}원</b></font> <br>
                    </td>
                </tr>

                <tr height="60px">
                    <td colspan="2" width="400px">
                        <font size="5" color="#196ab3">
                            <b>판매가${ book.bookPrice - (book.bookPrice / 100 * book.bookDiscount)}원</b>
                        </font>                     
                    </td>
                </tr>
                <tr height="50px">
                    <td width="100px">
                        <font size="2"><b>판매 단위</b></font>
                    </td>
                    <td width="300px">
                        <font size="2">1개</font>
                    </td>
                </tr>
                <tr height="50px">
                    <td width="100px">
                        <font size="2"><b>배송비</b></font>
                    </td>
                    <td width="300px">
                        <font size="2">무료배송</font>
                    </td>
                </tr>


                <tr height="60px">
					<td width="100px">
						<font size="2"><b>배송일정</b></font>
					</td>
					<td width="300px">
						<font size="2">지금 주문하면 다음날 오후 도착 예정<br></font>
						<font size="1" color="#196ab3">[바로드림]인터넷으로 주문하고 매장에서 직접 수령가능</font>
					</td>
				</tr>
				<tr height="60px">
					<td width="100px">
						<font size="2"><b>구매수량</b></font>
					</td>
					<td width="300px">
						<input type="number" name="buyCount" min="1" max="100" value="1">				
					</td>
				</tr>
                <tr height="90px">
                    <td colspan="3" align="right">    
                        <span class="a">              
                            <input type="image" id="btn-cartAddPro" src="img/sendCart.jpg" width="225px">
                        </span>
                    </td>
                </tr>

            </table>


            <!-- 상세 이미지 -->
    
            <hr width="770px">
            <br>
            <table>
                <tr>
                    <td align="center">
                        <img  src="img/${book.bookContentImage}" width="770px" align="left" border="1px">
                    </td>
                </tr>
            </table>
            </div>
        `;
        $tag.innerHTML = (tag);

        var $btn= document.querySelector('#btn-cartAddPro');
        $btn.addEventListener('click', this.cartAddPro);

    }

    cartAddPro = (event) => {
        var data = [];
        
    }
}


export class MenuCartPage{

    excute(data){
        
        var $tag = document.querySelector("#content");  
        var tag = "";
        tag += 
        `
        <div align="center">
            <br><br>
            <h2>장바구니</h2>
            <hr width="300px" color="#196ab3">
            <br><br>


        </div>
        `;
        $tag.innerHTML = (tag);
    }
}
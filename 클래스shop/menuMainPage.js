

export class MenuMainPage{
 
    excute(data){

        var $tag = document.querySelector("#content");  
        var tag = "";
        tag +=
        `
            <img src=img/banner01.jpg>
        `;
        $tag.innerHTML = (tag);
    }
}   
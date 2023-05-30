let priceList= [
        800,800,800,800,800,500,500,500,500,1000,
        1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,
        1500,1500,1500,1500,1500,1500,2000,2000,2000,1000   
    ]
let adminCountList= [
    100,100,100,100,100,100,100,100,100,100,
    50,50,50,50,50,50,50,50,50,50,
    0,0,0,10,10,10,30,30,30,99
];
let userCountList= [
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0
];
let moneyList= [10000, 5000, 1000, 500, 100];

function setView() {
    let $menuTable= document.querySelector("#menuTable");

    let $tr1;
    let $tr2;
    let $tr3;
    for(let i=0; i<priceList.length; i++) {
        if(i%10==0) {
            $tr1= document.createElement("tr");
            $tr2= document.createElement("tr");
            $tr3= document.createElement("tr");
        }
            let $td1= document.createElement("td");
            $td1.classList= "menuTableTd1";
            let $img= document.createElement("img");
            $img.classList= "menuTableImg";
            $img.src= "Img/"+(i)+".png";
            $td1.append($img);
            $tr1.append($td1);

            let $td3= document.createElement("td");
            $td3.classList= "menuTableTd3";
            let $button= document.createElement("button");
            $button.classList= "menuTableBtn";
            $button.innerText= priceList[i];
            $button.addEventListener("click", btnEvent);
            $button.style.cursor = "pointer";
            $td3.append($button);
            $tr3.append($td3);
            $menuTable.append($tr1, $tr2, $tr3);
    }
    let $menuTableBtn= document.querySelectorAll(".menuTableBtn");
    for(let i=0; i<adminCountList.length; i++) {
        if(adminCountList[i]==0) {
            $menuTableBtn[i].innerHTML= "<span style='color:black; font-size:25px;'>매진</span>"
        }
    }
   
}

// money
let sum= 0;
let total= 0;
let moneyBtnList= document.querySelectorAll(".moneyBtn");

for(let i=0; i<moneyBtnList.length; i++) {
    moneyBtnList[i].addEventListener("click", moneyEvent);
}

function moneyEvent(e) {
    total= document.querySelector("#priceTd1");
    for(let i=0; i<moneyList.length; i++) {
        if(e.target==moneyBtnList[i]) {
            sum += Number(moneyList[i]);
            total.innerHTML= "<span style='color: red; font-size:30px;'>사용가능 금액:"+String(sum)+"원</span>";
        }
    }
}

// menu
let count= 0;
let imgTable= document.querySelector("#imgTable");

function btnEvent(e) {
    let btnList= document.querySelectorAll(".menuTableBtn");
    total= document.querySelector("#priceTd1");
    
    for(let i=0; i<priceList.length; i++) {
        if(e.target==btnList[i]) {
            if(sum>=priceList[i] && adminCountList[i]>0){
                if(count%10==0) {
                    $tr= document.createElement("tr");
                    imgTable.append($tr);
                }
                sum -= Number(priceList[i]);
                total.innerHTML= "<span style='color: red'>사용가능 금액:"+String(sum)+"원</span>";
                let $td= document.createElement("td");
                let $img= document.createElement("img");
                $img.classList= "userItemImg";
                if(e.target==btnList[29]) {
                    let ran= parseInt(Math.random()*28);
                    $img.src= "Img/"+(ran)+".png";
                } else {
                    $img.src= "Img/"+(i)+".png";
                }
                $td.append($img);
                $tr.append($td);
                count++;
            }
        }
    }
}

let priceBtn= document.querySelector("#priceBtn");
priceBtn.addEventListener("click",changeEvent);

let changeList3= document.querySelectorAll(".receiptTd3");
let changeList4= document.querySelectorAll(".receiptTd4");
let moneyBtn= document.querySelectorAll(".moneyBtn");
let footerReceipt= document.querySelector("#footerReceipt");
let priceTd1= document.querySelector("#priceTd1")

let list= [0, 0, 0, 0, 0];

// 영수증
function changeEvent(e) {

    let temp= sum;
    for(let i=0; i<moneyList.length; i++) {
        if(temp>=moneyList[i]) {
            temp -= moneyList[i];
            list[i]++;
            i--;
        } else {
            i++;
        }
    }
    for(let i=0; i<changeList4.length; i++) {
        changeList4[i].innerText= list[i];
    }

    for(let i=0; i<moneyBtn.length; i++) {
        moneyBtn[i].setAttribute("disabled","disabled");
    }
    total.innerHTML= "<span style='color: red; font-size:25px;'>사용가능 금액:"+0+"원</span>";
    footerReceiptEvent();
}
function footerReceiptEvent(e) {
    footerReceipt.style.display= "block";
}


let step= 0;
let count= 0;
let garo= 4;
let sero= 4;
let size= garo*sero;
let imgList= [];
let clickList= [];
let fronList= [];
let backList= [];



function viewGame() {
    step++;
    count= 0;
    //  플레이테이블생성
    let $playTable= document.querySelector("#playTable");
    let $tr;
    for(let i=0; i<size; i++) {
        let j= i;
        if(i%4==0) {
            $tr= document.createElement("tr");
            $tr.classList= "playTableTr";
            $playTable.append($tr);
        }
        let $td= document.createElement("td");
        $td.classList= "playTableTd";
        let $img= document.createElement("img");
        $img.classList= "playTableImg";
        if(i%2==1) {
            j--;
        }
        $img.src= "img/"+((step-1)*8+parseInt(j/2))+".png";
        $td.append($img);
        $tr.append($td);
    }
    // 카드셔플
    let $playTableImg= document.querySelectorAll(".playTableImg");
    for(let i=0; i<100; i++) {
        let r1= parseInt(Math.random()*size);
        let r2= parseInt(Math.random()*size);
        
        let temp= $playTableImg[r1].src;
        $playTableImg[r1].src= $playTableImg[r2].src;
        $playTableImg[r2].src= temp;
    }

    // 5초후 게임시작
    // setTimeout(function(){
    //     setGame();
    // },5000);

    // setGame();
}

function setGame() {
    alert("게임시작");

    let $playTableImg= document.querySelectorAll(".playTableImg");

    // 카드데이터 저장
    for(let i=0; i<size; i++) {
        imgList.push($playTableImg[i].src);
    }

    // 뒷면 + 클릭
    for(let i=0; i<size; i++) {
        $playTableImg[i].alt= $playTableImg[i].src;
        $playTableImg[i].src= "img/back.png";
        $playTableImg[i].addEventListener("click",clickEvent);
    }
}

function clickEvent(e) {
    clickList.push(e.target);

    if(clickList.length==2) {
        if(clickList[0].src==clickList[1].src) {
            clickList[0].src= "";
            clickList[1].src= "";
            count++;
            
            console.log(count);
            if(count==size/2) {
                alert("게임클리어!!");
                if(step==4) {
                    alert("ALL CLEAR!!!");
                    removeTable();
                } else {
                    confirm("다음 단계 도전하기");

                    if(confirm) {
                        removeTable();
                        viewGame();
                    } else {
                        removeTable();
                    }
                }
            }
        }
        clickList.length= 0;
    }
}

function removeTable() {
    let $playTableTr= document.querySelectorAll(".playTableTr");
    for(let i=0; i<$playTableTr.length; i++) {
        $playTableTr[i].remove();
    }
}

viewGame();
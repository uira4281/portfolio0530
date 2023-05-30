let me = "";
let com = "";
let list = [];
let turn = true;
let game = 0;

function selectPlayer(player) {
    me = player;
    if(me == "black") {
        com = "white";
    } else {
        com = "black";
        turn= false;
    }
    
    // 화면 지우기
    document.querySelector("#mainTable").remove();

    init();
}

function drawHeader() {
    let $headerTable = document.createElement("table");
    $headerTable.id = "headerTable";

    let $tr = document.createElement("tr");
    let $td = document.createElement("td");
    $tr.append($td);
    $headerTable.append($tr);

    document.querySelector("#gameTableTd").append($headerTable);
}


function drawTurnTable() {
    let $turnTable = document.createElement("table");
    $turnTable.id = "turnTable";

    let $tr = document.createElement("tr");

    let $td = document.createElement("td");
    let $playerBtn = document.createElement("button");
    $playerBtn.classList = "playerBtn";
    $playerBtn.innerText = "black's Turn";
    $td.append($playerBtn);
    $tr.append($td);
    
    $td = document.createElement("td");
    $playerBtn = document.createElement("button");
    $playerBtn.classList = "playerBtn";
    $playerBtn.innerText = "white's Turn";
    $td.append($playerBtn);
    $tr.append($td);
    
    $turnTable.append($tr);

    document.querySelector("#gameTableTd").append($turnTable);
}

function drawContentTable() {
    let $contentTable = document.createElement("table");
    $contentTable.id = "contentTable";

    let $tr;
    for(let i=0; i<100; i++) {
        if(i%10==0) {
            $tr= document.createElement("tr");
            $contentTable.append($tr);
        }
        let $td= document.createElement("td");
        $td.classList= "block";
        $tr.append($td);
    }
    document.querySelector("#gameTable").append($contentTable);
}

function init() {
    drawHeader();
    drawTurnTable();
    drawContentTable();

    for(let i=0; i<10; i++) {
        let temp= [0,0,0,0,0,0,0,0,0,0];
        list.push(temp);
    }

    if(me=="black") {
        document.querySelectorAll(".playerBtn")[0].style.backgroundColor = "black";
        com= "white";
    } else {
        document.querySelectorAll(".playerBtn")[1].style.backgroundColor = "black";
        com= "black";
    }

    let blockList= document.querySelectorAll(".block");
    for(let i=0; i<blockList.length; i++) {
        blockList[i].addEventListener("click",mark);
    }
}

function mark(e) {
    let $turnTable= document.createElement("table");
    $turnTable.id= "turnTable";
    let $contentTable= document.querySelector("#contentTable");

    let y= 0;
    let x= 0;
    for(let i=0; i<10; i++) {
        for(let j=0; j<10; j++) {
            if(e.target==$contentTable.children[i].children[j]) {
                y= i;
                x= j;
            }
        }
    }

    if($contentTable.children[y].children[x].innerText==0) {
        if(document.querySelectorAll(".playerBtn")[0].style.backgroundColor == "") {
            document.querySelectorAll(".playerBtn")[0].style.backgroundColor = "black";
            document.querySelectorAll(".playerBtn")[1].style.backgroundColor = "";

            list[y][x] = 2;
        } else {
            document.querySelectorAll(".playerBtn")[0].style.backgroundColor = "";
            document.querySelectorAll(".playerBtn")[1].style.backgroundColor = "black";
            
            list[y][x] = 1;
        }
        console.log(list);

        if(turn) {
            $contentTable.children[y].children[x].innerText= "●";
        } else {
            $contentTable.children[y].children[x].innerText= "○";
        }

        $contentTable.children[y].children[x].style.fontSize = "80px";
        $contentTable.children[y].children[x].style.fontWeight = "bold";
        
        turn= !turn;
    }

    let result= checkWin();
    if(result==1) {
        document.querySelector("#headerTable").innerText= "Player Black win!!";
        removeEvent();
        document.querySelector("#replayBtn").style.display= "block";
    } else if(result==2) {
        document.querySelector("#headerTable").innerText= "Player White win!!";
        removeEvent();
        document.querySelector("#replayBtn").style.display= "block";
    } else if(result==3) {
        document.querySelector("#headerTable").innerText= "draw...";
        removeEvent();
        document.querySelector("#replayBtn").style.display= "block";
    }
}

function removeEvent() {
    let blockList= document.querySelectorAll(".block");
    for(let i=0; i<blockList.length; i++) {
        blockList[i].removeEventListener("click", mark);
        blockList[i].style.cursor= "auto";
    }
}

function checkWin() {

    let win1= false;
    let win2= false;

    // 가로 세로 검사
    for(let i=0; i<10; i++) {
        let count1= 0;
        let count2= 0;
        let cnt1= 0;
        let cnt2= 0;
        for(let j=0; j<10; j++) {
            if(list[i][j]==1){
                count1++;
            }
            if(list[i][j]==2) {
                count2++;
            }
            if(count1>=5) {
                win1= true;
            }
            if(count2>=5) {
                win2= true;
            }

            if(list[j][i]==1) {
                cnt1++;
            }
            if(list[j][i]==2) {
                cnt2++;
            }
            if(cnt1>=5) {
                win1= true;
            }
            if(cnt2>=5){
                win2= true;
            }
        }
    }

    for(let i=0; i<list.length-4; i++) {
        for(let j=0; j<list[i].length-4; j++) {
            if(list[i][j]==1 && list[i+1][j+1]==1 && list[i+2][j+2]==1 && list[i+3][j+3]==1 && list[i+4][j+4]==1){
                win1= true;
            }
            if(list[i][j]==2 && list[i+1][j+1]==2 && list[i+2][j+2]==2 && list[i+3][j+3]==2 && list[i+4][j+4]==2){
                win2= true;
            }
        }
    }

    for(let i=list.length-1; i>=4; i--) {
        for(let j=list.length[i]-1; j>=4; j--) {
            if(list[i][j]==1 && list[i-1][j-1]==1 && list[i-2][j-2]==1 && list[i-3][j-3]==1 && list[i-4][j-4]==1) {
                win1= true;
            }
            if(list[i][j]==2 && list[i-1][j-1]==2 && list[i-2][j-2]==2 && list[i-3][j-3]==2 && list[i-4][j-4]==2) {
                win2= true;
            }
        }
    }
    


    if(win1) {
        game= 1;
    }
    if(win2) {
        game= 2;
    }

    // 무승부
    if(!win1 && !win2) {
        let count= 0;
        for(let i=0; i<list.length; i++) {
            for(let j=0; j<list[i].length; j++) {
                if(list[i][j]==0) {
                    count++;
                }
            }
        }
        if(count==0) {
            game= 3;
        }
    }
    return game;
}

function replay() {
    location.href="index.html";
}
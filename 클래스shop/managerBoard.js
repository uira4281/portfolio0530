

export class ManagerBoard{
    static instance = new ManagerBoard()
    static getInstance(){
        return ManagerBoard.instance;
    }

    start(){
        this.boardList = [];
        this.setSampleData();   
    }

    setSampleData(){
        this.boardList = [
            {"boardNo" :  1, "boardMemberId" : "qwer", "boardSubject" :  "제목1", "boardContent" :  "내용1", "boardReadCount" : 5},
            {"boardNo" :  2, "boardMemberId" : "asdf", "boardSubject" :  "제목2", "boardContent" :  "내용2", "boardReadCount" : 1},
            {"boardNo" :  3, "boardMemberId" : "qwer", "boardSubject" :  "제목3", "boardContent" :  "내용3", "boardReadCount" : 2},
            {"boardNo" :  4, "boardMemberId" : "qwer", "boardSubject" :  "제목4", "boardContent" :  "내용4", "boardReadCount" : 0},
            {"boardNo" :  5, "boardMemberId" : "asdf", "boardSubject" :  "제목5", "boardContent" :  "내용5", "boardReadCount" : 7},
            {"boardNo" :  6, "boardMemberId" : "qwer", "boardSubject" :  "제목6", "boardContent" :  "내용6", "boardReadCount" : 10},
            {"boardNo" :  7, "boardMemberId" : "asdf", "boardSubject" :  "제목7", "boardContent" :  "내용7", "boardReadCount" : 6},
            {"boardNo" :  8, "boardMemberId" : "qwer", "boardSubject" :  "제목8", "boardContent" :  "내용7", "boardReadCount" : 1},
            {"boardNo" :  9, "boardMemberId" : "asdf", "boardSubject" :  "제목9", "boardContent" :  "내용9", "boardReadCount" : 0},
            {"boardNo" : 10, "boardMemberId" : "qwer", "boardSubject" : "제목10", "boardContent" : "내용10", "boardReadCount" : 2},
            {"boardNo" : 11, "boardMemberId" : "hello", "boardSubject" : "제목11", "boardContent" : "내용11", "boardReadCount" : 1}
        ];
    }

    getBoardList(start , end){
        //console.log(start , end);
        if(end > this.boardList.length){
            end = this.boardList.length; // 게시글이 초과되면 안되므로 막아준다.
        }
        var tempList = [];
        for(var i = start; i < end; i++){
            tempList.push(this.boardList[i]);
        }
        return tempList;
    }

}
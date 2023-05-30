
export class ManagerMember{
    static instance = new ManagerMember()
    static getInstance(){
        return ManagerMember.instance;
    }

    start(){
        this.memberList = [];
        this.setSampleData();   
    }

    setSampleData(){
        this.memberList = [
            {"memberNo" : 1001 , "memberId" : "admin" , "memberPw" : "admin", "memberName" : "관리자", "memberEmail" : "admin@admin.com"},
            {"memberNo" : 1002 , "memberId" : "qwer"  , "memberPw" : "1234" , "memberName" : "홍길동", "memberEmail" : "kim@daum.net"},
            {"memberNo" : 1003 , "memberId" : "asdf"  , "memberPw" : "1234" , "memberName" : "이수정", "memberEmail" : "lee@hotmail.com"},
        ];  
    }

    putMember(data){
        var lastNumber = this.getLastNumber();
        var member = {};
        member.memberNo= lastNumber + 1;
        member.memberId = data[0];
        member.memberPw = data[1];
        member.memberName = data[2];
        member.memberEmail = data[3];
        this.memberList.push(member);    
        console.log(this.memberList);  
    }

    loginMember(data){
        console.log(data , this.memberList);
        for (var i in this.memberList){
            var member = this.memberList[i];
            if(data[0] == member.memberId && data[1] == member.memberPw){
                return member;
            }
        }
        return null;
    }

    getLastNumber(){
        var mx = 0;
        for (var i in this.memberList){
            var member = this.memberList[i];
            if (mx < member.memberNo){
                mx = member.memberNo;
            }
        }
        return mx;
    }

    removeMember(data){
        for (var i in this.memberList){
            var member = this.memberList[i];
            if (member.memberId == data){
                this.memberList.splice(i , 1);
                break
            }
        }
    }
}
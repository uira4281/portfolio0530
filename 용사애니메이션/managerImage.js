import { NodeImage } from "./nodeImage.js";
import { ManagerGame } from "./managerGame.js";

export class ManagerImage {
    static instance = new ManagerImage()
    static getInstance(){
        return this.instance;
    }

    start(){
        this.imageList = {};        
        this.managerImageSetList();
    }

    managerImageSetList(){
        this.managerImageSet("타이틀_배경화면" , 1280, 720 , "img/타이틀/타이틀_배경화면.png");
        this.managerImageSet("타이틀_제목" , 530, 240 , "img/타이틀/타이틀_제목.png");
        this.managerImageSet("타이틀_버튼_게임시작_on" , 200, 70 , "img/타이틀/타이틀_버튼_게임시작_on.png");
        this.managerImageSet("타이틀_버튼_게임시작_off" , 200, 70 , "img/타이틀/타이틀_버튼_게임시작_off.png");


        this.managerImageSet("로비_배경화면" , 1280, 720 , "img/로비/로비_배경화면.jpg");

        this.managerImageSet("로비_버튼_start_on" , 400, 140 , "img/로비/로비_버튼_start_on.png");
        this.managerImageSet("로비_버튼_start_off" , 400, 140 , "img/로비/로비_버튼_start_off.png");
        this.managerImageSet("로비_버튼_공격증가_on" , 130, 130 , "img/로비/로비_버튼_공격증가_on.png");
        this.managerImageSet("로비_버튼_공격증가_off" , 130, 130 , "img/로비/로비_버튼_공격증가_off.png");
        this.managerImageSet("로비_버튼_체력증가_on" , 130, 130 , "img/로비/로비_버튼_체력증가_on.png");
        this.managerImageSet("로비_버튼_체력증가_off" , 130, 130 , "img/로비/로비_버튼_체력증가_off.png");
        this.managerImageSet("로비_버튼_이속증가_on" , 130, 130 , "img/로비/로비_버튼_이속증가_on.png");
        this.managerImageSet("로비_버튼_이속증가_off" , 130, 130 , "img/로비/로비_버튼_이속증가_off.png");
        
        this.managerImageSet("로비_버튼_뒤로가기_on" , 40, 40 , "img/로비/로비_버튼_뒤로가기_on.png");
        this.managerImageSet("로비_버튼_뒤로가기_off" , 40, 40 , "img/로비/로비_버튼_뒤로가기_off.png");
        

        this.managerImageSet("셀렉트_배경화면" , 1280, 720 , "img/셀렉트/셀렉트_배경화면.png");
        this.managerImageSet("셀렉트_버튼_뒤로가기_on" , 40, 40 , "img/셀렉트/셀렉트_버튼_뒤로가기_on.png");
        this.managerImageSet("셀렉트_버튼_뒤로가기_off" , 40, 40 , "img/셀렉트/셀렉트_버튼_뒤로가기_off.png");
        this.managerImageSet("셀렉트_버튼_01_on" , 100, 100 , "img/셀렉트/셀렉트_버튼_01_on.png");
        this.managerImageSet("셀렉트_버튼_01_off" , 100, 100 , "img/셀렉트/셀렉트_버튼_01_off.png");
        this.managerImageSet("셀렉트_버튼_02_on" , 100, 100 , "img/셀렉트/셀렉트_버튼_02_on.png");
        this.managerImageSet("셀렉트_버튼_02_off" , 100, 100 , "img/셀렉트/셀렉트_버튼_02_off.png");
        this.managerImageSet("셀렉트_버튼_03_on" , 100, 100 , "img/셀렉트/셀렉트_버튼_03_on.png");
        this.managerImageSet("셀렉트_버튼_03_off" , 100, 100 , "img/셀렉트/셀렉트_버튼_03_off.png");
        this.managerImageSet("셀렉트_버튼_04_on" , 100, 100 , "img/셀렉트/셀렉트_버튼_04_on.png");
        this.managerImageSet("셀렉트_버튼_04_off" , 100, 100 , "img/셀렉트/셀렉트_버튼_04_off.png");
        this.managerImageSet("셀렉트_버튼_05_on" , 100, 100 , "img/셀렉트/셀렉트_버튼_05_on.png");
        this.managerImageSet("셀렉트_버튼_05_off" , 100, 100 , "img/셀렉트/셀렉트_버튼_05_off.png");
        this.managerImageSet("셀렉트_버튼_06_on" , 100, 100 , "img/셀렉트/셀렉트_버튼_06_on.png");
        this.managerImageSet("셀렉트_버튼_06_off" , 100, 100 , "img/셀렉트/셀렉트_버튼_06_off.png");
        this.managerImageSet("셀렉트_버튼_07_on" , 100, 100 , "img/셀렉트/셀렉트_버튼_07_on.png");
        this.managerImageSet("셀렉트_버튼_07_off" , 100, 100 , "img/셀렉트/셀렉트_버튼_07_off.png");
        this.managerImageSet("셀렉트_버튼_08_on" , 100, 100 , "img/셀렉트/셀렉트_버튼_08_on.png");
        this.managerImageSet("셀렉트_버튼_08_off" , 100, 100 , "img/셀렉트/셀렉트_버튼_08_off.png");
        this.managerImageSet("셀렉트_버튼_09_on" , 100, 100 , "img/셀렉트/셀렉트_버튼_09_on.png");
        this.managerImageSet("셀렉트_버튼_09_off" , 100, 100 , "img/셀렉트/셀렉트_버튼_09_off.png");      
        this.managerImageSet("셀렉트_버튼_10_on" , 100, 100 , "img/셀렉트/셀렉트_버튼_10_on.png");
        this.managerImageSet("셀렉트_버튼_10_off" , 100, 100 , "img/셀렉트/셀렉트_버튼_10_off.png");

        
        this.managerImageSet("스테이지01_파란배경" , 1280, 720 , "img/스테이지01/스테이지01_파란배경.jpg");
        this.managerImageSet("스테이지01_왕실배경" , 1280, 720 , "img/스테이지01/스테이지01_왕실배경.png");
        this.managerImageSet("스테이지01_구름1" , 250, 110 , "img/스테이지01/스테이지01_구름1.png");
        this.managerImageSet("스테이지01_구름2" , 350, 150 , "img/스테이지01/스테이지01_구름2.png");
        this.managerImageSet("스테이지01_구름3" , 200, 100 , "img/스테이지01/스테이지01_구름3.png");
        this.managerImageSet("스테이지01_구름4" , 380, 200 , "img/스테이지01/스테이지01_구름4.png");

        this.managerImageSet("player_idle_r_01" , 350, 420 , "img/플레이어/player_idle_r_01.png");
        this.managerImageSet("player_idle_r_02" , 350, 420 , "img/플레이어/player_idle_r_02.png");
        this.managerImageSet("player_idle_r_03" , 350, 420 , "img/플레이어/player_idle_r_03.png");

        this.managerImageSet("player_work_r_01" , 350, 420 , "img/플레이어/player_work_r_01.png");
        this.managerImageSet("player_work_r_02" , 350, 420 , "img/플레이어/player_work_r_02.png");
        this.managerImageSet("player_work_r_03" , 350, 420 , "img/플레이어/player_work_r_03.png");
        this.managerImageSet("player_work_r_04" , 350, 420 , "img/플레이어/player_work_r_04.png");

        this.managerImageSet("player_idle_l_01" , 350, 420 , "img/플레이어/player_idle_l_01.png");
        this.managerImageSet("player_idle_l_02" , 350, 420 , "img/플레이어/player_idle_l_02.png");
        this.managerImageSet("player_idle_l_03" , 350, 420 , "img/플레이어/player_idle_l_03.png");

        this.managerImageSet("player_work_l_01" , 350, 420 , "img/플레이어/player_work_l_01.png");
        this.managerImageSet("player_work_l_02" , 350, 420 , "img/플레이어/player_work_l_02.png");
        this.managerImageSet("player_work_l_03" , 350, 420 , "img/플레이어/player_work_l_03.png");
        this.managerImageSet("player_work_l_04" , 350, 420 , "img/플레이어/player_work_l_04.png");


        this.managerImageSet("player_dead_l_01" , 350, 420 , "img/플레이어/player_dead_l_01.png");
        this.managerImageSet("player_dead_l_02" , 350, 420 , "img/플레이어/player_dead_l_02.png");
        this.managerImageSet("player_dead_l_03" , 350, 420 , "img/플레이어/player_dead_l_03.png");
        this.managerImageSet("player_dead_l_04" , 350, 420 , "img/플레이어/player_dead_l_04.png");
        this.managerImageSet("player_dead_l_05" , 350, 420 , "img/플레이어/player_dead_l_05.png");

        this.managerImageSet("player_dead_r_01" , 350, 420 , "img/플레이어/player_dead_r_01.png");
        this.managerImageSet("player_dead_r_02" , 350, 420 , "img/플레이어/player_dead_r_02.png");
        this.managerImageSet("player_dead_r_03" , 350, 420 , "img/플레이어/player_dead_r_03.png");
        this.managerImageSet("player_dead_r_04" , 350, 420 , "img/플레이어/player_dead_r_04.png");
        this.managerImageSet("player_dead_r_05" , 350, 420 , "img/플레이어/player_dead_r_05.png");




        this.managerImageSet("스킬_검_r_01" , 300, 300 , "img/스킬/스킬_검_r_01.png");
        this.managerImageSet("스킬_검_r_02" , 300, 300 , "img/스킬/스킬_검_r_02.png");
        this.managerImageSet("스킬_검_r_03" , 300, 300 , "img/스킬/스킬_검_r_03.png");

        this.managerImageSet("스킬_검_l_01" , 300, 300 , "img/스킬/스킬_검_l_01.png");
        this.managerImageSet("스킬_검_l_02" , 300, 300 , "img/스킬/스킬_검_l_02.png");
        this.managerImageSet("스킬_검_l_03" , 300, 300 , "img/스킬/스킬_검_l_03.png");

    
        this.managerImageSet("사이클롭스_가만히_l_01" , 270, 320 , "img/사이클롭스/사이클롭스_가만히_l_01.png");
        this.managerImageSet("사이클롭스_가만히_l_02" , 270, 320 , "img/사이클롭스/사이클롭스_가만히_l_02.png");
        this.managerImageSet("사이클롭스_가만히_l_03" , 270, 320 , "img/사이클롭스/사이클롭스_가만히_l_03.png");

        this.managerImageSet("사이클롭스_가만히_r_01" , 270, 320 , "img/사이클롭스/사이클롭스_가만히_r_01.png");
        this.managerImageSet("사이클롭스_가만히_r_02" , 270, 320 , "img/사이클롭스/사이클롭스_가만히_r_02.png");
        this.managerImageSet("사이클롭스_가만히_r_03" , 270, 320 , "img/사이클롭스/사이클롭스_가만히_r_03.png");

        this.managerImageSet("사이클롭스_이동_l_01" , 270, 320 , "img/사이클롭스/사이클롭스_이동_l_01.png");
        this.managerImageSet("사이클롭스_이동_l_02" , 270, 320 , "img/사이클롭스/사이클롭스_이동_l_02.png");
        this.managerImageSet("사이클롭스_이동_l_03" , 270, 320 , "img/사이클롭스/사이클롭스_이동_l_03.png");
        this.managerImageSet("사이클롭스_이동_l_04" , 270, 320 , "img/사이클롭스/사이클롭스_이동_l_04.png");
        this.managerImageSet("사이클롭스_이동_l_05" , 270, 320 , "img/사이클롭스/사이클롭스_이동_l_05.png");

        this.managerImageSet("사이클롭스_이동_r_01" , 270, 320 , "img/사이클롭스/사이클롭스_이동_r_01.png");
        this.managerImageSet("사이클롭스_이동_r_02" , 270, 320 , "img/사이클롭스/사이클롭스_이동_r_02.png");
        this.managerImageSet("사이클롭스_이동_r_03" , 270, 320 , "img/사이클롭스/사이클롭스_이동_r_03.png");
        this.managerImageSet("사이클롭스_이동_r_04" , 270, 320 , "img/사이클롭스/사이클롭스_이동_r_04.png");
        this.managerImageSet("사이클롭스_이동_r_05" , 270, 320 , "img/사이클롭스/사이클롭스_이동_r_05.png");


        this.managerImageSet("오크_가만히_l_01" , 480, 440 , "img/오크/오크_가만히_01.png");
        this.managerImageSet("오크_가만히_l_02" , 480, 440 , "img/오크/오크_가만히_02.png");
        this.managerImageSet("오크_가만히_l_03" , 480, 440 , "img/오크/오크_가만히_03.png");
        
        this.managerImageSet("오크_가만히_r_01" , 480, 440 , "img/오크/오크_가만히_01_반전.png");
        this.managerImageSet("오크_가만히_r_02" , 480, 440 , "img/오크/오크_가만히_02_반전.png");
        this.managerImageSet("오크_가만히_r_03" , 480, 440 , "img/오크/오크_가만히_03_반전.png");
     
        this.managerImageSet("오크_이동_l_01" , 480, 440 , "img/오크/오크_이동_01.png");
        this.managerImageSet("오크_이동_l_02" , 480, 440 , "img/오크/오크_이동_02.png");
        this.managerImageSet("오크_이동_l_03" , 480, 440 , "img/오크/오크_이동_03.png");
        this.managerImageSet("오크_이동_l_04" , 480, 440 , "img/오크/오크_이동_04.png");
        this.managerImageSet("오크_이동_l_05" , 480, 440 , "img/오크/오크_이동_05.png");
        this.managerImageSet("오크_이동_l_06" , 480, 440 , "img/오크/오크_이동_06.png");
        this.managerImageSet("오크_이동_l_07" , 480, 440 , "img/오크/오크_이동_07.png");
        this.managerImageSet("오크_이동_l_08" , 480, 440 , "img/오크/오크_이동_08.png");
        this.managerImageSet("오크_이동_l_09" , 480, 440 , "img/오크/오크_이동_09.png");
        this.managerImageSet("오크_이동_l_10" , 480, 440 , "img/오크/오크_이동_10.png");
        this.managerImageSet("오크_이동_l_11" , 480, 440 , "img/오크/오크_이동_11.png");

        this.managerImageSet("오크_이동_r_01" , 480, 440 , "img/오크/오크_이동_01_반전.png");
        this.managerImageSet("오크_이동_r_02" , 480, 440 , "img/오크/오크_이동_02_반전.png");
        this.managerImageSet("오크_이동_r_03" , 480, 440 , "img/오크/오크_이동_03_반전.png");
        this.managerImageSet("오크_이동_r_04" , 480, 440 , "img/오크/오크_이동_04_반전.png");
        this.managerImageSet("오크_이동_r_05" , 480, 440 , "img/오크/오크_이동_05_반전.png");
        this.managerImageSet("오크_이동_r_06" , 480, 440 , "img/오크/오크_이동_06_반전.png");
        this.managerImageSet("오크_이동_r_07" , 480, 440 , "img/오크/오크_이동_07_반전.png");
        this.managerImageSet("오크_이동_r_08" , 480, 440 , "img/오크/오크_이동_08_반전.png");
        this.managerImageSet("오크_이동_r_09" , 480, 440 , "img/오크/오크_이동_09_반전.png");
        this.managerImageSet("오크_이동_r_10" , 480, 440 , "img/오크/오크_이동_10_반전.png");
        this.managerImageSet("오크_이동_r_11" , 480, 440 , "img/오크/오크_이동_11_반전.png");

    }

    managerImageSet(imageName , w , h , imagePath){
        var nodeImage = new NodeImage(w , h , imagePath);
        this.imageList[imageName] = nodeImage;
    }

    managerImageGet(imageName){
        return this.imageList[imageName];
    }

    managerImageDraw(imageName , x , y){
        var nodeImage = this.imageList[imageName];     
        if(nodeImage == null){
            return;
        }  
        nodeImage.nodeImageDraw(x , y);

    }
}


export class ManagerKey {
    static instance = new ManagerKey();
    static getInstance(){
        return this.instance;
    }

    start(){
        
        this.keyStayList = {"KeyD" : false , "KeyA" : false , "KeyW" : false , "KeyS" : false };
        this.keyOnceList = {"KeyJ" : "ready" , "KeyK" : "ready"};

        document.addEventListener("keydown", (e) => {
            this.keyStayList[e.code] = true;

            if(this.keyOnceList[e.code] == "ready"){
                this.keyOnceList[e.code] = "push";
            }

        }, false);

        document.addEventListener("keyup", (e) => {
            this.keyStayList[e.code] = false;

            if(this.keyOnceList[e.code] == "wait"){
                this.keyOnceList[e.code] = "ready";
            }
        }, false);

    }
    getKeyStay(key){
        return this.keyStayList[key];
      
    }
    getKeyOnce(key){
        if(this.keyOnceList[key] == "push"){
            this.keyOnceList[key]  = "wait";
            return true;
        }else{
            return false;
        }
        
    }
  
}
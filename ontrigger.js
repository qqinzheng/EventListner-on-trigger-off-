class Listener {
    constructor() {
        this.obj = {};
    }

    on(event, f) {
        if(event==false||f==undefined){
            throw new Error('event should not be null or f is undefined')
        }

        if (event !== false && f !== undefined) {
            if (this.obj[event] == null) {
                this.obj[event] = [f];

            }
            else {
                this.obj[event].push(f);
            }
        }
        //console.log(this.obj[event]);
    }

    off(event, f) {

        if (event == false) {
            throw new Error('event should not be null')
        }
        if (f == undefined) {
            this.obj[event] = [];

        }
        else {
            for (let func of this.obj[event]) {
                if (f ===func) {

                    this.obj[event].splice(this.obj[event].findIndex(f),1);
                    //remove＝arr.splice();remove为删除的元素数组
                    //console.log(this.obj[event]);

                }
            }
        }
    }

    trigger(event)
    {
        if(event==null){
            throw new Error('event should not be null')
        }
        if(this.obj[event]!==null){
            for(let func of this.obj[event]){
                    func();
            }
        }
    }
}

Array.prototype.findIndex = function (f) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == f) {
            return i;
        }
    }
}

//var a =new Listener();

//function abc(){
//};
//function bcd(){
//    console.log('bcd')
//};

//a.on('done',abc);
//a.on('done',bcd);
//a.off('done',abc);
//a.off('done',bcd);
//a.trigger('done');


export {Listener};







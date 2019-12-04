class Doit {

    constructor() {
        this.state=0;
    }

    get counter() {
        console.log("get current state");
        return this.state;
    }

    getState() {
        return this.state;       
    }

    addOne() {
        console.log("current state=" + this.state);
        this.state++;
    }
}

class MyCounter {

    constructor() {
        if (!MyCounter.instance) {
            MyCounter.instance = new Doit();
        }
    }
  
    getInstance() {
        return MyCounter.instance;
    }
  
}

module.exports = MyCounter;
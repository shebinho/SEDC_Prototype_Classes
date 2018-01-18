///////// PROTOTYPES /////////

// function Bus(passengers,color){
//     this.passengers = passengers || 52;
//     this.color = color || "Yellow";

//     this.isMoving = false;
//     this.isWorking = false;
    

// }

// function CustomBus(passengers,color,linenumber){
//     this._super(passengers,color);
//     this.linenumber = linenumber || parseFloat (Math.random()*100).toFixed(0);


// }
// CustomBus.prototype = Object.create(Bus.prototype);
// CustomBus.prototype.constructor = CustomBus;
// CustomBus.prototype._super = Bus;

// CustomBus.prototype.getIsMoving = function(){
//     return this.isMoving;
// }
// CustomBus.prototype.getIsWorking = function(){
//     return this.isWorking;
// }
// CustomBus.prototype.getInfo = function(){
//     return this;
// }


class Bus
{
    constructor(passengers,color)
    {
    this.passengers = passengers || 52;
    this.color = color || "Yellow";
    this.isMoving = false;
    this.isWorking = false;
    }
}

class CustomBus extends Bus{
    constructor(passengers,color,linenumber)
    {
        super(passenger,color);
            this.linenumber = linenumber || this.getRandomLineNumber();
    }
    getRandomLineNumber()
    {
        return parseFloat (Math.random()*100).toFixed(0);
    }
    getIsMoving(){
        return this.isMoving;
    }
    getIsWorking(){
        return this.isWorking;
    }
    getInfo(){
        return this;
    }
}
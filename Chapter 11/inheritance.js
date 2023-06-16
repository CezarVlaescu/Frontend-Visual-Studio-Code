class Car {
    constructor(car, engine, fuel, color){
        this.car = car;
        this.engine = engine;
        this.fuel = fuel;
        this.color = color;
    };
    getEngine(){
        if(this.engine < 20){
            return `The ${this.car} has a weak ${this.engine}-hp engine`;
        }
        else{
            return `The ${this.car} has the engine ${this.engine} for a drive`;
        };
    };
    fuelCheck(){
        while(this.fuel <= 10){
            console.log(`The car is driving : ${this.fuel}`)
            if(this.fuel === 0){
                console.log(`The car has ${this.fuel} and needs a refuel`);
                break;
            }
            this.fuel--;
        };
    };
    colorCheck(){
        return `The car is ${this.car} has color ${this.color}`;
    };
};

class BMW extends Car {
    constructor(){
        super('BMW',6 ,3,'white'); // refer to the proprities from the constructor from the parent class
    }
    getTypes(type){
        BMWtypes = BMWtypes.filter(t => t.car !== type.car); // filter if the BWN car has that type
    };
};

let BMWtypes = ['x-5', 'seria1', 'ankara']
const car = new BMW();
//console.log(car.getTypes());
console.log(car.colorCheck());



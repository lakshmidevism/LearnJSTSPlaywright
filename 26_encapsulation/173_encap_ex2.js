class Car{
    #engine;
    constrcutor(engineName){
        this.#engine = engineName;
    }

    setEngine(engineName){
        this.#engine = engineName;
    }   
}

let car_obj = new Car("petrol");
console.log(car_obj.setEngine("diesel")); 
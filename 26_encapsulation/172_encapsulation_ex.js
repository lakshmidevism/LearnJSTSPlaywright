class Person {
    #child1;
    #child2;

    constructor(name,child1,child2){
        this.name = name;
        this.#child1 = child1;
        this.#child2 = child2;
    }

    getChild(){
        return this.#child1;
    }   

    setChild(set_child){
        this.#child1 = set_child;
    }
}

let p1 = new Person("lakshmi", "jishi", "heeyan");
console.log(p1.name);
console.log(p1.getChild());
p1.setChild("jishi");
console.log(p1.getChild());
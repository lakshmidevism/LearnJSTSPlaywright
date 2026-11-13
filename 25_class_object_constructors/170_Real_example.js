class student {
    static collegeName = "testing pw 4x";
    static mentor = "promod";

    constructor(name, score){
       this.name = name;
       this.score = score; 
    }

    display(){
        console.log(this.name + " " + "belongs to" + " " + student.collegeName + " " + "and his score is" + " " + this.score);
    }

    nameDisplay(){
        return this.name;
    }

}

let s1 = new student("lakshmi", 90);
console.log(s1.display());
console.log(s1.nameDisplay());
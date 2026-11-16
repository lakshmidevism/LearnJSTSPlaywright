class Bug {
    constructor(title,severity){
        this.title = title;
        this.severity = severity;
    }   
    displayBug(){
        console.log(`Bug Title: ${this.title}, Severity: ${this.severity}`);
    }
}

let bug1 = new Bug("Login Issue", "High");
bug1.displayBug();  
let bug2 = new Bug("UI Glitch", "Medium");
bug2.displayBug();

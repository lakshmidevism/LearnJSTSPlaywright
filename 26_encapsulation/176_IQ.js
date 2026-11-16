class Environment {
    constructor(name = "staging",port = 3000){
        this.name = name;
        this.port = port;
    }

    getURL(){
        return `https://${this.name}:${this.port}`;
    }
}
const env1 = new Environment();
const env2 = new Environment("production", 8080);
console.log(env1.getURL());
console.log(env2.getURL());


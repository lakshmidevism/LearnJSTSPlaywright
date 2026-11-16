class credentials {
    #apiKey;
    constructor(user,key){
        this.user = user;
        this.#apiKey = key;
    }

    getApi(){
        return this.#apiKey;
    }
}

let t1 = new credentials("admin", "scecret_keyabc");
console.log(t1.user);

export default class User{
    #name;
    #password;
    #expenses = [];
    #owes = [];
    #group = [];
    constructor(name, password){
        this.#name = name;
        this.#password = password;
    }

}
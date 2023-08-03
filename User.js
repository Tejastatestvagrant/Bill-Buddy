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

    authentication(username,password)
    {
        return (this.name===username && this.password===password);
    }

    addexpense(expense)
    {
        this.#expenses.push(expense);
    }

    addgroup(group)
    {
        this.#group.push(group);
    }
    addowes(owes)
    {
        this.#owes.push(owes);
    }
    

}
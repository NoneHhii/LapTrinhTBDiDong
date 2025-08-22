export class User {
    private name: String;

    constructor(name: String) {
        this.name = name;
    }

    public getter() : String {
        return this.name;
    }

    public setter(name: String) : void {
        this.name = name;
    }
}
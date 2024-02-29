class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let atackType;
        if (this.type === "mago") {
            atackType = "magia";
        } else if (this.type === "guerreiro") {
            atackType = "espada";
        } else if (this.type === "monge") {
            atackType = "artes marciais";
        } else if (this.type === "ninja") {
            atackType = "shuriken";
        }
        console.log(`O ${this.type} atacou usando ${atackType}`);
    }
}

let guerreiro1 = new Hero("Danilo", 21, "mago");
let guerreiro2 = new Hero("Felipe", 25, "guerreiro");
let guerreiro3 = new Hero("Matheus", 21, "monge");
let guerreiro4 = new Hero("Jorge", 25, "ninja");

guerreiro1.atacar();
guerreiro2.atacar();
guerreiro3.atacar();
guerreiro4.atacar();
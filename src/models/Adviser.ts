import { CharacterModel, iCharacter } from "./CharacterModel";

export class Adviser extends CharacterModel implements iCharacter {
    constructor(
        name: string,
        family: string,
        age: number,
        public boss: CharacterModel
    ) {
        super(name, family, age, "adviser");
        this.message = "No sé por qué, pero creo que voy a morir pronto";
    }
}

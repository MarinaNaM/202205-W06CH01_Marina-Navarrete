import { CharacterModel, iCharacter } from "./CharacterModel";

export class Fighter extends CharacterModel implements iCharacter {
    constructor(
        name: string,
        family: string,
        age: number,
        public weapon: string,
        public skill: number
    ) {
        super(name, family, age, "fighter");
        this.message = "Primero pego y luego pregunto";
    }
}

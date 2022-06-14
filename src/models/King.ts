import { CharacterModel, iCharacter } from "./CharacterModel";

export class King extends CharacterModel implements iCharacter {
    constructor(
        name: string,
        family: string,
        age: number,
        public yearsOfReign: number
    ) {
        super(name, family, age, "king");
        this.message = "Vais a morir todos";
    }
}

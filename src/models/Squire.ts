import { CharacterModel, iCharacter } from "./CharacterModel";
import { Fighter } from "./Fighter";

export class Squire extends CharacterModel implements iCharacter {
    constructor(
        name: string,
        family: string,
        age: number,
        public sumission: number,
        public owner: Fighter
    ) {
        super(name, family, age, "squire");
        this.message = "Soy un looser";
    }
}

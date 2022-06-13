import { CharacterModel } from "./CharacterModel";
import { Fighter } from "./Fighter";

export class Squire extends CharacterModel {
    constructor(
        name: string,
        family: string,
        age: number,
        public sumission: number,
        public owner: Fighter
    ) {
        super(name, family, age, "squire");
    }
}

import { CharacterModel } from "./CharacterModel";

export class King extends CharacterModel {
    constructor(
        name: string,
        family: string,
        age: number,
        public yearsOfReign: number
    ) {
        super(name, family, age, "king");
    }
}

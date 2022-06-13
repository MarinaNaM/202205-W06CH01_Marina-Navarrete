import { CharacterModel } from "./CharacterModel";

export class Adviser extends CharacterModel {
    constructor(
        name: string,
        family: string,
        age: number,
        public boss: CharacterModel
    ) {
        super(name, family, age, "adviser");
    }
}

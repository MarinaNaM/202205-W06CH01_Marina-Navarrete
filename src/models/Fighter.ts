import { CharacterModel } from "./CharacterModel";

export class Fighter extends CharacterModel {
    constructor(
        name: string,
        family: string,
        age: number,
        public weapon: string,
        public skill: number
    ) {
        super(name, family, age, "fighter");
    }
}

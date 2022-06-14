import { Adviser } from "./Adviser";
import { Fighter } from "./Fighter";
import { King } from "./King";
import { Squire } from "./Squire";

export interface iCharacter {
    id: number;
    name: string;
    family: string;
    age: number;
    category: "king" | "fighter" | "adviser" | "squire";
    message: string;
    kingdomYears?: number;
    weapon?: string;
    skill?: number;
    submission?: number;
    owner?: Fighter;
    boss?: CharacterModel;
}

export type anyCharacter = CharacterModel | King | Fighter | Adviser | Squire;
export class CharacterModel {
    serie = "GoT";
    isAlive: boolean;
    message: string;
    id: number;
    static generateId(): number {
        return Math.ceil(Math.random() * 100_000);
    }
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public category: "king" | "fighter" | "adviser" | "squire"
    ) {
        this.isAlive = true;
        this.id = CharacterModel.generateId();
        this.message = "";
    }
}

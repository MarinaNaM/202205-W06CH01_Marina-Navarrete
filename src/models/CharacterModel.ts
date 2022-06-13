export interface iCharacter {
    serie: string;
    name: string;
    family: string;
    age: number;
    category: "king" | "fighter" | "adviser" | "squire";
}

export class CharacterModel implements iCharacter {
    id: number;
    serie = "GoT";
    public isAlive: boolean;
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
    }
}

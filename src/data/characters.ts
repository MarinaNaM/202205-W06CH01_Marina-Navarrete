import { Adviser } from "../models/Adviser";
import { CharacterModel } from "../models/CharacterModel";
import { Fighter } from "../models/Fighter";
import { King } from "../models/King";
import { Squire } from "../models/Squire";

export async function createCharacters() {
    const data: Array<CharacterModel> = [
        { ...new King("Joffrey", "Baratheon", 33, 2) },
        { ...new Fighter("Jaime", "Lannister", 33, "espada", 8) },
        { ...new Fighter("Daenerys", "Targaryen", 33, "dragones", 9) },
    ];
    data.push({ ...new Adviser("Tyrion", "Lannister", 33, data[2]) });
    data.push({
        ...new Squire("Bronn", "Aguas Negras", 33, 5, data[1] as Fighter),
    });

    return data;
}

import { CharacterModel } from "../models/CharacterModel";
import { render } from "../utils/test-utils";
import { characterReducer } from "./characters/character.reducer";
import * as ac from "../reducers/characters/action.creator";

const mockCharacters: Array<CharacterModel> = [
    {
        name: "Luis",
        id: 1,
        serie: "GoT",
        isAlive: false,
        family: "Lannister",
        age: 33,
        category: "king",
    },
    {
        name: "Pepe",
        id: 2,
        serie: "GoT",
        isAlive: false,
        family: "Targaryen",
        age: 11,
        category: "adviser",
    },
];

describe("Given the Character Reducer", () => {
    describe("when it is called for load", () => {
        test("then it should return", () => {
            const state = characterReducer(
                [],
                ac.loadCharactersAction(mockCharacters)
            );
            expect(state).toEqual(mockCharacters);
        });
        describe("when it is called for add", () => {
            test("then it should return", () => {
                const state = characterReducer(
                    [],
                    ac.addCharacterAction(
                        new CharacterModel("Venancio", "García", 20, "fighter")
                    )
                );
                expect(state.length).toBe(1);
            });
        });
        describe("when it is called for update", () => {
            test("then it should return", () => {
                const state = characterReducer(
                    mockCharacters,
                    ac.updateCharacterAction({
                        ...mockCharacters[0],
                        isAlive: true,
                    })
                );
                expect(state[0].isAlive).toEqual(true);
            });
        });
        describe("when it is called for delete", () => {
            test("then it should return", () => {
                const state = characterReducer(
                    mockCharacters,
                    ac.deleteCharacterAction(mockCharacters[0])
                );
                expect(state.length).toBe(1);
            });
        });
    });
});

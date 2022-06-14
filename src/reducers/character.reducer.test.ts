import { CharacterModel } from "../models/CharacterModel";
// import { render } from "../utils/test-utils";
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
        message: "",
    },
    {
        name: "Pepe",
        id: 2,
        serie: "GoT",
        isAlive: false,
        family: "Targaryen",
        age: 11,
        category: "adviser",
        message: "",
    },
];

describe("Given the Character Reducer", () => {
    describe("when calling it with action load", () => {
        test("Then it should return a new state with the characters in the action payload", () => {
            const state = characterReducer(
                [],
                ac.loadCharactersAction(mockCharacters)
            );
            // const state: CharacterModel[] = []
            // const actionForTest= ac.loadCharactersAction([mockCharacters])
            // const newState = characterReducer(state, actionForTest)
            expect(state).toStrictEqual(mockCharacters);
        });
        describe("when calling it with action add", () => {
            test("Then it should return a new state with the characters in the action payload", () => {
                const state = characterReducer(
                    [],
                    ac.addCharacterAction(
                        new CharacterModel("Venancio", "García", 20, "fighter")
                    )
                );
                expect(state).toHaveLength(1);
            });
        });
        describe("when calling it with action update", () => {
            test("Then it should return a new state with the characters in the action payload", () => {
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
        describe("when calling it with action delete for one character", () => {
            test("Then it should return a new state with the characters in the action payload", () => {
                const state = characterReducer(
                    mockCharacters,
                    ac.deleteCharacterAction(mockCharacters[0].id)
                );
                expect(state.length).toBe(1);
            });
        });
    });
});

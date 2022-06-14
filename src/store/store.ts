import { configureStore } from "@reduxjs/toolkit";
import { anyCharacter, CharacterModel } from "../models/CharacterModel";
import { characterReducer } from "../reducers/characters/character.reducer";
import { speakerReducer } from "../reducers/speaker/speaker.reducer";

export interface iState {
    characters: Array<anyCharacter>;
    speaker: anyCharacter;
}

const preloadedState = {
    characters: [] as Array<anyCharacter>,
    speaker: { ...new CharacterModel("", "", 0, "king") },
};

export const store = configureStore({
    reducer: {
        characters: characterReducer,
        speaker: speakerReducer,
    },
    preloadedState,
});

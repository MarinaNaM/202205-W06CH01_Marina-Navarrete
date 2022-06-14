import { createReducer } from "@reduxjs/toolkit";
import { CharacterModel } from "../../models/CharacterModel";
import * as ac from "../../reducers/characters/action.creator";

const initialState: Array<CharacterModel> = [];
export const characterReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadCharactersAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(ac.addCharacterAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.updateCharacterAction, (state, action) =>
            state.map((character) =>
                character.id === action.payload.id ? action.payload : character
            )
        )
        .addCase(ac.deleteCharacterAction, (state, action) =>
            state.filter((item) => item.id !== action.payload)
        )
        .addDefaultCase((state) => state);
});

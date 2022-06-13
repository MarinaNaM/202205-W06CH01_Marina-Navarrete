import { createReducer } from "@reduxjs/toolkit";
import { CharacterModel } from "../../models/Character";
import * as ac from "../../reducers/characters/action.creator";

const initialState: Array<CharacterModel> = [];
export const characterReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadTasksAction, (state, action) => [...action.payload])
        .addCase(ac.addCharacterAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.updateCharacterAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteCharacterAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state);
});

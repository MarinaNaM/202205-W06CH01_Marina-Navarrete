import { createAction } from "@reduxjs/toolkit";
import { CharacterModel } from "../../models/CharacterModel";
import { actionTypes } from "./action.types";

export const loadCharactersAction = createAction<Array<CharacterModel>>(
    actionTypes["character@load"]
);

export const addCharacterAction = createAction<CharacterModel>(
    actionTypes["character@add"]
);

export const updateCharacterAction = createAction<CharacterModel>(
    actionTypes["character@update"]
);

export const deleteCharacterAction = createAction<CharacterModel["id"]>(
    actionTypes["character@delete"]
);

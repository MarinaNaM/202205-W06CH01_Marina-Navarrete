import { createAction } from "@reduxjs/toolkit";
import { anyCharacter } from "../../models/CharacterModel";
import { actionTypes } from "./action.types";

export const loadCharactersAction = createAction<Array<anyCharacter>>(
    actionTypes["character@load"]
);

export const addCharacterAction = createAction<anyCharacter>(
    actionTypes["character@add"]
);

export const updateCharacterAction = createAction<anyCharacter>(
    actionTypes["character@update"]
);

export const deleteCharacterAction = createAction<anyCharacter["id"]>(
    actionTypes["character@delete"]
);

export const dieCharacterAction = createAction<anyCharacter>(
    actionTypes["character@die"]
);

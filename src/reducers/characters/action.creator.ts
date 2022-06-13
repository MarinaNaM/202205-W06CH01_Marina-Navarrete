import { createAction } from "@reduxjs/toolkit";
import { CharacterModel } from "../../models/Character";
import { actionTypes } from "./action.types";

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadTasksAction = createAction<Array<CharacterModel>>(
    actionTypes["character@load"].toLocaleString()
);

export const addCharacterAction = createAction<CharacterModel>(
    actionTypes["character@add"].toLocaleString()
);

export const updateCharacterAction = createAction<CharacterModel>(
    actionTypes["character@update"].toLocaleString()
);

export const deleteCharacterAction = createAction<CharacterModel>(
    actionTypes["character@delete"].toLocaleString()
);

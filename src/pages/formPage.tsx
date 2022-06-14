import { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { anyCharacter } from "../models/CharacterModel";
import "./formPage.css";
import * as ac from "../reducers/characters/action.creator";
import { King } from "../models/King";
import { Fighter } from "../models/Fighter";
import { Adviser } from "../models/Adviser";
import { Squire } from "../models/Squire";
import { iState } from "../store/store";

export function FormPage() {
    const initialState = {
        name: "",
        family: "",
        category: "",
        yearsOfReign: "",
        age: "",
        weapon: "",
        skill: "",
        boss: "",
        sumission: "",
        owner: "",
    };
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const characters = useSelector((state: iState) => state.characters);

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        switch (formData.category) {
            case "king":
                dispatch(
                    ac.addCharacterAction({
                        ...new King(
                            formData.name,
                            formData.family,
                            Number(formData.age),
                            Number(formData.yearsOfReign)
                        ),
                    })
                );
                break;
            case "fighter":
                dispatch(
                    ac.addCharacterAction({
                        ...new Fighter(
                            formData.name,
                            formData.family,
                            Number(formData.age),
                            formData.weapon,
                            Number(formData.skill)
                        ),
                    })
                );
                break;

            case "adviser":
                dispatch(
                    ac.addCharacterAction({
                        ...new Adviser(
                            formData.name,
                            formData.family,
                            Number(formData.age),
                            characters.find(
                                (item) => item.name === formData.boss
                            ) as anyCharacter
                        ),
                    })
                );
                break;

            case "squire":
                dispatch(
                    ac.addCharacterAction({
                        ...new Squire(
                            formData.name,
                            formData.family,
                            Number(formData.age),
                            Number(formData.sumission),
                            characters.find(
                                (item) => item.name === formData.owner
                            ) as Fighter
                        ),
                    })
                );
                break;
            default:
                break;
        }
    };

    return (
        <>
            <h3>
                Si desea crear un personaje nuevo, introduzca los datos en el
                siguiente formulario:
            </h3>
            <div className="container">
                <p>Nombre del personaje</p>
                <input
                    name="name"
                    type=""
                    value={formData.name}
                    onChange={handleChange}
                />
                <p>Linaje del personaje</p>
                <input
                    name="family"
                    type=""
                    value={formData.family}
                    onChange={handleChange}
                />
                <p>¿Cuántos años tiene tu personaje?</p>
                <input
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                />
                <p>¿Qué categoría de personaje quiere crear?</p>
                <select name="category" onChange={handleChange}>
                    <option value=""></option>
                    <option value="king">Rey</option>
                    <option value="fighter">Luchador</option>
                    <option value="adviser">Asesor</option>
                    <option value="squire">Escudero</option>
                </select>
                {formData.category === "king" && (
                    <div>
                        <p>Indique cuantos años de reinado ha tenido su rey</p>
                        <input
                            name="yearsOfReign"
                            type="number"
                            value={formData.yearsOfReign}
                            onChange={handleChange}
                        />
                    </div>
                )}
                {formData.category === "fighter" && (
                    <>
                        <div>
                            <p>Nombre del arma</p>
                            <input
                                type="text"
                                name="weapon"
                                id=""
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <p>Puntúe la destreza de su luchador</p>
                            <input
                                type="number"
                                name="skill"
                                id=""
                                min={"0"}
                                max={"10"}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}
                {formData.category === "adviser" && (
                    <div>
                        <p>¿A quién asesora su asesor?</p>
                        <input
                            type="text"
                            name="boss"
                            id=""
                            onChange={handleChange}
                        />
                    </div>
                )}
                {formData.category === "squire" && (
                    <>
                        <div>
                            <p>Indique el grado de peloteo</p>
                            <input
                                type="number"
                                name="sumission"
                                min={"0"}
                                max={"10"}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <p>¿De quién es escudero?</p>
                            <input
                                type="text"
                                name="owner"
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}
            </div>
            <button onClick={handleSubmit}>CREAR</button>
        </>
    );
}

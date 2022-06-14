import { useDispatch } from "react-redux";
import { anyCharacter } from "../models/CharacterModel";
import { dieCharacterAction } from "../reducers/characters/action.creator";
import * as ac from "../reducers/speaker/action.creators";
import { King } from "../models/King";
import { Fighter } from "../models/Fighter";
import { Adviser } from "../models/Adviser";
import { Squire } from "../models/Squire";
import { emoji } from "../data/emojis";
import "./card.css";

export function Card({ character }: { character: anyCharacter }) {
    const dispatch = useDispatch();

    function handleClick(buttonName: string) {
        if (buttonName === "habla") {
            dispatch(ac.loadSpeakerAction(character));
            setTimeout(() => {
                dispatch(ac.unloadSpeakerAction());
            }, 2000);
        } else {
            console.log("sergio");
            dispatch(dieCharacterAction(character));
        }
    }

    let templateOptional: JSX.Element = <></>;

    if (character instanceof King) {
        templateOptional = <li>Años de reinado: {character.yearsOfReign}</li>;
    } else if (character instanceof Fighter) {
        templateOptional = (
            <>
                <li>Arma: {character.weapon}</li>
                <li>Destreza: {character.skill}</li>
            </>
        );
    } else if (character instanceof Adviser) {
        templateOptional = <li>Asesora a: {character.boss.name}</li>;
    } else if (character instanceof Squire) {
        templateOptional = (
            <>
                <li>Peloteo: {character.sumission}</li>
                <li>Sirve a: ${character.owner.name}</li>
            </>
        );
    }

    let template = (
        <li className={`character col ${character.name}`}>
            <div className="card character__card">
                <img
                    src={`img/${character.name.toLowerCase()}.jpg`}
                    alt={character.name + " y " + character.family}
                    className={`character__picture card-img-top 
                        ${character.isAlive ? "" : "reves"}`}
                />
                <div className="card-body">
                    <h2 className="character__name card-title h4">
                        {character.name} y {character.family}
                    </h2>
                    <div className="character__info">
                        <ul className="list-unstyled">
                            <li>Edad: {character.age} años</li>
                            <li>
                                Estado:
                                {character.isAlive ? (
                                    <i className="fas fa-thumbs-up"></i>
                                ) : (
                                    <i className="fas fa-thumbs-down"></i>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="character__overlay">
                        <ul className="list-unstyled">{templateOptional}</ul>
                        <div className="character__actions">
                            <button
                                className="character__action btn"
                                onClick={() => handleClick("habla")}
                            >
                                habla
                            </button>
                            <button
                                className="character__action btn"
                                onClick={() => handleClick("muere")}
                            >
                                muere
                            </button>
                        </div>
                    </div>
                </div>
                <i className="emoji">{emoji[character.category]}</i>
            </div>
        </li>
    );

    return template;
}

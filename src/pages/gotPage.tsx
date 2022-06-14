import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCharacters } from "../data/characters";
import { iState } from "../store/store";
import * as ac from "../reducers/characters/action.creator";
import { Card } from "../components/card";
import { Communications } from "../components/communications";
import home from "./home.module.css";

export function GotPage() {
    const characters = useSelector((state: iState) => state.characters);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        createCharacters().then((characters) => {
            dispatch(ac.loadCharactersAction(characters));
        });
    }, [dispatch]);

    const handleNavigate = () => {
        navigate("/form");
    };

    return (
        <main className={home.main}>
            <div className="app container">
                <h2>Game of Thrones - Home Page</h2>
                <button type="button" onClick={handleNavigate}>
                    Nuevo personaje
                </button>
                <ul className="characters-list row list-unstyled">
                    {characters.map((item) => (
                        <Card key={item.id} character={item}></Card>
                    ))}
                </ul>
                <Communications></Communications>
            </div>
        </main>
    );
}

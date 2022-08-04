import React, { useEffect, useState } from "react";
import {HouseFill } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api/index";

import CardForm from "../Cards/CardForm";

function CreateCard() {
    const [deck, setDeck] = useState([]);
    const [card, setCard] = useState({ front: "", back: "", deckId: ""});
    const { deckId } = useParams();

    useEffect(() => {
        const deckInfo = async () => {
            const response = await readDeck(deckId);
            setDeck(() => response);
        };
        deckInfo();
    }, [deckId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCard({ ...card, deckId: deckId });
        await createCard(deckId, card);
        setCard({ front: "", back: "", deckId: "" });
    };

    function changeFront(e) {
        setCard({ ...card, front: e.target.value });
    }

    function changeBack(e) {
        setCard({ ...card, back: e.target.value });
    }

    return (
        <div className="col-9 mx-auto">
            <nav arial-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/"><HouseFill />Home</Link>
                    </li>

                    <li className="breadcrumb-item">
                        <Link to={`/deck/${deckId}`}>{deck.name}</Link>
                    </li>

                    <li className="breadcrumb-item">Add Card</li>
                </ol>
            </nav>

            <h4>{deck.name}: Add Card</h4>
            <CardForm 
            submitHandler={handleSubmit}
            card={card}
            changeFront={changeFront}
            changeBack={changeBack}
            />
        </div>
    );
}

export default CreateCard
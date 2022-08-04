import React, { useState, useEffect } from "react";
import { HouseFill } from "react-bootstrap-icons";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api/index";

import DeckForm from "../Decks/DeckForm";

function EditDeck() {
    const [deck, setDeck] = useState({ id: 0, name: "", description: ""});
    const history = useHistory();
    const { deckId } = useParams();

    useEffect(() => {
        const abortController = new AbortController();
         const loadDeck = async () => {
            const response = await readDeck(deckId, abortController.signal);
            setDeck(() => response);
         };
         loadDeck();
         return () => abortController.abort();
    }, [deckId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await updateDeck(deck);
        history.push(`/decks/${response.id}`);
    }

    function changeName(e) {
        setDeck({ ...deck, name: e.target.value });
    }

    function changeDesc(e) {
            setDeck({ ...deck, description: e.target.value });
        }
        return (
            <div className="col-9 mx-auto">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to={"/"}><HouseFill />Home</Link>
                        </li>
                        <li className="breadcrumb-item">Edit Deck</li>
                    </ol>
                </nav>
                <h4>Edit Deck</h4>
                <DeckForm 
                submitFunction={handleSubmit}
                deck={deck}
                changeName={changeName}
                changeDesc={changeDesc}
                />
            </div>
        )
    }

    export default EditDeck;
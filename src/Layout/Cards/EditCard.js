import React, {useEffect, useState } from "react";
import { HouseFill } from "react-bootstrap-icons";
import { Link, useHistory,useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api/index"

import CardForm from "../Cards/CardForm";

function EditCard() {
     const [deck, setDeck] = useState([]);
      const [card, setCard] = useState({ front: "", back: "",  deckId: ""});
      const { deckId, cardId } = useParams();
      const history = useHistory();

      useEffect(() => {
        const abortController = new AbortController();

        const cardInfo = async () => {
            const response = await readCard(cardId, abortController.signal);
            setCard(() => response);
        };
        cardInfo();
        return () => abortController.abort();
      }, [cardId]);

      useEffect(() => {
        const abortController = new AbortController();

        const deckInfo = async () => {
            const response = await readDeck(deckId, abortController.signal);
            setDeck(() => response);
        };

        deckInfo();
        return () => abortController.abort();
      }, [deckId]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCard(card);
        history.push(`/decks/${deck.id}`);
      };

      function changeFront(e) {
        setCard({ ...card, front: e.target.value });
      }
      function changeBack(e) {
        setCard({ ...card, back: e.target.value });
      }

      return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={"/"}><HouseFill/>Home</Link>
                    </li>

                    <li>
                        <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                    </li>
                    <li className="breadcrumf-item" aria-current="page">
                        {`Edit Card ${cardId}`}
                    </li>
                </ol>
            </nav>
            <h4>Edit Deck</h4>
            <CardForm 
            submitHandler={handleSubmit}
            card={card}
            changeFront={changeFront}
            changeBack={changeBack}
            />
        </div>
      );
}

export default EditCard;
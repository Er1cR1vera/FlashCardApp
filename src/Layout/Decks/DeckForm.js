import React from "react";
import { useHistory } from "react-router-dom";

function DeckForm({ submitFunction, deck = {}, changeName, changeDesc }) {
    const history = useHistory();

    function deckName() {
        return deck.name ? deck.name : "";
    }

    function deckDesc() {
        return deck.description ? deck.description : "";
    }

    return(
        <form>
            <div className="from-group">
                <label htmlFor="exampleFormControlInput1">Deck Name</label>
                <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={deckName()}
                onChange={changeName}
                ></input>
            </div>
            <div className="from-group">
                <label htmlFor="exampleFormControlTextarea1">Deck Description</label>
                <textarea
                className="from-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter a brief description of your deck"
                required
                value={deckDesc()}
                onChange={changeDesc}
                ></textarea>
            </div>
            <button className="btm btn-secondary"
            type="button"
            onClick={() => history.go(-1)}>Cancel</button>
            <button className="btn btn-primary"
            type="submit"
            onClick={submitFunction}>Submit
            </button>
        </form>
    );
}

export default DeckForm;
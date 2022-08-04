import React from "react";
import { useHistory } from "react-router-dom";

function CardForm({ submitHandler, card = {}, changeFront, changeBack }) {
    const history = useHistory();

    function cardFront() {
     return card.front ? card.front : "";
    }

    function cardBack(){
        return card.back ? card.back : "";
    }

    return (
       <form id="cardForm">
           <div className="from-group">
               <label>Front</label>
               <textarea
               className="from-control"
               id="front"
               rows="3"
               value={cardFront()}
               onChange={changeFront}
               placeholder="Front of Card"
               ></textarea>
           </div>
           <div className="form-group">
               <label>Back</label>
               <textarea
               className="from-control"
               id="exampleFormCrontolTextarea1"
               rows="3"
               value={cardBack()}
               onChange={changeBack}
               placeholder="Back of Card"
               ></textarea>
           </div>
           <button
           className="btn btn-secondary ml-2"
           type="button"
           onClick={() => history.go(-1)}
           >
            Done
            </button>
           <button
           className="btn btn-primary ml-2"
           type="submit"
           onClick={submitHandler}
           >
            Save
            </button>
       </form>
    );
}

export default CardForm;
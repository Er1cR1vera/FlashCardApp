import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Common/Header";
import Home from "./Common/Home";
import NotFound from "./NotFound";
import CreateDeck from "./Decks/CreateDeck";
import Decks from "./Decks/Decks";
import StudyCard from "./Cards/StudyCard"
import EditDeck from "./Decks/EditDeck";
import CreateCard from "./Cards/CreateCard";
import EditCard from "./Cards/EditCard";


function Layout() {
  return (
    <div className="Layout">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact>
        <Home />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId" exact>
            <Decks />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyCard />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <CreateCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route>
        <NotFound />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default Layout;

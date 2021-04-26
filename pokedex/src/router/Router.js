import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import DetailsPokemon from '../pages/DetailsPokemon/DetailsPokemon'
import Home from '../pages/Home/Home'
import ListPokemon from '../pages/ListPokemon/ListPokemon'

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} >
          </Route>

          <Route exact path="/listpokemon" component={ListPokemon} >
          </Route>
          <Route
            exact path="/detailspokemon/:id" component={DetailsPokemon}/>
          <Route>
            <div>Erro 404 - Página não encontrada</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;
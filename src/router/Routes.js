import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "../container/Home/Home";
import Users from "../container/Users";
import RenderCondicional from "../container/RenderCondicional/RenderCondicional";
import RenderLista from '../container/RenderLista/RenderLista';
import RenderSinLista from '../container/RenderSinLista/RenderSinLista';

function Routes() {
    return (
        
        <Switch>
          <Route path="/rendersinlista">
            <RenderSinLista />
          </Route>
          <Route path="/renderlista">
            <RenderLista />
          </Route>
          <Route path="/rendercondicional">
            <RenderCondicional />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    )
}

export default Routes;

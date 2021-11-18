import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "../container/Home/Home";
import UseEffectUpdate from "../container/UseEffectUpdate/UseEffectUpdate";
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
          <Route path="/UseEffectUpdate">
            <UseEffectUpdate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    )
}

export default Routes;

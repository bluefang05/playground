import React from "react";
import { Routes as RouteList, Route } from "react-router-dom";
import Home from "../container/Home/Home";
import UseEffectUpdate from "../container/UseEffectUpdate/UseEffectUpdate";
import RenderCondicional from "../container/RenderCondicional/RenderCondicional";
import RenderLista from "../container/RenderLista/RenderLista";
import RenderSinLista from "../container/RenderSinLista/RenderSinLista";

function Routes() {
  return (
    <RouteList>
      <Route path="/rendersinlista" component={RenderSinLista} />
      <Route path="/renderlista" component={RenderLista} />
      <Route path="/rendercondicional" component={RenderCondicional} />
      <Route path="/UseEffectUpdate" component={UseEffectUpdate} />
      <Route path="/" component={Home} />
    </RouteList>
  );
}

export default Routes;

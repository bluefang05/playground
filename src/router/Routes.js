import React from "react";
import { Routes as RouteList, Route } from "react-router-dom";
import Home from "../container/Home/Home";
import UseEffectUpdate from "../container/UseEffectUpdate/UseEffectUpdate";
import RenderCondicional from "../container/RenderCondicional/RenderCondicional";
import RenderLista from "../container/RenderLista/RenderLista";
import RenderSinLista from "../container/RenderSinLista/RenderSinLista";
import RenderRequest from "../container/RenderRequest/RenderRequest";
function Routes() {
  return (
    <RouteList>
      <Route path="/renderrequest" element={<RenderRequest/>} />
      <Route path="/rendersinlista" element={<RenderSinLista/>} />
      <Route path="/renderlista" element={<RenderLista/>} />
      <Route path="/rendercondicional" element={<RenderCondicional/>} />
      <Route path="/UseEffectUpdate" element={<UseEffectUpdate/>} />
      <Route path="/" element={<Home/>} />
    </RouteList>
  );
}

export default Routes;

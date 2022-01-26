import React, { useState } from "react";
import "./RenderCondicional.css";
import CodeBlock from '@tenon-io/tenon-codeblock';

function RenderCondicional() {
  const [visible, setVisible] = useState(false);
  const showDetails = function () {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

 

  return (
    <div>
      Condicional Render
      <h1 onClick={showDetails}>Click me</h1>
      {visible ? <div>Hidden Details</div> : ""}
      <CodeBlock codeString = {code} />
    </div>
  );
}

export default RenderCondicional;


var code = `
import React, { useState } from "react";
function RenderCondicional() {
  const [visible, setVisible] = useState(false);
  const showDetails = function () {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
 
  return (
    <div>
      Render Condicional
      <h1 onClick={showDetails}>Titulo</h1>
      {visible ? <div>Detalles</div> : ""}
    </div>
  );
}
 
export default RenderCondicional;
`

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
      Render Condicional
      <h1 onClick={showDetails}>Titulo</h1>
      {visible ? <div>Detalles</div> : ""}
      <CodeBlock codeString = {code} />
      <textarea style={{width:"100%", height:"500px"}} value={code}></textarea>
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

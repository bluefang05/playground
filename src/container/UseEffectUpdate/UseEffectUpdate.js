import React, {useEffect, useState} from 'react'
import "./UseEffectUpdate.css";
import CodeBlock from '@tenon-io/tenon-codeblock';

function UseEffectUpdate() {
    let [count, setCount] = useState(0);
    let addOne = function () {  
        setCount(count + 1);
    }

    useEffect(() => {
        
        alert(count);
    },[count])
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addOne}>add 1</button>
            UseEffectUpdate

            <div id="ballContainer">
            {[...Array(count)].map( function (el, i) { 
            return <div className="ball"></div> })}
            </div>
            <CodeBlock codeString = {code} />
            
        </div>
    )
}

export default UseEffectUpdate

var code = `
import React, {useEffect, useState} from 'react'
import "./UseEffectUpdate.css";
import CodeBlock from '@tenon-io/tenon-codeblock';

function UseEffectUpdate() {
    let [count, setCount] = useState(0);
    let addOne = function () {  
        setCount(count + 1);
    }

    useEffect(() => {
        
        alert(count);
    },[count])
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addOne}>add 1</button>
            UseEffectUpdate

            <div id="ballContainer">
            {[...Array(count)].map( function (el, i) { 
            return <div className="ball"></div> })}
            </div>
        </div>
    )
}

export default UseEffectUpdate
`;


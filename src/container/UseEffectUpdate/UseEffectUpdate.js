import React, {useEffect, useState} from 'react'
import "./UseEffectUpdate.css";
import CodeBlock from '@tenon-io/tenon-codeblock';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Badge } from '@mui/material';
//import ShoppingCart from "@bit/mui-org.material-ui-icons.shopping-cart";


function UseEffectUpdate() {
    let [count, setCount] = useState(0);
    let addOne = function () {  
        setCount(count + 1);
    }

    useEffect(() => {
        
        toast(count);   
    },[count])
    
    return (
        <div>
            
            <h1>{count}</h1>
            {/* <Badge badgeContent={4} color="secondary">
  <ShoppingCart  color="action" />
</Badge> */}
            <Button variant="outlined" onClick={addOne}>add 1</Button>
            UseEffectUpdate
            <ToastContainer />
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UseEffectUpdate() {
    let [count, setCount] = useState(0);
    let addOne = function () {  
        setCount(count + 1);
    }

    useEffect(() => {
        
        toast(count);   
    },[count])
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addOne}>add 1</button>
            UseEffectUpdate
            <ToastContainer />
            <div id="ballContainer">
            {[...Array(count)].map( function (el, i) { 
            return <div className="ball"></div> })}
            </div>
        </div>
    )
}

export default UseEffectUpdate
`;


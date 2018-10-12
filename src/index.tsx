import 'raf/polyfill'
import './t'

import './t2';
// import "@babel/polyfill"
// import 'core-js/es6/map';
// import 'core-js/es6/set'

// import * as React from "react";
// import * as ReactDOM from "react-dom";

// import { Hello } from "./Hello";


const dd=`
    <h1>
        名称
    </h1>
`;
var p=new Promise((r)=> {
    r("Hello");
})

p.then((r)=>{
    console.log(r);
})
//Promise.resolve().finally();

var b= new Map();
var s= new Set();
var a=[1,2,3,5];
var c=[1,...a];
console.log(c);

console.log(c.filter(x=>x>3));
s.add("1");

console.log(dd);
// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );
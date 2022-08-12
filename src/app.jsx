import React from "react";
import { Test } from "./test";
import './app.scss'

export default function App(){
    const [counter, setCounter] = React.useState(0);

    function incrementCounter() { setCounter(counter+1) }
    function decrementCounter() { setCounter(counter-1) }

    return (
    <>
    <h1> Hello World 2e3 </h1>
    <h3> {counter} </h3> 
    <button onClick={()=>incrementCounter()}> increment </button>
    <button onClick={()=>decrementCounter()}> decrement </button>

    </>)

}
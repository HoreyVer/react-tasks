import React from 'react';
import './App.css';
import ThrottleComponent from "./components/ThrottleComponent";
import DebounceComponent from "./components/DebounceComponent";
import Counter from "./components/Counter";


export default function App() {
    return (
        <>
            <ThrottleComponent/>
            <div>------------------------------------------------</div>
            <DebounceComponent/>
            <div>------------------------------------------------</div>
            <Counter/>
        </>
    )
}


import React from 'react';
import './App.css';
import ThrottleComponent from "./components/ThrottleComponent";
import DebounceComponent from "./components/DebounceComponent";


export default function App() {
    return (
        <>
            <ThrottleComponent/>
            <div>------------------------------------------------</div>
            <DebounceComponent/>
        </>
    )
}


import React from 'react';
import './App.css';
import ThrottleComponent from "./components/ThrottleComponent";
import DebounceComponent from "./components/DebounceComponent";
import Counter from "./components/Counter";
import UserList from "./components/UserList";


export default function App() {
    return (
        <>
            <ThrottleComponent/>
            <div>------------------------------------------------</div>
            <DebounceComponent/>
            <div>------------------------------------------------</div>
            <Counter/>
            <div>------------------------------------------------</div>
            <UserList/>
        </>
    )
}


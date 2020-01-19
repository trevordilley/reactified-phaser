import React, {useEffect} from "react"
import "./App.css"
import {createGame} from "./Game"
import {store} from "./Store"
import {observer} from "mobx-react-lite"


const App = () => {
    useEffect(() => createGame("game"), [])
    return (
        <div className="App">
            <button onClick={() => {store.count += 1}}>Up </button>
            <Display/>
        </div>
    )
}

const Display = observer(() => {
   return (<div>{store.count}</div>)
})

export default App

# Reactified Phaser!

Embed a Phaser game in your React App! Leverage the power of React to make your games GUI! 

The work to ensure React doesn't blow your game away on DOM updates has been done for you, 
any child elements of the `<Game>` component have been styled to overlay your Game correctly. 

## Installation

#### Vanilla Install
`npm i react react-dom phaser reactified-phaser`

#### Create React App
`npx create-react-app your-game --template typescript && cd your-game && npm i reactified-phaser phaser`

## Usage

```typescript
const config = {... your Phaser config ...}

function App() {
  return (
    <div className="App">
        <ExampleGame/>
    </div>
  );
}

const ExampleGame = () =>
    <Game config={config}>
        {/*Children of the Game component is the game's GUI.*/}
        {/*Stuff here is styled to fit within the game canvas dimensions.*/}
        <div style={{
            position: "relative",
            fontSize: 32,
            color: "#ededed",
            top: config.height - 48,
            left: 32
        }}>
            Score: {scoreStore.score}
        </div>
    </Game>

```

## State Management
You do need to bridge between Phaser and React somehow. Personally I've had a lot of success using [MobX](https://mobx.js.org/README.html)
but there are many other options as well. I'm sure it's possible to use vanilla React, RxJs, etc to manage state as well.
The examples below both use MobX stores.

## Example Games
The Phaser 3 tutorial game has been implemented using `typescript` and `reactified-phaser` here:
https://github.com/trevordilley/reactified-phaser-example

I'm eating this dogfood with my own game here:
https://github.com/trevordilley/typecraft

Which also leverages a simple Entity-Component-System library I've implemented: [`@trevordilley/ecs`](https://www.npmjs.com/package/@trevordilley/ecs)


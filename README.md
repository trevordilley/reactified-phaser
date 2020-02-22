# Reactified Phaser!

Embed a Phaser game in your React App! Leverage the power of React to make your games GUI! 

The work to ensure React doesn't blow your game away on DOM updates has been done for you, 
any child elements of the `<Game>` component have been styled to overlay your Game correctly. 

## Installation

#### Vanilla Install
`npm i react react-dom phaser reactified-phaser`

#### Create React App
`npx create-react-app your-game --template typescript && cd your-game && npm i reactified-phaser`

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

const ExampleGame = observer(() =>
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
)

```

## Example Games
The Phaser 3 tutorial game has been implemented using `typescript` and `reactified-phaser` here:
https://github.com/trevordilley/reactified-phaser-example

I'm eating this dogfood with my own game here:
https://github.com/trevordilley/typecraft

Which also leverages a simple Entity-Component-System library I've implemented: [`@trevordilley/ecs`](https://www.npmjs.com/package/@trevordilley/ecs)


import React from "react"
import {store} from "./Store"
import {observer} from "mobx-react-lite"
import * as Phaser from "phaser"
import {PhaserGame} from "./PhaserGame"

let radius = 10
let mousePos: Phaser.GameObjects.Text

const update = (scene: Phaser.Scene) => {
    const circle = new Phaser.Geom.Circle(400, 300, 100);
    // @ts-ignore
    const graphics = scene.add.graphics({ fillStyle: { color: 0xff0000 } });
    graphics.fillCircleShape(circle);

    circle.diameter = circle.radius;

    graphics.fillStyle(0x00ff00);
    graphics.fillCircleShape(circle);

    circle.radius = radius;
    mousePos.x = scene.input.x
    mousePos.y = scene.input.y
    mousePos.text = `${scene.input.x}, ${scene.input.y}`
    graphics.fillStyle(0x0000ff);
    graphics.fillCircleShape(circle);
}
const create = (scene: Phaser.Scene) => {
    const button =  scene.add.text(100,100, "Down", {fill: '#0f0'})
    button.setInteractive()
    button.on('pointerup',() => store.count -= 1)
    mousePos = scene.add.text(0,0,"0,0",{fill: '#00f'})
}

const config: Phaser.Types.Core.GameConfig = {
    title: "Overworld",
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    scene: {
        preload: function() {
        },
        create: function() { create(this as Phaser.Scene) },
        update: function() { update(this as Phaser.Scene)}
    }
}

const App = () => {
    return (
        <div className="App" style={{marginLeft:200}}>
            <PhaserGame
                config={config}
                parentId={"game3"}
            >
                <button onClick={() => {store.count += 1}}>Up </button>
                <Display/>
            </PhaserGame>
        </div>
    )
}

const Display = observer(() => {
   return (<div>{store.count}</div>)
})

export default App

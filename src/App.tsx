import React from 'react'
import {store} from "./Store"
import {observer} from "mobx-react-lite"
import * as Phaser from "phaser"
import {PhaserGame} from "./PhaserGame"
import {TextField, Typography} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"

let radius = 10
let mousePos: Phaser.GameObjects.Text
const update = (scene: Phaser.Scene) => {
    mousePos.x = scene.input.x
    mousePos.y = scene.input.y
    mousePos.text = `${store.someText}: ${scene.input.x}, ${scene.input.y}`
}
const create = (scene: Phaser.Scene) => {
    const button =  scene.add.text(100,100, "Down", {fill: '#0f0'})
    button.setInteractive()
    button.on('pointerup',() => store.count -= 1)
    mousePos = scene.add.text(0,0,"0,0",{fill: '#00f'})
    const circle = new Phaser.Geom.Circle(400, 300, 100);
    // @ts-ignore
    const graphics = scene.add.graphics({ fillStyle: { color: 0xff0000 } });
    graphics.fillCircleShape(circle);

    circle.diameter = circle.radius;

    graphics.fillStyle(0x00ff00);
    graphics.fillCircleShape(circle);

    circle.radius = radius;
    graphics.fillStyle(0x0000ff);
    graphics.fillCircleShape(circle);
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
            <PhaserGame
                config={config}
                parentId={"game3"}
            >
               <div style={{width: config.width, height: config.height}}>
                   <Gui/>
               </div>
            </PhaserGame>
    )
}

const Gui = observer(() => {
   return (
       <div style={{color: 'white'}}>
       <Grid container>
           <Grid item xs={12}>
               <TextField onChange={(event) => {
                   store.someText = event.target.value
               }} />
           </Grid>
           <Grid item md={3}><Typography >{store.someText}</Typography></Grid>
           <Grid item md={3}><Typography >{store.someText}</Typography></Grid>
           <Grid item md={3}><Typography >{store.someText}</Typography></Grid>
           <Grid item md={3}><Typography >{store.someText}</Typography></Grid>
           <Grid item md={3}><Typography >{store.someText}</Typography></Grid>
           <Grid item md={3}><Typography >{store.someText}</Typography></Grid>
           <Grid item md={3}><Typography >{store.someText}</Typography></Grid>
           <Grid item md={3}><Typography >{store.someText}</Typography></Grid>
           <Grid item md={3}><Typography >{store.someText}</Typography></Grid>
       </Grid>
       </div>
   )
})

export default App

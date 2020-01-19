import * as Phaser from "phaser"
import {store} from "./Store"

let radius = 10
function update() {
    var circle = new Phaser.Geom.Circle(400, 300, 100);

    // @ts-ignore
    var graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } });
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
        create: function() {
           // @ts-ignore
            const button =  this.add.text(100,100, "Down", {fill: '#0f0'})
            button.setInteractive()
            button.on('pointerup',() => store.count -= 1)
        },
        update: update
    }
}

export const createGame = (parentId: string) => {
    new Phaser.Game({...config, parent: parentId})
}

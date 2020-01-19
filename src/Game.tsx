import React, {useLayoutEffect} from "react"
import * as Phaser from "phaser"

export const Game: React.FC<{ config: Phaser.Types.Core.GameConfig, parentId?: string }> =
    (props) => {
        const {config, parentId, children} = props

        // requires useLayoutEffect because this is where we attach the game
        // canvas to the DOM
        useLayoutEffect(() => {
            new Phaser.Game({...config, parent: parentId})
        })

        if (config.parent && config.parent !== parentId) {
            console.warn(
                `Phaser Config specifies a parent dom element
        that doesn't match the parentId prop passed into PhaserGame, this could cause the
        game canvas to render somewhere unexpected!`
            )
        }

        // The games (the `children` prop) GUI will render
        // as the first child and the game Canvas will be
        // the second element.
        //
        // Using `position: "absolute"` will place the GUI
        // OVER the game canvas and match it's origin to
        // the game canvas' origin (0,0) which is the
        // top-left, with x increasing going right and
        // y increasing going down.
        return (
            <div id={parentId}>
                <div id={`${parentId}-gui`} style={{position: "absolute"}}>
                    {children}
                </div>
            </div>)
    }
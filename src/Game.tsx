import React, {useLayoutEffect} from "react"
import * as Phaser from "phaser"

export const Game: React.FC<{ config: Phaser.Types.Core.GameConfig }> =
    (props) => {
        const {config, children} = props

        const hostElementId = 'game'
        // requires useLayoutEffect because this is where we attach the game
        // canvas to the DOM
        useLayoutEffect(() => {
            new Phaser.Game({...config, parent: hostElementId})
        })

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
            <div id={hostElementId}>
                <div id={`${hostElementId}-gui`} style={{position: "absolute"}}>
                    {children}
                </div>
            </div>)
    }
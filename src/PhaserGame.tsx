// @ts-ignore
import React, {useLayoutEffect} from "react"
// eslint-disable-next-line import/first
import * as Phaser from "phaser"

export const PhaserGame: React.FC<{ config: Phaser.Types.Core.GameConfig, parentId?: string }> =
    (
     props) => {
    const {config, parentId, children} = props
    useLayoutEffect(() => {
        new Phaser.Game({...config, parent: parentId})
    })
    if(config.parent && config.parent !== parentId) {
        console.warn(`Phaser Config specifies a parent dom element
        that doesn't match the parentId prop passed into PhaserGame, this could cause the
        game canvas to render somewhere unexpected!`)
    }

    return <div>
        <div id={parentId}/>
        <div>{children}</div>
    </div>
}
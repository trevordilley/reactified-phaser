import React from "react";
import * as Phaser from "phaser";
export interface GameProps {
    config: Phaser.Types.Core.GameConfig;
}
declare const Game: React.FC<GameProps>;
export default Game;

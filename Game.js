var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from "react";
import * as Phaser from "phaser";
import * as lodash from "lodash";
var hostElementId = "game";
var Game = function (props) {
    var config = props.config, children = props.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(GameGui, { config: config }, children),
        React.createElement(GameContainer, { config: config })));
};
var GameGui = function (props) {
    var config = props.config, children = props.children;
    return (React.createElement("div", { id: hostElementId + "-gui-container", style: {
            position: "absolute",
            width: config.width,
            height: config.height,
            pointerEvents: "none"
        } },
        React.createElement("div", { id: hostElementId + "-gui", style: {
                pointerEvents: "auto",
                border: "1px solid"
            } }, children)));
};
var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !lodash.isEqual(this.props, nextProps);
    };
    GameContainer.prototype.componentDidMount = function () {
        var config = this.props.config;
        new Phaser.Game(__assign(__assign({}, config), { parent: hostElementId }));
    };
    GameContainer.prototype.render = function () {
        return (React.createElement("div", { id: hostElementId }));
    };
    return GameContainer;
}(Component));
export default Game;
//# sourceMappingURL=Game.js.map
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Phaser = require("phaser");
var lodash = require("lodash");
var hostElementId = "game";
var Game = function (props) {
    var config = props.config, children = props.children;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GameGui, { config: config }, children),
        react_1.default.createElement(GameContainer, { config: config })));
};
var GameGui = function (props) {
    var config = props.config, children = props.children;
    return (react_1.default.createElement("div", { id: hostElementId + "-gui-container", style: {
            position: "absolute",
            width: config.width,
            height: config.height,
            pointerEvents: "none"
        } },
        react_1.default.createElement("div", { id: hostElementId + "-gui", style: {
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
        return (react_1.default.createElement("div", { id: hostElementId }));
    };
    return GameContainer;
}(react_1.Component));
exports.default = Game;
//# sourceMappingURL=Game.js.map
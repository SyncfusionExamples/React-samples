"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var default_1 = require("./default");
var button_group_1 = require("./button-group");
var check_box_1 = require("./check-box");
var radio_button_1 = require("./radio-button");
var drop_down_button_1 = require("./drop-down-button");
var split_button_1 = require("./split-button");
var switch_1 = require("./switch");
var progress_button_1 = require("./progress-button");
exports.buttonRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/button/default', component: default_1.Default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/button/button-group', component: button_group_1.ButtonGroup }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/button/check-box', component: check_box_1.CheckBox }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/button/radio-button', component: radio_button_1.RadioButton }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/button/drop-down-button', component: drop_down_button_1.DropDownButton }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/button/split-button', component: split_button_1.SplitButton }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/button/switch', component: switch_1.Switch }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/button/progress-button', component: progress_button_1.ProgressButton })));
exports.buttonCategory = { "default": { "name": "Default Functionalities", "category": "Button" }, "button-group": { "name": "ButtonGroup", "category": "Button" }, "check-box": { "name": "CheckBox", "category": "Button" }, "radio-button": { "name": "RadioButton", "category": "Button" }, "drop-down-button": { "name": "DropDownButton", "category": "Button" }, "split-button": { "name": "SplitButton", "category": "Button" }, "switch": { "name": "Switch", "category": "Button" }, "progress-button": { "name": "ProgressButton", "category": "Button" }, "defaultSample": "button/default" };

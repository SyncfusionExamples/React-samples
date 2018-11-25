"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var default_1 = require("./default");
exports.textboxesRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/textboxes/default', component: default_1.Default })));
exports.textboxesCategory = { "default": { "name": "Default Functionalities", "category": "TextBoxes" }, "defaultSample": "textboxes/default" };

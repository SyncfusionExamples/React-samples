"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var default_1 = require("./default");
var inline_1 = require("./inline");
var custom_1 = require("./custom");
var api_1 = require("./api");
exports.colorpickerRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/color-picker/default', component: default_1.Default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/color-picker/inline', component: inline_1.Inline }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/color-picker/custom', component: custom_1.CustomPalette }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/color-picker/api', component: api_1.Api })));
exports.colorpickerCategory = { "default": { "name": "Default Functionalities", "category": "ColorPicker" }, "inline": { "name": "Inline Mode", "category": "ColorPicker" }, "custom": { "name": "Custom Palettes", "category": "ColorPicker" }, "api": { "name": "API", "category": "ColorPicker" }, "defaultSample": "color-picker/default" };

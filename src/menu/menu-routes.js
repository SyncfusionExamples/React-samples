"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var default_1 = require("./default");
var data_binding_1 = require("./data-binding");
var template_1 = require("./template");
var api_1 = require("./api");
var toolbar_integration_1 = require("./toolbar-integration");
exports.menuRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/menu/default', component: default_1.Default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/menu/data-binding', component: data_binding_1.DataBinding }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/menu/template', component: template_1.Template }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/menu/api', component: api_1.Api }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/menu/toolbar-integration', component: toolbar_integration_1.ToolbarIntegration })));
exports.menuCategory = { "default": { "name": "Default Functionalities", "category": "Menu" }, "data-binding": { "name": "Data Binding", "category": "Menu" }, "template": { "name": "Template", "category": "Menu" }, "api": { "name": "API", "category": "Menu" }, "toolbar-integration": { "name": "Toolbar Integration", "category": "Menu" }, "defaultSample": "menu/default" };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var default_1 = require("./default");
var docking_sidebar_1 = require("./docking-sidebar");
var api_1 = require("./api");
var sidebar_list_1 = require("./sidebar-list");
exports.sidebarRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/sidebar/default', component: default_1.Default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/sidebar/docking-sidebar', component: docking_sidebar_1.Dock }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/sidebar/api', component: api_1.API }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/sidebar/sidebar-list', component: sidebar_list_1.SidebarWithList })));
exports.sidebarCategory = { "default": { "name": "Default Functionalities", "category": "Sidebar" }, "docking-sidebar": { "name": "Dock", "category": "Sidebar" }, "api": { "name": "API", "category": "Sidebar" }, "sidebar-list": { "name": "Sidebar With ListView", "category": "Sidebar" }, "defaultSample": "sidebar/default" };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var default_1 = require("./default");
var grouping_icon_1 = require("./grouping-icon");
var data_binding_1 = require("./data-binding");
var filtering_1 = require("./filtering");
var template_1 = require("./template");
var cascading_1 = require("./cascading");
var inline_1 = require("./inline");
var diacritics_filtering_1 = require("./diacritics-filtering");
exports.dropdownlistRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/drop-down-list/default', component: default_1.Default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/drop-down-list/grouping-icon', component: grouping_icon_1.Grouping }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/drop-down-list/data-binding', component: data_binding_1.Data }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/drop-down-list/filtering', component: filtering_1.Filtering }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/drop-down-list/template', component: template_1.Templates }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/drop-down-list/cascading', component: cascading_1.Cascading }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/drop-down-list/inline', component: inline_1.Inline }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/drop-down-list/diacritics-filtering', component: diacritics_filtering_1.DiacriticsFiltering })));
exports.dropdownlistCategory = { "default": { "name": "Default Functionalities", "category": "DropDownList" }, "grouping-icon": { "name": "Grouping and Icons", "category": "DropDownList" }, "data-binding": { "name": "Data Binding", "category": "DropDownList" }, "filtering": { "name": "Filtering", "category": "DropDownList" }, "template": { "name": "Templates", "category": "DropDownList" }, "cascading": { "name": "Cascading", "category": "DropDownList" }, "inline": { "name": "Inline", "category": "DropDownList" }, "diacritics-filtering": { "name": "Diacritics Filtering", "category": "DropDownList" }, "defaultSample": "drop-down-list/default" };

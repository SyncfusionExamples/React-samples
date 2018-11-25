"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var default_1 = require("./default");
var local_1 = require("./local");
var remote_1 = require("./remote");
var field_list_1 = require("./field-list");
var grouping_bar_1 = require("./grouping-bar");
var conditional_formatting_1 = require("./conditional-formatting");
var calculated_field_1 = require("./calculated-field");
var aggregation_1 = require("./aggregation");
var sorting_1 = require("./sorting");
var value_sorting_1 = require("./value-sorting");
var filtering_1 = require("./filtering");
var label_filtering_1 = require("./label-filtering");
var value_filtering_1 = require("./value-filtering");
var chart_1 = require("./chart");
var virtual_scrolling_1 = require("./virtual-scrolling");
var exporting_1 = require("./exporting");
exports.pivotviewRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/default', component: default_1.Default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/local', component: local_1.Local }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/remote', component: remote_1.Remote }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/field-list', component: field_list_1.FieldList }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/grouping-bar', component: grouping_bar_1.Grouping }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/conditional-formatting', component: conditional_formatting_1.ConditionalFormattingClass }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/calculated-field', component: calculated_field_1.CalculatedFieldClass }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/aggregation', component: aggregation_1.Aggregation }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/sorting', component: sorting_1.Sorting }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/value-sorting', component: value_sorting_1.ValueSorting }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/filtering', component: filtering_1.Filtering }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/label-filtering', component: label_filtering_1.LabelFilter }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/value-filtering', component: value_filtering_1.ValueFilter }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/chart', component: chart_1.ChartIntegration }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/virtual-scrolling', component: virtual_scrolling_1.VirtualScrolling }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/pivot-view/exporting', component: exporting_1.Exporting })));
exports.pivotviewCategory = { "default": { "name": "Default Functionalities", "category": "Pivot Grid" }, "local": { "name": "Local Data", "category": "Data Binding" }, "remote": { "name": "Remote Data", "category": "Data Binding" }, "field-list": { "name": "Field List", "category": "User Interaction" }, "grouping-bar": { "name": "Grouping Bar", "category": "User Interaction" }, "conditional-formatting": { "name": "Conditional Formatting", "category": "User Interaction" }, "calculated-field": { "name": "Calculated Field", "category": "Formula" }, "aggregation": { "name": "Aggregation", "category": "Formula" }, "sorting": { "name": "Default Sorting", "category": "Sorting" }, "value-sorting": { "name": "Value Sorting", "category": "Sorting" }, "filtering": { "name": "Default Filtering", "category": "Filtering" }, "label-filtering": { "name": "Label Filtering", "category": "Filtering" }, "value-filtering": { "name": "Value Filtering", "category": "Filtering" }, "chart": { "name": "Chart", "category": "Integration" }, "virtual-scrolling": { "name": "Virtual Scrolling", "category": "Scrolling" }, "exporting": { "name": "Export", "category": "Miscellaneous" }, "defaultSample": "pivot-view/default" };

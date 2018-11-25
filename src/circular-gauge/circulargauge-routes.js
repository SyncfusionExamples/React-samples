"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var default_1 = require("./default");
var range_1 = require("./range");
var labels_1 = require("./labels");
var annotation_1 = require("./annotation");
var customization_1 = require("./customization");
var direction_1 = require("./direction");
var axes_1 = require("./axes");
var drag_1 = require("./drag");
var tooltip_1 = require("./tooltip");
var image_1 = require("./image");
var pointers_1 = require("./pointers");
var sample_data_1 = require("./sample-data");
exports.circulargaugeRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/default', component: default_1.Default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/range', component: range_1.Range }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/labels', component: labels_1.Labels }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/annotation', component: annotation_1.AnnotationsSample }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/customization', component: customization_1.Customization }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/direction', component: direction_1.Direction }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/axes', component: axes_1.Axes }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/drag', component: drag_1.Drag }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/tooltip', component: tooltip_1.Tooltip }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/image', component: image_1.Image }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/pointers', component: pointers_1.Pointers }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-gauge/sample-data', component: sample_data_1.SampleData })));
exports.circulargaugeCategory = { "default": { "name": "Default Functionalities", "category": "CIRCULAR GAUGE" }, "range": { "name": "Range", "category": "CIRCULAR GAUGE" }, "labels": { "name": "Tick and Labels", "category": "CIRCULAR GAUGE" }, "annotation": { "name": "Annotations", "category": "CIRCULAR GAUGE" }, "customization": { "name": "Gauge Customization", "category": "CIRCULAR GAUGE" }, "direction": { "name": "Direction Compass", "category": "CIRCULAR GAUGE" }, "axes": { "name": "Multiple Axis", "category": "AXES" }, "drag": { "name": "Pointer Drag", "category": "USER INTERACTION" }, "tooltip": { "name": "Tooltip", "category": "USER INTERACTION" }, "image": { "name": "Pointer Image", "category": "POINTER" }, "pointers": { "name": "Pointer Customization", "category": "POINTER" }, "sample-data": { "name": "Data Sample", "category": "Live" }, "defaultSample": "circular-gauge/default" };

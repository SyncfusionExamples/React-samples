"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sample for Thermometer model
 */
var React = require("react");
var ej2_react_lineargauge_1 = require("@syncfusion/ej2-react-lineargauge");
var sample_base_1 = require("../common/sample-base");
var SAMPLE_CSS = "\n    .control-fluid {\n\t\tpadding: 0px !important;\n\t}";
var Thermometer = (function (_super) {
    __extends(Thermometer, _super);
    function Thermometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Thermometer.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    Thermometer.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_lineargauge_1.LinearGaugeComponent, { load: this.load.bind(this), id: 'gauge', container: { height: 350, width: 20, type: 'Thermometer' } },
                    React.createElement(ej2_react_lineargauge_1.AxesDirective, null,
                        React.createElement(ej2_react_lineargauge_1.AxisDirective, { minimum: -40, maximum: 120, line: { width: 0 }, minorTicks: { interval: 2 }, majorTicks: { interval: 20 }, labelStyle: { font: { color: '#000000' } } },
                            React.createElement(ej2_react_lineargauge_1.PointersDirective, null,
                                React.createElement(ej2_react_lineargauge_1.PointerDirective, { value: 80, width: 10, type: 'Bar', color: '#ff0000' }))),
                        React.createElement(ej2_react_lineargauge_1.AxisDirective, { minimum: -40, maximum: 50, opposedPosition: true, line: { width: 0 }, minorTicks: { interval: 1 }, majorTicks: { interval: 10 }, labelStyle: { font: { color: '#000000' } } },
                            React.createElement(ej2_react_lineargauge_1.PointersDirective, null,
                                React.createElement(ej2_react_lineargauge_1.PointerDirective, { width: 0 })))),
                    React.createElement(ej2_react_lineargauge_1.AnnotationsDirective, null,
                        React.createElement(ej2_react_lineargauge_1.AnnotationDirective, { content: '<div id="first"><h1 style="font-size:20px">°F</h1></div>', horizontalAlignment: 'Center', verticalAlignment: 'Near', x: -30 }),
                        React.createElement(ej2_react_lineargauge_1.AnnotationDirective, { content: '<div id="second"><h1 style="font-size:20px">°C</h1></div>', horizontalAlignment: 'Center', verticalAlignment: 'Near', x: 30 })))),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample demonstrates the default linear gauge. The linear gauge control indicates the values of scales in horizontal or vertical sliding meter. You can use ",
                    React.createElement("code", null, "axes"),
                    ",",
                    React.createElement("code", null, "ranges"),
                    ", ",
                    React.createElement("code", null, "pointers"),
                    " and ",
                    React.createElement("code", null, "container"),
                    " properties to customize the appearance of the gauge. In this sample, an axis with multiple ranges and a pointer has been used."),
                React.createElement("p", null,
                    "More information about linear gauge can be found in this",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/documentation" }, "documentation section"),
                    "."))));
    };
    return Thermometer;
}(sample_base_1.SampleBase));
exports.Thermometer = Thermometer;

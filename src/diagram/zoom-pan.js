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
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var shape = { type: 'Basic', shape: 'Rectangle', cornerRadius: 10 };
var nodes = [
    {
        id: 'sourceNode1', width: 100, height: 50, offsetX: 120, offsetY: 100,
        style: { strokeColor: '#666666', fill: '#90EE90' },
        annotations: [{ content: 'Source Document', margin: { left: 15, right: 15, bottom: 15, top: 15 } }]
    },
    {
        id: 'censusNode2', width: 100, height: 75, offsetX: 120, offsetY: 225,
        shape: { type: 'Basic', shape: 'Diamond' },
        style: { strokeColor: '#666666', fill: '#87CEEB' },
        annotations: [{ content: 'Census Record', margin: { left: 15, right: 15, bottom: 15, top: 15 } }]
    },
    {
        id: 'booksNode3', width: 100, height: 75, offsetX: 120, offsetY: 350,
        shape: { type: 'Basic', shape: 'Diamond' },
        style: { strokeColor: '#666666', fill: '#87CEEB' },
        annotations: [{ content: 'Books and Magazine' }]
    },
    {
        id: 'recordNode4', width: 125, height: 50, offsetX: 320, offsetY: 225,
        style: { strokeColor: '#666666', fill: '#90EE90' },
        annotations: [{ content: 'Record Template' }]
    },
    {
        id: 'traditionalNode5', width: 125, height: 50, offsetX: 320, offsetY: 350,
        style: { strokeColor: '#666666', fill: '#90EE90' },
        annotations: [{ content: 'Traditional Template' }]
    },
    {
        id: 'nontraditionalNode6', width: 135, height: 50, offsetX: 120, offsetY: 450,
        style: { strokeColor: '#666666', fill: '#90EE90' },
        annotations: [{ content: 'Nontraditional' }]
    },
];
var connectors = [
    { id: 'flowChartConnector1', sourceID: 'sourceNode1', targetID: 'censusNode2' },
    {
        id: 'flowChartConnector2', sourceID: 'censusNode2', targetID: 'booksNode3',
        annotations: [{ content: 'No', style: { fill: 'White' } }]
    },
    {
        id: 'flowChartConnector3', sourceID: 'booksNode3', targetID: 'nontraditionalNode6',
        annotations: [{ content: 'No', style: { fill: 'White' } }]
    },
    {
        id: 'flowChartConnector4', sourceID: 'censusNode2', targetID: 'recordNode4',
        annotations: [{ content: 'Yes', style: { fill: 'White' } }]
    },
    {
        id: 'flowChartConnector5', sourceID: 'booksNode3', targetID: 'traditionalNode5',
        annotations: [{ content: 'Yes', style: { fill: 'White' } }]
    },
];
var diagramInstance;
var zoomFactor;
var horizontalOffset;
var verticalOffset;
var ZoomPan = (function (_super) {
    __extends(ZoomPan, _super);
    function ZoomPan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZoomPan.prototype.rendereComplete = function () {
        diagramInstance.scrollChange = function (args) {
            horizontalOffset.value = args.newValue.HorizontalOffset;
            verticalOffset.value = args.newValue.VerticalOffset;
        };
        diagramInstance.fitToPage();
    };
    ZoomPan.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "col-lg-8 control-section" },
                React.createElement(ej2_react_navigations_1.ToolbarComponent, { id: "toolbar_default", clicked: onItemClick, items: [
                        {
                            type: 'Button', tooltipText: 'ZoomIn', text: 'ZoomIn', prefixIcon: 'e-diagram-icons e-zoomin'
                        },
                        {
                            type: 'Button', tooltipText: 'ZoomOut', text: 'ZoomOut', prefixIcon: 'e-diagram-icons e-zoomout'
                        },
                        {
                            type: 'Button', tooltipText: 'Pan', text: 'Pan', prefixIcon: 'sf-icon-Pan'
                        },
                        {
                            type: 'Button', tooltipText: 'Reset', text: 'Reset', prefixIcon: 'e-diagram-icons e-reset'
                        },
                    ] }),
                React.createElement("div", { className: "content-wrapper" },
                    React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: 'diagram', ref: function (diagram) { return diagramInstance = diagram; }, width: '100%', height: '580px', mode: 'SVG', nodes: nodes, connectors: connectors }))),
            React.createElement("div", { className: "col-lg-4 property-section" },
                React.createElement("div", { className: "property-panel-header" }, "Properties"),
                React.createElement("table", { id: "property", title: "Properties", style: { width: '100%' } },
                    React.createElement("tr", null,
                        React.createElement("td", null, "Zoom Factor"),
                        React.createElement("td", null,
                            React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: function (zoomFactorRef) { return zoomFactor = zoomFactorRef; }, id: "zoomFact", style: { width: '90px' }, min: 0.2, max: 30, step: 0.2, value: 0.2 }))),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Horizontal Offset"),
                        React.createElement("td", null,
                            React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: function (horizontalOffsetRef) { return horizontalOffset = horizontalOffsetRef; }, id: "horOffset", style: { width: '90px' }, min: 0, max: 1000, step: 1, value: 0 }))),
                    React.createElement("tr", null,
                        React.createElement("td", null, "Vertical Offset"),
                        React.createElement("td", null,
                            React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: function (verticalOffsetRef) { return verticalOffset = verticalOffsetRef; }, id: "verOffset", style: { width: '90px' }, min: 0, max: 1000, step: 1, value: 0 })))))));
    };
    return ZoomPan;
}(sample_base_1.SampleBase));
exports.ZoomPan = ZoomPan;
function onItemClick(args) {
    switch (args.item.tooltipText) {
        case 'ZoomIn':
            diagramInstance.zoomTo({ zoomFactor: Number(zoomFactor.value), type: 'ZoomIn' });
            break;
        case 'ZoomOut':
            diagramInstance.zoomTo({ zoomFactor: Number(zoomFactor.value), type: 'ZoomOut' });
            break;
        case 'Pan':
            diagramInstance.tool = ej2_react_diagrams_1.DiagramTools.ZoomPan;
            break;
        case 'Reset':
            diagramInstance.reset();
            diagramInstance.fitToPage();
            break;
    }
}

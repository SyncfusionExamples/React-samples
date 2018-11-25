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
 * Sample for Range Navigator Print
 */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var property_pane_1 = require("../common/property-pane");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var stock_data_1 = require("./stock-data");
exports.date1 = new Date('2015-01-01');
exports.returnValue = stock_data_1.chartData1.filter(filterValue);
function filterValue(value) {
    return value.x <= exports.date1 && value.high < 120;
}
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }\n    #btn-control {\n        width: 100%;\n        text-align: center;\n    }\n\n    #rangenavigator {\n        padding: 0px !important;\n    }\n    #days{\n        font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px;\n    }\n    .e-play-icon::before {\n        content: '\\e813';\n    }";
var Print = (function (_super) {
    __extends(Print, _super);
    function Print() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Print.prototype.mode = function () {
        this.chartInstance.print();
        this.rangeInstance.print();
    };
    ;
    Print.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section row' },
                React.createElement("div", { className: 'col-md-9' },
                    React.createElement("div", { className: "row", style: { textAlign: "center" } },
                        React.createElement("div", { id: "days" }, "Temperature Variation by Day")),
                    React.createElement("div", { className: "row" },
                        React.createElement(ej2_react_charts_1.RangeNavigatorComponent, { id: 'rangenavigator', ref: function (rangenav) { return _this.rangeInstance = rangenav; }, style: { textAlign: "center" }, labelPosition: 'Outside', valueType: 'DateTime', tooltip: { enable: true }, value: [new Date(2013, 0, 1), new Date(2014, 0, 1)], width: ej2_base_1.Browser.isDevice ? '100%' : '80%', load: this.rangeLoad.bind(this), changed: this.changed.bind(this) },
                            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StepLineSeries, ej2_react_charts_1.RangeTooltip, ej2_react_charts_1.DateTime] }),
                            React.createElement(ej2_react_charts_1.RangenavigatorSeriesCollectionDirective, null,
                                React.createElement(ej2_react_charts_1.RangenavigatorSeriesDirective, { dataSource: exports.returnValue, xName: 'x', yName: 'high', type: 'StepLine', width: 1 })))),
                    React.createElement("div", { className: "row" },
                        React.createElement(ej2_react_charts_1.ChartComponent, { id: 'charts', ref: function (chart) { return _this.chartInstance = chart; }, style: { textAlign: "center" }, primaryXAxis: {
                                valueType: 'DateTime',
                                crosshairTooltip: { enable: false },
                                edgeLabelPlacement: 'Shift',
                                majorGridLines: { width: 0 }
                            }, primaryYAxis: {
                                minimum: 0,
                                maximum: 120,
                                labelFormat: '{value}˚F',
                                title: 'Temperatue'
                            }, load: this.chartLoad.bind(this), height: '350', width: ej2_base_1.Browser.isDevice ? '100%' : '80%', legendSettings: { visible: false }, tooltip: {
                                enable: true, shared: true
                            }, crosshair: {
                                enable: true,
                                line: {
                                    width: 0
                                },
                                lineType: 'Vertical'
                            }, chartArea: { border: { width: 0 } } },
                            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Crosshair, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DateTime] }),
                            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                                React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.returnValue, name: 'Temperature', xName: 'x', yName: 'high', animation: { enable: false }, type: 'Column', width: 2 }))))),
                React.createElement("div", { className: 'col-md-3 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: 'property', title: 'Properties', className: 'property-panel-table', style: { width: '100%' } },
                            React.createElement("tr", { style: { height: '50px' } },
                                React.createElement("td", { style: { width: '100%' } },
                                    React.createElement("div", { id: "btn-control" },
                                        React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: this.onClick.bind(this), iconCss: 'e-icons e-play-icon', cssClass: 'e-flat', isPrimary: true }, "Print")))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample illustrates the print feature in the range navigator. You can print the range navigator directly from the browser by clicking print.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this example, you can see how to render and configure the print feature. The rendered range navigator can be printed directly from the browser by calling the public method print."),
                React.createElement("p", null,
                    "More information on the print can be found in this",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype" }, "documentation section"),
                    "."))));
    };
    Print.prototype.changed = function (args) {
        if (this.chartInstance && this.chartRendered) {
            this.chartInstance.primaryXAxis.zoomFactor = args.zoomFactor;
            this.chartInstance.primaryXAxis.zoomPosition = args.zoomPosition;
            this.chartInstance.dataBind();
        }
        else {
            exports.zoomFactor = args.zoomFactor;
            exports.zoomPosition = args.zoomPosition;
        }
    };
    ;
    Print.prototype.chartLoad = function (args) {
        args.chart.primaryXAxis.zoomFactor = exports.zoomFactor;
        args.chart.primaryXAxis.zoomPosition = exports.zoomPosition;
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        this.chartRendered = true;
    };
    ;
    Print.prototype.rangeLoad = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.rangeNavigator.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        args.rangeNavigator.stepLineSeriesModule = new ej2_react_charts_1.StepLineSeries();
        args.rangeNavigator.dateTimeModule = new ej2_react_charts_1.DateTime(args.rangeNavigator);
        args.rangeNavigator.series[0].type = "StepLine";
    };
    ;
    Print.prototype.onClick = function (e) {
        this.rangeInstance.print(['rangenavigator', 'charts']);
    };
    return Print;
}(sample_base_1.SampleBase));
exports.Print = Print;

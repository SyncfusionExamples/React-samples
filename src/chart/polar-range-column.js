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
 * Sample for Polar Series with drawType RangeColumn
 */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var property_pane_1 = require("../common/property-pane");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
exports.data1 = [
    { x: 'Jan', low: 1.7, high: 7.1 }, { x: 'Feb', low: 1.9, high: 7.7 }, { x: 'Mar', low: 1.2, high: 7.5 },
    { x: 'Apr', low: 2.5, high: 9.8 }, { x: 'May', low: 4.7, high: 11.4 }, { x: 'Jun', low: 6.4, high: 14.4 },
    { x: 'Jul', low: 9.6, high: 17.2 }, { x: 'Aug', low: 10.7, high: 17.9 }, { x: 'Sep', low: 7.5, high: 15.1 },
    { x: 'Oct', low: 3.0, high: 10.5 }, { x: 'Nov', low: 1.2, high: 7.9 }, { x: 'Dec', low: 4.1, high: 9.1 }
];
var SAMPLE_CSS = "\n    .control-fluid {\n\t\tpadding: 0px !important;\n\t}";
var PolarRangeColumn = (function (_super) {
    __extends(PolarRangeColumn, _super);
    function PolarRangeColumn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.droplist = [
            { value: 'Polar' },
            { value: 'Radar' }
        ];
        return _this;
    }
    PolarRangeColumn.prototype.change = function () {
        this.chartInstance.series[0].type = this.dropElement.value;
        this.chartInstance.refresh();
    };
    ;
    PolarRangeColumn.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section row' },
                React.createElement("div", { className: 'col-md-8' },
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: 'charts', ref: function (chart) { return _this.chartInstance = chart; }, primaryXAxis: { valueType: 'Category', title: 'month', startAngle: 90, labelPlacement: 'OnTicks', interval: 1, coefficient: ej2_base_1.Browser.isDevice ? 80 : 100 }, primaryYAxis: { labelFormat: '{value}˚C', minimum: 0, maximum: 20, interval: 5 }, title: 'Maximum and Minimum Temperature', loaded: this.onChartLoad.bind(this), load: this.load.bind(this), legendSettings: { visible: false }, tooltip: {
                            enable: true
                        } },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.RangeColumnSeries, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.PolarSeries, ej2_react_charts_1.RadarSeries] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.data1, xName: 'x', low: 'low', high: 'high', type: 'Polar', drawType: 'RangeColumn', name: "Germany", border: { width: 3, color: 'white' } })))),
                React.createElement("div", { className: 'col-md-4 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: 'property', title: 'Properties', className: 'property-panel-table', style: { width: '100%' } },
                            React.createElement("tr", { style: { height: '50px' } },
                                React.createElement("td", { style: { width: '60%' } },
                                    React.createElement("div", null, "Series Type:")),
                                React.createElement("td", { style: { width: '40%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { width: 120, id: "selmode", change: this.change.bind(this), ref: function (d) { return _this.dropElement = d; }, dataSource: this.droplist, fields: { text: 'value', value: 'value' }, value: "Polar" })))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates polar series with range column type for temperature variation. The switching between polar and radar series can be done by using ",
                    React.createElement("code", null, "Series Type"),
                    " in property panel.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how to render and configure the range column type chart You can use ",
                    React.createElement("code", null, "border"),
                    ",",
                    React.createElement("code", null, "fill"),
                    " properties to customize the area. ",
                    React.createElement("code", null, "dataLabel"),
                    " are used to represent individual data and its value."),
                React.createElement("p", null, "Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "chart component features are segregated into individual feature-wise modules. To use range column series, we need to Injecting",
                    React.createElement("code", null, "PolarSeries"),
                    " and ",
                    React.createElement("code", null, "RadarSeries"),
                    " module into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the range column series can be found in this \u00A0",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/react/documentation/chart/api-series.html#type-chartseriestype" }, "documentation section"),
                    "."))));
    };
    PolarRangeColumn.prototype.onChartLoad = function (args) {
        document.getElementById('charts').setAttribute('title', '');
    };
    ;
    PolarRangeColumn.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    ;
    return PolarRangeColumn;
}(sample_base_1.SampleBase));
exports.PolarRangeColumn = PolarRangeColumn;

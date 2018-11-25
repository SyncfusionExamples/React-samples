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
 * Sample for column series with rounded corner
 */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var theme_color_1 = require("./theme-color");
var sample_base_1 = require("../common/sample-base");
var SAMPLE_CSS = "\n    .control-fluid {\n\t\tpadding: 0px !important;\n    }";
exports.data1 = [
    { x: 'BGD', y: 106, text: 'Bangaladesh' },
    { x: 'BTN', y: 103, text: 'Bhutn' },
    { x: 'NPL', y: 198, text: 'Nepal' },
    { x: 'THA', y: 189, text: 'Thiland' },
    { x: 'MYS', y: 250, text: 'Malaysia' }
];
exports.labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'material';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = theme_color_1.fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = theme_color_1.materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = theme_color_1.highContrastColors[args.point.index % 10];
    }
    else {
        args.fill = theme_color_1.bootstrapColors[args.point.index % 10];
    }
};
exports.tooltipRender = function (args) {
    var tooltip = args.text;
    if (tooltip.indexOf('BGD') > -1) {
        tooltip = tooltip.replace('BGD', 'Bangladesh');
    }
    else if (tooltip.indexOf('BTN') > -1) {
        tooltip = tooltip.replace('BTN', 'Bhutan');
    }
    else if (tooltip.indexOf('NPL') > -1) {
        tooltip = tooltip.replace('NPL', 'Nepal');
    }
    else if (tooltip.indexOf('THA') > -1) {
        tooltip = tooltip.replace('THA', 'Thailand');
    }
    else {
        tooltip = tooltip.replace('MYS', 'Malaysia');
    }
    args.text = tooltip;
};
var RoundedColumn = (function (_super) {
    __extends(RoundedColumn, _super);
    function RoundedColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoundedColumn.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_charts_1.ChartComponent, { id: 'charts', style: { textAlign: "center" }, primaryXAxis: { valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, tickPosition: 'Inside',
                        labelPosition: 'Inside', labelStyle: { color: '#ffffff' } }, primaryYAxis: { minimum: 0, maximum: 300, interval: 50, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' } }, chartArea: { border: { width: 0 } }, load: this.load.bind(this), title: 'Tiger Population - 2016', loaded: this.onChartLoad.bind(this), legendSettings: { visible: false }, width: ej2_base_1.Browser.isDevice ? '100%' : '60%', tooltip: { enable: true }, pointRender: exports.labelRender, tooltipRender: exports.tooltipRender },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.data1, type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Tiger', cornerRadius: { bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10 }, marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } } }))),
                React.createElement("div", { style: { float: 'right', marginRight: '10px' } },
                    "Source:",
                    React.createElement("a", { href: "https://blogs.scientificamerican.com/extinction-countdown/tiger-populations-increasing/", target: "_blank" }, "blogs.scientificamerican.com"))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample illustrates a rounded column series. Data points values are showed by using data label.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how to render and configure the column type charts with rounded corner. Column type charts are used for comparing the frequency, count, total or average of data in different categories. You can use ",
                    React.createElement("code", null, "border"),
                    ",",
                    React.createElement("code", null, "fill"),
                    " properties to customize the vertical rectangle. ",
                    React.createElement("code", null, "dataLabel"),
                    " is used to represent individual data and its value."),
                React.createElement("p", null, "Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices."),
                React.createElement("br", null),
                React.createElement("p", { style: { "font-weight": 500 } }, "Injecting Module"),
                React.createElement("p", null,
                    "Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject",
                    React.createElement("code", null, "ColumnSeries"),
                    " module into ",
                    React.createElement("code", null, "services")),
                React.createElement("p", null,
                    "More information on the column series can be found in this",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype" }, "documentation section"),
                    "."))));
    };
    RoundedColumn.prototype.onChartLoad = function (args) {
        var chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    ;
    RoundedColumn.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    ;
    return RoundedColumn;
}(sample_base_1.SampleBase));
exports.RoundedColumn = RoundedColumn;

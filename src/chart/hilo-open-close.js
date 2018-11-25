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
 * Sample for Hilo Open Close Series
 */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var sample_base_1 = require("../common/sample-base");
var stock_chart_data_1 = require("./stock-chart-data");
var ej2_base_1 = require("@syncfusion/ej2-base");
var helper_1 = require("@syncfusion/ej2-svg-base/src/tooltip/helper");
var SAMPLE_CSS = "\n    .control-fluid {\n\t\tpadding: 0px !important;\n    }\n    #title{\n        font-size: 15px;\n        font-style: normal;\n        font-family: \"Segoe UI\";\n        font-weight: 500;\n        text-anchor: middle;\n        transform: none;\n        opacity: 1;\n    }";
var HiloOpenClose = (function (_super) {
    __extends(HiloOpenClose, _super);
    function HiloOpenClose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HiloOpenClose.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: "row", style: { textAlign: "center" } },
                    React.createElement("div", { id: "title" }, " AAPL Historical")),
                React.createElement("div", { className: "row" },
                    React.createElement(ej2_react_charts_1.RangeNavigatorComponent, { id: 'rangenavigator', ref: function (rangenavigator) { return _this.rangenavigator1 = rangenavigator; }, style: { textAlign: "center" }, valueType: 'DateTime', width: ej2_base_1.Browser.isDevice ? '100%' : '80%', xName: 'x', yName: 'Close', disableRangeSelector: true, dataSource: stock_chart_data_1.chartData, periodSelectorSettings: {
                            position: 'Top',
                            periods: [
                                { text: '1M', interval: 1, intervalType: 'Months' },
                                { text: '3M', interval: 2, intervalType: 'Months' },
                                { text: '2Q', interval: 2, intervalType: 'Quarter' },
                                { text: '1Y', interval: 1, intervalType: 'Years' },
                                { text: '2Y', interval: 2, intervalType: 'Years', selected: true },
                                { text: 'YTD' },
                                { text: 'All' }
                            ]
                        }, load: this.rangeLoad.bind(this), loaded: this.rangeLoaded.bind(this), changed: this.changed.bind(this) },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.DateTime, ej2_react_charts_1.PeriodSelector] }))),
                React.createElement("div", { className: "row" },
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: 'charts', load: this.load.bind(this), style: { textAlign: "center" }, ref: function (chart) { return _this.chart1 = chart; }, primaryXAxis: {
                            valueType: 'DateTime',
                            crosshairTooltip: { enable: true },
                            majorGridLines: { width: 0 }
                        }, primaryYAxis: {
                            title: 'Price',
                            rangePadding: 'None',
                            labelFormat: 'n0',
                            lineStyle: { width: 0 },
                            majorTickLines: { width: 0 }
                        }, chartArea: { border: { width: 0 } }, tooltip: {
                            enable: true, shared: true
                        }, axisLabelRender: this.axisLabelRender.bind(this), width: ej2_base_1.Browser.isDevice ? '100%' : '80%', legendSettings: { visible: false }, crosshair: { enable: true, lineType: 'Vertical', line: { width: 0 } } },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.HiloOpenCloseSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DateTime, ej2_react_charts_1.Zoom, ej2_react_charts_1.Logarithmic, ej2_react_charts_1.Crosshair] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'HiloOpenClose', dataSource: stock_chart_data_1.chartData, animation: { enable: true }, bearFillColor: '#2ecd71', bullFillColor: '#e74c3d', xName: 'x', low: 'low', high: 'high', open: 'open', close: 'close', name: 'Apple Inc' }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes the AAPL historical data with default HILO Open Close series in the chart. Tooltip and crosshair shows the information about the data and period.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how to render and configure the Hilo Open Close type charts. Hilo Open Close chart are used to represent the price movements in stock. You can use ",
                    React.createElement("code", null, "border"),
                    ", ",
                    React.createElement("code", null, "fill"),
                    " properties to customize the vertical rect."),
                React.createElement("p", null, "Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices."),
                React.createElement("br", null),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Chart component features are segregated into individual feature-wise modules. To use HiloOpenClose series, we need to inject",
                    React.createElement("code", null, "HiloOpenCloseSeries"),
                    " module into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the column series can be found in this \u00A0",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/react/documentation/chart/api-series.html#type-chartseriestype" }, "documentation section"),
                    "."))));
    };
    HiloOpenClose.prototype.load = function (args) {
        args.chart.primaryXAxis.zoomFactor = exports.zoomFactor;
        args.chart.primaryXAxis.zoomPosition = exports.zoomPosition;
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        this.isChart = true;
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    ;
    HiloOpenClose.prototype.rangeLoaded = function (args) {
        var element = helper_1.getElement('rangenavigator_Secondary_Element');
        if (!ej2_base_1.Browser.isDevice) {
            element.style.transform = 'translate(13%)';
        }
    };
    HiloOpenClose.prototype.axisLabelRender = function (args) {
        if (args.axis.title === 'Price') {
            args.text = '$' + args.text;
        }
    };
    HiloOpenClose.prototype.rangeLoad = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.rangeNavigator.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        args.rangeNavigator.periodSelectorSettings.height = document.body.className.indexOf('e-bigger') > -1 ? 56 : 42;
    };
    ;
    HiloOpenClose.prototype.changed = function (args) {
        if (this.chart1 && this.isChart) {
            var filterData = stock_chart_data_1.chartData.filter(function (data) {
                /* tslint:disable:no-string-literal */
                return ((data.x).getTime() >= (args.start) && (data.x).getTime() <= (args.end));
            });
            this.chart1.series[0].animation.enable = false;
            this.chart1.series[0].dataSource = filterData;
            this.chart1.refresh();
        }
    };
    ;
    return HiloOpenClose;
}(sample_base_1.SampleBase));
exports.HiloOpenClose = HiloOpenClose;

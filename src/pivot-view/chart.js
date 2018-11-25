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
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var sample_base_1 = require("../common/sample-base");
var data_source_1 = require("./data-source");
var ej2_charts_1 = require("@syncfusion/ej2-charts");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_base_1 = require("@syncfusion/ej2-base");
require("./chart.css");
/**
 * PivotView Sample with Chart integration.
 */
var dataSource = {
    enableSorting: true,
    columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    valueSortSettings: { headerDelimiter: ' - ' },
    data: data_source_1.Pivot_Data,
    expandAll: false,
    values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' }],
    filters: []
};
var ChartIntegration = (function (_super) {
    __extends(ChartIntegration, _super);
    function ChartIntegration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onInit = true;
        _this.measure = 'In Stock';
        _this.measureOptions = [{
                id: 'In Stock',
                type: 'In Stock'
            },
            {
                id: 'Unit Sold',
                type: 'Unit Sold'
            }
        ];
        return _this;
    }
    ChartIntegration.prototype.onChange = function (args) {
        this.measure = args.value.toString();
        this.onChartLoad();
    };
    ChartIntegration.prototype.onChartLoad = function () {
        if (this.onInit && this.pivotGridObj) {
            this.onInit = false;
            this.engineModule = ej2_base_1.extend({}, this.pivotGridObj.engineModule, null, true);
        }
        if (this.engineModule) {
            var valuesContent = this.engineModule.valueContent;
            var data = [];
            for (var cCnt = 0; cCnt < valuesContent.length; cCnt++) {
                if (!valuesContent[cCnt][0].type) {
                    data[cCnt] = valuesContent[cCnt];
                }
            }
            var chartSeries = void 0;
            for (var cCnt = 0; cCnt < 1; cCnt++) {
                if (data[cCnt]) {
                    for (var rCnt = this.measure === 'In Stock' ? 1 : (this.measure ? 2 : 1); rCnt < Object.keys(data[cCnt]).length; rCnt++) {
                        if (data[cCnt][rCnt] && !this.engineModule.pivotValues[0][rCnt].type && !data[cCnt][rCnt].type && rCnt > 0) {
                            var colText = this.engineModule.pivotValues[0][rCnt].formattedText;
                            if (!chartSeries) {
                                chartSeries = [{
                                        dataSource: data,
                                        xName: cCnt + '.valueSort.levelName',
                                        yName: rCnt + '.value',
                                        type: 'Column',
                                        name: colText
                                    }];
                            }
                            else {
                                chartSeries.push({
                                    dataSource: data,
                                    xName: cCnt + '.valueSort.levelName',
                                    yName: rCnt + '.value',
                                    type: 'Column',
                                    name: colText
                                });
                            }
                            rCnt++;
                        }
                    }
                }
            }
            if (this.chart && this.chart.element) {
                this.chart.primaryYAxis = {
                    title: this.measure
                };
                this.chart.primaryXAxis = {
                    valueType: 'Category',
                    title: 'Country',
                    labelIntersectAction: 'Rotate45'
                };
                this.chart.series = chartSeries;
                this.chart.refresh();
            }
            else {
                ej2_charts_1.Chart.Inject(ej2_charts_1.ColumnSeries, ej2_charts_1.LineSeries, ej2_charts_1.Legend, ej2_charts_1.Tooltip, ej2_charts_1.Category);
                this.chart = new ej2_charts_1.Chart({
                    title: 'Sales Analysis',
                    legendSettings: {
                        visible: true
                    },
                    tooltip: {
                        enable: true
                    },
                    primaryYAxis: {
                        title: this.measure || 'In Stock',
                    },
                    primaryXAxis: {
                        valueType: 'Category',
                        title: 'Country',
                        labelIntersectAction: 'Rotate45'
                    },
                    series: chartSeries,
                    load: function (args) {
                        var selectedTheme = location.hash.split('/')[1];
                        selectedTheme = selectedTheme ? selectedTheme : 'Material';
                        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
                    }
                }, '#chart');
                this.chart.refresh();
            }
        }
    };
    ChartIntegration.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'col-lg-12 control-section' },
                React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (d) { return _this.pivotGridObj = d; }, dataSource: dataSource, width: '100%', height: '300', dataBound: this.onChartLoad, gridSettings: { columnWidth: 120 } }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("div", { id: "chart", style: { height: '450px' } }),
                React.createElement("div", { id: 'ddldiv', style: { float: 'right', marginRight: '10px' } },
                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { change: this.onChange.bind(this), width: 120, id: "etype", index: 0, enabled: true, dataSource: this.measureOptions, fields: { text: 'type', value: 'id' } }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the integration of pivotgrid data into a simple chart widget.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this sample, the stock and sales of certain products, across different countries over certain fiscal years are acquired from the pivotgrid and plotted in the chart widget as series. The",
                    React.createElement("b", null, " stock"),
                    " and",
                    React.createElement("b", null, " sales"),
                    " values can be switched using the drop-down list located on the top-right corner of the chart widget."),
                React.createElement("p", null, "Since we have only a simple chart now, we have bound the aggregated pivotgrid data alone without the major UI interaction like drill-down. On pivotchart implementation in the near future, we will provide rich UI interaction."))));
    };
    return ChartIntegration;
}(sample_base_1.SampleBase));
exports.ChartIntegration = ChartIntegration;

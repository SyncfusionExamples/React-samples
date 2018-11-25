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
var property_pane_1 = require("../common/property-pane");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var data_source_1 = require("./data-source");
var sample_base_1 = require("../common/sample-base");
/**
 * PivotView Aggregation Sample.
*/
var dataSource = {
    enableSorting: true,
    formatSettings: [{ name: 'ProCost', format: 'C0' }, { name: 'PowUnits', format: 'N0' }],
    drilledMembers: [{ name: 'EnerType', items: ['Biomass', 'Free Energy'] }],
    columns: [
        { name: 'EnerType', caption: 'Energy Type' },
        { name: 'EneSource', caption: 'Energy Source' }
    ],
    data: data_source_1.renewableEnergy,
    expandAll: false,
    rows: [
        { name: 'Year', caption: 'Production Year' },
        { name: 'HalfYear', caption: 'Half Year' },
        { name: 'Quarter', caption: 'Quarter Year' }
    ],
    values: [
        { name: 'PowUnits', caption: 'Units (GWh)' },
        { name: 'ProCost', caption: 'Cost (MM)' }
    ],
    filters: []
};
var SAMPLE_CSS = "\n.e-pivotview {\n    width: 100%;\n    height: 100%;\n}";
var Aggregation = (function (_super) {
    __extends(Aggregation, _super);
    function Aggregation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fields = { text: 'text', value: 'value' };
        _this.mVal = 'Sum';
        _this.qData = [
            { 'value': 'Max', 'text': 'Max' }, { 'value': 'Min', 'text': 'Min' },
            { 'value': 'Count', 'text': 'Count' }, { 'value': 'Sum', 'text': 'Sum' },
            { 'value': 'Avg', 'text': 'Average' }
        ];
        _this.cData = [
            { 'value': 'Max', 'text': 'Max' }, { 'value': 'Min', 'text': 'Min' },
            { 'value': 'Sum', 'text': 'Sum' }, { 'value': 'Avg', 'text': 'Average' }
        ];
        return _this;
    }
    Aggregation.prototype.changeBalance = function (e) {
        this.setSummaryType('PowUnits', e.value);
    };
    Aggregation.prototype.changeQuantity = function (e) {
        this.setSummaryType('ProCost', e.value);
    };
    Aggregation.prototype.setSummaryType = function (fieldName, summaryType) {
        var isAvail = false;
        for (var vCnt = 0; vCnt < this.pivotGridObj.dataSource.values.length; vCnt++) {
            if (this.pivotGridObj.dataSource.values[vCnt].name === fieldName) {
                this.pivotGridObj.dataSource.values[vCnt].type = summaryType;
                isAvail = this.pivotGridObj.dataSource.values[vCnt].properties ? false : true;
            }
        }
        if (isAvail) {
            this.pivotGridObj.updateDataSource();
        }
    };
    Aggregation.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section', style: { overflow: 'initial' } },
                React.createElement("div", { className: 'col-lg-9 adaptive' },
                    React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (pivotview) { _this.pivotGridObj = pivotview; }, dataSource: dataSource, showFieldList: true, width: '100%', height: '300', gridSettings: { columnWidth: 140 } },
                        React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.FieldList] }))),
                React.createElement("div", { className: 'col-lg-3 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: 'property', title: 'Properties', className: 'property-panel-table', style: { width: '100%' } },
                            React.createElement("tbody", null,
                                React.createElement("tr", { style: { height: '50px' } },
                                    React.createElement("td", null,
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: 'mode', floatLabelType: 'Auto', placeholder: 'Units', width: '100%', dataSource: this.qData, fields: this.fields, value: this.mVal, change: this.changeBalance.bind(this) })))),
                                React.createElement("tr", { style: { height: '50px' } },
                                    React.createElement("td", null,
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: 'mode', floatLabelType: 'Auto', placeholder: 'Cost', width: '100%', dataSource: this.cData, fields: this.fields, value: this.mVal, change: this.changeQuantity.bind(this) }))))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the aggregate types in the pivotgrid widget. In this sample, you can change the aggregate types for value fields using a dropdown list separately.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "The pivotgrid widget supports different types of aggregation for value fields. The aggregate type can be set using the type property of the value field. The built-in aggregates are:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "Sum")),
                    React.createElement("li", null,
                        React.createElement("code", null, "Average")),
                    React.createElement("li", null,
                        React.createElement("code", null, "Min")),
                    React.createElement("li", null,
                        React.createElement("code", null, "Max")),
                    React.createElement("li", null,
                        React.createElement("code", null, "Count"))))));
    };
    return Aggregation;
}(sample_base_1.SampleBase));
exports.Aggregation = Aggregation;

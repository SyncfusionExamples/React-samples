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
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./sorting.css");
/**
 * PivotView Member Sorting sample.
 */
var dataSource = {
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
    data: data_source_1.Pivot_Data,
    expandAll: false,
    values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
    enableSorting: true
};
var Sorting = (function (_super) {
    __extends(Sorting, _super);
    function Sorting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.order = ['Ascending', 'Descending'];
        _this.fields = [{ Field: 'Country', Order: 'Country_asc' },
            { Field: 'Products', Order: 'Products_asc' },
            { Field: 'Year', Order: 'Year_asc' },
            { Field: 'Order Source', Order: 'Order Source_asc' }];
        return _this;
    }
    Sorting.prototype.onChange = function (e) {
        if (this.fieldsddl.dataSource[this.fieldsddl.index].Order === this.fieldsddl.dataSource[this.fieldsddl.index].Field + '_asc') {
            this.orderddl.index = 0;
        }
        else {
            this.orderddl.index = 1;
        }
    };
    Sorting.prototype.onChangeOrder = function (args) {
        if (args.value === 'Ascending') {
            this.fieldsddl.dataSource[this.fieldsddl.index].Order = this.fieldsddl.dataSource[this.fieldsddl.index].Field + '_asc';
        }
        else {
            this.fieldsddl.dataSource[this.fieldsddl.index].Order = this.fieldsddl.dataSource[this.fieldsddl.index].Field + '_desc';
        }
        this.fieldsddl.refresh();
    };
    Sorting.prototype.checkChange = function (args) {
        if (args.checked) {
            this.fieldsddl.enabled = true;
            this.orderddl.enabled = true;
            this.applyBtn.disabled = false;
        }
        else {
            this.fieldsddl.enabled = false;
            this.orderddl.enabled = false;
            this.applyBtn.disabled = true;
        }
    };
    Sorting.prototype.onClick = function () {
        if (this.checkBoxObj.checked) {
            this.pivotGridObj.dataSource.enableSorting = true;
            this.pivotGridObj.dataSource.sortSettings = [
                { name: 'Country', order: this.fieldsddl.dataSource[0].Order === 'Country_asc' ? 'Ascending' : 'Descending' },
                { name: 'Products', order: this.fieldsddl.dataSource[1].Order === 'Products_asc' ? 'Ascending' : 'Descending' },
                { name: 'Year', order: this.fieldsddl.dataSource[2].Order === 'Year_asc' ? 'Ascending' : 'Descending' },
                { name: 'Order_Source', order: this.fieldsddl.dataSource[3].Order === 'Order Source_asc' ? 'Ascending' : 'Descending' }
            ];
        }
        else {
            this.pivotGridObj.dataSource.enableSorting = false;
            this.pivotGridObj.dataSource.sortSettings = [];
        }
    };
    Sorting.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'col-lg-8 adaptive' },
                    React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (pivotview) { _this.pivotGridObj = pivotview; }, dataSource: dataSource, width: '100%', height: '300', gridSettings: { columnWidth: 140 } })),
                React.createElement("div", { className: 'col-lg-4 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: 'property', title: 'Properties', className: 'property-panel-table', style: { width: '100%' } },
                            React.createElement("tbody", null,
                                React.createElement("tr", { style: { height: "50px" } },
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { paddingLeft: 0, marginLeft: '-10px' } },
                                            React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: function (scope) { _this.checkBoxObj = scope; }, id: 'reorder', checked: true, label: 'Enable Sorting', labelPosition: 'After', change: this.checkChange.bind(this) })))),
                                React.createElement("tr", { style: { height: '50px' } },
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'pivotHdrLabel' }, "Fields:")),
                                    React.createElement("td", null,
                                        React.createElement("div", { style: { marginLeft: '-50px' } },
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { enabled: true, ref: function (scope) { _this.fieldsddl = scope; }, change: this.onChange.bind(this), width: "98%", id: "etype", dataSource: this.fields, index: 0, fields: { text: 'Field', value: 'Order' } })))),
                                React.createElement("tr", { style: { height: '50px' } },
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'pivotHdrLabel' }, "Order:")),
                                    React.createElement("td", null,
                                        React.createElement("div", { style: { marginLeft: '-50px' } },
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { enabled: true, ref: function (scope) { _this.orderddl = scope; }, change: this.onChangeOrder.bind(this), width: "98%", id: "etype", dataSource: this.order, index: 0 })))),
                                React.createElement("tr", { style: { height: "50px" } },
                                    React.createElement("td", null),
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { float: 'right', paddingRight: '15px' } },
                                            React.createElement(ej2_react_buttons_1.ButtonComponent, { ref: function (scope) { _this.applyBtn = scope; }, onClick: this.onClick.bind(this), iconCss: 'e-icons e-apply-icon', cssClass: 'e-flat', isPrimary: true }, "Apply"))))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates ordering of fields either in ascending or descending order.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this sample, any field can be selected from the",
                    React.createElement("b", null, " Fields"),
                    " dropdown list and its order can be changed to display headers either in ascending or descending order. It can be enabled using the",
                    React.createElement("code", null, " enableSorting"),
                    " property and it can be configured using the",
                    React.createElement("code", null, " name"),
                    " and",
                    React.createElement("code", null, " order"),
                    " options inside the",
                    React.createElement("code", null, " sortSettings"),
                    " property in the pivotgrid widget."))));
    };
    return Sorting;
}(sample_base_1.SampleBase));
exports.Sorting = Sorting;

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
var data_source_1 = require("./data-source");
var sample_base_1 = require("../common/sample-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
/**
 * PivotView Sample with Drill Options.
 */
var dataSource = {
    enableSorting: true,
    columns: [{ name: 'Year' }, { name: 'Quarter' }, { name: 'Order_Source', caption: 'Order Source' }],
    rows: [{ name: 'Country' }, { name: 'Product_Categories', caption: 'Product Categories' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    data: data_source_1.Pivot_Data,
    expandAll: false,
    values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    filters: []
};
var SAMPLE_CSS = "\n.e-pivotview {\n    width: 100%;\n    height: 100%;\n}";
var DrillOptions = (function (_super) {
    __extends(DrillOptions, _super);
    function DrillOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrillOptions.prototype.onRadioChange = function (args) {
        var id = args.event.target.id;
        if (id !== 'collapse') {
            /** To restrict multiple times grid rendering on property change */
            this.pivotGridObj.setProperties({ dataSource: { expandAll: false, drilledMembers: [] } }, true);
        }
        else {
            this.pivotGridObj.dataSource.drilledMembers = [];
        }
        if (id === 'collapse') {
            this.pivotGridObj.dataSource.expandAll = false;
        }
        else if (id === 'expand') {
            this.pivotGridObj.dataSource.expandAll = true;
        }
        else if (id === 'fy15') {
            this.pivotGridObj.dataSource.drilledMembers = [{ name: 'Year', items: ['FY 2015'] }];
        }
        else if (id === 'fy15_q1') {
            this.pivotGridObj.dataSource.drilledMembers = [{ name: 'Year', items: ['FY 2015'] },
                { name: 'Quarter', items: ['Q1'] }];
        }
        else if (id === 'us') {
            this.pivotGridObj.dataSource.drilledMembers = [{ name: 'Country', items: ['United States'] }];
        }
        else {
            this.pivotGridObj.dataSource.drilledMembers = [{ name: 'Country', items: ['United States'] },
                { name: 'Product_Categories', items: ['Clothing'] }];
        }
    };
    DrillOptions.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'col-lg-8 adaptive' },
                    React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (pivotview) { _this.pivotGridObj = pivotview; }, dataSource: dataSource, width: '100%', height: '300', gridSettings: { columnWidth: 140 } })),
                React.createElement("div", { className: 'col-lg-4 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: 'property', title: 'Properties', className: 'property-panel-table', style: { width: '100%', height: '100%' } },
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { margin: '0px' } },
                                            React.createElement(ej2_react_buttons_1.RadioButtonComponent, { id: "collapse", change: this.onRadioChange.bind(this), checked: true, label: 'Collapse All', name: 'DrillOperation', value: "Collapse All" })))),
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { margin: '0px' } },
                                            React.createElement(ej2_react_buttons_1.RadioButtonComponent, { id: "expand", change: this.onRadioChange.bind(this), label: 'Expand All', name: 'DrillOperation', value: "Expand All" })))),
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { margin: '0px' } },
                                            React.createElement(ej2_react_buttons_1.RadioButtonComponent, { id: "fy15", change: this.onRadioChange.bind(this), label: 'FY 2015', name: 'DrillOperation', value: "FY 2015" })))),
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { margin: '0px' } },
                                            React.createElement(ej2_react_buttons_1.RadioButtonComponent, { id: "fy15_q1", change: this.onRadioChange.bind(this), label: 'FY 2015 >> Q1', name: 'DrillOperation', value: "FY 2015 >> Q1" })))),
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { margin: '0px' } },
                                            React.createElement(ej2_react_buttons_1.RadioButtonComponent, { id: "us", change: this.onRadioChange.bind(this), label: 'United States', name: 'DrillOperation', value: "United States" })))),
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { margin: '0px' } },
                                            React.createElement(ej2_react_buttons_1.RadioButtonComponent, { id: "us_clothing", change: this.onRadioChange.bind(this), label: 'United States >> Clothing', name: 'DrillOperation', value: "United States >> Clothing" }))))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the drill up and drill down capabilities of pivotgrid widget.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In the sample, the pivotgrid widget can be completely expanded as well as collapsed. It can be done using",
                    React.createElement("code", null, "expandAll"),
                    " property in pivotgrid widget.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Meanwhile a particular row or column header can also be drilled during initial loading of the pivotgrid. It can be done using the",
                    React.createElement("code", null, "name"),
                    " and",
                    React.createElement("code", null, "items"),
                    " options inside the",
                    React.createElement("code", null, "drilledMembers"),
                    " property in pivotgrid widget."))));
    };
    return DrillOptions;
}(sample_base_1.SampleBase));
exports.DrillOptions = DrillOptions;

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
var data_source_1 = require("./data-source");
var sample_base_1 = require("../common/sample-base");
require("./right-to-left.css");
/**
 * PivotView RTL Sample.
 */
var dataSource = {
    data: data_source_1.Pivot_Data,
    expandAll: false,
    enableSorting: true,
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
    columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
};
var RTL = (function (_super) {
    __extends(RTL, _super);
    function RTL() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RTL.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', dataSource: dataSource, showGroupingBar: true, width: '100%', height: '300', showFieldList: true, allowCalculatedField: true, enableRtl: true, gridSettings: { columnWidth: 140 } },
                    React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.GroupingBar, ej2_react_pivotview_1.FieldList, ej2_react_pivotview_1.CalculatedField] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the right-to-left view of the",
                    React.createElement("code", null, "PivotGrid, Grouping Bar"),
                    " and",
                    React.createElement("code", null, "Field List"))),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    React.createElement("code", null, "PivotGrid"),
                    ",",
                    React.createElement("code", null, "Grouping Bar"),
                    " and",
                    React.createElement("code", null, "Field List"),
                    " support right-to-left direction. It can be enabled by setting the",
                    React.createElement("code", null, "enbleRtl"),
                    " property to true. To open the field list, click the icon at the top-left corner of the grouping bar."))));
    };
    return RTL;
}(sample_base_1.SampleBase));
exports.RTL = RTL;

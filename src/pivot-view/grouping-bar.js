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
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var data_source_1 = require("./data-source");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
require("./grouping-bar.css");
/**
 * PivotView Grouping bar Sample
 */
var dataSource = {
    enableSorting: true,
    columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    data: data_source_1.Pivot_Data,
    expandAll: false,
    values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    filters: [{ name: 'Product_Categories', caption: 'Product Categories' }]
};
var Grouping = (function (_super) {
    __extends(Grouping, _super);
    function Grouping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grouping.prototype.onChange = function (args) {
        if (args.event.target.id === 'filter') {
            this.pivotGridObj.groupingBarSettings.showFilterIcon = args.checked;
        }
        else if (args.event.target.id === 'sort') {
            this.pivotGridObj.groupingBarSettings.showSortIcon = args.checked;
        }
        else {
            this.pivotGridObj.groupingBarSettings.showRemoveIcon = args.checked;
        }
    };
    Grouping.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'col-lg-9 control-section', style: { overflow: 'initial' } },
                React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (scope) { _this.pivotGridObj = scope; }, dataSource: dataSource, width: '100%', height: '300', showGroupingBar: true, showFieldList: true, gridSettings: { columnWidth: 140 } },
                    React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.GroupingBar, ej2_react_pivotview_1.FieldList] }))),
            React.createElement("div", { className: "col-lg-3 property-section" },
                React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                    React.createElement("table", { id: "property", title: "Properties", style: { width: '100%', height: '100%' } },
                        React.createElement("tbody", null,
                            React.createElement("tr", { style: { height: '50px' } },
                                React.createElement("td", null,
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: 'sort', checked: true, label: 'Show Sort Icon', change: this.onChange.bind(this) })))),
                            React.createElement("tr", { style: { height: '50px' } },
                                React.createElement("td", null,
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: 'filter', checked: true, label: 'Show Filter Icon', change: this.onChange.bind(this) })))),
                            React.createElement("tr", { style: { height: '50px' } },
                                React.createElement("td", null,
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: 'remove', checked: true, label: 'Show Remove Icon', change: this.onChange.bind(this) })))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the grouping bar feature of the pivotgrid widget. In the sample, fields are automatically populated from the bound data source, and it can be used to create a pivot view at runtime.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The pivotgrid widget grouping bar option automatically populates fields from the bound data source and allows end users to drag fields between different axes such as columns, rows, values, and filters, and create pivot views at runtime. To enable grouping bar, set the",
                    React.createElement("code", null, "showGroupingBar"),
                    " property as true."),
                React.createElement("p", null, "Filter and sort icons allow displaying selective records and ordering them in ascending or descending order. The remove icon allows the user to remove the field from the report."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Injecting Module:")),
                React.createElement("p", null,
                    "The pivotgrid widget features are segregated into individual modules. To take advantage of grouping bar support, we need to inject the",
                    React.createElement("code", null, " GroupingBar"),
                    " module into the",
                    React.createElement("code", null, " services"),
                    "."))));
    };
    return Grouping;
}(sample_base_1.SampleBase));
exports.Grouping = Grouping;

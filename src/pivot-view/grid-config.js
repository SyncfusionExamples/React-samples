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
/**
 * PivotView sample with Grid Configurations.
 */
var dataSource = {
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    enableSorting: true,
    columns: [{ name: 'Year' }, { name: 'Quarter' }],
    valueSortSettings: { headerDelimiter: ' - ' },
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    data: data_source_1.defaultData,
    expandAll: false,
    filters: []
};
var SAMPLE_CSS = "\n.e-pivotview {\n    width: 100%;\n    height: 100%;\n}";
var GridConfig = (function (_super) {
    __extends(GridConfig, _super);
    function GridConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gridLineOptions = [{
                id: 'Default',
                type: 'Default'
            },
            {
                id: 'Both',
                type: 'Both'
            },
            {
                id: 'None',
                type: 'None'
            },
            {
                id: 'Horizontal',
                type: 'Horizontal'
            },
            {
                id: 'Vertical',
                type: 'Vertical'
            }
        ];
        return _this;
    }
    GridConfig.prototype.onChange = function (e) {
        this.pivotGridObj.gridSettings.gridLines = e.value;
    };
    GridConfig.prototype.checkChange = function (args) {
        if (args.event.target.id === 'reorder') {
            this.pivotGridObj.gridSettings.allowReordering = args.checked;
        }
        else if (args.event.target.id === 'resize') {
            this.pivotGridObj.gridSettings.allowResizing = args.checked;
        }
        else {
            this.pivotGridObj.gridSettings.allowTextWrap = args.checked;
        }
    };
    GridConfig.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section', style: { overflow: 'initial' } },
                React.createElement("div", { className: 'col-lg-9 adaptive' },
                    React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (pivotview) { _this.pivotGridObj = pivotview; }, dataSource: dataSource, width: '100%', height: '300', showFieldList: true, gridSettings: { allowReordering: true, allowResizing: true, columnWidth: 140 } },
                        React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.FieldList] }))),
                React.createElement("div", { className: 'col-lg-3 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: 'property', title: 'Properties', className: 'property-panel-table', style: { width: '100%' } },
                            React.createElement("tbody", null,
                                React.createElement("tr", { style: { height: "50px" } },
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { margin: '0px' } },
                                            React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: 'reorder', checked: true, label: 'Allow Reordering', change: this.checkChange.bind(this) })))),
                                React.createElement("tr", { style: { height: "50px" } },
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { margin: '0px' } },
                                            React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: 'resize', checked: true, label: 'Allow Resizing', change: this.checkChange.bind(this) })))),
                                React.createElement("tr", { style: { height: "50px" } },
                                    React.createElement("td", null,
                                        React.createElement("div", { className: 'row', style: { margin: '0px' } },
                                            React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: 'autowrap', label: 'Allow Text Wrap', change: this.checkChange.bind(this) })))),
                                React.createElement("tr", { style: { height: '50px' } },
                                    React.createElement("td", { style: { width: "30%" } },
                                        React.createElement("div", { style: { 'marginLeft': '-70px' } },
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { change: this.onChange.bind(this), floatLabelType: 'Auto', width: '100%', id: "etype", value: "Both", dataSource: this.gridLineOptions, fields: { text: 'type', value: 'id' }, placeholder: "Grid Lines" }))))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the visibility of gridlines and text wrap along with user interactions like reordering and resizing columns. You can change the visibility and user interaction settings through the options available in the properties panel.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The",
                    React.createElement("code", null, "gridLines"),
                    " property is used to control the line visibility that separates the rows and columns. The grid control allows us to display the following grid lines:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "Default"),
                        " - Shows the Horizontal line.",
                        React.createElement("br", null)),
                    React.createElement("li", null,
                        React.createElement("code", null, "None"),
                        " - Shows no line.",
                        React.createElement("br", null)),
                    React.createElement("li", null,
                        React.createElement("code", null, "Both"),
                        " - Shows both Horizontal and Vertical lines.",
                        React.createElement("br", null)),
                    React.createElement("li", null,
                        React.createElement("code", null, "Horizontal"),
                        " - Shows the Horizontal line.",
                        React.createElement("br", null)),
                    React.createElement("li", null,
                        React.createElement("code", null, "Vertical"),
                        " - Shows the Vertical line.",
                        React.createElement("br", null),
                        React.createElement("br", null))),
                React.createElement("p", null,
                    React.createElement("strong", null, "Auto wrap"),
                    " cell content can be enabled using the",
                    React.createElement("code", null, "allowTextWrap"),
                    "property of the grid. Setting this property will wrap cell text on multiple lines. This feature is useful to view the cell content when it exceeds the cell width. Also this property will wrap the text in both content cell and header cells."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Reordering"),
                    " can be enabled by setting the",
                    React.createElement("code", null, "allowReordering"),
                    " property as true. Reordering can be done by dragging and dropping the column header from one index to another index within the Grid. The location in which the column is to be placed will be indicated by two arrow symbols."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Resizing:"),
                    " A grid column can be resized by clicking and dragging at the right edge of the column\u2019s header. To enable column resize behavior, set the",
                    React.createElement("code", null, "allowResizing"),
                    " property as true."))));
    };
    return GridConfig;
}(sample_base_1.SampleBase));
exports.GridConfig = GridConfig;

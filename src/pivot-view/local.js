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
/**
 * PivotView sample for Local data source.
 */
var SAMPLE_CSS = "\n.e-pivotview {\n    width: 100%;\n    height: 100%;\n}";
var dataSource = {
    data: data_source_1.renewableEnergy,
    expandAll: false,
    enableSorting: true,
    formatSettings: [{ name: 'ProCost', format: 'C0' }, { name: 'PowUnits', format: 'N0' }],
    drilledMembers: [{ name: 'EnerType', items: ['Biomass', 'Free Energy'] }],
    rows: [
        { name: 'Year', caption: 'Production Year' },
        { name: 'HalfYear', caption: 'Half Year' },
        { name: 'Quarter', caption: 'Quarter' }
    ],
    columns: [
        { name: 'EnerType', caption: 'Energy Type' },
        { name: 'EneSource', caption: 'Energy Source' }
    ],
    values: [
        { name: 'PowUnits', caption: 'Units (GWh)' },
        { name: 'ProCost', caption: 'Cost (MM)' }
    ],
    filters: []
};
var Local = (function (_super) {
    __extends(Local, _super);
    function Local() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Local.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', dataSource: dataSource, width: '100%', height: '300', gridSettings: { columnWidth: 120 } })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the basic rendering of the pivotgrid widget with local data.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The pivotgrid widget supports JSON data source. The",
                    React.createElement("code", null, "dataSource->data"),
                    " property can be assigned with the JSON data to populate the widget."),
                React.createElement("p", null, "In this demo, the JSON data is assigned from an external file."))));
    };
    return Local;
}(sample_base_1.SampleBase));
exports.Local = Local;

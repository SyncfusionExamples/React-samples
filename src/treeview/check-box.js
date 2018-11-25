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
var sample_base_1 = require("../common/sample-base");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
require("./treeview.css");
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Data source for TreeView component
        _this.countries = [
            { id: 1, name: 'Australia', hasChild: true, expanded: true },
            { id: 2, pid: 1, name: 'New South Wales' },
            { id: 3, pid: 1, name: 'Victoria' },
            { id: 4, pid: 1, name: 'South Australia' },
            { id: 6, pid: 1, name: 'Western Australia' },
            { id: 7, name: 'Brazil', hasChild: true },
            { id: 8, pid: 7, name: 'Paraná' },
            { id: 9, pid: 7, name: 'Ceará' },
            { id: 10, pid: 7, name: 'Acre' },
            { id: 11, name: 'China', hasChild: true },
            { id: 12, pid: 11, name: 'Guangzhou' },
            { id: 13, pid: 11, name: 'Shanghai' },
            { id: 14, pid: 11, name: 'Beijing' },
            { id: 15, pid: 11, name: 'Shantou' },
            { id: 16, name: 'France', hasChild: true },
            { id: 17, pid: 16, name: 'Pays de la Loire' },
            { id: 18, pid: 16, name: 'Aquitaine' },
            { id: 19, pid: 16, name: 'Brittany' },
            { id: 20, pid: 16, name: 'Lorraine' },
            { id: 21, name: 'India', hasChild: true },
            { id: 22, pid: 21, name: 'Assam' },
            { id: 23, pid: 21, name: 'Bihar' },
            { id: 24, pid: 21, name: 'Tamil Nadu' },
            { id: 25, pid: 21, name: 'Punjab' }
        ];
        _this.fields = { dataSource: _this.countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
        _this.showCheckBox = true;
        return _this;
    }
    Checkbox.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'tree-control_wrapper' },
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { fields: this.fields, showCheckBox: this.showCheckBox }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the CheckBox functionalities of the TreeView. Click on any parent node's CheckBox to check/uncheck the node and its child nodes. The parent node's checked state will be determined by its child nodes checked state.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "TreeView"),
                    " component can be rendered with checkbox on the left side of each tree node. This allows the user to check more than one nodes, and this can be enabled by the ",
                    React.createElement("code", null, "showCheckBox"),
                    " property."),
                React.createElement("p", null, "In this demo, the TreeView is populated with checkbox enabled."),
                React.createElement("p", null,
                    "For more information, you can refer to the ",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/treeview/check-box.html", target: "_blank" }, "Checkboxes"),
                    " section from the documentation."))));
    };
    return Checkbox;
}(sample_base_1.SampleBase));
exports.Checkbox = Checkbox;

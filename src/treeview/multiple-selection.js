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
var MultiSelect = (function (_super) {
    __extends(MultiSelect, _super);
    function MultiSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countries = [
            { id: 1, name: 'Australia', hasChild: true, expanded: true },
            { id: 2, pid: 1, name: 'New South Wales' },
            { id: 3, pid: 1, name: 'Victoria', isSelected: true },
            { id: 4, pid: 1, name: 'South Australia', isSelected: true },
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
        _this.fields = { dataSource: _this.countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild', selected: 'isSelected' };
        _this.allowMultiSelection = true;
        return _this;
    }
    MultiSelect.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'tree-control_wrapper' },
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { fields: this.fields, allowMultiSelection: this.allowMultiSelection }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the multiple node selection functionalities of the TreeView. To select multiple nodes, press the CTRL key and select the desired nodes; or select any node and by pressing SHIFT key select another node, this selects all the nodes in-between the selected nodes.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "TreeView"),
                    " component allows to select multiple nodes by enabling the ",
                    React.createElement("code", null, "allowMultiSelection"),
                    " property."),
                React.createElement("p", null, "In this demo, the TreeView is enabled with multiple selection"),
                React.createElement("p", null,
                    "For more information, refer to the ",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/treeview/multiple-selection.html", target: "_blank" }, "Multi Selection"),
                    " section from the documentation."))));
    };
    return MultiSelect;
}(sample_base_1.SampleBase));
exports.MultiSelect = MultiSelect;

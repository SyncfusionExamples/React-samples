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
var RTL = (function (_super) {
    __extends(RTL, _super);
    function RTL() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.productTeam = [
            {
                id: 1, name: 'Web Controls', expanded: true,
                child: [
                    {
                        id: 2, pid: 1, name: 'Calendar', child: [
                            { id: 7, pid: 2, name: 'Constructors' },
                            { id: 8, pid: 2, name: 'Properties' },
                            { id: 9, pid: 2, name: 'Methods' },
                            { id: 10, pid: 2, name: 'Events' }
                        ]
                    },
                    {
                        id: 3, pid: 1, name: 'Data Grid', child: [
                            { id: 11, pid: 3, name: 'Constructors' },
                            { id: 12, pid: 3, name: 'Fields' },
                            { id: 13, pid: 3, name: 'Properties' },
                            { id: 14, pid: 3, name: 'Methods' },
                            { id: 15, pid: 3, name: 'Events' }
                        ]
                    },
                    {
                        id: 4, pid: 1, name: 'DropDownList', child: [
                            { id: 16, pid: 4, name: 'Constructors' },
                            { id: 17, pid: 4, name: 'Properties' },
                            { id: 18, pid: 4, name: 'Methods' }
                        ]
                    },
                    {
                        id: 5, pid: 1, name: 'Menu', child: [
                            { id: 19, pid: 5, name: 'Constructors' },
                            { id: 20, pid: 5, name: 'Fields' },
                            { id: 21, pid: 5, name: 'Properties' },
                            { id: 22, pid: 5, name: 'Methods' },
                            { id: 23, pid: 5, name: 'Events' }
                        ]
                    },
                    {
                        id: 6, pid: 1, name: 'TextBox', child: [
                            { id: 20, pid: 6, name: 'Constructors' },
                            { id: 21, pid: 6, name: 'Properties' },
                            { id: 22, pid: 6, name: 'Methods' },
                            { id: 23, pid: 6, name: 'Events' }
                        ]
                    }
                ]
            }
        ];
        _this.fields = { dataSource: _this.productTeam, id: 'id', text: 'name', child: 'child' };
        _this.enableRtl = true;
        return _this;
    }
    RTL.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'tree-control_wrapper' },
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { fields: this.fields, enableRtl: this.enableRtl }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the RTL mode of the TreeView. The node displays its content from right-to-left direction. Click on node to select it, and click on icon or double click on node to expand/collapse it.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "TreeView"),
                    " component supports the ",
                    React.createElement("b", null, "right-to-left"),
                    " (RTL) direction of nodes, and this is enabled by the ",
                    React.createElement("code", null, "enableRtl"),
                    " property."))));
    };
    return RTL;
}(sample_base_1.SampleBase));
exports.RTL = RTL;

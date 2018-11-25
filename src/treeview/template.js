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
require("./template.css");
var Template = (function (_super) {
    __extends(Template, _super);
    function Template() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mailBox = [
            { id: 1, name: 'Favorites', hasChild: true },
            { id: 2, pid: 1, name: 'Sales Reports', count: '4' },
            { id: 3, pid: 1, name: 'Sent Items' },
            { id: 4, pid: 1, name: 'Marketing Reports ', count: '6' },
            { id: 5, name: 'My Folder', hasChild: true, expanded: true },
            { id: 6, pid: 5, name: 'Inbox', selected: true, count: '20' },
            { id: 7, pid: 5, name: 'Drafts', count: '5' },
            { id: 8, pid: 5, name: 'Deleted Items' },
            { id: 9, pid: 5, name: 'Sent Items' },
            { id: 10, pid: 5, name: 'Sales Reports', count: '4' },
            { id: 11, pid: 5, name: 'Marketing Reports', count: '6' },
            { id: 12, pid: 5, name: 'Outbox' },
        ];
        _this.fields = { dataSource: _this.mailBox, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
        _this.cssClass = "template-tree";
        return _this;
    }
    Template.prototype.nodeTemplate = function (data) {
        return (React.createElement("div", null,
            React.createElement("div", { className: "treeviewdiv" },
                React.createElement("div", { className: "textcontent" },
                    React.createElement("span", { className: "treeName" }, data.name)),
                data.count &&
                    React.createElement("div", { className: "countcontainer" },
                        React.createElement("span", { className: "treeCount e-badge e-badge-primary" }, data.count)))));
    };
    ;
    Template.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'tree-control-wrapper' },
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { fields: this.fields, nodeTemplate: this.nodeTemplate, cssClass: this.cssClass }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the template functionalities of the TreeView. Select the root node by clicking on it, or expand the root node and select the customized child node.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "TreeView"),
                    " component has an option to customize the node structure through the ",
                    React.createElement("code", null, "nodeTemplate"),
                    " property, so that the tree node can be formed with any custom structure."),
                React.createElement("p", null, "In this demo, the node is formed as like webmail with folder name and number of unread messages."),
                React.createElement("p", null,
                    "For more information, you can refer to the ",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/treeview/template.html", target: "_blank" }, "Templates"),
                    " section from the documentation."))));
    };
    return Template;
}(sample_base_1.SampleBase));
exports.Template = Template;

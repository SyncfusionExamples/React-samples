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
var Editing = (function (_super) {
    __extends(Editing, _super);
    function Editing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.treeData = [
            {
                id: 1, name: 'Discover Music', expanded: true,
                child: [
                    { id: 2, name: 'Hot Singles' },
                    { id: 3, name: 'Rising Artists' },
                    { id: 4, name: 'Live Music' }
                ]
            },
            {
                id: 7, name: 'Sales and Events',
                child: [
                    { id: 8, name: '100 Albums - $5 Each' },
                    { id: 9, name: 'Hip-Hop and R&B Sale' },
                    { id: 10, name: 'CD Deals' }
                ]
            },
            {
                id: 11, name: 'Categories',
                child: [
                    { id: 12, name: 'Songs' },
                    { id: 13, name: 'Bestselling Albums' },
                    { id: 14, name: 'New Releases' },
                    { id: 15, name: 'Bestselling Songs' }
                ]
            },
            {
                id: 16, name: 'MP3 Albums',
                child: [
                    { id: 17, name: 'Rock' },
                    { id: 18, name: 'Gospel' },
                    { id: 19, name: 'Latin Music' },
                    { id: 20, name: 'Jazz' }
                ]
            },
            {
                id: 21, name: 'More in Music',
                child: [
                    { id: 22, name: 'Music Trade-In' },
                    { id: 23, name: 'Redeem a Gift Card' },
                    { id: 24, name: 'Band T-Shirts' }
                ]
            }
        ];
        _this.fields = { dataSource: _this.treeData, id: 'id', text: 'name', child: 'child' };
        _this.allowEditing = true;
        return _this;
    }
    Editing.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'tree-control_wrapper' },
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { fields: this.fields, allowEditing: this.allowEditing }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the node editing functionalities of the TreeView. Double click on the node or press F2 key on selected node to edit node's text in input textbox. Press enter key or click outside of the input element to save the node's, or press escape key to cancel the modified text.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "TreeView"),
                    " component has the built-in option to edit and modify the node text in inline by enabling the ",
                    React.createElement("code", null, "allowEditing"),
                    " property."),
                React.createElement("p", null,
                    "For more information, you can refer to the ",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/treeview/node-edit.html", target: "_blank" }, "Node Editing"),
                    " section from the documentation."))));
    };
    return Editing;
}(sample_base_1.SampleBase));
exports.Editing = Editing;

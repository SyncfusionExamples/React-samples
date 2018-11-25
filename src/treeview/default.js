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
var Default = (function (_super) {
    __extends(Default, _super);
    function Default() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Hierarchical data source for TreeView component
        _this.hierarchicalData = [
            { id: '01', name: 'Local Disk (C:)', expanded: true,
                subChild: [
                    {
                        id: '01-01', name: 'Program Files',
                        subChild: [
                            { id: '01-01-01', name: 'Windows NT' },
                            { id: '01-01-02', name: 'Windows Mail' },
                            { id: '01-01-03', name: 'Windows Photo Viewer' },
                        ]
                    },
                    {
                        id: '01-02', name: 'Users', expanded: true,
                        subChild: [
                            { id: '01-02-01', name: 'Smith' },
                            { id: '01-02-02', name: 'Public' },
                            { id: '01-02-03', name: 'Admin' },
                        ]
                    },
                    {
                        id: '01-03', name: 'Windows',
                        subChild: [
                            { id: '01-03-01', name: 'Boot' },
                            { id: '01-03-02', name: 'FileManager' },
                            { id: '01-03-03', name: 'System32' },
                        ]
                    },
                ]
            },
            {
                id: '02', name: 'Local Disk (D:)',
                subChild: [
                    {
                        id: '02-01', name: 'Personals',
                        subChild: [
                            { id: '02-01-01', name: 'My photo.png' },
                            { id: '02-01-02', name: 'Rental document.docx' },
                            { id: '02-01-03', name: 'Pay slip.pdf' },
                        ]
                    },
                    {
                        id: '02-02', name: 'Projects',
                        subChild: [
                            { id: '02-02-01', name: 'ASP Application' },
                            { id: '02-02-02', name: 'TypeScript Application' },
                            { id: '02-02-03', name: 'React Application' },
                        ]
                    },
                    {
                        id: '02-03', name: 'Office',
                        subChild: [
                            { id: '02-03-01', name: 'Work details.docx' },
                            { id: '02-03-02', name: 'Weekly report.docx' },
                            { id: '02-03-03', name: 'Wish list.csv' },
                        ]
                    },
                ]
            },
            {
                id: '03', name: 'Local Disk (E:)', icon: 'folder',
                subChild: [
                    {
                        id: '03-01', name: 'Pictures',
                        subChild: [
                            { id: '03-01-01', name: 'Wind.jpg' },
                            { id: '03-01-02', name: 'Stone.jpg' },
                            { id: '03-01-03', name: 'Home.jpg' },
                        ]
                    },
                    {
                        id: '03-02', name: 'Documents',
                        subChild: [
                            { id: '03-02-01', name: 'Environment Pollution.docx' },
                            { id: '03-02-02', name: 'Global Warming.ppt' },
                            { id: '03-02-03', name: 'Social Network.pdf' },
                        ]
                    },
                    {
                        id: '03-03', name: 'Study Materials',
                        subChild: [
                            { id: '03-03-01', name: 'UI-Guide.pdf' },
                            { id: '03-03-02', name: 'Tutorials.zip' },
                            { id: '03-03-03', name: 'TypeScript.7z' },
                        ]
                    },
                ]
            }
        ];
        _this.fields = { dataSource: _this.hierarchicalData, id: 'id', text: 'name', child: 'subChild' };
        return _this;
    }
    Default.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'tree-control_wrapper' },
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { fields: this.fields }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the default functionalities of the TreeView. Click on node to select it, and click on icon or double click on node to expand/collapse it. The child nodes will be loaded on expand the parent node.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "TreeView"),
                    " component is used to display the data in a hierarchical structure with the configuration options to control the way of data is presented and manipulated. It will pull the data from a data source, such as an array of JSON objects, OData web services, or DataManager binding data fields to the ",
                    React.createElement("code", null, "fields"),
                    " property."),
                React.createElement("p", null, "In this demo, the TreeView is populated with its minimum default settings."),
                React.createElement("p", null,
                    "More information on the TreeView instantiation can be found in the ",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/treeview/getting-started.html", target: "_blank" }, "documentation section"),
                    "."))));
    };
    return Default;
}(sample_base_1.SampleBase));
exports.Default = Default;

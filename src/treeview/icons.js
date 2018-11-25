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
require("./icons.css");
var Icons = (function (_super) {
    __extends(Icons, _super);
    function Icons() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hierarchicalData = [
            {
                nodeId: '01', nodeText: 'Music', icon: 'folder',
                nodeChild: [
                    { nodeId: '01-01', nodeText: 'Gouttes.mp3', icon: 'audio' }
                ]
            },
            {
                nodeId: '02', nodeText: 'Videos', icon: 'folder',
                nodeChild: [
                    { nodeId: '02-01', nodeText: 'Naturals.mp4', icon: 'video' },
                    { nodeId: '02-02', nodeText: 'Wild.mpeg', icon: 'video' },
                ]
            },
            {
                nodeId: '03', nodeText: 'Documents', icon: 'folder',
                nodeChild: [
                    { nodeId: '03-01', nodeText: 'Environment Pollution.docx', icon: 'docx' },
                    { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icon: 'docx' },
                    { nodeId: '03-03', nodeText: 'Global Warming.ppt', icon: 'ppt' },
                    { nodeId: '03-04', nodeText: 'Social Network.pdf', icon: 'pdf' },
                    { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf', icon: 'pdf' },
                ]
            },
            {
                nodeId: '04', nodeText: 'Pictures', icon: 'folder', expanded: true,
                nodeChild: [
                    {
                        nodeId: '04-01', nodeText: 'Camera Roll', icon: 'folder', expanded: true,
                        nodeChild: [
                            { nodeId: '04-01-01', nodeText: 'WIN_20160726_094117.JPG', image: 'src/images/employees/9.png' },
                            { nodeId: '04-01-02', nodeText: 'WIN_20160726_094118.JPG', image: 'src/images/employees/3.png' },
                        ]
                    },
                    { nodeId: '04-02', nodeText: 'Wind.jpg', icon: 'images' },
                    { nodeId: '04-03', nodeText: 'Stone.jpg', icon: 'images' },
                ]
            },
            {
                nodeId: '05', nodeText: 'Downloads', icon: 'folder',
                nodeChild: [
                    { nodeId: '05-01', nodeText: 'UI-Guide.pdf', icon: 'pdf' },
                    { nodeId: '05-02', nodeText: 'Tutorials.zip', icon: 'zip' },
                    { nodeId: '05-03', nodeText: 'Game.exe', icon: 'exe' },
                    { nodeId: '05-04', nodeText: 'TypeScript.7z', icon: 'zip' },
                ]
            }
        ];
        _this.fields = { dataSource: _this.hierarchicalData, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' };
        return _this;
    }
    Icons.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'control_wrapper' },
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { id: "treeview", fields: this.fields, sortOrder: 'Ascending' }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the node can be configured by icons/images in TreeView. Click on icon or double click on node to expand/collapse it, and show the icons/images that configured with nodes.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "TreeView"),
                    " component has the built-in option to customize each node's appearance with the icons and images by mapping the ",
                    React.createElement("code", null, "iconCss"),
                    " and ",
                    React.createElement("code", null, "imageUrl"),
                    " fields."),
                React.createElement("p", null, "In this demo, the TreeView is showcased like a file system with custom icons and images."))));
    };
    return Icons;
}(sample_base_1.SampleBase));
exports.Icons = Icons;

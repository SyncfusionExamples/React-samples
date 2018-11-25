"use strict";
/**
 * ListView Nested Sample
 */
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
var ej2_react_lists_1 = require("@syncfusion/ej2-react-lists");
var sample_base_1 = require("../common/sample-base");
require("./listview.css");
var FolderCss = "\n.e-listview .e-list-icon {\n    height: 24px;\n    width: 30px;\n}\n#listview {\n    max-width: 500px;\n    margin: auto;\n    border: 1px solid #dddddd;\n    border-radius: 3px;\n}\n.folder {\n    background-repeat: no-repeat;\n    background-image: url('./src/listview/images/file_icons.png');\n    background-position: -5px -466px;\n    background-size: 302%;\n}\n\n.file {\n    background-repeat: no-repeat;\n    background-image: url('./src/listview/images/file_icons.png');\n    background-position: -5px -151px;\n    background-size: 302%;\n}";
var Nested = (function (_super) {
    __extends(Nested, _super);
    function Nested() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Define an array of JSON data
        _this.dataSource = [
            {
                id: '01', text: 'Music', icon: 'folder',
                child: [
                    { id: '01-01', text: 'Gouttes.mp3', icon: 'file' }
                ]
            },
            {
                id: '02', text: 'Videos', icon: 'folder',
                child: [
                    { id: '02-01', text: 'Naturals.mp4', icon: 'file' },
                    { id: '02-02', text: 'Wild.mpeg', icon: 'file' },
                ]
            },
            {
                id: '03', text: 'Documents', icon: 'folder',
                child: [
                    { id: '03-01', text: 'Environment Pollution.docx', icon: 'file' },
                    { id: '03-02', text: 'Global Water, Sanitation, & Hygiene.docx', icon: 'file' },
                    { id: '03-03', text: 'Global Warming.ppt', icon: 'file' },
                    { id: '03-04', text: 'Social Network.pdf', icon: 'file' },
                    { id: '03-05', text: 'Youth Empowerment.pdf', icon: 'file' },
                ]
            },
            {
                id: '04', text: 'Pictures', icon: 'folder',
                child: [
                    {
                        id: '04-01', text: 'Camera Roll', icon: 'folder',
                        child: [
                            { id: '04-01-01', text: 'WIN_20160726_094117.JPG', icon: 'file' },
                            { id: '04-01-02', text: 'WIN_20160726_094118.JPG', icon: 'file' },
                            { id: '04-01-03', text: 'WIN_20160726_094119.JPG', icon: 'file' }
                        ]
                    },
                    {
                        id: '04-02', text: 'Wind.jpg', icon: 'file'
                    },
                    {
                        id: '04-02', text: 'Stone.jpg', icon: 'file'
                    },
                    {
                        id: '04-02', text: 'Home.jpg', icon: 'file'
                    },
                    {
                        id: '04-02', text: 'Bridge.png', icon: 'file'
                    }
                ]
            },
            {
                id: '05', text: 'Downloads', icon: 'folder',
                child: [
                    { id: '05-01', text: 'UI-Guide.pdf', icon: 'file' },
                    { id: '05-02', text: 'Tutorials.zip', icon: 'file' },
                    { id: '05-03', text: 'Game.exe', icon: 'file' },
                    { id: '05-04', text: 'TypeScript.7z', icon: 'file' },
                ]
            },
        ];
        //Map appropriate columns to fields property
        _this.fields = {
            iconCss: 'icon', tooltip: 'text'
        };
        return _this;
    }
    Nested.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("style", null, FolderCss),
                React.createElement(ej2_react_lists_1.ListViewComponent, { id: 'listview', dataSource: this.dataSource, fields: this.fields, headerTitle: 'Folders', showIcon: true, showHeader: true })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the nested list functionalities, which allows to navigate to the sub list-items by click on any item and navigate back to list-item by using top left back icon.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "ListView component supports Nested list. To achieve list navigation, the ",
                    React.createElement("code", null, "child"),
                    " property should be defined for the nested list in the array of JSON."),
                React.createElement("p", null, "This sample have Nested folder with the sub folders/files."))));
    };
    return Nested;
}(sample_base_1.SampleBase));
exports.Nested = Nested;

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
require("./local-data.css");
var SAMPLE_CSS = "\n.control-section {\n    overflow: auto;\n}";
var LocalData = (function (_super) {
    __extends(LocalData, _super);
    function LocalData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Hierarchical data source for TreeView component
        _this.continents = [
            {
                code: 'NA', name: 'North America', expanded: true, countries: [
                    { code: 'USA', name: 'United States of America', selected: true },
                    { code: 'CUB', name: 'Cuba' },
                    { code: 'MEX', name: 'Mexico' }
                ]
            },
            {
                code: 'AF', name: 'Africa', countries: [
                    { code: 'NGA', name: 'Nigeria' },
                    { code: 'EGY', name: 'Egypt' },
                    { code: 'ZAF', name: 'South Africa' }
                ]
            },
            {
                code: 'AS', name: 'Asia', countries: [
                    { code: 'CHN', name: 'China' },
                    { code: 'IND', name: 'India' },
                    { code: 'JPN', name: 'Japan' }
                ]
            },
            {
                code: 'EU', name: 'Europe', countries: [
                    { code: 'DNK', name: 'Denmark' },
                    { code: 'FIN', name: 'Finland' },
                    { code: 'AUT', name: 'Austria' }
                ]
            },
            {
                code: 'SA', name: 'South America', countries: [
                    { code: 'BRA', name: 'Brazil' },
                    { code: 'COL', name: 'Colombia' },
                    { code: 'ARG', name: 'Argentina' }
                ]
            },
            {
                code: 'OC', name: 'Oceania', countries: [
                    { code: 'AUS', name: 'Australia' },
                    { code: 'NZL', name: 'New Zealand' },
                    { code: 'WSM', name: 'Samoa' }
                ]
            },
            {
                code: 'AN', name: 'Antarctica', countries: [
                    { code: 'BVT', name: 'Bouvet Island' },
                    { code: 'ATF', name: 'French Southern Lands' }
                ]
            },
        ];
        _this.fields = { dataSource: _this.continents, id: 'code', text: 'name', child: 'countries' };
        // Self-referential list data source for TreeView component
        _this.localData = [
            { id: 1, name: 'Discover Music', hasChild: true, expanded: true },
            { id: 2, pid: 1, name: 'Hot Singles', selected: true },
            { id: 3, pid: 1, name: 'Rising Artists' },
            { id: 4, pid: 1, name: 'Live Music' },
            { id: 7, name: 'Sales and Events', hasChild: true },
            { id: 8, pid: 7, name: '100 Albums - $5 Each' },
            { id: 9, pid: 7, name: 'Hip-Hop and R&B Sale' },
            { id: 10, pid: 7, name: 'CD Deals' },
            { id: 11, name: 'Categories', hasChild: true },
            { id: 12, pid: 11, name: 'Songs' },
            { id: 13, pid: 11, name: 'Bestselling Albums' },
            { id: 14, pid: 11, name: 'New Releases' },
            { id: 15, pid: 11, name: 'Bestselling Songs' },
            { id: 16, name: 'MP3 Albums', hasChild: true },
            { id: 17, pid: 16, name: 'Rock' },
            { id: 18, pid: 16, name: 'Gospel' },
            { id: 19, pid: 16, name: 'Latin Music' },
            { id: 20, pid: 16, name: 'Jazz' },
            { id: 21, name: 'More in Music', hasChild: true },
            { id: 22, pid: 21, name: 'Music Trade-In' },
            { id: 23, pid: 21, name: 'Redeem a Gift Card' },
            { id: 24, pid: 21, name: 'Band T-Shirts' },
            { id: 25, name: 'Fiction Book Lists', hasChild: true },
            { id: 26, pid: 25, name: 'To Kill a Mockingbird' },
            { id: 27, pid: 25, name: 'Pride and Prejudice' },
            { id: 28, pid: 25, name: 'Harry Potter' },
            { id: 29, pid: 25, name: 'The Hobbit' },
        ];
        _this.listfields = { dataSource: _this.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
        return _this;
    }
    LocalData.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'col-lg-6 nested-data' },
                    React.createElement("div", { className: 'content' },
                        React.createElement("h4", null, "Hierarchical Data"),
                        React.createElement(ej2_react_navigations_1.TreeViewComponent, { id: 'tree', fields: this.fields }))),
                React.createElement("div", { className: 'col-lg-6 list-data' },
                    React.createElement("div", { className: 'content' },
                        React.createElement("h4", null, "List Data"),
                        React.createElement(ej2_react_navigations_1.TreeViewComponent, { id: 'listtree', fields: this.listfields })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the binding of local data to the TreeView. Click on node to select it, and click on icon or double click on node to expand/collapse it.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The TreeView component loads the data through the ",
                    React.createElement("code", null, "dataSource"),
                    " property, where the data can be either local data or remote data. In case of local data, the data structure can be hierarchical data or list data (with self-referential format i.e., mapped with the ",
                    React.createElement("b", null, "id"),
                    " and ",
                    React.createElement("b", null, "parentID"),
                    " fields)."),
                React.createElement("p", null,
                    "In this demo, the first TreeView is bound with the hierarchical data that contains array of nested objects. And the second TreeView is bound with the list type data where the parent-child relation is referred by the ",
                    React.createElement("b", null, "id"),
                    " and ",
                    React.createElement("b", null, "parentID"),
                    " mapping fields."),
                React.createElement("p", null,
                    "For more information, you can refer to the ",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/treeview/data-binding.html", target: "_blank" }, "Data Binding"),
                    " section from the documentation."))));
    };
    return LocalData;
}(sample_base_1.SampleBase));
exports.LocalData = LocalData;

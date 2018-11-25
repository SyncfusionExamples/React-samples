"use strict";
/**
 * ListView CallHistory Sample
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
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var newsData_1 = require("./newsData");
require("./call-history.css");
var CallHistory = (function (_super) {
    __extends(CallHistory, _super);
    function CallHistory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Map the appropriate columns to fields property
        _this.fields = { text: 'text', groupBy: 'category' };
        _this.styleNone = { display: "none" };
        _this.listObjects = [];
        _this.headerText = [
            { "text": "All" },
            { "text": "Received" },
            { "text": "Missed" }
        ];
        _this.type = ['', 'received', 'missed'];
        return _this;
    }
    CallHistory.prototype.listTemplate = function (data) {
        return (React.createElement("div", { className: "e-list-wrapper e-list-avatar e-list-multi-line" },
            React.createElement("span", { className: "e-avatar e-icon" }),
            React.createElement("span", { className: "e-list-item-header" }, data.text),
            " ",
            React.createElement("span", { className: data.type + " e-list-content" },
                data.group,
                ", ",
                data.time)));
    };
    CallHistory.prototype.filterData = function (dataSource, value) {
        var newData = [];
        dataSource.filter(function (data) {
            if ((data.id).indexOf(value) !== -1) {
                newData.push(data);
            }
        });
        return newData;
    };
    CallHistory.prototype.onCreated = function () {
        if (!ej2_base_1.Browser.isDevice) {
            document.getElementsByClassName('layoutWrapper')[0].classList.add('e-device-layout');
        }
        else {
            document.getElementsByClassName('tabContainer')[0].classList.add('e-visbile-layer');
        }
    };
    CallHistory.prototype.setlectedHanlder = function (args) {
        var element01 = document.getElementById('all');
        var element02 = document.getElementById('received');
        var element03 = document.getElementById('missed');
        if (element01.ej2_instances !== undefined) {
            this.listObjects = [element01.ej2_instances[0], element02.ej2_instances[0], element03.ej2_instances[0]];
            var newData = void 0;
            newData = this.filterData(newsData_1.data1, this.type[args.selectedIndex]);
            this.listObjects[args.selectedIndex].dataSource = newData;
        }
    };
    CallHistory.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'slider-call-history col-lg-12 control-section' },
                React.createElement("div", { className: "layoutWrapper" },
                    React.createElement("div", { className: "speaker" },
                        React.createElement("div", { className: "camera" })),
                    React.createElement("div", { className: "layout" },
                        React.createElement("div", { id: "list-container" },
                            React.createElement("div", { className: "tabContainer" },
                                React.createElement(ej2_react_navigations_1.TabComponent, { id: "tab", ref: function (tab) { return _this.tab = tab; }, selected: this.setlectedHanlder.bind(this), created: this.onCreated },
                                    React.createElement(ej2_react_navigations_1.TabItemsDirective, null,
                                        React.createElement(ej2_react_navigations_1.TabItemDirective, { header: this.headerText[0], content: "#all" }),
                                        React.createElement(ej2_react_navigations_1.TabItemDirective, { header: this.headerText[1], content: "#received" }),
                                        React.createElement(ej2_react_navigations_1.TabItemDirective, { header: this.headerText[2], content: "#missed" })))),
                            React.createElement(ej2_react_lists_1.ListViewComponent, { id: "all", dataSource: newsData_1.data1, fields: this.fields, style: this.styleNone, cssClass: 'e-list-template', template: this.listTemplate, ref: function (listview) { _this.allInstance = listview; } }),
                            React.createElement(ej2_react_lists_1.ListViewComponent, { id: "received", dataSource: newsData_1.data1, fields: this.fields, style: this.styleNone, cssClass: 'e-list-template', template: this.listTemplate, ref: function (listview) { _this.receivedInstance = listview; } }),
                            React.createElement(ej2_react_lists_1.ListViewComponent, { id: "missed", dataSource: newsData_1.data1, fields: this.fields, style: this.styleNone, cssClass: 'e-list-template', template: this.listTemplate, ref: function (listview) { _this.missedInstance = listview; } }))),
                    React.createElement("div", { className: "outerButton" }, " "))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the use-case of call history application using ",
                    React.createElement("code", null, "listview"),
                    ". Click on the navigation tab to filter contacts based on call logs such as received, missed and all.")),
            React.createElement("div", { id: "description", className: "descriptionLayout" },
                React.createElement("p", null,
                    "This sample filters the data based on selection of tab and update the ",
                    React.createElement("a", { href: "https://ej2.syncfusion.com/react/documentation/list-view/api-listViewComponent.html#datasource" },
                        React.createElement("code", null, "dataSource")),
                    " for listview."))));
    };
    return CallHistory;
}(sample_base_1.SampleBase));
exports.CallHistory = CallHistory;

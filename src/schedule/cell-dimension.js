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
var ej2_react_schedule_1 = require("@syncfusion/ej2-react-schedule");
var datasource_1 = require("./datasource");
require("./cell-dimension.css");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
/**
 *  Schedule cell dimension sample
 */
var CellDimension = (function (_super) {
    __extends(CellDimension, _super);
    function CellDimension() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = ej2_base_1.extend([], datasource_1.employeeEventData, null, true);
        return _this;
    }
    CellDimension.prototype.onCreated = function () {
        var scheduleObj = this;
        scheduleObj.adjustEventWrapper();
    };
    CellDimension.prototype.onActionComplete = function (args) {
        if (args.requestType === 'dateNavigate' || args.requestType === 'viewNavigate') {
            this.scheduleObj.adjustEventWrapper();
        }
    };
    CellDimension.prototype.onEventRendered = function (args) {
        datasource_1.applyCategoryColor(args, this.scheduleObj.currentView);
    };
    CellDimension.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'schedule-control-section' },
            React.createElement("div", { className: 'col-lg-12 control-section' },
                React.createElement("div", { className: 'control-wrapper' },
                    React.createElement(ej2_react_schedule_1.ScheduleComponent, { cssClass: 'schedule-cell-dimension', width: '100%', height: '650px', ref: function (schedule) { return _this.scheduleObj = schedule; }, selectedDate: new Date(2018, 1, 15), eventSettings: { dataSource: this.data }, created: this.onCreated, actionComplete: this.onActionComplete.bind(this), eventRendered: this.onEventRendered.bind(this) },
                        React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Day' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Week' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'WorkWeek' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Month' })),
                        React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.Day, ej2_react_schedule_1.Week, ej2_react_schedule_1.WorkWeek, ej2_react_schedule_1.Month, ej2_react_schedule_1.Resize, ej2_react_schedule_1.DragAndDrop] })))),
            React.createElement("div", { id: 'action-description' },
                React.createElement("p", null, "This demo shows how to set the width and height of the cells by overriding the default CSS classes, so that the Schedule events are viewable in a zoomed in style.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null, "In this demo, the height and width of the Schedule cells are set by overriding the default CSS class."))));
    };
    return CellDimension;
}(sample_base_1.SampleBase));
exports.CellDimension = CellDimension;

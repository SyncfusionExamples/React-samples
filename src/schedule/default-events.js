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
var ej2_data_1 = require("@syncfusion/ej2-data");
require("./schedule-component.css");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
/**
 * Schedule normal events sample
 */
var DefaultEvents = (function (_super) {
    __extends(DefaultEvents, _super);
    function DefaultEvents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = ej2_base_1.extend([], datasource_1.leaveData, null, true);
        return _this;
    }
    DefaultEvents.prototype.onEventRendered = function (args) {
        var categoryColor;
        var appData = args.data;
        var eventFields = this.scheduleObj.eventFields;
        var parentApp = new ej2_data_1.DataManager(this.scheduleObj.eventsData).
            executeLocal(new ej2_data_1.Query().where(eventFields.id, 'equal', appData[eventFields.id]))[0];
        var start = new Date(parentApp[eventFields.startTime]).setHours(0, 0, 0, 0);
        var end = new Date(parentApp[eventFields.endTime]).setHours(0, 0, 0, 0);
        if (appData.IsAllDay) {
            categoryColor = '#8e24aa';
        }
        else if (start !== end) {
            categoryColor = '#f57f17';
        }
        else {
            categoryColor = '#7fa900';
        }
        if (this.scheduleObj.currentView === 'Agenda') {
            args.element.firstChild.style.borderLeftColor = categoryColor;
        }
        else {
            args.element.style.backgroundColor = categoryColor;
        }
    };
    DefaultEvents.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'schedule-control-section' },
            React.createElement("div", { className: 'col-lg-12 control-section' },
                React.createElement("div", { className: 'control-wrapper' },
                    React.createElement(ej2_react_schedule_1.ScheduleComponent, { width: '100%', height: '650px', ref: function (t) { return _this.scheduleObj = t; }, selectedDate: new Date(2018, 1, 15), eventSettings: { dataSource: this.data }, eventRendered: this.onEventRendered.bind(this) },
                        React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.Day, ej2_react_schedule_1.Week, ej2_react_schedule_1.WorkWeek, ej2_react_schedule_1.Month, ej2_react_schedule_1.Agenda, ej2_react_schedule_1.Resize, ej2_react_schedule_1.DragAndDrop] })))),
            React.createElement("div", { id: 'action-description' },
                React.createElement("p", null, "This sample illustrates the usage of different types of events such as normal, spanned and all-day. Here, the Schedule acts as a leave planner for an employee to plan his upcoming leaves as well as to keep track of his previously taken time-offs and leaves.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null,
                    "Schedule requires only the ",
                    React.createElement("code", null, "startTime"),
                    " and ",
                    React.createElement("code", null, "endTime"),
                    " fields as mandatory to be mapped from datasource and provided with proper datetime values to display the normal events in it. The normal events can be categorized into 3 types based on its time range and all-day type."),
                React.createElement("table", { style: { width: '100%' } },
                    React.createElement("tr", null,
                        React.createElement("th", { style: { width: '100px' } },
                            React.createElement("strong", null, "Event")),
                        React.createElement("th", null,
                            React.createElement("strong", null, "Description"))),
                    React.createElement("tr", null,
                        React.createElement("td", { style: { padding: '4px 0' } }, "Normal events"),
                        React.createElement("td", null, "The events that has its start and end time duration on the same date. These events are depicted in green color in the above sample.")),
                    React.createElement("tr", null,
                        React.createElement("td", { style: { padding: '4px 0' } }, "Spanned events"),
                        React.createElement("td", null, "The events on which its start and end time spans over multiple days and usually displays together with all-day events. These events are depicted in orange color which can be seen by navigating to the next date period and are depicted in orange color.")),
                    React.createElement("tr", null,
                        React.createElement("td", { style: { padding: '4px 0' } }, "All-day events"),
                        React.createElement("td", null,
                            "The events that are defined as all-day in its event object by setting ",
                            React.createElement("code", null, "isAllDay"),
                            " to true. It usually renders at the date header section of the Schedule where no time-cells are present. These events are depicted in purple color."))))));
    };
    return DefaultEvents;
}(sample_base_1.SampleBase));
exports.DefaultEvents = DefaultEvents;

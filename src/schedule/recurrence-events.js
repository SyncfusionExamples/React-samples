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
require("./schedule-component.css");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
/**
 * Schedule Recurrence events sample
 */
var RecurrenceEvents = (function (_super) {
    __extends(RecurrenceEvents, _super);
    function RecurrenceEvents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = ej2_base_1.extend([], datasource_1.recurrenceData, null, true);
        return _this;
    }
    RecurrenceEvents.prototype.onEventRendered = function (args) {
        datasource_1.applyCategoryColor(args, this.scheduleObj.currentView);
    };
    RecurrenceEvents.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'schedule-control-section' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'control-wrapper' },
                    React.createElement(ej2_react_schedule_1.ScheduleComponent, { width: '100%', height: '650px', selectedDate: new Date(2018, 1, 20), ref: function (t) { return _this.scheduleObj = t; }, eventSettings: { dataSource: this.data }, eventRendered: this.onEventRendered.bind(this) },
                        React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Day' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Week' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Month' })),
                        React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.Day, ej2_react_schedule_1.Week, ej2_react_schedule_1.Month, ej2_react_schedule_1.Resize, ej2_react_schedule_1.DragAndDrop] })))),
            React.createElement("div", { id: 'action-description' },
                React.createElement("p", null, "This demo showcases the schedule with recurring meetings handled by a top-level manager on a regular pattern.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null,
                    "In this demo, the recurrence events are defined with different repeat patterns. It can be defined through ",
                    React.createElement("code", null, "recurrenceRule"),
                    " field which should accept the valid rule string following the ",
                    React.createElement("a", { target: "_blank", href: "https://tools.ietf.org/html/rfc5545#section-3.3.10" }, "iCalendar"),
                    " specifications. The recurring events are differentiated from other events by a repeat marker added to the right-bottom of it. These events can repeat on daily, weekly, monthly or yearly basis."),
                React.createElement("p", null, "Here, the daily patterned events are depicted in blue color, weekly events are differentiated with green color, monthly events are depicted in orange color and the yearly event is depicted in the all-day section with another green shade for reference."))));
    };
    return RecurrenceEvents;
}(sample_base_1.SampleBase));
exports.RecurrenceEvents = RecurrenceEvents;

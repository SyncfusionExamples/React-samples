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
require("./read-only-events.css");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
/**
 * Schedule readonly events sample
 */
var ReadonlyEvents = (function (_super) {
    __extends(ReadonlyEvents, _super);
    function ReadonlyEvents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = ej2_base_1.extend([], datasource_1.readonlyEventsData, null, true);
        return _this;
    }
    ReadonlyEvents.prototype.isReadOnly = function (dataObj) {
        var data = dataObj;
        return data.ReadOnly || (data.EndTime < new Date());
    };
    ReadonlyEvents.prototype.onEventClick = function (args) {
        if (args.element.classList.contains('e-read-only')) {
            args.cancel = true;
        }
    };
    ReadonlyEvents.prototype.onPopupOpen = function (args) {
        if ((args.type === 'Editor' && this.isReadOnly(args.data)) ||
            (args.type === 'DeleteAlert' && this.isReadOnly(args.data.event))) {
            args.cancel = true;
        }
    };
    ReadonlyEvents.prototype.onEventRendered = function (args) {
        if (this.isReadOnly(args.data)) {
            args.element.setAttribute('aria-readonly', 'true');
            args.element.classList.add('e-read-only');
        }
    };
    ReadonlyEvents.prototype.onResizeStart = function (args) {
        if (args.element.classList.contains('e-read-only')) {
            args.cancel = true;
        }
    };
    ReadonlyEvents.prototype.onDragStart = function (args) {
        if (args.element.classList.contains('e-read-only')) {
            args.cancel = true;
        }
    };
    ReadonlyEvents.prototype.render = function () {
        return (React.createElement("div", { className: 'schedule-control-section' },
            React.createElement("div", { className: 'col-lg-12 control-section' },
                React.createElement("div", { className: 'control-wrapper' },
                    React.createElement(ej2_react_schedule_1.ScheduleComponent, { width: '100%', height: '650px', eventSettings: { dataSource: this.data }, eventClick: this.onEventClick.bind(this), popupOpen: this.onPopupOpen.bind(this), eventRendered: this.onEventRendered.bind(this), resizeStart: this.onResizeStart.bind(this), dragStart: this.onDragStart.bind(this) },
                        React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Day' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Week' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'WorkWeek' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Month' })),
                        React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.Day, ej2_react_schedule_1.Week, ej2_react_schedule_1.WorkWeek, ej2_react_schedule_1.Month, ej2_react_schedule_1.Resize, ej2_react_schedule_1.DragAndDrop] })))),
            React.createElement("div", { id: 'action-description' },
                React.createElement("p", null, "This demo showcases how to make specific events on the Schedule to be displayed in a read-only mode. The read-only events can be simply viewed and prevented from undergoing any edit actions.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null,
                    "In this demo, the events that has occurred on the past hours from the current time are made as read-only and the CRUD actions has been prevented on it. Also, the way to make specific events as read-only regardless of time has been done by adding an additional field ",
                    React.createElement("code", null, "ReadOnly"),
                    " to the event object to hold the value for it either as true or false."),
                React.createElement("p", null,
                    "By checking these two conditions, the events are marked as read-only in this sample and also, visually differentiated the shade of the readonly events by setting CSS style and ",
                    React.createElement("code", null, "aria-readonly"),
                    " attribute to it within the",
                    React.createElement("code", null, "eventRendered"),
                    " event which gets triggered before every event rendering on the Schedule user interface."),
                React.createElement("p", null,
                    "The event editor is prevented to open on these read-only events by setting ",
                    React.createElement("code", null, "args.cancel = true"),
                    " within the",
                    React.createElement("code", null, "popupOpen"),
                    " event which checks for the condition whether the popup type is ",
                    React.createElement("code", null, "editor"),
                    " and the event is readonly."))));
    };
    return ReadonlyEvents;
}(sample_base_1.SampleBase));
exports.ReadonlyEvents = ReadonlyEvents;

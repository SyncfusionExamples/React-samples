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
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
/**
 * Schedule Default sample
 */
var Default = (function (_super) {
    __extends(Default, _super);
    function Default() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = ej2_base_1.extend([], datasource_1.scheduleData, null, true);
        return _this;
    }
    Default.prototype.change = function (args) {
        this.scheduleObj.selectedDate = args.value;
        this.scheduleObj.dataBind();
    };
    Default.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'schedule-control-section' },
            React.createElement("div", { className: 'col-lg-9 control-section' },
                React.createElement("div", { className: 'control-wrapper' },
                    React.createElement(ej2_react_schedule_1.ScheduleComponent, { height: '650px', ref: function (schedule) { return _this.scheduleObj = schedule; }, selectedDate: new Date(2018, 1, 15), eventSettings: { dataSource: this.data } },
                        React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Day' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Week' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'WorkWeek' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Month' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Agenda' })),
                        React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.Day, ej2_react_schedule_1.Week, ej2_react_schedule_1.WorkWeek, ej2_react_schedule_1.Month, ej2_react_schedule_1.Agenda, ej2_react_schedule_1.Resize, ej2_react_schedule_1.DragAndDrop] })))),
            React.createElement("div", { className: 'col-lg-3 property-section' },
                React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                    React.createElement("table", { id: 'property', title: 'Properties', className: 'property-panel-table', style: { width: '100%' } },
                        React.createElement("tbody", null,
                            React.createElement("tr", { style: { height: '50px' } },
                                React.createElement("td", { style: { width: '30%' } },
                                    React.createElement("div", { className: 'col-md-4', style: { paddingTop: '8px' } }, "Current Date")),
                                React.createElement("td", { style: { width: '70%' } },
                                    React.createElement("div", { className: 'datepicker-control-section' },
                                        React.createElement(ej2_react_calendars_1.DatePickerComponent, { value: new Date(2018, 1, 15), change: this.change.bind(this) })))))))),
            React.createElement("div", { id: 'action-description' },
                React.createElement("p", null, "This demo showcases how the flat Schedule looks like with its default set of minimal configurations. Here, some of the documentary shows are displayed as events parallel to its relevant telecast timings. The show names are given as event's subject and simply notified of the start and end of it.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null,
                    "The Schedule is an event calendar which facilitates user with the common Outlook-calendar features, thus allowing them to plan and manage the appointments and its time in an efficient manner. It comes with 6 different view modes as listed below, out of which the",
                    React.createElement("code", null, "Week"),
                    " view is set as active."),
                React.createElement("ul", null,
                    React.createElement("li", null, "Day"),
                    React.createElement("li", null, "Week"),
                    React.createElement("li", null, "Work Week"),
                    React.createElement("li", null, "Month"),
                    React.createElement("li", null, "Agenda"),
                    React.createElement("li", null, "Month Agenda")),
                React.createElement("p", null, "To navigate between views and dates, the navigation options are available at the Schedule header bar and the active view option is highlighted in it by default. The date range of the active view will also be displayed in the header bar, clicking on which will open a calendar popup for ease of required date selection. "),
                React.createElement("p", null,
                    React.createElement("strong", null, "Touch actions on Mobile mode")),
                React.createElement("table", { style: { width: '100%' } },
                    React.createElement("tr", null,
                        React.createElement("th", { style: { width: '100px' } },
                            React.createElement("strong", null, "Action")),
                        React.createElement("th", null,
                            React.createElement("strong", null, "Description"))),
                    React.createElement("tr", null,
                        React.createElement("td", { style: { padding: '4px 0' } }, "Single Tap"),
                        React.createElement("td", null, "Single tapping on events, opens the popup showing event information.")),
                    React.createElement("tr", null,
                        React.createElement("td", { style: { verticalAlign: 'top', padding: '4px 0' } }, "Tap hold "),
                        React.createElement("td", null,
                            React.createElement("ol", { style: { paddingLeft: '12px' } },
                                React.createElement("li", null, "Tap holding on cells, opens the new event editor. "),
                                React.createElement("li", null, "Tap holding on events, opens a small popup at the top holding the options to edit or delete and also displays the selected event\u2019s subject. As a continuation of this action, if user keeps on single tapping on other events will allow the multiple event selection along with that popup remaining in opened state counting the number of events selected."),
                                React.createElement("li", null, "Tap holding the events will also open the tooltip on Schedule."))))),
                React.createElement("p", null,
                    React.createElement("strong", null, "Module Injection")),
                React.createElement("p", null,
                    "The key Schedule functionalities are maintained as individual feature-wise modules. Therefore to avail with a particular feature, appropriate module needs to be injected using ",
                    React.createElement("code", null, "services"),
                    " property under ",
                    React.createElement("code", null, "Inject"),
                    " tag. For example, to work with the day view on Schedule \u2013 it is necessary to inject the Day module using ",
                    React.createElement("code", null, "services"),
                    " property under ",
                    React.createElement("code", null, "Inject"),
                    " tag."),
                React.createElement("p", null,
                    React.createElement("strong", null, " Note:"),
                    " In case, if the module of active view is not injected from the application end \u2013 then the Schedule is configured to display the first available option in the ",
                    React.createElement("code", null, "views"),
                    " property."))));
    };
    return Default;
}(sample_base_1.SampleBase));
exports.Default = Default;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var default_1 = require("./default");
var local_data_1 = require("./local-data");
var remote_data_1 = require("./remote-data");
var default_events_1 = require("./default-events");
var recurrence_events_1 = require("./recurrence-events");
var timezone_1 = require("./timezone");
var views_1 = require("./views");
var timeline_1 = require("./timeline");
var agenda_1 = require("./agenda");
var month_agenda_1 = require("./month-agenda");
var views_configuration_1 = require("./views-configuration");
var extended_views_1 = require("./extended-views");
var timeline_resources_1 = require("./timeline-resources");
var resources_1 = require("./resources");
var group_editing_1 = require("./group-editing");
var group_custom_work_days_1 = require("./group-custom-work-days");
var add_remove_resources_1 = require("./add-remove-resources");
var resource_grouping_1 = require("./resource-grouping");
var timeline_resource_grouping_1 = require("./timeline-resource-grouping");
var group_by_date_1 = require("./group-by-date");
var group_by_child_1 = require("./group-by-child");
var cell_template_1 = require("./cell-template");
var date_header_template_1 = require("./date-header-template");
var event_template_1 = require("./event-template");
var tooltip_1 = require("./tooltip");
var editor_validation_1 = require("./editor-validation");
var editor_custom_field_1 = require("./editor-custom-field");
var editor_template_1 = require("./editor-template");
var header_rows_1 = require("./header-rows");
var time_scale_1 = require("./time-scale");
var header_bar_1 = require("./header-bar");
var scroll_to_1 = require("./scroll-to");
var work_days_1 = require("./work-days");
var hide_weekend_1 = require("./hide-weekend");
var work_hours_1 = require("./work-hours");
var start_end_hour_1 = require("./start-end-hour");
var cell_dimension_1 = require("./cell-dimension");
var read_only_events_1 = require("./read-only-events");
var recurrence_editor_generate_rule_1 = require("./recurrence-editor-generate-rule");
var recurrence_editor_populate_rule_1 = require("./recurrence-editor-populate-rule");
var keyboard_interaction_1 = require("./keyboard-interaction");
var events_1 = require("./events");
exports.scheduleRoutes = (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/default', component: default_1.Default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/local-data', component: local_data_1.LocalData }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/remote-data', component: remote_data_1.RemoteData }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/default-events', component: default_events_1.DefaultEvents }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/recurrence-events', component: recurrence_events_1.RecurrenceEvents }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/timezone', component: timezone_1.TimeZone }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/views', component: views_1.Views }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/timeline', component: timeline_1.TimelineView }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/agenda', component: agenda_1.AgendaView }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/month-agenda', component: month_agenda_1.MonthAgendaView }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/views-configuration', component: views_configuration_1.ViewConfigurations }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/extended-views', component: extended_views_1.ExtendedViews }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/timeline-resources', component: timeline_resources_1.TimelineResource }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/resources', component: resources_1.Resources }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/group-editing', component: group_editing_1.GroupEditing }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/group-custom-work-days', component: group_custom_work_days_1.GroupCustomWorkDays }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/add-remove-resources', component: add_remove_resources_1.AddRemoveResources }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/resource-grouping', component: resource_grouping_1.Group }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/timeline-resource-grouping', component: timeline_resource_grouping_1.TimelineGrouping }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/group-by-date', component: group_by_date_1.GroupByDate }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/group-by-child', component: group_by_child_1.GroupByChild }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/cell-template', component: cell_template_1.CellTemplate }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/date-header-template', component: date_header_template_1.DateHeaderTemplate }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/event-template', component: event_template_1.EventTemplate }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/tooltip', component: tooltip_1.Tooltip }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/editor-validation', component: editor_validation_1.EditorFieldValidation }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/editor-custom-field', component: editor_custom_field_1.EditorCustomField }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/editor-template', component: editor_template_1.EditorTemplate }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/header-rows', component: header_rows_1.HeaderRows }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/time-scale', component: time_scale_1.Timescale }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/header-bar', component: header_bar_1.HeaderBar }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/scroll-to', component: scroll_to_1.ScrollTo }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/work-days', component: work_days_1.WorkDays }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/hide-weekend', component: hide_weekend_1.HideWeekend }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/work-hours', component: work_hours_1.WorkHours }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/start-end-hour', component: start_end_hour_1.DayHourLimit }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/cell-dimension', component: cell_dimension_1.CellDimension }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/read-only-events', component: read_only_events_1.ReadonlyEvents }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/recurrence-editor-generate-rule', component: recurrence_editor_generate_rule_1.RuleGenerate }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/recurrence-editor-populate-rule', component: recurrence_editor_populate_rule_1.PopulateRule }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/keyboard-interaction', component: keyboard_interaction_1.KeyboardInteraction }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/schedule/events', component: events_1.Events })));
exports.scheduleCategory = { "default": { "name": "Default Functionalities", "category": "Schedule" }, "local-data": { "name": "Local Data", "category": "Data Binding" }, "remote-data": { "name": "Remote Data", "category": "Data Binding" }, "default-events": { "name": "Normal", "category": "Appointments" }, "recurrence-events": { "name": "Recurrence", "category": "Appointments" }, "timezone": { "name": "Timezone", "category": "Appointments" }, "views": { "name": "Basic Views", "category": "Views" }, "timeline": { "name": "Timeline Views", "category": "Views" }, "agenda": { "name": "Agenda View", "category": "Views" }, "month-agenda": { "name": "Month Agenda View", "category": "Views" }, "views-configuration": { "name": "Individual View Settings", "category": "Views" }, "extended-views": { "name": "View Intervals", "category": "Views" }, "timeline-resources": { "name": "Room Scheduler", "category": "Multiple Resources" }, "resources": { "name": "Fare Calendar", "category": "Multiple Resources" }, "group-editing": { "name": "Shared Events", "category": "Multiple Resources" }, "group-custom-work-days": { "name": "Different Work Days", "category": "Multiple Resources" }, "add-remove-resources": { "name": "Show/Hide Resources", "category": "Multiple Resources" }, "resource-grouping": { "name": "Horizontal Grouping", "category": "Resource Grouping" }, "timeline-resource-grouping": { "name": "Timeline Grouping", "category": "Resource Grouping" }, "group-by-date": { "name": "Date-wise Grouping", "category": "Resource Grouping" }, "group-by-child": { "name": "Hierarchical Grouping", "category": "Resource Grouping" }, "cell-template": { "name": "Cell", "category": "Template" }, "date-header-template": { "name": "Date Header", "category": "Template" }, "event-template": { "name": "Events", "category": "Template" }, "tooltip": { "name": "Tooltip", "category": "Template" }, "editor-validation": { "name": "Field Validation", "category": "Editor Window" }, "editor-custom-field": { "name": "Additional Fields", "category": "Editor Window" }, "editor-template": { "name": "Editor Template", "category": "Editor Window" }, "header-rows": { "name": "Header Rows", "category": "Customization" }, "time-scale": { "name": "Timescale", "category": "Customization" }, "header-bar": { "name": "Header Bar", "category": "Customization" }, "scroll-to": { "name": "Scroll Time", "category": "Customization" }, "work-days": { "name": "Work Days", "category": "Customization" }, "hide-weekend": { "name": "Hide Weekend", "category": "Customization" }, "work-hours": { "name": "Work Hours", "category": "Customization" }, "start-end-hour": { "name": "Day Hour Limit", "category": "Customization" }, "cell-dimension": { "name": "Cell Dimension", "category": "Customization" }, "read-only-events": { "name": "Read-only Events", "category": "Customization" }, "recurrence-editor-generate-rule": { "name": "Rule Generator", "category": "Recurrence Editor" }, "recurrence-editor-populate-rule": { "name": "Populate Rule", "category": "Recurrence Editor" }, "keyboard-interaction": { "name": "Keyboard Interaction", "category": "Miscellaneous" }, "events": { "name": "Events", "category": "Miscellaneous" }, "defaultSample": "schedule/default" };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarSampleOrder = [
    { 'path': 'calendar/default', 'component': 'Default', 'name': 'Default Functionalities', 'order': '01', 'category': 'Calendar', 'api': '{"CalendarComponent": [ "change"]}', 'description': 'A simple calendar component for React to select dates easily by switching between month, year, and decade views with a rich user interface' },
    { 'path': 'calendar/date-range', 'component': 'Range', 'name': 'Date Range', 'order': '01', 'category': 'Calendar', 'api': '{"Calendar": [ "min", "max", "change" ]}', 'description': 'Calendar for React with min and max dates that restrict users from selecting dates outside a defined range, like weekends, etc' },
    { 'path': 'calendar/disabled', 'component': 'Disabled', 'name': 'Disabled Dates', 'order': '01', 'category': 'Calendar', 'api': '{"Calendar": [ "renderDayCell", "change" ]}', 'description': 'Calendar widget for React with disabled dates to restrict users from selecting a defined set of dates' },
    { 'path': 'calendar/special-dates', 'component': 'Special', 'name': 'Special Dates', 'order': '01', 'category': 'Calendar', 'api': '{"Calendar": [ "renderDayCell", "change" ]}', 'description': 'Calendar for React that highlights multiple dates like weekends, holidays, events, or a range of days with options to add custom styles and descriptions' },
    { 'path': 'calendar/multi-selection', 'component': 'MultipleSelection', 'name': 'Multi Selection', 'order': '01', 'category': 'Calendar', 'type': 'new', 'api': '{"Calendar": [ "isMultiSelection", "values", "change" ]}', 'description': 'A simple and lightweight calendar component for React that features multiple date selection to allow users to select more than one date' }
];

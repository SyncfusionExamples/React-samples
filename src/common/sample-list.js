"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../button/config");
var config_2 = require("../tooltip/config");
var config_3 = require("../textboxes/config");
var config_4 = require("../combo-box/config");
var config_5 = require("../auto-complete/config");
var config_6 = require("../drop-down-list/config");
var config_7 = require("../listview/config");
var config_8 = require("../toolbar/config");
var config_9 = require("../accordion/config");
var config_10 = require("../schedule/config");
var config_11 = require("../card/config");
var config_12 = require("../avatar/config");
var config_13 = require("../badge/config");
var config_14 = require("../toast/config");
var config_15 = require("../treeview/config");
var config_16 = require("../chart/config");
var config_17 = require("../diagram/config");
var config_18 = require("../dialog/config");
var config_19 = require("../grid/config");
var config_20 = require("../numerictextbox/config");
var config_21 = require("../calendar/config");
var config_22 = require("../datepicker/config");
var config_23 = require("../datetimepicker/config");
var config_24 = require("../daterangepicker/config");
var config_25 = require("../circular-gauge/config");
var config_26 = require("../context-menu/config");
var config_27 = require("../linear-gauge/config");
var config_28 = require("../timepicker/config");
var config_29 = require("../maskedtextbox/config");
var config_30 = require("../multi-select/config");
var config_31 = require("../tab/config");
var config_32 = require("../slider/config");
var config_33 = require("../sidebar/config");
var config_34 = require("../uploader/config");
var config_35 = require("../maps/config");
var config_36 = require("../range-navigator/config");
var config_37 = require("../sparkline/config");
var config_38 = require("../smith-chart/config");
var config_39 = require("../treemap/config");
var config_40 = require("../color-picker/config");
var config_41 = require("../heatmap/config");
var config_42 = require("../document-editor/config");
var config_43 = require("../rich-text-editor/config");
var config_44 = require("../pivot-view/config");
var config_45 = require("../menu/config");
exports.samplesList = [
    {
        'name': 'Data Grid', 'category': 'Grids', 'order': '03', 'path': 'grid', 'samples': config_19.GridSampleOrder, 'type': 'update', 'ftName': 'datagrid'
    },
    {
        'name': 'Pivot Grid', 'category': 'Grids', 'order': '03', 'path': 'pivot-view', 'samples': config_44.PivotViewSampleOrder, 'type': 'preview'
    },
    {
        'name': 'Chart', 'category': 'Data Visualization', 'order': '02', 'path': 'chart', 'samples': config_16.ChartSampleOrder, 'type': 'update', 'ftName': 'chart'
    },
    {
        'name': 'Diagram', 'category': 'Data Visualization', 'order': '02', 'path': 'diagram', 'samples': config_17.DiagramSampleOrder, 'type': 'preview'
    },
    {
        'name': 'Maps', 'category': 'Data Visualization', 'order': '02', 'path': 'maps', 'samples': config_35.MapSampleOrder, 'ftName': 'maps'
    },
    {
        'name': 'TreeMap', 'category': 'Data Visualization', 'order': '02', 'path': 'treemap', 'samples': config_39.TreemapOrder, 'ftName': 'treemap'
    },
    {
        'name': 'HeatMap', 'category': 'Data Visualization', 'order': '02', 'path': 'heatmap', 'samples': config_41.HeatmapSampleOrder, "type": "update"
    },
    {
        'name': 'Circular Gauge', 'category': 'Data Visualization', 'order': '02', 'path': 'circular-gauge', 'samples': config_25.CircularGaugeSampleOrder, "type": "update", 'ftName': 'circulargauge'
    },
    {
        'name': 'Linear Gauge', 'category': 'Data Visualization', 'order': '02', 'path': 'linear-gauge', 'samples': config_27.LinearGaugeSampleOrder, 'ftName': 'lineargauge'
    },
    {
        'name': 'Sparkline', 'category': 'Data Visualization', 'order': '02', 'path': 'sparkline', 'samples': config_37.SparklineOrder, 'ftName': 'sparkline'
    },
    {
        'name': 'Smith Chart', 'category': 'Data Visualization', 'order': '02', 'path': 'smith-chart', 'samples': config_38.SmithChartOrder, 'ftName': 'smithchart'
    },
    {
        'name': 'Range Navigator', 'category': 'Data Visualization', 'order': '02', 'path': 'range-navigator', 'samples': config_36.RangeNavigatorSampleOrder, 'ftName': 'rangenavigator'
    },
    {
        'name': 'Schedule', 'category': 'Calendar', 'order': '02', 'path': 'schedule', 'samples': config_10.ScheduleSampleOrder, "type": "update", 'ftName': 'scheduler'
    },
    {
        'name': 'Calendar', 'category': 'Calendar', 'order': '04', 'path': 'calendar', 'samples': config_21.CalendarSampleOrder, 'type': 'update'
    },
    {
        'name': 'AutoComplete', 'category': 'Editors', 'order': '04', 'path': 'auto-complete', 'samples': config_5.AutoCompleteSampleOrder,
    },
    {
        'name': 'Button', 'category': 'Editors', 'order': '04', 'path': 'button', 'samples': config_1.ButtonSampleOrder, 'type': 'update'
    },
    {
        'name': 'ComboBox', 'category': 'Editors', 'order': '04', 'path': 'combo-box', 'samples': config_4.ComboBoxSampleOrder,
    },
    {
        'name': 'DocumentEditor', 'category': 'Editors', 'order': '04', 'path': 'document-editor', 'samples': config_42.DocumentEditorSampleOrder, 'type': 'preview'
    },
    {
        'name': 'DatePicker', 'category': 'Editors', 'order': '04', 'path': 'datepicker', 'samples': config_22.DatePickerSampleOrder
    },
    {
        'name': 'DateRangePicker', 'category': 'Editors', 'order': '04', 'path': 'daterangepicker', 'samples': config_24.DateRangePickerSampleOrder
    },
    {
        'name': 'DateTimePicker', 'category': 'Editors', 'order': '04', 'path': 'datetimepicker', 'samples': config_23.DateTimeOrder,
    },
    {
        'name': 'DropDownList', 'category': 'Editors', 'order': '04', 'path': 'drop-down-list', 'samples': config_6.DropDownListSampleOrder,
    },
    {
        'name': 'MultiSelect', 'category': 'Editors', 'order': '04', 'path': 'multi-select', 'samples': config_30.MultiSelectSampleOrder,
    },
    {
        'name': 'RichTextEditor', 'category': 'Editors', 'order': '04', 'path': 'rich-text-editor', 'samples': config_43.RichTextEditorSampleOrder, 'type': 'preview'
    },
    {
        'name': 'MaskedTextBox', 'category': 'Editors', 'order': '04', 'path': 'maskedtextbox', 'samples': config_29.MaskedTextBoxOrder, 'ftName': 'maskedtextbox'
    },
    {
        'name': 'NumericTextBox', 'category': 'Editors', 'order': '04', 'path': 'numerictextbox', 'samples': config_20.NumericTextBoxOrder, 'ftName': 'numerictextbox'
    },
    {
        'name': 'Slider', 'category': 'Editors', 'order': '04', 'path': 'slider', 'samples': config_32.SliderSampleOrder
    },
    {
        'name': 'TextBoxes', 'category': 'Editors', 'order': '04', 'path': 'textboxes', 'samples': config_3.TextBoxSampleOrder, 'type': 'update', 'ftName': 'textbox'
    },
    {
        'name': 'TimePicker', 'category': 'Editors', 'order': '04', 'path': 'timepicker', 'samples': config_28.TimePickerSampleOrder
    },
    {
        'name': 'Uploader', 'category': 'Editors', 'order': '04', 'path': 'uploader', 'samples': config_34.UploaderSampleOrder, 'type': 'update', 'ftName': 'file-upload'
    },
    {
        'name': 'ListView', 'category': 'Layout', 'order': '05', 'path': 'listview', 'samples': config_7.ListViewSampleOrder, type: 'update'
    },
    {
        'name': 'Dialog', 'category': 'Layout', 'order': '05', 'path': 'dialog', 'samples': config_18.DialogSampleOrder, 'type': 'update', 'ftName': 'modal-dialog'
    },
    {
        'name': 'Tooltip', 'category': 'Layout', 'order': '05', 'path': 'tooltip', 'samples': config_2.TooltipSampleOrder, type: 'update'
    },
    {
        'name': 'Card', 'category': 'Layout', 'path': 'card', 'samples': config_11.CardSampleOrder
    },
    {
        'name': 'Avatar', 'category': 'Layout', 'path': 'avatar', 'samples': config_12.AvatarSampleOrder
    },
    {
        'name': 'Badge', 'category': 'Notifications', 'order': '01', 'path': 'badge', 'samples': config_13.BadgeSampleOrder
    },
    {
        'name': 'Toast', 'category': 'Notifications', 'order': '02', 'path': 'toast', 'samples': config_14.ToastSampleOrder
    },
    {
        'name': 'Sidebar', 'category': 'Navigation', 'path': 'sidebar', 'samples': config_33.SidebarSampleOrder, 'type': 'update'
    },
    {
        'name': 'TreeView', 'category': 'Navigation', 'path': 'treeview', 'samples': config_15.TreeViewSampleOrder, 'ftName': 'treeview'
    },
    {
        'name': 'Tab', 'category': 'Navigation', 'path': 'tab', 'samples': config_31.TabSampleOrder
    },
    {
        'name': 'Toolbar', 'category': 'Navigation', 'path': 'toolbar', 'samples': config_8.ToolbarSampleOrder
    },
    {
        'name': 'ContextMenu', 'category': 'Navigation', 'path': 'context-menu', 'samples': config_26.ContextMenuSampleOrder, 'ftName': 'context-menu'
    },
    {
        'name': 'Accordion', 'category': 'Navigation', 'path': 'accordion', 'samples': config_9.AccordionSampleOrder
    },
    {
        'name': 'ColorPicker', 'category': 'Editors', 'order': '04', 'path': 'color-picker', 'samples': config_40.ColorPickerSampleOrder, 'ftName': 'color-picker'
    },
    {
        'name': 'Menu', 'category': 'Navigation', 'path': 'menu', 'type': 'preview', 'samples': config_45.MenuSampleOrder, 'ftName': 'menu'
    }
];

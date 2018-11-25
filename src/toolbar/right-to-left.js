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
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
require("./toolbar.component.css");
var sample_CSS = "{ width: 100% }";
var RTL = (function (_super) {
    __extends(RTL, _super);
    function RTL() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Mapping DropDownList dataSource property
        _this.mData = [
            { 'value': 'scrollable', 'text': 'Scrollable' }, { 'value': 'popup', 'text': 'Popup' }
        ];
        // Mapping DropDownList fields property
        _this.fields = { text: 'text', value: 'value' };
        // Mapping DropDownList value property
        _this.mVal = 'scrollable';
        return _this;
    }
    RTL.prototype.changeOverflowMode = function (e) {
        var placement = document.getElementById('mode').value;
        if (placement === 'Popup') {
            this.toolbarInstance.overflowMode = 'Popup';
        }
        else {
            this.toolbarInstance.overflowMode = 'Scrollable';
        }
        this.toolbarInstance.dataBind();
    };
    RTL.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section tbar-control-section tb-rtl-sample-section' },
                React.createElement("div", { className: ' col-lg-8' },
                    React.createElement("div", { className: 'control tbar-sample', style: { margin: '25px 0 ' } },
                        React.createElement(ej2_react_navigations_1.ToolbarComponent, { enableRtl: true, ref: function (toolbar) { return _this.toolbarInstance = toolbar; } },
                            React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-cut-icon tb-icons', tooltipText: 'Cut', overflow: 'Show' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-copy-icon tb-icons', tooltipText: 'Copy', overflow: 'Show' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-paste-icon tb-icons', tooltipText: 'Paste', overflow: 'Show' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-bold-icon tb-icons', tooltipText: 'Bold', text: 'Bold', showTextOn: 'Overflow', overflow: 'Show' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-underline-icon tb-icons', tooltipText: 'Underline', overflow: 'Show', text: 'أكد', showTextOn: 'Overflow' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-italic-icon tb-icons', tooltipText: 'Italic', text: 'Italic', showTextOn: 'Overflow', overflow: 'Show' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-bullets-icon tb-icons', tooltipText: 'Bullets', showTextOn: 'Overflow', text: 'Bullets' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-numbering-icon tb-icons', tooltipText: 'Numbering', showTextOn: 'Overflow', text: 'Numbering' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-alignleft-icon tb-icons', tooltipText: 'Align-Left', showTextOn: 'Overflow', text: 'Left' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-alignright-icon tb-icons', tooltipText: 'Align-Right', showTextOn: 'Overflow', text: 'Right' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-aligncenter-icon tb-icons', tooltipText: 'Align-Center', showTextOn: 'Overflow', text: 'Center' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-alignjustify-icon tb-icons', tooltipText: 'Align-Justify', showTextOn: 'Overflow', text: 'Justify' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-undo-icon tb-icons', tooltipText: 'Undo', text: 'Undo' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-redo-icon tb-icons', tooltipText: 'Redo', text: 'Redo' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-radar-icon tb-icons', text: 'Radar', tooltipText: 'Radar Chart', showTextOn: 'Overflow' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-line-icon tb-icons', text: 'Line', tooltipText: 'Line Chart', showTextOn: 'Overflow' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-table-icon tb-icons', text: 'Table', tooltipText: 'Table', showTextOn: 'Overflow' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-picture-icon tb-icons', text: 'Picture', tooltipText: 'Picture', showTextOn: 'Overflow' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-design-icon tb-icons', text: 'Design', tooltipText: 'Design', showTextOn: 'Overflow', overflow: 'Hide' }))))),
                React.createElement("div", { className: 'col-lg-4 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Toolbar Mode Switch in RTL ' },
                        React.createElement("table", { id: "property", title: "Toolbar Mode Switch in RTL ", className: "property-panel-table" },
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '30%' } },
                                    React.createElement("div", { className: 'col-md-4', style: { paddingTop: '8px' } }, "Mode")),
                                React.createElement("td", { style: { width: '70%', paddingRight: '10px' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: 'mode', width: '90%', dataSource: this.mData, fields: this.fields, value: this.mVal, change: this.changeOverflowMode.bind(this) })))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the RTL mode of the ",
                    React.createElement("code", null, "Toolbar"),
                    ". Select the option in property panel for switching mode in Toolbar with right to left direction.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The RTL sample illustrates the direction of the toolbar from ",
                    React.createElement("strong", null, "right to left"),
                    ". You can switch between",
                    React.createElement("strong", null, " Popup"),
                    " and ",
                    React.createElement("strong", null, "Scrollable"),
                    " mode using the options given in the drop down list."),
                React.createElement("br", null))));
    };
    return RTL;
}(sample_base_1.SampleBase));
exports.RTL = RTL;

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
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_richtexteditor_1 = require("@syncfusion/ej2-react-richtexteditor");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
require("./rte-events.css");
var RTEEvents = (function (_super) {
    __extends(RTEEvents, _super);
    function RTEEvents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // set the value to RichTextEditor
        _this.template = "<p>The rich text editor component is WYSIWYG (\"what you see is what you get\") editor that provides the best user experience to create and update the content. \n  Users can format their content using standard toolbar commands.</p>\n                \n  <p><b>Key features:</b></p>\n                \n  <ul>\n      <li>\n          <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>\n      </li>\n      <li>\n          <p>Capable of handling markdown editing.</p>\n      </li>\n      <li>\n          <p>Contains a modular library to load the necessary functionality on demand.</p>\n      </li>\n      <li>\n          <p>Provides a fully customizable toolbar.</p>\n      </li>\n      <li>\n          <p>Provides HTML view to edit the source directly for developers.</p>\n      </li>\n      <li>\n          <p>Supports third-party library integration.</p>\n      </li>\n      <li>\n          <p>Allows preview of modified content before saving it.</p>\n      </li>\n      <li>\n          <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>\n      </li>\n      <li>\n          <p>Contains undo/redo manager.</p>\n      </li>\n      <li>\n          <p>Creates bulleted and numbered lists.</p>\n      </li>\n  </ul>";
        // RichTextEditor items list
        _this.items = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'];
        //RichTextEditor ToolbarSettings
        _this.toolbarSettings = {
            items: _this.items
        };
        return _this;
    }
    RTEEvents.prototype.rendereComplete = function () {
        document.getElementById('clear').onclick = function () {
            document.getElementById('EventLog').innerHTML = '';
        };
    };
    RTEEvents.prototype.create = function () {
        this.appendElement('RichTextEditor <b>create</b> event called<hr>');
    };
    RTEEvents.prototype.actionBegin = function (args) {
        this.appendElement('<b>' + args.requestType + '</b> action is called<hr>');
        this.handleFullScreen(args);
    };
    RTEEvents.prototype.actionComplete = function (args) {
        this.appendElement('<b>' + args.requestType + '</b> action is completed<hr>');
        this.actionCompleteHandler();
    };
    RTEEvents.prototype.focus = function () {
        this.appendElement('RichTextEditor <b>focus</b> event called<hr>');
    };
    RTEEvents.prototype.blur = function () {
        this.appendElement('RichTextEditor <b>blur</b> event called<hr>');
    };
    RTEEvents.prototype.change = function () {
        this.appendElement('RidhTextEditor <b>change</b> event called<hr>');
    };
    RTEEvents.prototype.toolbarClick = function () {
        this.appendElement('RidhTextEditor <b>toolbar click</b> event called<hr>');
    };
    RTEEvents.prototype.appendElement = function (html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    };
    RTEEvents.prototype.handleFullScreen = function (e) {
        var leftBar;
        var transformElement;
        if (ej2_base_1.Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        }
        else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            ej2_base_1.addClass([leftBar], ['e-close']);
            ej2_base_1.removeClass([leftBar], ['e-open']);
            if (!ej2_base_1.Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        }
        else if (e.targetItem === 'Minimize') {
            ej2_base_1.removeClass([leftBar], ['e-close']);
            if (!ej2_base_1.Browser.isDevice) {
                ej2_base_1.addClass([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    };
    RTEEvents.prototype.actionCompleteHandler = function () {
        var _this = this;
        setTimeout(function () { _this.rteObj.defaultRTE.toolbarModule.refreshToolbarOverflow(); }, 400);
    };
    RTEEvents.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'col-lg-8 control-section', id: 'rteEvent' },
                React.createElement("div", { className: 'rte-control-section' },
                    React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { id: "defaultRTE", ref: function (richtexteditor) { _this.rteObj = richtexteditor; }, valueTemplate: this.template, toolbarSettings: this.toolbarSettings, created: this.create.bind(this), actionBegin: this.actionBegin.bind(this), actionComplete: this.actionComplete.bind(this), focus: this.focus.bind(this), blur: this.blur.bind(this), change: this.change.bind(this), toolbarClick: this.toolbarClick.bind(this) },
                        React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_1.HtmlEditor, ej2_react_richtexteditor_1.Toolbar, ej2_react_richtexteditor_1.Link, ej2_react_richtexteditor_1.Image, ej2_react_richtexteditor_1.QuickToolbar] })))),
            React.createElement("div", { className: 'col-lg-4 property-section', id: "rteEventProperty" },
                React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                    React.createElement("table", { id: "property", title: "Event Trace", className: 'property-panel-table rte-event-panel' },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", { className: "eventarea", style: { height: '245px', overflow: 'auto' } },
                                        React.createElement("span", { className: "EventLog", id: "EventLog", style: { wordBreak: 'normal' } })))),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", { className: "evtbtn", style: { paddingBottom: '10px' } },
                                        React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "clear" }, "Clear")))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the events that trigger on every action of the rich text editor. The event details are showcased in the event trace panel.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "The rich text editor triggers the events based on its actions. The events can be used as an extension point to perform custom operations."),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "change"),
                        " - Triggers when the editor gets blurred and changes are made to the content."),
                    React.createElement("li", null,
                        React.createElement("code", null, "focus"),
                        " - Triggers when the editor is in focus."),
                    React.createElement("li", null,
                        React.createElement("code", null, "blur"),
                        " - Triggers when focused out of the editor."),
                    React.createElement("li", null,
                        React.createElement("code", null, "actionBegin"),
                        " - Triggers before the execution of command."),
                    React.createElement("li", null,
                        React.createElement("code", null, "actionComplete"),
                        " - Triggers after the execution of command."),
                    React.createElement("li", null,
                        React.createElement("code", null, "created"),
                        " - Triggers when the component is created."),
                    React.createElement("li", null,
                        React.createElement("code", null, "destroyed"),
                        " \u2013 Triggers when the component is destroyed.")),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "RichTextEditor component features are segregated into individual feature-wise modules. To use richtexteditor feature, we need to inject ",
                    React.createElement("code", null, "Toolbar, Link, Image, HtmlEditor"),
                    " modules into the services."))));
    };
    return RTEEvents;
}(sample_base_1.SampleBase));
exports.RTEEvents = RTEEvents;

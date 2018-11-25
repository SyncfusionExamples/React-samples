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
var ej2_react_richtexteditor_1 = require("@syncfusion/ej2-react-richtexteditor");
var sample_base_1 = require("../common/sample-base");
require("./rich-text-editor.css");
var Default = (function (_super) {
    __extends(Default, _super);
    function Default() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // set the value to RichTextEditor
        _this.template = "<p>The rich text editor component is WYSIWYG (\"what you see is what you get\") editor that provides the best user experience to create and update the content. \n  Users can format their content using standard toolbar commands.</p>\n                    \n  <p><b>Key features:</b></p>\n                    \n  <ul>\n      <li>\n          <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>\n      </li>\n      <li>\n          <p>Capable of handling markdown editing.</p>\n      </li>\n      <li>\n          <p>Contains a modular library to load the necessary functionality on demand.</p>\n      </li>\n      <li>\n          <p>Provides a fully customizable toolbar.</p>\n      </li>\n      <li>\n          <p>Provides HTML view to edit the source directly for developers.</p>\n      </li>\n      <li>\n          <p>Supports third-party library integration.</p>\n      </li>\n      <li>\n          <p>Allows preview of modified content before saving it.</p>\n      </li>\n      <li>\n          <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>\n      </li>\n      <li>\n          <p>Contains undo/redo manager.</p>\n      </li>\n      <li>\n          <p>Creates bulleted and numbered lists.</p>\n      </li>\n  </ul>";
        return _this;
    }
    Default.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section', id: "rte" },
                React.createElement("div", { className: 'rte-control-section' },
                    React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { id: "defaultRTE", ref: function (richtexteditor) { _this.rteObj = richtexteditor; }, valueTemplate: this.template },
                        React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_1.HtmlEditor, ej2_react_richtexteditor_1.Toolbar, ej2_react_richtexteditor_1.Image, ej2_react_richtexteditor_1.Link, ej2_react_richtexteditor_1.QuickToolbar] })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the default rendering of the rich text editor with minimum configuration.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "The rich text editor is WYSIWYG (\"what you see is what you get\") editor that is used to create and edit content, and return valid HTML markup. The editor provides a standard toolbar to format content using its commands. The toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo the operation, HTML view, and more."))));
    };
    return Default;
}(sample_base_1.SampleBase));
exports.Default = Default;

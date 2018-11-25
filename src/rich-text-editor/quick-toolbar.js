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
var ej2_react_richtexteditor_2 = require("@syncfusion/ej2-react-richtexteditor");
var sample_base_1 = require("../common/sample-base");
require("./quick-toolbar.css");
var QuickToolbarSample = (function (_super) {
    __extends(QuickToolbarSample, _super);
    function QuickToolbarSample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // set the value to RichTextEditor
        _this.value = "<div style=\"display:block;padding-top:2px\">\n        <p style=\"margin-right:10px;margin-top:10px;\">The sample is configured with quick toolbar commands for image and link elements.  \n        Click on the image or link to see its quick action commands.   \n        </p></div><div>\n        <img id=\"rteImageID\" style=\"width:300px; height:300px;transform: rotate(0deg); margin: 12px 22px\" \n        alt=\"Logo\" src=\"./src/rich-text-editor/images/RTEImage-Feather.png\" />\n        </div>";
        // RichTextEditor items list
        _this.image = ['Replace', 'Align', 'Caption',
            'Remove', 'InsertLink', '|', 'Display', 'AltText', 'Dimension', '|',
            {
                tooltipText: 'Rotate Left',
                template: '<button class="e-tbar-btn e-btn" id="roatateLeft"><span class="e-btn-icon e-icons e-roatate-left"></span>'
            },
            {
                tooltipText: 'Rotate Right',
                template: '<button class="e-tbar-btn e-btn" id="roatateRight"><span class="e-btn-icon e-icons e-roatate-right"></span>'
            }];
        _this.quickToolbarSettings = {
            image: _this.image
        };
        return _this;
    }
    QuickToolbarSample.prototype.oncreate = function () {
        document.getElementById('rteImageID').onclick = function (e) {
            var rotateLeft = document.getElementById('roatateLeft');
            var rotateRight = document.getElementById('roatateRight');
            rotateLeft.onclick = function (e) {
                var imgEle = document.getElementById('rteImageID');
                var transform = Math.abs(parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10));
                imgEle.style.transform = 'rotate(-' + (transform + 90) + 'deg)';
            };
            rotateRight.onclick = function (e) {
                var imgEle = document.getElementById('rteImageID');
                var transform = parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10);
                imgEle.style.transform = 'rotate(' + (transform + 90) + 'deg)';
            };
        };
    };
    QuickToolbarSample.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: "dropdowndefault", className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: "content-wrapper" },
                    React.createElement("div", { id: 'default' },
                        React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { id: "defaultRTE", created: this.oncreate.bind(this), ref: function (scope) { _this.rteObj = scope; }, value: this.value, quickToolbarSettings: this.quickToolbarSettings },
                            React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_2.Toolbar, ej2_react_richtexteditor_2.Link, ej2_react_richtexteditor_2.Image, ej2_react_richtexteditor_1.QuickToolbar, ej2_react_richtexteditor_2.HtmlEditor] }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the default rendering of the rich text editor with minimum configuration.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, " The rich text editor is WYSIWYG (\"what you see is what you get\") editor that is used to create and edit content, and return valid HTML markup. "),
                React.createElement("p", null, " The editor provides a standard toolbar to format content using its commands. "),
                React.createElement("p", null, " The toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo the operation, HTML view, and more."))));
    };
    return QuickToolbarSample;
}(sample_base_1.SampleBase));
exports.QuickToolbarSample = QuickToolbarSample;

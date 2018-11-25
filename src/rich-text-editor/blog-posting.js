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
var ej2_react_richtexteditor_1 = require("@syncfusion/ej2-react-richtexteditor");
var sample_base_1 = require("../common/sample-base");
require("./blog-posting.css");
var Forums = (function (_super) {
    __extends(Forums, _super);
    function Forums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Forums.prototype.rendereComplete = function () {
        var _this = this;
        var buttonEle = document.getElementById('rteSubmit');
        var cancelEle = document.getElementById('rteCancel');
        cancelEle.addEventListener('click', function (e) {
            _this.resetMessage();
        });
        var empCount = 0;
        buttonEle.addEventListener('click', function (e) {
            _this.postMessage();
        });
    };
    Forums.prototype.resetMessage = function () {
        var answerElement = this.rteObj.contentModule.getEditPanel();
        answerElement.innerHTML = '';
        this.rteObj.value = '';
        this.rteObj.dataBind();
        this.rteObj.refresh();
    };
    Forums.prototype.postMessage = function () {
        var empCount = 0;
        var answerElement = this.rteObj.contentModule.getEditPanel();
        var comment = answerElement.innerHTML;
        var empList = ['emp1', 'emp2', 'emp3'];
        var nameListList = ['Anne Dodsworth', 'Janet Leverling', 'Laura Callahan'];
        if (comment !== null && comment.trim() !== '' && answerElement.innerText.trim() !== '') {
            var answer = document.querySelector('.answer');
            var cloneAnswer = answer.cloneNode(true);
            var authorName = cloneAnswer.querySelector('.authorname');
            var logo = cloneAnswer.querySelector('.logos');
            logo.classList.remove('logos');
            if (empCount < 3) {
                logo.classList.add(empList[empCount]);
                authorName.innerHTML = nameListList[empCount];
                empCount++;
            }
            else {
                logo.classList.add('logo');
                authorName.innerHTML = 'User';
            }
            var timeZone = cloneAnswer.querySelector('.detailsAnswer');
            var day = this.getMonthName(new Date().getMonth()) + ' ' + new Date().getDate();
            var hr = new Date().getHours() + ':' + new Date().getMinutes();
            if (new Date().getHours() > 12) {
                hr = hr + ' PM';
            }
            else {
                hr = hr + ' AM';
            }
            timeZone.innerHTML = 'Answered on ' + day + ', ' + new Date().getFullYear() + ' ' + hr;
            var postContent = cloneAnswer.querySelector('.posting');
            postContent.innerHTML = comment;
            var postElement = document.querySelector('.answerSection');
            postElement.appendChild(cloneAnswer);
            var countEle = document.querySelector('.answerCount');
            var count = parseInt(countEle.innerHTML, null);
            count = count + 1;
            countEle.innerHTML = count.toString() + ' Answers';
            answerElement.innerHTML = '';
            this.rteObj.value = '';
            this.rteObj.dataBind();
            this.rteObj.refresh();
        }
    };
    Forums.prototype.getMonthName = function (index) {
        var month = [];
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        return month[index];
    };
    Forums.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section", id: "rteUseCase" },
                React.createElement("div", { className: "control-wrapper" },
                    React.createElement("div", { className: 'forum' },
                        React.createElement("div", { className: 'questionSection' },
                            React.createElement("div", { className: 'raiser' },
                                React.createElement("table", null,
                                    React.createElement("tr", null,
                                        React.createElement("td", null,
                                            React.createElement("div", { className: 'questionar' }, " ")),
                                        React.createElement("td", null,
                                            React.createElement("div", { className: 'Questionarname' }, "Kimberly"))))),
                            React.createElement("div", { className: 'questionHeader' },
                                React.createElement("div", { className: 'header' }, "How to add a custom item to the toolbar of RichTextEditor"),
                                React.createElement("div", { className: 'detailsQuestion' }, "Posted on May 7, 2018 6.10 PM"),
                                React.createElement("div", { className: 'explain' }, "I want to add a custom icon, \u201Ccode-mirror\u201D to the toolbar of RichTextEditor and display the RichTextEditor content in code-mirror format."),
                                React.createElement("div", { className: 'tags' },
                                    React.createElement("div", { className: 'tagSection' },
                                        React.createElement("table", null,
                                            React.createElement("tr", null,
                                                React.createElement("td", null,
                                                    React.createElement("div", { className: 'tag' }, " HTML ")),
                                                React.createElement("td", null,
                                                    React.createElement("div", { className: 'tag' }, " JavaScript "))))),
                                    React.createElement("div", { className: 'questionLikes' },
                                        React.createElement("table", null,
                                            React.createElement("tr", null,
                                                React.createElement("td", null,
                                                    React.createElement("span", { className: 'e-icon e-like questionSide' },
                                                        React.createElement("img", { className: 'e-icon', src: './src/rich-text-editor/images/like.svg' }),
                                                        React.createElement("span", null, "Like"))),
                                                React.createElement("td", null,
                                                    React.createElement("span", { className: 'e-icon e-dislike' },
                                                        React.createElement("img", { className: 'e-icon', src: './src/rich-text-editor/images/dislike.svg' }),
                                                        React.createElement("span", null, "Dislike"))))))))),
                        React.createElement("div", { className: 'answerSection' },
                            React.createElement("div", { className: 'answerCount' }, "1 Answer"),
                            React.createElement("div", { className: 'answer' },
                                React.createElement("table", null,
                                    React.createElement("tr", null,
                                        React.createElement("td", { rowSpan: 2 },
                                            React.createElement("div", { className: 'logos' }, " ")),
                                        React.createElement("td", null,
                                            React.createElement("div", { className: 'authorname' }, "Mabel Weber"))),
                                    React.createElement("tr", null,
                                        React.createElement("td", null,
                                            React.createElement("div", { className: 'detailsAnswer' }, "Answered on May 7, 2018 6.30 PM")))),
                                React.createElement("div", { className: 'posting' },
                                    "To add a custom icon ",
                                    React.createElement("b", null, "code-mirror"),
                                    " to the toolbar, you have to use template option of the ",
                                    React.createElement("b", null, "toolbarSettings"),
                                    ". To know more about adding custom icons, refer to ",
                                    React.createElement("a", { href: 'https://ej2.syncfusion.com/home/', target: '_blank' }, "custom tool"),
                                    " sample of RichTextEditor."),
                                React.createElement("div", { className: 'likeAnswer' },
                                    React.createElement("table", null,
                                        React.createElement("tr", null,
                                            React.createElement("td", null,
                                                React.createElement("span", { className: 'e-icon e-like' },
                                                    React.createElement("img", { className: 'e-icon', src: './src/rich-text-editor/images/like.svg' }),
                                                    React.createElement("span", null, "Like"))),
                                            React.createElement("td", null,
                                                React.createElement("span", { className: 'e-icon e-dislike' },
                                                    React.createElement("img", { className: 'e-icon', src: './src/rich-text-editor/images/dislike.svg' }),
                                                    React.createElement("span", null, "Dislike")))))))),
                        React.createElement("div", { id: "createpostholder" },
                            React.createElement("form", null,
                                React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { id: "defaultRTE", ref: function (richtexteditor) { _this.rteObj = richtexteditor; } },
                                    React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_1.Toolbar, ej2_react_richtexteditor_1.Image, ej2_react_richtexteditor_1.Link, ej2_react_richtexteditor_1.HtmlEditor, ej2_react_richtexteditor_1.QuickToolbar] })),
                                React.createElement("div", { id: 'buttonSection' },
                                    React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "rteCancel", type: 'button' }, "Cancel"),
                                    React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "rteSubmit", cssClass: 'e-primary', type: 'button' }, "Reply"))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how to design forum application using rich text editor. You can type the content and click reply button to post it. ")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "RichTextEditor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format. So, RichTextEditor can easily customized to use for blog posting, forums as an editor for response."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "RichTextEditor component features are segregated into individual feature-wise modules. To use richtexteditor feature, we need to inject ",
                    React.createElement("code", null, "Toolbar, Link, Image, HtmlEditor"),
                    " modules into the services."))));
    };
    return Forums;
}(sample_base_1.SampleBase));
exports.Forums = Forums;

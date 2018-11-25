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
var sample_base_1 = require("../common/sample-base");
var ej2_react_documenteditor_1 = require("@syncfusion/ej2-react-documenteditor");
var title_bar_1 = require("./title-bar");
var tool_bar_1 = require("./tool-bar");
var status_bar_1 = require("./status-bar");
var text_properties_pane_1 = require("./text-properties-pane");
var table_properties_pane_1 = require("./table-properties-pane");
var image_properties_pane_1 = require("./image-properties-pane");
var document_loader_1 = require("./document-loader");
var header_footer_pane_1 = require("./header-footer-pane");
var table_of_contents_pane_1 = require("./table-of-contents-pane");
var properties_pane_1 = require("./properties-pane");
var template_loader_1 = require("./template-loader");
require("./default.component.css");
ej2_react_documenteditor_1.DocumentEditorComponent.Inject(ej2_react_documenteditor_1.Print, ej2_react_documenteditor_1.SfdtExport, ej2_react_documenteditor_1.WordExport, ej2_react_documenteditor_1.TextExport, ej2_react_documenteditor_1.Selection, ej2_react_documenteditor_1.Search, ej2_react_documenteditor_1.Editor, ej2_react_documenteditor_1.ImageResizer, ej2_react_documenteditor_1.EditorHistory, ej2_react_documenteditor_1.ContextMenu, ej2_react_documenteditor_1.OptionsPane, ej2_react_documenteditor_1.HyperlinkDialog, ej2_react_documenteditor_1.TableDialog, ej2_react_documenteditor_1.BookmarkDialog, ej2_react_documenteditor_1.TableOfContentsDialog, ej2_react_documenteditor_1.PageSetupDialog, ej2_react_documenteditor_1.StyleDialog, ej2_react_documenteditor_1.ListDialog, ej2_react_documenteditor_1.ParagraphDialog, ej2_react_documenteditor_1.BulletsAndNumberingDialog, ej2_react_documenteditor_1.FontDialog, ej2_react_documenteditor_1.TablePropertiesDialog, ej2_react_documenteditor_1.BordersAndShadingDialog, ej2_react_documenteditor_1.TableOptionsDialog, ej2_react_documenteditor_1.CellOptionsDialog, ej2_react_documenteditor_1.StylesDialog);
// tslint:disable:max-line-length
var HeadersAndFootersView = (function (_super) {
    __extends(HeadersAndFootersView, _super);
    function HeadersAndFootersView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newTabClick = function () {
            document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'document-editor/headers-and-footers/index.html#fabric');
        };
        _this.applyPageCountAndDocumentTitle = function () {
            //Sets Document name.
            _this.titleBar.updateDocumentTitle();
            _this.statusBar.updatePageCount();
        };
        _this.updateContainerSize = function () {
            var titleBarDiv = document.getElementById('documenteditor_titlebar');
            var statusBarDiv = document.getElementById('documenteditor_statusbar');
            var toolBarDiv = document.getElementById('documenteditor_toolbar');
            if (_this.containerPanel && titleBarDiv && statusBarDiv && toolBarDiv) {
                _this.containerPanel.style.height = (window.innerHeight -
                    (titleBarDiv.offsetHeight + toolBarDiv.offsetHeight + statusBarDiv.offsetHeight)) + 'px';
            }
        };
        _this.showPropertiesPaneOnInitial = function () {
            _this.toolbar.showPropertiesPaneOnSelection();
        };
        _this.onSelectionChange = function () {
            if (_this.documenteditor.selection) {
                _this.statusBar.startPage = _this.documenteditor.selection.startPage;
                _this.statusBar.updatePageNumber();
                _this.toolbar.showPropertiesPaneOnSelection();
            }
        };
        _this.onLoadDefault = function () {
            // tslint:disable
            var defaultDocument = { "sections": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": " " }, { "text": "adipiscing" }, { "text": " " }, { "text": "elit" }, { "text": ", " }, { "text": "sed" }, { "text": " do " }, { "text": "eiusmod" }, { "text": " " }, { "text": "tempor" }, { "text": " " }, { "text": "incididunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore magna " }, { "text": "aliqua" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minim " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " " }, { "text": "nostrud" }, { "text": " exercitation " }, { "text": "ullamco" }, { "text": " " }, { "text": "laboris" }, { "text": " nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquip" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodo" }, { "text": " " }, { "text": "consequat" }, { "text": ". Duis " }, { "text": "aute" }, { "text": " " }, { "text": "irure" }, { "text": " dolor in " }, { "text": "reprehenderit" }, { "text": " in " }, { "text": "voluptate" }, { "text": " " }, { "text": "velit" }, { "text": " " }, { "text": "esse" }, { "text": " " }, { "text": "cillum" }, { "text": " dolore " }, { "text": "eu" }, { "text": " " }, { "text": "fugiat" }, { "text": " " }, { "text": "nulla" }, { "text": " " }, { "text": "pariatur" }, { "text": ". " }, { "text": "Excepteur" }, { "text": " " }, { "text": "sint" }, { "text": " " }, { "text": "occaecat" }, { "text": " " }, { "text": "cupidatat" }, { "text": " non " }, { "text": "proident" }, { "text": ", " }, { "text": "sunt" }, { "text": " in culpa qui " }, { "text": "officia" }, { "text": " " }, { "text": "deserunt" }, { "text": " " }, { "text": "mollit" }, { "text": " " }, { "text": "anim" }, { "text": " id " }, { "text": "est" }, { "text": " " }, { "text": "laborum" }, { "text": "." }] }, { "paragraphFormat": { "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "styleName": "Normal" }, "inlines": [{ "text": "\f" }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "characterFormat": { "fontFamily": "Comic Sans MS" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "amet", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ", ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "consectetur", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "adipiscing", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "elit", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ", ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "sed", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " do ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "eiusmod", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "tempor", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "incididunt", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "ut", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "labore", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " et dolore magna ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "aliqua", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ". Ut ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "enim", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ad minim ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "veniam", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ", ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "quis", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "nostrud", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " exercitation ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "ullamco", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "laboris", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " nisi ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "ut", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "aliquip", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ex ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "ea", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "commodo", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "consequat", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ". Duis ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "aute", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "irure", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " dolor in ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "reprehenderit", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " in ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "voluptate", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "velit", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "esse", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "cillum", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " dolore ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "eu", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "fugiat", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "nulla", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "pariatur", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ". ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "Excepteur", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "sint", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "occaecat", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "cupidatat", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " non ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "proident", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ", ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "sunt", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " in culpa qui ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "officia", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "deserunt", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "mollit", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "anim", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " id ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "est", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "laborum", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ".", "characterFormat": { "fontFamily": "Comic Sans MS" } }] }, { "paragraphFormat": { "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "styleName": "Normal" }, "inlines": [{ "text": "\f" }] }, { "characterFormat": { "fontFamily": "Book Antiqua" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "amet", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ", ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "consectetur", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "adipiscing", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "elit", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ", ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "sed", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " do ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "eiusmod", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "tempor", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "incididunt", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "ut", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "labore", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " et dolore magna ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "aliqua", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ". Ut ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "enim", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ad minim ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "veniam", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ", ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "quis", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "nostrud", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " exercitation ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "ullamco", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "laboris", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " nisi ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "ut", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "aliquip", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ex ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "ea", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "commodo", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "consequat", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ". Duis ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "aute", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "irure", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " dolor in ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "reprehenderit", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " in ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "voluptate", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "velit", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "esse", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "cillum", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " dolore ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "eu", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "fugiat", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "nulla", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "pariatur", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ". ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "Excepteur", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "sint", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "occaecat", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "cupidatat", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " non ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "proident", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ", ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "sunt", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " in culpa qui ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "officia", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "deserunt", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "mollit", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "anim", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " id ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "est", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "laborum", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ".", "characterFormat": { "fontFamily": "Book Antiqua" } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }], "headersFooters": { "header": { "blocks": [{ "characterFormat": { "fontSize": 18.0, "fontFamily": "Book Antiqua" }, "paragraphFormat": { "textAlignment": "Right", "styleName": "Header" }, "inlines": [{ "text": "This is odd page header.", "characterFormat": { "fontSize": 18.0, "fontFamily": "Book Antiqua" } }] }] }, "footer": { "blocks": [{ "characterFormat": { "fontFamily": "Book Antiqua" }, "paragraphFormat": { "styleName": "Footer", "tabs": [{ "tabJustification": "Left", "position": 0.0, "tabLeader": "None", "deletePosition": 234.0 }] }, "inlines": [{ "text": "This is odd page footer", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "\t", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "Page ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGE   \\* MERGEFORMAT ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "fieldType": 2 }, { "text": "1", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "fieldType": 1 }] }] }, "evenHeader": { "blocks": [{ "characterFormat": { "fontSize": 18.0, "fontFamily": "Comic Sans MS" }, "paragraphFormat": { "textAlignment": "Right", "styleName": "Header" }, "inlines": [{ "text": "This is even page header", "characterFormat": { "fontSize": 18.0, "fontFamily": "Comic Sans MS" } }] }] }, "evenFooter": { "blocks": [{ "characterFormat": { "fontFamily": "Comic Sans MS" }, "paragraphFormat": { "styleName": "Footer", "tabs": [{ "tabJustification": "Left", "position": 0.0, "tabLeader": "None", "deletePosition": 234.0 }] }, "inlines": [{ "text": "This is even page footer", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "\t", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "Page ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGE   \\* MERGEFORMAT ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "fieldType": 2 }, { "text": "1", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "fieldType": 1 }] }] }, "firstPageHeader": { "blocks": [{ "characterFormat": { "fontSize": 20.0 }, "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "This is first page header", "characterFormat": { "fontSize": 20.0 } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }] }, "firstPageFooter": { "blocks": [{ "paragraphFormat": { "styleName": "Footer", "tabs": [{ "tabJustification": "Left", "position": 0.0, "tabLeader": "None", "deletePosition": 234.0 }] }, "inlines": [{ "text": "This is first page footer" }, { "text": "\t" }, { "text": "Page " }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGE   \\* MERGEFORMAT " }, { "fieldType": 2 }, { "text": "1" }, { "fieldType": 1 }] }] } }, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": true, "differentOddAndEvenPages": true } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal", "paragraphFormat": { "lineSpacing": 1.0666667222976685, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Paragraph", "name": "Header", "basedOn": "Normal", "next": "Normal", "link": "Header Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 460.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Header Char", "basedOn": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Footer", "basedOn": "Normal", "next": "Normal", "link": "Footer Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 460.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Footer Char", "basedOn": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Title", "basedOn": "Normal", "next": "Normal", "link": "Title Char", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" }, "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Title Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" } }] };
            // tslint:enable        
            var waitingPopUp = document.getElementById('waiting-popup');
            var popupOverlay = document.getElementById('popup-overlay');
            waitingPopUp.style.display = 'block';
            _this.documenteditor.open(JSON.stringify(defaultDocument));
            _this.documenteditor.documentName = 'Headers and Footers';
            waitingPopUp.style.display = 'none';
            popupOverlay.style.display = 'none';
            _this.documenteditor.focusIn();
            _this.fontProperties.updateStyles();
        };
        _this.onWindowResize = function () {
            _this.updateContainerSize();
        };
        return _this;
    }
    HeadersAndFootersView.prototype.rendereComplete = function () {
        var _this = this;
        this.containerPanel = document.getElementById('documenteditor_container_body');
        this.updateContainerSize();
        this.documenteditor.pageOutline = '#E0E0E0';
        this.documenteditor.acceptTab = true;
        this.documenteditor.resize();
        var tocProperties = new table_of_contents_pane_1.TocProperties(this.documenteditor);
        var headerFooter = new header_footer_pane_1.HeaderFooterProperties(this.documenteditor);
        this.fontProperties = new text_properties_pane_1.TextProperties(this.documenteditor, 'textProperty');
        var imageProperties = new image_properties_pane_1.ImageProperties(this.documenteditor);
        var tableProperties = new table_properties_pane_1.TableProperties(this.documenteditor, imageProperties, this.fontProperties);
        // tslint:disable-next-line:max-line-length
        var propertiesPane = new properties_pane_1.PropertiesPane(this.documenteditor, this.fontProperties, tableProperties, headerFooter, imageProperties, tocProperties);
        //Initializes document editor toolbar and events.
        // tslint:disable-next-line:max-line-length
        this.toolbar = new tool_bar_1.ToolBar(this.documenteditor, document.getElementById('documenteditor_toolbar'), propertiesPane);
        this.toolbar.documentLoader = new document_loader_1.DocumentLoader(this.documenteditor);
        this.toolbar.templateLoader = new template_loader_1.TemplateLoader();
        if (!this.toolbar.isReadOnly) {
            this.toolbar.updateUndoRedoBtn();
        }
        this.titleBar = new title_bar_1.TitleBar(document.getElementById('documenteditor_titlebar'), this.documenteditor, true);
        this.statusBar = new status_bar_1.StatusBar(document.getElementById('documenteditor_statusbar'), this.documenteditor);
        this.onLoadDefault();
        this.documenteditor.selectionChange = function () {
            setTimeout(function () { _this.onSelectionChange(); }, 20);
        };
        this.documenteditor.documentChange = function () {
            _this.toolbar.updateUndoRedoBtn();
            _this.toolbar.isContentChange = false;
            _this.applyPageCountAndDocumentTitle();
            _this.fontProperties.updateStyles();
        };
        this.documenteditor.contentChange = function () {
            _this.toolbar.isContentChange = true;
            if (!_this.toolbar.isReadOnly) {
                _this.toolbar.updateUndoRedoBtn();
            }
            //Set page count
            _this.statusBar.updatePageCount();
        };
        window.addEventListener('resize', function () { _this.onWindowResize(); });
        if (!this.toolbar.isReadOnly) {
            this.toolbar.updateUndoRedoBtn();
        }
        this.updateContainerSize();
        this.documenteditor.resize();
        this.applyPageCountAndDocumentTitle();
        this.showPropertiesPaneOnInitial();
        this.documenteditor.requestNavigate = function (args) {
            if (args.linkType !== 'Bookmark') {
                var link = args.navigationLink;
                if (args.localReference.length > 0) {
                    link += '#' + args.localReference;
                }
                window.open(link);
                args.isHandled = true;
            }
        };
        this.documenteditor.zoomFactorChange = function () {
            _this.statusBar.updateZoomContent();
        };
        this.documenteditor.viewChange = function (e) {
            _this.statusBar.updatePageNumberOnViewChange(e);
        };
    };
    HeadersAndFootersView.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "col-lg-12 col-sm-12 col-md-12 center" }, "Click the button to view the sample"),
                React.createElement("div", { className: "col-lg-12 col-sm-12 col-md-12 center" },
                    React.createElement("a", { className: "e-btn", id: "newTab", onClick: this.newTabClick.bind(this), target: "_blank" }, "Open in new tab")),
                React.createElement("div", { id: "wrapper" },
                    React.createElement("title", null, "Essential JS 2 for React - DocumentEditor"),
                    React.createElement("div", { id: "panel" },
                        React.createElement("div", { id: 'documenteditor_titlebar' }),
                        React.createElement("div", { id: 'documenteditor_toolbar' }),
                        React.createElement("div", { id: "documenteditor_container_body", style: { 'display': 'flex', 'position': 'relative' } },
                            React.createElement(ej2_react_documenteditor_1.DocumentEditorComponent, { id: "container", ref: function (scope) { _this.documenteditor = scope; }, style: { 'width': '100%', 'height': '100%' }, isReadOnly: false, enablePrint: true, enableSelection: true, enableEditor: true, enableEditorHistory: true, enableContextMenu: true, enableSearch: true, enableOptionsPane: true, enableBookmarkDialog: true, enableBordersAndShadingDialog: true, enableFontDialog: true, enableTableDialog: true, enableParagraphDialog: true, enableHyperlinkDialog: true, enableImageResizer: true, enableListDialog: true, enablePageSetupDialog: true, enableSfdtExport: true, enableStyleDialog: true, enableTableOfContentsDialog: true, enableTableOptionsDialog: true, enableTablePropertiesDialog: true, enableTextExport: true, enableWordExport: true })),
                        React.createElement("div", { id: "documenteditor_statusbar" })),
                    React.createElement("div", { className: "overlay", id: "popup-overlay", style: { display: 'block;' } }),
                    React.createElement("div", { id: 'waiting-popup' },
                        React.createElement("svg", { className: "circular", height: "40", width: "40" },
                            React.createElement("circle", { className: "circle-path", cx: "25", cy: "25", r: "20", fill: "none", "stroke-width": "6", "stroke-miterlimit": "10" }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This example demonstrates header and footer support in document editor. Different headers and footers can be added to the first page, odd pages, and even pages.")),
            React.createElement("div", { id: "description" },
                React.createElement("div", null,
                    React.createElement("p", null, "Header and footer features in document editor."),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Header and footer for the first page of the document."),
                        React.createElement("li", null, "Header and footer for even pages of the document."),
                        React.createElement("li", null, "Header and footer for odd pages of the document.")),
                    React.createElement("p", { style: { 'display': 'block' } },
                        " More information about the document editor features can be found in this ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/document-editor/" }, "documentation section.")))),
            React.createElement("script", null, window.onbeforeunload = function () {
                return 'Want to save your changes?';
            })));
    };
    return HeadersAndFootersView;
}(sample_base_1.SampleBase));
exports.HeadersAndFootersView = HeadersAndFootersView;

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
var ParagraphFormatView = (function (_super) {
    __extends(ParagraphFormatView, _super);
    function ParagraphFormatView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newTabClick = function () {
            document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'document-editor/paragraph-formatting/index.html#fabric');
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
            var defaultDocument = { "sections": [{ "blocks": [{ "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "afterSpacing": 36.0, "styleName": "Normal" }, "inlines": [{ "text": "List of text alignment options", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Left-aligned", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ", "characterFormat": { "fontFamily": "Calibri" } }, { "text": "consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "beforeSpacing": 18.0, "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Centered", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "beforeSpacing": 18.0, "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "Right-", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": "aligned", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a", "characterFormat": { "fontFamily": "Calibri" } }, { "text": "liquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "beforeSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Justified", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "characterFormat": { "fontFamily": "Calibri" } }, { "text": ".", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "styleName": "Normal" }, "inlines": [{ "text": " ", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "afterSpacing": 36.0, "styleName": "Normal" }, "inlines": [{ "text": "List of indentation options", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "leftIndent": 36.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Left indent is 48 pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "leftIndent": 36.0, "afterSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo", "characterFormat": { "fontFamily": "Calibri" } }, { "text": " consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "rightIndent": 36.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Right", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " indent is 48 pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "rightIndent": 36.0, "afterSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "firstLineIndent": 36.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "First line ", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": "indent is 48 pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "firstLineIndent": 36.0, "afterSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "leftIndent": 36.0, "firstLineIndent": -36.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Hanging", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " indent is 48 pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "leftIndent": 36.0, "firstLineIndent": -36.0, "afterSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "styleName": "Normal" }, "inlines": [{ "text": " ", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "afterSpacing": 36.0, "styleName": "Normal" }, "inlines": [{ "text": "List of line spacing options", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "lineSpacing": 2.0, "lineSpacingType": "Multiple", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Double line spacing", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "lineSpacing": 2.0, "lineSpacingType": "Multiple", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali", "characterFormat": { "fontFamily": "Calibri" } }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }, { "text": "quip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "lineSpacing": 18.0, "lineSpacingType": "AtLeast", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Line spacing", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " is", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " at least", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " ", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": "24", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "lineSpacing": 18.0, "lineSpacingType": "AtLeast", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "lineSpacing": 15.0, "lineSpacingType": "Exactly", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Line spacing", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " is ", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": "exactly 20", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "lineSpacing": 15.0, "lineSpacingType": "Exactly", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "leftIndent": 36.0, "afterSpacing": 18.0, "lineSpacing": 15.0, "lineSpacingType": "Exactly", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": " " }] }, { "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "List of paragraph", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }, { "text": " ", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }, { "text": "spacing options", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "beforeSpacing": 18.0, "afterSpacing": 12.0, "styleName": "Normal" }, "inlines": [{ "text": "Spacing before the paragraph is 24 pixels and after the paragraph is 16 pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "beforeSpacing": 18.0, "afterSpacing": 12.0, "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "No spacing before and after the paragraph", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal", "characterFormat": { "fontSize": 12.0, "fontFamily": "Times New Roman" }, "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0 } }] };
            // tslint:enable        
            var waitingPopUp = document.getElementById('waiting-popup');
            var popupOverlay = document.getElementById('popup-overlay');
            waitingPopUp.style.display = 'block';
            _this.documenteditor.open(JSON.stringify(defaultDocument));
            _this.documenteditor.documentName = 'Paragraph Formatting';
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
    ParagraphFormatView.prototype.rendereComplete = function () {
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
    ParagraphFormatView.prototype.render = function () {
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
                React.createElement("p", null, "This example demonstrates paragraph formatting options in document editor such as indentation, spacing, and text alignment.")),
            React.createElement("div", { id: "description" },
                React.createElement("div", null,
                    React.createElement("p", null, "In this example, paragraph formatting features in the document editor can be found."),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Indentation: Left, right, first line, and hanging."),
                        React.createElement("li", null, "Text alignment: Left, right, center, and justified."),
                        React.createElement("li", null, "Paragraph spacing\u2013before and after the paragraph."),
                        React.createElement("li", null, "Line spacing."),
                        React.createElement("li", null, "List format.")),
                    React.createElement("p", { style: { 'display': 'block' } },
                        " More information about the document editor features can be found in this ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/document-editor/" }, "documentation section.")))),
            React.createElement("script", null, window.onbeforeunload = function () {
                return 'Want to save your changes?';
            })));
    };
    return ParagraphFormatView;
}(sample_base_1.SampleBase));
exports.ParagraphFormatView = ParagraphFormatView;

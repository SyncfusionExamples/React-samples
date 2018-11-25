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
var StylesView = (function (_super) {
    __extends(StylesView, _super);
    function StylesView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newTabClick = function () {
            document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'document-editor/styles/index.html#fabric');
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
            var defaultDocument = { "sections": [{ "blocks": [{ "paragraphFormat": { "styleName": "Title" }, "inlines": [{ "text": "Styles" }] }, { "paragraphFormat": { "styleName": "Subtitle" }, "inlines": [{ "text": "A" }, { "text": " style is a collection of formatting instructions" }, { "text": " " }, { "text": "to provide a consistent look of the document" }, { "text": "." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Quote" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog" }, { "text": " [Quote]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog " }, { "text": "[" }, { "text": "Heading 1" }, { "text": "]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog " }, { "text": "[" }, { "text": "Heading 2" }, { "text": "]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Heading 3" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog" }, { "text": " " }, { "text": "[" }, { "text": "Heading 3" }, { "text": "]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Heading 4" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog " }, { "text": "[Heading 4" }, { "text": "]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Heading 5" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog " }, { "text": "[" }, { "text": "Heading 5" }, { "text": "]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 12.0, "afterSpacing": 0.0, "outlineLevel": "Level1" } }, { "type": "Paragraph", "name": "Heading 2", "basedOn": "Normal", "next": "Normal", "link": "Heading 2 Char", "characterFormat": { "fontSize": 13.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "afterSpacing": 0.0, "outlineLevel": "Level2" } }, { "type": "Paragraph", "name": "Heading 3", "basedOn": "Normal", "next": "Normal", "link": "Heading 3 Char", "characterFormat": { "fontSize": 12.0, "fontFamily": "Calibri Light", "fontColor": "#1F3763FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "afterSpacing": 0.0, "outlineLevel": "Level3" } }, { "type": "Paragraph", "name": "Heading 4", "basedOn": "Normal", "next": "Normal", "link": "Heading 4 Char", "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "afterSpacing": 0.0, "outlineLevel": "Level4" } }, { "type": "Paragraph", "name": "Heading 5", "basedOn": "Normal", "next": "Normal", "link": "Heading 5 Char", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "afterSpacing": 0.0, "outlineLevel": "Level5" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Paragraph", "name": "Quote", "basedOn": "Normal", "next": "Normal", "link": "Quote Char", "characterFormat": { "italic": true, "fontColor": "#404040FF" }, "paragraphFormat": { "leftIndent": 43.200000762939453, "rightIndent": 43.200000762939453, "beforeSpacing": 10.0, "textAlignment": "Center" } }, { "type": "Character", "name": "Quote Char", "basedOn": "Default Paragraph Font", "characterFormat": { "italic": true, "fontColor": "#404040FF" } }, { "type": "Paragraph", "name": "Title", "basedOn": "Normal", "next": "Normal", "link": "Title Char", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" }, "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Title Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Character", "name": "Heading 2 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 13.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Character", "name": "Heading 3 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 12.0, "fontFamily": "Calibri Light", "fontColor": "#1F3763FF" } }, { "type": "Character", "name": "Heading 4 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Character", "name": "Heading 5 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Paragraph", "name": "Intense Quote", "basedOn": "Normal", "next": "Normal", "link": "Intense Quote Char", "characterFormat": { "italic": true, "fontColor": "#4472C4FF" }, "paragraphFormat": { "leftIndent": 43.200000762939453, "rightIndent": 43.200000762939453, "beforeSpacing": 18.0, "afterSpacing": 18.0, "textAlignment": "Center" } }, { "type": "Character", "name": "Intense Quote Char", "basedOn": "Default Paragraph Font", "characterFormat": { "italic": true, "fontColor": "#4472C4FF" } }, { "type": "Paragraph", "name": "Subtitle", "basedOn": "Normal", "next": "Normal", "link": "Subtitle Char", "characterFormat": { "fontColor": "#5A5A5AFF" }, "paragraphFormat": { "listFormat": { "listLevelNumber": 1 } } }, { "type": "Character", "name": "Subtitle Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#5A5A5AFF" } }] };
            // tslint:enable        
            var waitingPopUp = document.getElementById('waiting-popup');
            var popupOverlay = document.getElementById('popup-overlay');
            waitingPopUp.style.display = 'block';
            _this.documenteditor.open(JSON.stringify(defaultDocument));
            _this.documenteditor.documentName = 'Styles';
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
    StylesView.prototype.rendereComplete = function () {
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
    StylesView.prototype.render = function () {
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
                React.createElement("p", null, "This example demonstrates character and paragraph formatting using styles in the document editor. Both built-in styles (for example, heading styles) and custom styles can be added.")),
            React.createElement("div", { id: "description" },
                React.createElement("div", null,
                    React.createElement("p", null, "In this example, you can use, add, modify, or delete built-in and custom styles."),
                    React.createElement("p", { style: { 'display': 'block' } },
                        " More information about the document editor features can be found in this ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/document-editor/" }, "documentation section.")))),
            React.createElement("script", null, window.onbeforeunload = function () {
                return 'Want to save your changes?';
            })));
    };
    return StylesView;
}(sample_base_1.SampleBase));
exports.StylesView = StylesView;

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
var CharacterFormatView = (function (_super) {
    __extends(CharacterFormatView, _super);
    function CharacterFormatView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newTabClick = function () {
            document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'document-editor/character-formatting/index.html#fabric');
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
            var defaultDocument = { "sections": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "List of text formatting options", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva" } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Bold", "characterFormat": { "bold": true } }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "fontColor": "#00B0F0FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "C", "characterFormat": { "fontColor": "#CC99FFFF" } }, { "text": "o", "characterFormat": { "fontColor": "#333333FF" } }, { "text": "l", "characterFormat": { "fontColor": "#FF6600FF" } }, { "text": "o", "characterFormat": { "fontColor": "#3366FFFF" } }, { "text": "r", "characterFormat": { "fontColor": "#FF9900FF" } }, { "text": "e", "characterFormat": { "fontColor": "#FF6600FF" } }, { "text": "d", "characterFormat": { "fontColor": "#808080FF" } }] }, { "characterFormat": { "fontColor": "#00B0F0FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Double", "characterFormat": { "strikethrough": "DoubleStrike" } }, { "text": " ", "characterFormat": { "strikethrough": "DoubleStrike" } }, { "text": "Strike", "characterFormat": { "strikethrough": "DoubleStrike" } }] }, { "characterFormat": { "strikethrough": "DoubleStrike" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "fontColor": "#ED7D31FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Highlighted", "characterFormat": { "highlightColor": "Turquoise", "fontColor": "#ED7D31FF" } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Italicized", "characterFormat": { "italic": true } }] }, { "characterFormat": { "italic": true }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Strikeout ", "characterFormat": { "strikethrough": "SingleStrike" } }] }, { "characterFormat": { "strikethrough": "SingleStrike" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "strikethrough": "SingleStrike" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Some" }, { "text": "Sub", "characterFormat": { "baselineAlignment": "Subscript" } }, { "text": "s", "characterFormat": { "baselineAlignment": "Subscript" } }, { "text": "cript", "characterFormat": { "baselineAlignment": "Subscript" } }, { "text": " ", "characterFormat": { "baselineAlignment": "Subscript" } }] }, { "characterFormat": { "baselineAlignment": "Subscript" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "baselineAlignment": "Subscript" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Some" }, { "text": "Super", "characterFormat": { "baselineAlignment": "Superscript" } }, { "text": "s", "characterFormat": { "baselineAlignment": "Superscript" } }, { "text": "cript", "characterFormat": { "baselineAlignment": "Superscript" } }, { "text": " ", "characterFormat": { "baselineAlignment": "Superscript" } }] }, { "characterFormat": { "baselineAlignment": "Superscript" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "underline": "Single" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Underline", "characterFormat": { "underline": "Single" } }, { "text": "d", "characterFormat": { "underline": "Single" } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": " " }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Text with different fonts and sizes", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva" } }] }, { "characterFormat": { "underline": "Double", "fontSize": 11.0, "fontFamily": "Book Antiqua", "fontColor": "#7028E8FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Book Antiqua", "characterFormat": { "fontSize": 11.0, "fontFamily": "Book Antiqua", "fontColor": "#7028E8FF" } }, { "text": "]", "characterFormat": { "fontSize": 11.0, "fontFamily": "Book Antiqua", "fontColor": "#7028E8FF" } }] }, { "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog ", "characterFormat": { "fontFamily": "Bitstream Vera Sans", "fontColor": "#F1C084FF" } }, { "text": "[Bitstream Vera Sans]", "characterFormat": { "fontFamily": "Bitstream Vera Sans", "fontColor": "#F1C084FF" } }] }, { "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog ", "characterFormat": { "fontSize": 13.0, "fontFamily": "Comic Sans MS", "fontColor": "#BD5DCDFF" } }, { "text": "[Comic Sans MS]", "characterFormat": { "fontSize": 13.0, "fontFamily": "Comic Sans MS", "fontColor": "#BD5DCDFF" } }] }, { "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog ", "characterFormat": { "fontSize": 14.0, "fontFamily": "Microsoft Sans Serif", "fontColor": "#4D72EEFF" } }, { "text": "[Microsoft Sans Serif]", "characterFormat": { "fontSize": 14.0, "fontFamily": "Microsoft Sans Serif", "fontColor": "#4D72EEFF" } }] }, { "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog", "characterFormat": { "fontSize": 15.0, "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": " [", "characterFormat": { "fontSize": 15.0, "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": "Batang", "characterFormat": { "fontSize": 15.0, "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": "]", "characterFormat": { "fontSize": 15.0, "fontFamily": "Batang", "fontColor": "#335388FF" } }] }, { "characterFormat": { "fontSize": 16.0, "fontFamily": "Arial", "fontColor": "#31B463FF" }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog ", "characterFormat": { "fontSize": 16.0, "fontFamily": "Arial", "fontColor": "#31B463FF" } }, { "text": "[Arial]", "characterFormat": { "fontSize": 16.0, "fontFamily": "Arial", "fontColor": "#31B463FF" } }] }, { "characterFormat": { "fontSize": 16.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Book Antiqua]", "characterFormat": { "fontSize": 16.0, "fontFamily": "Book Antiqua", "fontColor": "#7028E8FF" } }] }, { "characterFormat": { "fontSize": 15.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Bitstream Vera Sans]", "characterFormat": { "fontSize": 15.0, "fontFamily": "Bitstream Vera Sans", "fontColor": "#F1C084FF" } }] }, { "characterFormat": { "fontSize": 14.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Comic Sans MS]", "characterFormat": { "fontSize": 14.0, "fontFamily": "Comic Sans MS", "fontColor": "#BD5DCDFF" } }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "characterFormat": { "fontSize": 13.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Microsoft Sans Serif]", "characterFormat": { "fontSize": 13.0, "fontFamily": "Microsoft Sans Serif", "fontColor": "#4D72EEFF" } }] }, { "characterFormat": { "fontSize": 11.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog", "characterFormat": { "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": " [", "characterFormat": { "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": "Batang", "characterFormat": { "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": "]", "characterFormat": { "fontFamily": "Batang", "fontColor": "#335388FF" } }] }, { "characterFormat": { "fontSize": 10.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Arial]", "characterFormat": { "fontSize": 11.0, "fontFamily": "Arial", "fontColor": "#31B463FF" } }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontFamily": "Times New Roman" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal", "characterFormat": { "fontSize": 12.0 } }, { "type": "Character", "name": "Default Paragraph Font" }] };
            // tslint:enable        
            var waitingPopUp = document.getElementById('waiting-popup');
            var popupOverlay = document.getElementById('popup-overlay');
            waitingPopUp.style.display = 'block';
            _this.documenteditor.open(JSON.stringify(defaultDocument));
            _this.documenteditor.documentName = 'Character Formatting';
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
    CharacterFormatView.prototype.rendereComplete = function () {
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
    CharacterFormatView.prototype.render = function () {
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
                React.createElement("p", null, "This example demonstrates the character formatting options in DocumentEditor such as bold, italic, underline, strikethrough, subscript, superscript, font, font size, font color, and highlight color.")),
            React.createElement("div", { id: "description" },
                React.createElement("div", null,
                    React.createElement("p", null, "In this example, you can find character formatting features in the document editor."),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Bold and Italic."),
                        React.createElement("li", null, "Underline."),
                        React.createElement("li", null, "Single strike and double strikes."),
                        React.createElement("li", null, "Superscript and subscript."),
                        React.createElement("li", null, "Font and highlight colors."),
                        React.createElement("li", null, "Different fonts and sizes.")),
                    React.createElement("p", { style: { 'display': 'block' } },
                        " More information about the document editor features can be found in this ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/document-editor/" }, "documentation section.")))),
            React.createElement("script", null, window.onbeforeunload = function () {
                return 'Want to save your changes?';
            })));
    };
    return CharacterFormatView;
}(sample_base_1.SampleBase));
exports.CharacterFormatView = CharacterFormatView;

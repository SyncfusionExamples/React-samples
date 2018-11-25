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
var SectionFormatView = (function (_super) {
    __extends(SectionFormatView, _super);
    function SectionFormatView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newTabClick = function () {
            document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'document-editor/section-formatting/index.html#fabric');
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
            var defaultDocument = { "sections": [{ "blocks": [{ "paragraphFormat": { "styleName": "Title" }, "inlines": [{ "text": "First Section" }] }, { "paragraphFormat": { "styleName": "Subtitle" }, "inlines": [{ "text": "Size " }, { "text": "816x1056" }, { "text": "px" }, { "text": " (Portrait)" }] }, { "paragraphFormat": { "styleName": "Subtitle" }, "inlines": [{ "text": "Margin 96px (" }, { "text": "top and bottom) " }, { "text": "72px (left and right)" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": " " }, { "text": "adipiscing" }, { "text": " " }, { "text": "elit" }, { "text": ", " }, { "text": "sed" }, { "text": " do " }, { "text": "eiusmod" }, { "text": " " }, { "text": "tempor" }, { "text": " " }, { "text": "incididunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore magna " }, { "text": "aliqua" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minim " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " " }, { "text": "nostrud" }, { "text": " exercitation " }, { "text": "ullamco" }, { "text": " " }, { "text": "laboris" }, { "text": " nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquip" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodo" }, { "text": " " }, { "text": "consequat" }, { "text": ". Duis " }, { "text": "aute" }, { "text": " " }, { "text": "irure" }, { "text": " dolor in " }, { "text": "reprehenderit" }, { "text": " in " }, { "text": "voluptate" }, { "text": " " }, { "text": "velit" }, { "text": " " }, { "text": "esse" }, { "text": " " }, { "text": "cillum" }, { "text": " dolore " }, { "text": "eu" }, { "text": " " }, { "text": "fugiat" }, { "text": " " }, { "text": "nulla" }, { "text": " " }, { "text": "pariatur" }, { "text": ". " }, { "text": "Excepteur" }, { "text": " " }, { "text": "sint" }, { "text": " " }, { "text": "occaecat" }, { "text": " " }, { "text": "cupidatat" }, { "text": " non " }, { "text": "proident" }, { "text": ", " }, { "text": "sunt" }, { "text": " in culpa qui " }, { "text": "officia" }, { "text": " " }, { "text": "deserunt" }, { "text": " " }, { "text": "mollit" }, { "text": " " }, { "text": "anim" }, { "text": " id " }, { "text": "est" }, { "text": " " }, { "text": "laborum" }, { "text": "." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Sed" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "perspiciatis" }, { "text": " " }, { "text": "unde" }, { "text": " " }, { "text": "omnis" }, { "text": " " }, { "text": "iste" }, { "text": " " }, { "text": "natus" }, { "text": " error sit " }, { "text": "voluptatem" }, { "text": " " }, { "text": "accusantium" }, { "text": " " }, { "text": "doloremque" }, { "text": " " }, { "text": "laudantium" }, { "text": ", " }, { "text": "totam" }, { "text": " rem " }, { "text": "aperiam" }, { "text": ", " }, { "text": "eaque" }, { "text": " " }, { "text": "ipsa" }, { "text": " " }, { "text": "quae" }, { "text": " ab " }, { "text": "illo" }, { "text": " " }, { "text": "inventore" }, { "text": " " }, { "text": "veritatis" }, { "text": " et quasi " }, { "text": "architecto" }, { "text": " " }, { "text": "beatae" }, { "text": " vitae dicta " }, { "text": "sunt" }, { "text": " " }, { "text": "explicabo" }, { "text": ". Nemo " }, { "text": "enim" }, { "text": " " }, { "text": "ipsam" }, { "text": " " }, { "text": "voluptatem" }, { "text": " " }, { "text": "quia" }, { "text": " " }, { "text": "voluptas" }, { "text": " sit " }, { "text": "aspernatur" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "odit" }, { "text": " " }, { "text": "aut" }, { "text": " fugit, " }, { "text": "sed" }, { "text": " " }, { "text": "quia" }, { "text": " " }, { "text": "consequuntur" }, { "text": " " }, { "text": "magni" }, { "text": " " }, { "text": "dolores" }, { "text": " " }, { "text": "eos" }, { "text": " qui " }, { "text": "ratione" }, { "text": " " }, { "text": "voluptatem" }, { "text": " " }, { "text": "sequi" }, { "text": " " }, { "text": "nesciunt" }, { "text": ". " }, { "text": "Neque" }, { "text": " " }, { "text": "porro" }, { "text": " " }, { "text": "quisquam" }, { "text": " " }, { "text": "est" }, { "text": ", qui " }, { "text": "dolorem" }, { "text": " ipsum " }, { "text": "quia" }, { "text": " dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": ", " }, { "text": "adipisci" }, { "text": " " }, { "text": "velit" }, { "text": ", " }, { "text": "sed" }, { "text": " " }, { "text": "quia" }, { "text": " non " }, { "text": "numquam" }, { "text": " " }, { "text": "eius" }, { "text": " " }, { "text": "modi" }, { "text": " " }, { "text": "tempora" }, { "text": " " }, { "text": "incidunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore " }, { "text": "magnam" }, { "text": " " }, { "text": "aliquam" }, { "text": " " }, { "text": "quaerat" }, { "text": " " }, { "text": "voluptatem" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minima " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " nostrum " }, { "text": "exercitationem" }, { "text": " " }, { "text": "ullam" }, { "text": " corporis " }, { "text": "suscipit" }, { "text": " " }, { "text": "laboriosam" }, { "text": ", nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquid" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodi" }, { "text": " " }, { "text": "consequatur" }, { "text": "? " }, { "text": "Quis" }, { "text": " " }, { "text": "autem" }, { "text": " " }, { "text": "vel" }, { "text": " " }, { "text": "eum" }, { "text": " " }, { "text": "iure" }, { "text": " " }, { "text": "reprehenderit" }, { "text": " qui in " }, { "text": "ea" }, { "text": " " }, { "text": "voluptate" }, { "text": " " }, { "text": "velit" }, { "text": " " }, { "text": "esse" }, { "text": " " }, { "text": "quam" }, { "text": " nihil " }, { "text": "molestiae" }, { "text": " " }, { "text": "consequatur" }, { "text": ", " }, { "text": "vel" }, { "text": " " }, { "text": "illum" }, { "text": " qui " }, { "text": "dolorem" }, { "text": " " }, { "text": "eum" }, { "text": " " }, { "text": "fugiat" }, { "text": " quo " }, { "text": "voluptas" }, { "text": " " }, { "text": "nulla" }, { "text": " " }, { "text": "pariatur" }, { "text": "?" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "At " }, { "text": "vero" }, { "text": " " }, { "text": "eos" }, { "text": " et " }, { "text": "accusamus" }, { "text": " et " }, { "text": "iusto" }, { "text": " " }, { "text": "odio" }, { "text": " " }, { "text": "dignissimos" }, { "text": " " }, { "text": "ducimus" }, { "text": " qui " }, { "text": "blanditiis" }, { "text": " " }, { "text": "praesentium" }, { "text": " " }, { "text": "voluptatum" }, { "text": " " }, { "text": "deleniti" }, { "text": " " }, { "text": "atque" }, { "text": " " }, { "text": "corrupti" }, { "text": " quos " }, { "text": "dolores" }, { "text": " et " }, { "text": "quas" }, { "text": " " }, { "text": "molestias" }, { "text": " " }, { "text": "excepturi" }, { "text": " " }, { "text": "sint" }, { "text": " " }, { "text": "occaecati" }, { "text": " " }, { "text": "cupiditate" }, { "text": " " }, { "text": "non provident" }, { "text": ", " }, { "text": "similique" }, { "text": " " }, { "text": "sunt" }, { "text": " in culpa qui " }, { "text": "officia" }, { "text": " " }, { "text": "deserunt" }, { "text": " " }, { "text": "mollitia" }, { "text": " animi, id " }, { "text": "est" }, { "text": " " }, { "text": "laborum" }, { "text": " et " }, { "text": "dolorum" }, { "text": " " }, { "text": "fuga" }, { "text": ". Et " }, { "text": "harum" }, { "text": " " }, { "text": "quidem" }, { "text": " rerum facilis " }, { "text": "est" }, { "text": " et " }, { "text": "expedita" }, { "text": " " }, { "text": "distinctio" }, { "text": ". Nam libero tempore, cum " }, { "text": "soluta" }, { "text": " nobis " }, { "text": "est" }, { "text": " " }, { "text": "eligendi" }, { "text": " " }, { "text": "optio" }, { "text": " " }, { "text": "cumque" }, { "text": " nihil " }, { "text": "impedit" }, { "text": " quo minus id quod " }, { "text": "maxime" }, { "text": " " }, { "text": "placeat" }, { "text": " " }, { "text": "facere" }, { "text": " " }, { "text": "possimus" }, { "text": ", " }, { "text": "omnis" }, { "text": " " }, { "text": "voluptas" }, { "text": " " }, { "text": "assumenda" }, { "text": " " }, { "text": "est" }, { "text": ", " }, { "text": "omnis" }, { "text": " dolor " }, { "text": "repellendus" }, { "text": ". " }, { "text": "Temporibus" }, { "text": " " }, { "text": "autem" }, { "text": " " }, { "text": "quibusdam" }, { "text": " et " }, { "text": "aut" }, { "text": " " }, { "text": "officiis" }, { "text": " " }, { "text": "debitis" }, { "text": " " }, { "text": "aut" }, { "text": " rerum " }, { "text": "necessitatibus" }, { "text": " " }, { "text": "saepe" }, { "text": " " }, { "text": "eveniet" }, { "text": " " }, { "text": "ut" }, { "text": " et " }, { "text": "voluptates" }, { "text": " " }, { "text": "repudiandae" }, { "text": " " }, { "text": "sint" }, { "text": " et " }, { "text": "molestiae" }, { "text": " non " }, { "text": "recusandae" }, { "text": ". " }, { "text": "Itaque" }, { "text": " " }, { "text": "earum" }, { "text": " rerum hic " }, { "text": "tenetur" }, { "text": " a " }, { "text": "sapiente" }, { "text": " " }, { "text": "delectus" }, { "text": ", " }, { "text": "ut" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "reiciendis" }, { "text": " " }, { "text": "voluptatibus" }, { "text": " " }, { "text": "maiores" }, { "text": " alias " }, { "text": "consequatur" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "perferendis" }, { "text": " " }, { "text": "doloribus" }, { "text": " " }, { "text": "asperiores" }, { "text": " " }, { "text": "repellat" }, { "text": "." }] }], "headersFooters": { "header": { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Header" }, "inlines": [{ "text": "Header distance from top is 72px" }] }] }, "footer": { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Footer", "tabs": [{ "tabJustification": "Left", "position": 0.0, "tabLeader": "None", "deletePosition": 234.0 }] }, "inlines": [{ "text": "Footer distance from bottom is 48px" }] }] } }, "sectionFormat": { "headerDistance": 54.0, "footerDistance": 36.0, "pageWidth": 595.29998779296875, "pageHeight": 841.9000244140625, "leftMargin": 54.0, "rightMargin": 54.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }, { "blocks": [{ "paragraphFormat": { "styleName": "Title" }, "inlines": [{ "text": "Second Section" }] }, { "paragraphFormat": { "styleName": "Subtitle" }, "inlines": [{ "text": "Size 1056x816px (Landscape)" }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Subtitle" }, "inlines": [{ "text": "Margin 48px (on all sides)" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": " " }, { "text": "adipiscing" }, { "text": " " }, { "text": "elit" }, { "text": ", " }, { "text": "sed" }, { "text": " do " }, { "text": "eiusmod" }, { "text": " " }, { "text": "tempor" }, { "text": " " }, { "text": "incididunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore magna " }, { "text": "aliqua" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minim " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " " }, { "text": "nostrud" }, { "text": " exercitation " }, { "text": "ullamco" }, { "text": " " }, { "text": "laboris" }, { "text": " nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquip" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodo" }, { "text": " " }, { "text": "consequat" }, { "text": ". Duis " }, { "text": "aute" }, { "text": " " }, { "text": "irure" }, { "text": " dolor in " }, { "text": "reprehenderit" }, { "text": " in " }, { "text": "voluptate" }, { "text": " " }, { "text": "velit" }, { "text": " " }, { "text": "esse" }, { "text": " " }, { "text": "cillum" }, { "text": " dolore " }, { "text": "eu" }, { "text": " " }, { "text": "fugiat" }, { "text": " " }, { "text": "nulla" }, { "text": " " }, { "text": "pariatur" }, { "text": ". " }, { "text": "Excepteur" }, { "text": " " }, { "text": "sint" }, { "text": " " }, { "text": "occaecat" }, { "text": " " }, { "text": "cupidatat" }, { "text": " non " }, { "text": "proident" }, { "text": ", " }, { "text": "sunt" }, { "text": " in culpa qui " }, { "text": "officia" }, { "text": " " }, { "text": "deserunt" }, { "text": " " }, { "text": "mollit" }, { "text": " " }, { "text": "anim" }, { "text": " id " }, { "text": "est" }, { "text": " " }, { "text": "laborum" }, { "text": "." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Sed" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "perspiciatis" }, { "text": " " }, { "text": "unde" }, { "text": " " }, { "text": "omnis" }, { "text": " " }, { "text": "iste" }, { "text": " " }, { "text": "natus" }, { "text": " error sit " }, { "text": "voluptatem" }, { "text": " " }, { "text": "accusantium" }, { "text": " " }, { "text": "doloremque" }, { "text": " " }, { "text": "laudantium" }, { "text": ", " }, { "text": "totam" }, { "text": " rem " }, { "text": "aperiam" }, { "text": ", " }, { "text": "eaque" }, { "text": " " }, { "text": "ipsa" }, { "text": " " }, { "text": "quae" }, { "text": " ab " }, { "text": "illo" }, { "text": " " }, { "text": "inventore" }, { "text": " " }, { "text": "veritatis" }, { "text": " et quasi " }, { "text": "architecto" }, { "text": " " }, { "text": "beatae" }, { "text": " vitae dicta " }, { "text": "sunt" }, { "text": " " }, { "text": "explicabo" }, { "text": ". Nemo " }, { "text": "enim" }, { "text": " " }, { "text": "ipsam" }, { "text": " " }, { "text": "voluptatem" }, { "text": " " }, { "text": "quia" }, { "text": " " }, { "text": "voluptas" }, { "text": " sit " }, { "text": "aspernatur" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "odit" }, { "text": " " }, { "text": "aut" }, { "text": " fugit, " }, { "text": "sed" }, { "text": " " }, { "text": "quia" }, { "text": " " }, { "text": "consequuntur" }, { "text": " " }, { "text": "magni" }, { "text": " " }, { "text": "dolores" }, { "text": " " }, { "text": "eos" }, { "text": " qui " }, { "text": "ratione" }, { "text": " " }, { "text": "voluptatem" }, { "text": " " }, { "text": "sequi" }, { "text": " " }, { "text": "nesciunt" }, { "text": ". " }, { "text": "Neque" }, { "text": " " }, { "text": "porro" }, { "text": " " }, { "text": "quisquam" }, { "text": " " }, { "text": "est" }, { "text": ", qui " }, { "text": "dolorem" }, { "text": " ipsum " }, { "text": "quia" }, { "text": " dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": ", " }, { "text": "adipisci" }, { "text": " " }, { "text": "velit" }, { "text": ", " }, { "text": "sed" }, { "text": " " }, { "text": "quia" }, { "text": " non " }, { "text": "numquam" }, { "text": " " }, { "text": "eius" }, { "text": " " }, { "text": "modi" }, { "text": " " }, { "text": "tempora" }, { "text": " " }, { "text": "incidunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore " }, { "text": "magnam" }, { "text": " " }, { "text": "aliquam" }, { "text": " " }, { "text": "quaerat" }, { "text": " " }, { "text": "voluptatem" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minima " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " nostrum " }, { "text": "exercitationem" }, { "text": " " }, { "text": "ullam" }, { "text": " corporis " }, { "text": "suscipit" }, { "text": " " }, { "text": "laboriosam" }, { "text": ", nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquid" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodi" }, { "text": " " }, { "text": "consequatur" }, { "text": "? " }, { "text": "Quis" }, { "text": " " }, { "text": "autem" }, { "text": " " }, { "text": "vel" }, { "text": " " }, { "text": "eum" }, { "text": " " }, { "text": "iure" }, { "text": " " }, { "text": "reprehenderit" }, { "text": " qui in " }, { "text": "ea" }, { "text": " " }, { "text": "voluptate" }, { "text": " " }, { "text": "velit" }, { "text": " " }, { "text": "esse" }, { "text": " " }, { "text": "quam" }, { "text": " nihil " }, { "text": "molestiae" }, { "text": " " }, { "text": "consequatur" }, { "text": ", " }, { "text": "vel" }, { "text": " " }, { "text": "illum" }, { "text": " qui " }, { "text": "dolorem" }, { "text": " " }, { "text": "eum" }, { "text": " " }, { "text": "fugiat" }, { "text": " quo " }, { "text": "voluptas" }, { "text": " " }, { "text": "nulla" }, { "text": " " }, { "text": "pariatur" }, { "text": "?" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "At " }, { "text": "vero" }, { "text": " " }, { "text": "eos" }, { "text": " et " }, { "text": "accusamus" }, { "text": " et " }, { "text": "iusto" }, { "text": " " }, { "text": "odio" }, { "text": " " }, { "text": "dignissimos" }, { "text": " " }, { "text": "ducimus" }, { "text": " qui " }, { "text": "blanditiis" }, { "text": " " }, { "text": "praesentium" }, { "text": " " }, { "text": "voluptatum" }, { "text": " " }, { "text": "deleniti" }, { "text": " " }, { "text": "atque" }, { "text": " " }, { "text": "corrupti" }, { "text": " quos " }, { "text": "dolores" }, { "text": " et " }, { "text": "quas" }, { "text": " " }, { "text": "molestias" }, { "text": " " }, { "text": "excepturi" }, { "text": " " }, { "text": "sint" }, { "text": " " }, { "text": "occaecati" }, { "text": " " }, { "text": "cupiditate" }, { "text": " " }, { "text": "non provident" }, { "text": ", " }, { "text": "similique" }, { "text": " " }, { "text": "sunt" }, { "text": " in culpa qui " }, { "text": "officia" }, { "text": " " }, { "text": "deserunt" }, { "text": " " }, { "text": "mollitia" }, { "text": " animi, id " }, { "text": "est" }, { "text": " " }, { "text": "laborum" }, { "text": " et " }, { "text": "dolorum" }, { "text": " " }, { "text": "fuga" }, { "text": ". Et " }, { "text": "harum" }, { "text": " " }, { "text": "quidem" }, { "text": " rerum facilis " }, { "text": "est" }, { "text": " et " }, { "text": "expedita" }, { "text": " " }, { "text": "distinctio" }, { "text": ". Nam libero tempore, cum " }, { "text": "soluta" }, { "text": " nobis " }, { "text": "est" }, { "text": " " }, { "text": "eligendi" }, { "text": " " }, { "text": "optio" }, { "text": " " }, { "text": "cumque" }, { "text": " nihil " }, { "text": "impedit" }, { "text": " quo minus id quod " }, { "text": "maxime" }, { "text": " " }, { "text": "placeat" }, { "text": " " }, { "text": "facere" }, { "text": " " }, { "text": "possimus" }, { "text": ", " }, { "text": "omnis" }, { "text": " " }, { "text": "voluptas" }, { "text": " " }, { "text": "assumenda" }, { "text": " " }, { "text": "est" }, { "text": ", " }, { "text": "omnis" }, { "text": " dolor " }, { "text": "repellendus" }, { "text": ". " }, { "text": "Temporibus" }, { "text": " " }, { "text": "autem" }, { "text": " " }, { "text": "quibusdam" }, { "text": " et " }, { "text": "aut" }, { "text": " " }, { "text": "officiis" }, { "text": " " }, { "text": "debitis" }, { "text": " " }, { "text": "aut" }, { "text": " rerum " }, { "text": "necessitatibus" }, { "text": " " }, { "text": "saepe" }, { "text": " " }, { "text": "eveniet" }, { "text": " " }, { "text": "ut" }, { "text": " et " }, { "text": "voluptates" }, { "text": " " }, { "text": "repudiandae" }, { "text": " " }, { "text": "sint" }, { "text": " et " }, { "text": "molestiae" }, { "text": " non " }, { "text": "recusandae" }, { "text": ". " }, { "text": "Itaque" }, { "text": " " }, { "text": "earum" }, { "text": " rerum hic " }, { "text": "tenetur" }, { "text": " a " }, { "text": "sapiente" }, { "text": " " }, { "text": "delectus" }, { "text": ", " }, { "text": "ut" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "reiciendis" }, { "text": " " }, { "text": "voluptatibus" }, { "text": " " }, { "text": "maiores" }, { "text": " alias " }, { "text": "consequatur" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "perferendis" }, { "text": " " }, { "text": "doloribus" }, { "text": " " }, { "text": "asperiores" }, { "text": " " }, { "text": "repellat" }, { "text": "." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }], "headersFooters": { "header": { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Header" }, "inlines": [{ "text": "Header distance from top is 24px" }] }] }, "footer": { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Footer", "tabs": [{ "tabJustification": "Left", "position": 0.0, "tabLeader": "None", "deletePosition": 234.0 }] }, "inlines": [{ "text": "Footer distance from bottom is 24px" }] }] } }, "sectionFormat": { "headerDistance": 18.0, "footerDistance": 18.0, "pageWidth": 792.0, "pageHeight": 612.0, "leftMargin": 36.0, "rightMargin": 36.0, "topMargin": 36.0, "bottomMargin": 36.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Paragraph", "name": "Title", "basedOn": "Normal", "next": "Normal", "link": "Title Char", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" }, "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Title Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" } }, { "type": "Paragraph", "name": "Subtitle", "basedOn": "Normal", "next": "Normal", "link": "Subtitle Char", "characterFormat": { "fontColor": "#5A5A5AFF" }, "paragraphFormat": { "listFormat": { "listLevelNumber": 1 } } }, { "type": "Character", "name": "Subtitle Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#5A5A5AFF" } }, { "type": "Paragraph", "name": "Header", "basedOn": "Normal", "next": "Normal", "link": "Header Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 468.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Header Char", "basedOn": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Footer", "basedOn": "Normal", "next": "Normal", "link": "Footer Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 468.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Footer Char", "basedOn": "Default Paragraph Font" }] };
            // tslint:enable        
            var waitingPopUp = document.getElementById('waiting-popup');
            var popupOverlay = document.getElementById('popup-overlay');
            waitingPopUp.style.display = 'block';
            _this.documenteditor.open(JSON.stringify(defaultDocument));
            _this.documenteditor.documentName = 'Section Formatting';
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
    SectionFormatView.prototype.rendereComplete = function () {
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
    SectionFormatView.prototype.render = function () {
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
                React.createElement("p", null, "This example demonstrates section formatting options in document editor such as page margins, page size, header distance from top, and footer distance from bottom.")),
            React.createElement("div", { id: "description" },
                React.createElement("div", null,
                    React.createElement("p", null, "Section formatting features in document editor."),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Page size and page margins."),
                        React.createElement("li", null, "Header distance from the top."),
                        React.createElement("li", null, "Footer distance from the bottom.")),
                    React.createElement("p", { style: { 'display': 'block' } },
                        " More information about the document editor features can be found in this ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/document-editor/" }, "documentation section.")))),
            React.createElement("script", null, window.onbeforeunload = function () {
                return 'Want to save your changes?';
            })));
    };
    return SectionFormatView;
}(sample_base_1.SampleBase));
exports.SectionFormatView = SectionFormatView;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_base_1 = require("@syncfusion/ej2-base");
/**
 * Represents properties pane.
 */
var PropertiesPane = (function () {
    // tslint:disable-next-line:max-line-length
    function PropertiesPane(docEditor, text, table, headerFooter, image, toc) {
        var _this = this;
        this.initializeProperitesPane = function () {
            _this.element = ej2_base_1.createElement('div', { className: 'e-de-property-pane' });
            _this.element.appendChild(_this.textProperties.element);
            _this.element.appendChild(_this.tableProperties.element);
            _this.element.appendChild(_this.headerFooterProperties.element);
            _this.element.appendChild(_this.imageProperties.element);
            _this.element.appendChild(_this.tocProperties.element);
            _this.documentEditor.element.parentElement.appendChild(_this.element);
        };
        this.showPropertiesPane = function (isShow) {
            _this.element.style.display = isShow ? 'block' : 'none';
            _this.documentEditor.resize();
        };
        this.documentEditor = docEditor;
        this.textProperties = text;
        this.tableProperties = table;
        this.imageProperties = image;
        this.headerFooterProperties = headerFooter;
        this.tocProperties = toc;
        this.initializeProperitesPane();
    }
    return PropertiesPane;
}());
exports.PropertiesPane = PropertiesPane;

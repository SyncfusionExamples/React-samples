"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_dropdowns_1 = require("@syncfusion/ej2-dropdowns");
/**
 * TOC Properties pane
 */
var TocProperties = (function () {
    function TocProperties(docEditor) {
        var _this = this;
        this.initializeTocPane = function () {
            // tslint:disable-next-line:max-line-length
            _this.element = ej2_base_1.createElement('div', { id: _this.elementId + '_tocProperties', styles: 'padding:9px;width:269px' });
            _this.tocHeaderDiv();
            _this.initTemplates();
            _this.tocOptionsDiv();
            _this.contentStylesDropdown();
            _this.checkboxContent();
            _this.buttonDiv();
            _this.wireEvents();
            _this.updateTocProperties();
        };
        this.updateTocProperties = function () {
            _this.rightalignPageNumber.checked = true;
            _this.showPageNumber.checked = true;
            _this.hyperlink.checked = true;
        };
        this.wireEvents = function () {
            _this.cancelBtn.element.addEventListener('click', function () { _this.onClose(); });
            _this.updateBtn.element.addEventListener('click', _this.onInsertToc);
            _this.closeButton.addEventListener('click', function () { _this.onClose(); });
        };
        this.onClose = function () {
            if (_this.toolbar.showPropertiesPane
                && _this.toolbar.previousContext !== 'TableOfContents') {
                _this.toolbar.showPropertiesPaneOnSelection();
            }
            else {
                _this.toolbar.showPropertiesPane = false;
                _this.showTocPane(false);
                _this.toolbar.enableDisablePropertyPaneButton(false);
                _this.toolbar.propertiesPane.showPropertiesPane(false);
            }
        };
        this.tocHeaderDiv = function () {
            var headerDiv = ej2_base_1.createElement('div', {
                id: _this.elementId + 'toc_id',
                styles: 'display: block;'
            });
            _this.element.appendChild(headerDiv);
            var title = ej2_base_1.createElement('label', {
                className: 'e-de-prop-header-label'
            });
            title.textContent = 'Table of Contents';
            headerDiv.appendChild(title);
            _this.closeButton = ej2_base_1.createElement('span', {
                className: 'e-de-icon-Close',
                styles: 'cursor: pointer;float:right;display:inline-block;color: #4A4A4A;'
            });
            headerDiv.appendChild(_this.closeButton);
        };
        this.initTemplates = function () {
            _this.template1();
            // tslint:disable-next-line:max-line-length
            var div = ej2_base_1.createElement('div', { styles: 'display:block;border-top: 1px solid #E0E0E0;margin-bottom:5px' });
            _this.element.appendChild(div);
        };
        this.template1 = function () {
            _this.template1Div = ej2_base_1.createElement('div', {
                className: 'toc-template1'
            });
            _this.element.appendChild(_this.template1Div);
            var templateContent1 = ej2_base_1.createElement('div', {
                className: 'toc-template1-content1'
            });
            templateContent1.textContent = 'HEADING______ 1';
            _this.template1Div.appendChild(templateContent1);
            var templateContent2 = ej2_base_1.createElement('div', {
                className: 'toc-template1-content2'
            });
            templateContent2.textContent = 'HEADING______ 2';
            _this.template1Div.appendChild(templateContent2);
            var templateContent3 = ej2_base_1.createElement('div', {
                className: 'toc-template1-content3'
            });
            templateContent3.textContent = 'HEADING______ 3';
            _this.template1Div.appendChild(templateContent3);
        };
        this.tocOptionsDiv = function () {
            var optionsDiv = ej2_base_1.createElement('div', {
                className: 'toc-optionsDiv'
            });
            _this.element.appendChild(optionsDiv);
            var label = ej2_base_1.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Options';
            optionsDiv.appendChild(label);
        };
        this.contentStylesDropdown = function () {
            var contentStyleElement = ej2_base_1.createElement('div', { id: 'contentstyle_div', styles: 'margin-bottom: 10px;' });
            contentStyleElement.setAttribute('title', 'Number of heading or outline levels to be shown in table of contents.');
            _this.element.appendChild(contentStyleElement);
            // let items: ItemModel[] = [{ text: '___________', id: 'solid' }];
            // this.borderStyle = this.createDropDownBtn(
            //     this.elementId + '_borderStyleDiv',
            //     'width:120px;height:28px;margin-top:8px', contentStyleElement, 'e-de-icon-stroke-size', 'Solid', items
            // );
            var label = ej2_base_1.createElement('label', { className: 'e-de-prop-sub-label', styles: 'margin-right:8px;' });
            label.textContent = 'Levels';
            contentStyleElement.appendChild(label);
            _this.element.appendChild(contentStyleElement);
            var dataSource = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            _this.borderLevelStyle = _this.createDropDownBtn(_this.elementId + '_borderLevelDiv', contentStyleElement, '', dataSource, 2);
            /* tslint:disable:no-any */
            _this.borderLevelStyle.change = function (args) {
                _this.borderLevelStyle.value = args.item.value;
            };
            /* tslint:enable:no-any */
            _this.element.appendChild(contentStyleElement);
        };
        this.checkboxContent = function () {
            var checkboxElement = ej2_base_1.createElement('div', { id: 'toc_checkboxDiv', styles: 'margin-bottom:20px' });
            _this.element.appendChild(checkboxElement);
            var showPageNumberDiv = ej2_base_1.createElement('div', { className: 'e-de-prop-sub-label' });
            showPageNumberDiv.setAttribute('title', 'Show page numbers in table of contents.');
            checkboxElement.appendChild(showPageNumberDiv);
            // tslint:disable-next-line:max-line-length
            var showpagenumberCheckboxElement = ej2_base_1.createElement('input', { id: 'showpagenumber', styles: 'width:12px;height:12px;margin-bottom:8px', className: 'e-de-prop-sub-label' });
            showPageNumberDiv.appendChild(showpagenumberCheckboxElement);
            _this.showPageNumber = new ej2_buttons_1.CheckBox({
                label: 'Show page numbers',
            });
            _this.showPageNumber.appendTo(showpagenumberCheckboxElement);
            var rightAlignDiv = ej2_base_1.createElement('div', { className: 'e-de-prop-sub-label' });
            rightAlignDiv.setAttribute('title', 'Right align page numbers in table of contents.');
            checkboxElement.appendChild(rightAlignDiv);
            // tslint:disable-next-line:max-line-length
            var rightalignpagenumberCheckboxElement = ej2_base_1.createElement('input', { id: 'rightalignpagenumber', styles: 'width:12px;height:12px', className: 'e-de-prop-sub-label' });
            rightAlignDiv.appendChild(rightalignpagenumberCheckboxElement);
            _this.rightalignPageNumber = new ej2_buttons_1.CheckBox({
                label: 'Right align page numbers',
            });
            _this.rightalignPageNumber.appendTo(rightalignpagenumberCheckboxElement);
            var hyperlinkDiv = ej2_base_1.createElement('div', { className: 'e-de-prop-sub-label' });
            hyperlinkDiv.setAttribute('title', 'Use hyperlinks instead of page numbers.');
            checkboxElement.appendChild(hyperlinkDiv);
            // tslint:disable-next-line:max-line-length
            var hyperlinkCheckboxElement = ej2_base_1.createElement('input', { id: 'hyperlinkdiv', styles: 'width:12px;height:12px', className: 'e-de-prop-sub-label' });
            hyperlinkDiv.appendChild(hyperlinkCheckboxElement);
            _this.hyperlink = new ej2_buttons_1.CheckBox({
                label: 'Use hyperlinks',
            });
            _this.hyperlink.appendTo(hyperlinkCheckboxElement);
        };
        this.buttonDiv = function () {
            var footerElement = ej2_base_1.createElement('div', { id: 'footerDiv', styles: 'float:right' });
            _this.element.appendChild(footerElement);
            var updatebuttoncontentStyleElement = ej2_base_1.createElement('button', { id: 'footerupdatebuttonDiv' });
            footerElement.appendChild(updatebuttoncontentStyleElement);
            _this.updateBtn = new ej2_buttons_1.Button({
                content: 'Update', cssClass: 'btn-update', isPrimary: true
            });
            _this.updateBtn.appendTo(updatebuttoncontentStyleElement);
            var cancelbuttoncontentStyleElement = ej2_base_1.createElement('button', { id: 'footercancelbuttonDiv' });
            footerElement.appendChild(cancelbuttoncontentStyleElement);
            _this.cancelBtn = new ej2_buttons_1.Button({
                content: 'Cancel', cssClass: 'btn-cancel'
            });
            _this.cancelBtn.appendTo(cancelbuttoncontentStyleElement);
        };
        this.showTocPane = function (isShow, prevContextType) {
            if (!isShow && _this.element.style.display === 'none' || (isShow && _this.element.style.display === 'block')) {
                return;
            }
            _this.element.style.display = isShow ? 'block' : 'none';
            _this.updateBtn.content = _this.documentEditor.selection.contextType === 'TableOfContents' ? 'Update' : 'Insert';
            _this.prevContext = _this.documentEditor.selection.contextType;
            _this.documentEditor.resize();
            if (isShow) {
                _this.updateBtn.element.focus();
            }
        };
        this.onInsertToc = function () {
            // tslint:disable-next-line:max-line-length
            var tocSettings = {
                startLevel: 1,
                endLevel: parseInt(_this.borderLevelStyle.value, 0),
                includeHyperlink: _this.hyperlink.checked,
                includePageNumber: _this.showPageNumber.checked,
                rightAlign: _this.rightalignPageNumber.checked
            };
            _this.documentEditor.editor.insertTableOfContents(tocSettings);
        };
        this.documentEditor = docEditor;
        this.elementId = this.documentEditor.element.id;
        this.initializeTocPane();
    }
    TocProperties.prototype.createDropdownOption = function (ulTag, text) {
        var liTag = ej2_base_1.createElement('li', {
            styles: 'display:block',
            className: 'ui-wfloating-menuitem ui-wfloating-menuitem-md de-list-items  de-list-item-size'
        });
        ulTag.appendChild(liTag);
        var innerHTML;
        if (text === 'None') {
            innerHTML = '<div>' + text + '</div>';
        }
        else if (text === '1.5px') {
            // tslint:disable-next-line:max-line-length
            innerHTML = '<div>' + text + '<span class="ui-list-line" style="margin-left:10px;border-bottom-width:' + text + '"></span></div>';
        }
        else {
            // tslint:disable-next-line:max-line-length
            innerHTML = '<div>' + text + '<span class="ui-list-line" style="margin-left:20px;border-bottom-width:' + text + '"></span></div>';
        }
        var liInnerDiv = ej2_base_1.createElement('div', {
            className: 'ui-list-header-presetmenu',
            id: 'ui-zlist0', innerHTML: innerHTML
        });
        liTag.appendChild(liInnerDiv);
        return liTag;
    };
    TocProperties.prototype.createDropDownBtn = function (id, parentDiv, iconCss, content, selectedIndex) {
        var buttonElement = ej2_base_1.createElement('input', { id: id });
        parentDiv.appendChild(buttonElement);
        // tslint:disable-next-line:max-line-length  
        var dropDownBtn = new ej2_dropdowns_1.DropDownList({ index: selectedIndex, dataSource: content, width: '75px', popupWidth: '75px', cssClass: 'e-de-prop-font-button' }, buttonElement);
        return dropDownBtn;
    };
    return TocProperties;
}());
exports.TocProperties = TocProperties;

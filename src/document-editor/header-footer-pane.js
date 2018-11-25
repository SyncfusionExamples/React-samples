"use strict";
/**
 * Represents document editor header and footer.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_inputs_1 = require("@syncfusion/ej2-inputs");
var HeaderFooterProperties = (function () {
    function HeaderFooterProperties(documentEditor) {
        var _this = this;
        this.isHeaderTopApply = false;
        this.isFooterTopApply = false;
        this.wireEvents = function () {
            _this.headerFromTop.element.addEventListener('click', function () { _this.isHeaderTopApply = true; });
            _this.footerFromTop.element.addEventListener('click', function () { _this.isFooterTopApply = true; });
            _this.headerFromTop.element.addEventListener('keydown', _this.onHeaderValue);
            _this.footerFromTop.element.addEventListener('keydown', _this.onFooterValue);
            _this.headerFromTop.element.addEventListener('blur', function () { _this.changeHeaderValue(); _this.isHeaderTopApply = false; });
            _this.footerFromTop.element.addEventListener('blur', function () { _this.changeFooterValue(); _this.isFooterTopApply = false; });
        };
        this.onClose = function () {
            _this.toolbar.showHeaderProperties = true;
            _this.documentEditor.selection.closeHeaderFooter();
        };
        this.changeFirstPageOptions = function () {
            if (!_this.documentEditor.isReadOnly) {
                _this.documentEditor.selection.sectionFormat.differentFirstPage = _this.firstPage.checked;
                setTimeout(function () { _this.documentEditor.focusIn(); }, 10);
            }
        };
        this.changeoddOrEvenOptions = function () {
            if (!_this.documentEditor.isReadOnly) {
                _this.documentEditor.selection.sectionFormat.differentOddAndEvenPages = _this.oddOrEven.checked;
                setTimeout(function () { _this.documentEditor.focusIn(); }, 10);
            }
        };
        this.changeHeaderValue = function () {
            if (!_this.isHeaderTopApply) {
                return;
            }
            if (!_this.documentEditor.isReadOnly) {
                var headerTop = _this.headerFromTop.value;
                if (headerTop > _this.headerFromTop.max) {
                    headerTop = _this.headerFromTop.max;
                }
                _this.documentEditor.selection.sectionFormat.headerDistance = headerTop;
            }
        };
        this.onHeaderValue = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.changeHeaderValue(); _this.isHeaderTopApply = false; }, 30);
            }
        };
        this.onFooterValue = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.changeFooterValue(); _this.isFooterTopApply = false; }, 30);
            }
        };
        this.changeFooterValue = function () {
            if (!_this.isFooterTopApply) {
                return;
            }
            if (!_this.documentEditor.isReadOnly) {
                var footerTop = _this.footerFromTop.value;
                if (footerTop > _this.footerFromTop.max) {
                    footerTop = _this.footerFromTop.max;
                }
                _this.documentEditor.selection.sectionFormat.footerDistance = footerTop;
            }
        };
        this.documentEditor = documentEditor;
        this.initHeaderFooterPane();
        this.wireEvents();
    }
    HeaderFooterProperties.prototype.initHeaderFooterPane = function () {
        this.initializeHeaderFooter();
        this.element.style.display = 'none';
    };
    HeaderFooterProperties.prototype.showHeaderFooterPane = function (isShow) {
        if (isShow) {
            this.toolbar.enableDisablePropertyPaneButton(false);
            this.onSelectionChange();
        }
        if (!isShow && this.element.style.display === 'none' || (isShow && this.element.style.display === 'block')) {
            return;
        }
        this.element.style.display = isShow ? 'block' : 'none';
        this.documentEditor.resize();
    };
    HeaderFooterProperties.prototype.initializeHeaderFooter = function () {
        var _this = this;
        var elementId = 'header_footer_properties';
        // tslint:disable-next-line:max-line-length
        this.element = ej2_base_1.createElement('div', { id: this.documentEditor.element.id + elementId, styles: 'width:269px;' });
        var headerDiv = this.createDivTemplate('_header_footer', this.element, 'padding:10px;');
        var headerLabel = ej2_base_1.createElement('label', { className: 'e-de-prop-header-label' });
        headerLabel.innerHTML = 'Header & Footer';
        var closeIcon = ej2_base_1.createElement('span', {
            id: '_header_footer_close',
            className: 'e-de-icon-Close',
            styles: 'display:inline-block;float:right;cursor:pointer'
        });
        closeIcon.addEventListener('click', function () { _this.onClose(); });
        headerDiv.appendChild(headerLabel);
        headerDiv.appendChild(closeIcon);
        var optionsLabelDiv = this.createDivTemplate(elementId + '_options', this.element, 'padding-left: 10px');
        var optionsLabel = ej2_base_1.createElement('label', { className: 'e-de-prop-label', styles: 'height:20px;' });
        optionsLabel.innerHTML = 'Options';
        optionsLabelDiv.appendChild(optionsLabel);
        var optionsDiv = this.createDivTemplate(elementId + '_optionsDiv', optionsLabelDiv);
        var firstPageDiv = this.createDivTemplate(elementId + '_firstPageDiv', optionsDiv, 'margin-bottom:3px;');
        var firstPage = ej2_base_1.createElement('input', { id: 'firstPage', className: 'e-de-prop-sub-label' });
        firstPageDiv.appendChild(firstPage);
        // tslint:disable-next-line:max-line-length
        this.firstPage = new ej2_buttons_1.CheckBox({ label: 'Different First Page', change: this.changeFirstPageOptions, cssClass: 'e-de-prop-sub-label' });
        this.firstPage.appendTo(firstPage);
        firstPageDiv.children[0].setAttribute('title', 'Different header and footer for first page.');
        var oddOrEvenDiv = this.createDivTemplate(elementId + '_oddOrEvenDiv', optionsDiv);
        var oddOrEven = ej2_base_1.createElement('input', { id: 'oddOrEven', className: 'e-de-sub-prop-label' });
        oddOrEvenDiv.appendChild(oddOrEven);
        // tslint:disable-next-line:max-line-length
        this.oddOrEven = new ej2_buttons_1.CheckBox({ label: 'Different Odd & Even Pages', change: this.changeoddOrEvenOptions, cssClass: 'e-de-prop-sub-label' });
        this.oddOrEven.appendTo(oddOrEven);
        oddOrEvenDiv.children[0].setAttribute('title', 'Different header and footer for odd and even pages.');
        var optionsLine = ej2_base_1.createElement('div', { className: 'e-de-prop-header-line', styles: 'margin-top:7px;' });
        optionsLabelDiv.appendChild(optionsLine);
        // tslint:disable-next-line:max-line-length
        // let autoFieldLabelDiv: HTMLElement = this.createDivTemplate(element + '_autoFieldLabelDiv', div, 'padding-top:10px;padding-left: 10px;');
        // let autoFieldLabel: HTMLElement = createElement('label', { className: 'e-de-header-prop-label', styles: 'height:20px;' });
        // autoFieldLabel.innerHTML = 'Insert Autofield';
        // autoFieldLabelDiv.appendChild(autoFieldLabel);
        // let autofieldDiv: HTMLElement = this.createDivTemplate(element + '_autofieldDiv', autoFieldLabelDiv, 'display:inline-flex;');
        // let pageNumberDiv: HTMLElement = this.createDivTemplate(element + '_pageNumberDiv', autofieldDiv, 'margin-right:8px;');
        // let pageNumber: HTMLInputElement = createElement('input', { id: 'pageNumber' }) as HTMLInputElement;
        // pageNumberDiv.appendChild(pageNumber);
        // this.pageNumber = new CheckBox({ label: 'Page Number', change: this.changePageNumber });
        // this.pageNumber.appendTo(pageNumber);
        // let pageCountDiv: HTMLElement = this.createDivTemplate(element + '_pageCountDiv', autofieldDiv);
        // let pageCount: HTMLInputElement = createElement('input', { id: 'pageCount' }) as HTMLInputElement;
        // pageCountDiv.appendChild(pageCount);
        // this.pageCount = new CheckBox({ label: 'Page Count', change: this.changePageCount });
        // this.pageCount.appendTo(pageCount);
        // let autoFieldLine: HTMLElement = createElement('div', { className: 'e-de-prop-header-line', styles: 'margin-top:7px;' });
        // autoFieldLabelDiv.appendChild(autoFieldLine);
        // tslint:disable-next-line:max-line-length
        var positionLabelDiv = this.createDivTemplate(elementId + '_positionLabelDiv', this.element, 'padding-top:10px;padding-left: 10px;');
        var positionLabel = ej2_base_1.createElement('label', { className: 'e-de-prop-label', styles: 'height:20px;' });
        positionLabel.innerHTML = 'Position';
        positionLabelDiv.appendChild(positionLabel);
        var positionDiv = this.createDivTemplate(elementId + '_positionDiv', positionLabelDiv);
        // tslint:disable-next-line:max-line-length
        var headerTopDiv = this.createDivTemplate(elementId + '_headerTopDiv', positionDiv, 'margin-right:8px;display:inline-flex;margin-bottom:8px;');
        var headerTopLabel = ej2_base_1.createElement('label', { className: 'e-de-prop-sub-label', styles: 'width: 128px;margin-top: 10px;' });
        headerTopLabel.innerHTML = 'Header from Top';
        headerTopDiv.appendChild(headerTopLabel);
        // tslint:disable-next-line:max-line-length
        var headerFromTop = ej2_base_1.createElement('input', { id: 'headerFromTop', className: 'e-de-prop-sub-label' });
        headerTopDiv.appendChild(headerFromTop);
        // tslint:disable-next-line:max-line-length
        this.headerFromTop = new ej2_inputs_1.NumericTextBox({ value: 36, cssClass: 'e-de-prop-header-numeric', width: 85, showSpinButton: false, format: 'n0', decimals: 2, max: 1584, min: 0 });
        this.headerFromTop.appendTo(headerFromTop);
        // tslint:disable-next-line:max-line-length
        this.headerFromTop.element.parentElement.setAttribute('title', 'Distance from top of the page to top of the header.');
        // tslint:disable-next-line:max-line-length
        var footerBottomDiv = this.createDivTemplate(elementId + '_footerBottomDiv', positionDiv, 'margin-right:8px;display:inline-flex;');
        // tslint:disable-next-line:max-line-length
        var footerBottomLabel = ej2_base_1.createElement('label', { styles: 'width:128px;margin-top: 10px;', className: 'e-de-prop-sub-label' });
        footerBottomLabel.innerHTML = 'Footer from Bottom';
        footerBottomDiv.appendChild(footerBottomLabel);
        // tslint:disable-next-line:max-line-length
        var footerFromTop = ej2_base_1.createElement('input', { id: 'footerFromTop', className: 'e-de-prop-sub-label' });
        footerBottomDiv.appendChild(footerFromTop);
        // tslint:disable-next-line:max-line-length
        this.footerFromTop = new ej2_inputs_1.NumericTextBox({ value: 36, cssClass: 'e-de-prop-header-numeric', width: 85, showSpinButton: false, format: 'n0', decimals: 2, max: 1584, min: 0 });
        this.footerFromTop.appendTo(footerFromTop);
        // tslint:disable-next-line:max-line-length
        this.footerFromTop.element.parentElement.setAttribute('title', 'Distance from bottom of the page to bottom of the footer.');
        var positionLine = ej2_base_1.createElement('div', { className: 'e-de-prop-header-line', styles: 'margin-top:10px;' });
        positionLabelDiv.appendChild(positionLine);
    };
    HeaderFooterProperties.prototype.createDivTemplate = function (id, parentDiv, style) {
        var divElement;
        if (style) {
            divElement = ej2_base_1.createElement('div', { id: id, styles: style });
        }
        else {
            divElement = ej2_base_1.createElement('div', { id: id });
        }
        parentDiv.appendChild(divElement);
        return divElement;
    };
    HeaderFooterProperties.prototype.onSelectionChange = function () {
        if (this.documentEditor.selection.sectionFormat.differentFirstPage) {
            this.firstPage.checked = true;
        }
        else {
            this.firstPage.checked = false;
        }
        if (this.documentEditor.selection.sectionFormat.differentOddAndEvenPages) {
            this.oddOrEven.checked = true;
        }
        else {
            this.oddOrEven.checked = false;
        }
    };
    return HeaderFooterProperties;
}());
exports.HeaderFooterProperties = HeaderFooterProperties;

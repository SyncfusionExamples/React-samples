"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_inputs_1 = require("@syncfusion/ej2-inputs");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
/**
 * Image Property pane
 */
var ImageProperties = (function () {
    function ImageProperties(docEditor) {
        var _this = this;
        this.isWidthApply = false;
        this.isHeightApply = false;
        this.initializeImageProperties = function () {
            // tslint:disable-next-line:max-line-length
            _this.element = ej2_base_1.createElement('div', { id: _this.elementId + '_imageProperties', styles: 'width:269px;' });
            _this.element.style.display = 'none';
            _this.initImageProp();
            _this.wireEvents();
        };
        this.initImageProp = function () {
            // tslint:disable-next-line:max-line-length
            var imageDiv = ej2_base_1.createElement('div', { id: _this.elementId + '_imageDiv', className: 'e-de-property-div-padding', styles: 'border:0px' });
            _this.element.appendChild(imageDiv);
            var label = ej2_base_1.createElement('label', { className: 'e-de-prop-label', styles: 'padding:3px' });
            label.textContent = 'Image';
            imageDiv.appendChild(label);
            var outerDiv = ej2_base_1.createElement('div', { styles: 'margin-left:2px;margin-top:10px' });
            imageDiv.appendChild(outerDiv);
            _this.widthElement = _this.createImagePropertiesDiv('_widthDiv', outerDiv, '_widthInput', 'W', 'Width');
            // tslint:disable-next-line:max-line-length
            _this.widthNumericBox = new ej2_inputs_1.NumericTextBox({ min: 0, max: 23500, cssClass: 'e-de-image-property', showSpinButton: false, format: 'n0', decimals: 2 });
            _this.widthNumericBox.appendTo(_this.widthElement);
            _this.heightElement = _this.createImagePropertiesDiv('_heightDiv', outerDiv, '_heightInput', 'H', 'Height');
            // tslint:disable-next-line:max-line-length
            _this.heightNumericBox = new ej2_inputs_1.NumericTextBox({ min: 0, max: 23500, cssClass: 'e-de-image-property', showSpinButton: false, format: 'n0', decimals: 2 });
            _this.heightNumericBox.appendTo(_this.heightElement);
            // tslint:disable-next-line:max-line-length        
            var aspectRatioDiv = ej2_base_1.createElement('div', { id: _this.elementId + '_aspectRatioDiv', styles: 'height:14px;margin-left:5px;float:left' });
            outerDiv.appendChild(aspectRatioDiv);
            // tslint:disable-next-line:max-line-length
            var aspectRatio = ej2_base_1.createElement('input', { id: _this.elementId + '_aspectRatio', className: 'e-de-prop-label' });
            aspectRatioDiv.setAttribute('title', 'Aspect ratio');
            aspectRatioDiv.appendChild(aspectRatio);
            _this.aspectRatioBtn = new ej2_buttons_1.CheckBox({ label: 'Aspect ratio' }, aspectRatio);
        };
        this.createImagePropertiesDiv = function (id, outerDiv, inputId, spanContent, tooltip) {
            // tslint:disable-next-line:max-line-length
            var divElement = ej2_base_1.createElement('div', { id: _this.elementId + id, styles: 'position: relative;width: 100%;margin-right:6px; float:left;margin-bottom: 7px;' });
            divElement.setAttribute('title', tooltip);
            outerDiv.appendChild(divElement);
            // tslint:disable-next-line:max-line-length
            var inputElement = ej2_base_1.createElement('input', { id: _this.elementId + inputId, className: 'e-textbox', styles: 'width:100%;' });
            divElement.appendChild(inputElement);
            var spanElement = ej2_base_1.createElement('span', { styles: 'position: absolute;left:8px;top:8px;color:#8C8C8C;' });
            spanElement.textContent = spanContent;
            divElement.appendChild(spanElement);
            return inputElement;
        };
        this.wireEvents = function () {
            _this.aspectRatioBtn.element.addEventListener('change', _this.onAspectRatioBtnClick);
            _this.widthNumericBox.element.addEventListener('click', function () { _this.isWidthApply = true; });
            _this.heightNumericBox.element.addEventListener('click', function () { _this.isHeightApply = true; });
            _this.widthNumericBox.element.addEventListener('keydown', _this.onImageWidth);
            _this.heightNumericBox.element.addEventListener('keydown', _this.onImageHeight);
            _this.widthNumericBox.element.addEventListener('blur', function () { _this.applyImageWidth(); _this.isWidthApply = false; });
            _this.heightNumericBox.element.addEventListener('blur', function () { _this.applyImageHeight(); _this.isHeightApply = false; });
        };
        this.onImageWidth = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyImageWidth(); _this.isWidthApply = false; }, 30);
            }
        };
        this.onImageHeight = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyImageHeight(); _this.isHeightApply = false; }, 30);
            }
        };
        this.applyImageWidth = function () {
            if (!_this.isMaintainAspectRatio) {
                // tslint:disable-next-line:max-line-length
                var width = _this.widthNumericBox.value;
                var height = _this.heightNumericBox.value;
                if (width > _this.widthNumericBox.max) {
                    width = _this.widthNumericBox.max;
                }
                if (height > _this.heightNumericBox.max) {
                    height = _this.heightNumericBox.max;
                }
                if (!(width === null || height === null)) {
                    _this.documentEditor.selection.imageFormat.resize(width, height);
                }
            }
            else if (_this.isMaintainAspectRatio) {
                // tslint:disable-next-line:max-line-length
                var width = _this.widthNumericBox.value;
                if (width > _this.widthNumericBox.max) {
                    width = _this.widthNumericBox.max;
                }
                var ratio = width / _this.documentEditor.selection.imageFormat.width;
                var height = _this.heightNumericBox.value * ratio;
                _this.heightNumericBox.value = height;
                if (!(width === null || height === null)) {
                    _this.documentEditor.selection.imageFormat.resize(width, height);
                }
            }
        };
        this.applyImageHeight = function () {
            if (!_this.isMaintainAspectRatio) {
                // tslint:disable-next-line:max-line-length
                var width = _this.widthNumericBox.value;
                var height = _this.heightNumericBox.value;
                if (!(width === null || height === null)) {
                    _this.documentEditor.selection.imageFormat.resize(width, height);
                }
            }
            else if (_this.isMaintainAspectRatio) {
                // tslint:disable-next-line:max-line-length
                var height = _this.heightNumericBox.value;
                var ratio = height / _this.documentEditor.selection.imageFormat.height;
                var width = _this.widthNumericBox.value * ratio;
                _this.widthNumericBox.value = width;
                if (!(width === null || height === null)) {
                    _this.documentEditor.selection.imageFormat.resize(width, height);
                }
            }
        };
        this.onAspectRatioBtnClick = function () {
            if (_this.isMaintainAspectRatio) {
                _this.isMaintainAspectRatio = false;
            }
            else {
                _this.isMaintainAspectRatio = true;
            }
        };
        this.documentEditor = docEditor;
        this.elementId = this.documentEditor.element.id;
        this.isMaintainAspectRatio = false;
        this.initializeImageProperties();
    }
    ImageProperties.prototype.showImageProperties = function (isShow) {
        if (this.element.style.display === 'block') {
            this.updateImageProperties();
        }
        if (!isShow && this.element.style.display === 'none' || (isShow && this.element.style.display === 'block')) {
            return;
        }
        this.element.style.display = isShow ? 'block' : 'none';
        this.documentEditor.resize();
    };
    ImageProperties.prototype.updateImageProperties = function () {
        this.widthNumericBox.value = this.documentEditor.selection.imageFormat.width;
        this.heightNumericBox.value = this.documentEditor.selection.imageFormat.height;
    };
    return ImageProperties;
}());
exports.ImageProperties = ImageProperties;

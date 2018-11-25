"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_dropdowns_1 = require("@syncfusion/ej2-dropdowns");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var ej2_inputs_1 = require("@syncfusion/ej2-inputs");
var ej2_data_1 = require("@syncfusion/ej2-data");
/**
 * Text Properties pane
 */
var TextProperties = (function () {
    function TextProperties(documentEditor, id) {
        var _this = this;
        this.isInitial = true;
        this.showTextProperties = function (isShow) {
            if (isShow) {
                _this.onSelectionChange();
            }
            if (!isShow && _this.element.style.display === 'none' || (isShow && _this.element.style.display === 'block')) {
                return;
            }
            _this.element.style.display = isShow ? 'block' : 'none';
            _this.documentEditor.resize();
        };
        this.generateUniqueID = function () {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        };
        this.documentEditor = documentEditor;
        this.text = new Text(this.documentEditor);
        this.paragraph = new Paragraph(this.documentEditor);
        this.initializeTextProperties(id);
        this.wireEvents();
    }
    TextProperties.prototype.updateStyles = function () {
        this.paragraph.updateStyleNames();
    };
    Object.defineProperty(TextProperties.prototype, "appliedHighlightColor", {
        get: function () {
            return this.text.appliedHighlightColor;
        },
        set: function (value) {
            this.text.appliedHighlightColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextProperties.prototype, "appliedBulletStyle", {
        get: function () {
            return this.paragraph.appliedBulletStyle;
        },
        set: function (value) {
            this.paragraph.appliedBulletStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextProperties.prototype, "appliedNumberingStyle", {
        get: function () {
            return this.paragraph.appliedNumberingstyle;
        },
        set: function (value) {
            this.paragraph.appliedNumberingstyle = value;
        },
        enumerable: true,
        configurable: true
    });
    TextProperties.prototype.initializeTextProperties = function (id) {
        /* tslint:disable-next-line:max-line-length */
        this.element = ej2_base_1.createElement('div', { id: this.documentEditor.element.id + 'id_' + this.generateUniqueID(), styles: 'width:269px;' });
        this.text.initializeTextPropertiesDiv(this.element);
        this.paragraph.initializeParagraphPropertiesDiv(this.element);
        this.paragraph.updateStyleNames();
    };
    TextProperties.prototype.wireEvents = function () {
        this.text.wireEvent();
        this.paragraph.wireEvent();
    };
    TextProperties.prototype.onSelectionChange = function () {
        this.text.onSelectionChange();
        this.paragraph.onSelectionChange();
    };
    return TextProperties;
}());
exports.TextProperties = TextProperties;
var Text = (function () {
    function Text(documentEditor) {
        var _this = this;
        this.isRetrieving = false;
        this.appliedHighlightColor = 'rgb(255, 255, 0)';
        this.createHighlightColorSplitButton = function (id, width, divElement, toolTipText) {
            var buttonElement = ej2_base_1.createElement('button', { id: id });
            buttonElement.style.width = width + 'px';
            buttonElement.style.padding = '0px 1px 1px 1px';
            buttonElement.style.height = 30 + 'px';
            divElement.appendChild(buttonElement);
            var hgltSplitObj = new ej2_splitbuttons_1.SplitButton({
                iconCss: 'de-hglt-color',
                target: _this.highlightColorElement, close: _this.closePopup, beforeOpen: _this.openPopup
            });
            hgltSplitObj.appendTo(buttonElement);
            hgltSplitObj.click = function () {
                _this.applyHighlightColor(_this.highlightColorInputElement.style.backgroundColor);
            };
            hgltSplitObj.element.firstChild.style.backgroundColor = 'rgb(255, 255, 0)';
            hgltSplitObj.element.parentElement.setAttribute('title', toolTipText);
            return hgltSplitObj;
        };
        this.openPopup = function () {
            _this.highlightColorElement.style.display = 'block';
        };
        this.closePopup = function () {
            _this.highlightColorElement.style.display = 'none';
        };
        this.onHighLightColor = function (event) {
            if (_this.documentEditor.selection) {
                _this.applyHighlightColor(event.currentTarget.style.backgroundColor);
                _this.highlightColor.toggle();
            }
        };
        this.applyHighlightColorAsBackground = function (color) {
            _this.removeSelectedColorDiv();
            if (color === 'NoColor') {
                _this.highlightColorElement.querySelector('#noColorDiv').classList.add('e-color-selected');
            }
            else if (color === 'Yellow') {
                _this.highlightColorElement.querySelector('#yellowDiv').classList.add('e-color-selected');
            }
            else if (color === 'BrightGreen') {
                _this.highlightColorElement.querySelector('#brightGreenDiv').classList.add('e-color-selected');
            }
            else if (color === 'Turquoise') {
                _this.highlightColorElement.querySelector('#turquoiseDiv').classList.add('e-color-selected');
            }
            else if (color === 'Pink') {
                _this.highlightColorElement.querySelector('#hotPinkDiv').classList.add('e-color-selected');
            }
            else if (color === 'Red') {
                _this.highlightColorElement.querySelector('#redDiv').classList.add('e-color-selected');
            }
            else if (color === 'DarkBlue') {
                _this.highlightColorElement.querySelector('#darkBlueDiv').classList.add('e-color-selected');
            }
            else if (color === 'Teal') {
                _this.highlightColorElement.querySelector('#tealDiv').classList.add('e-color-selected');
            }
            else if (color === 'Green') {
                _this.highlightColorElement.querySelector('#greenDiv').classList.add('e-color-selected');
            }
            else if (color === 'Violet') {
                _this.highlightColorElement.querySelector('#violetDiv').classList.add('e-color-selected');
            }
            else if (color === 'DarkRed') {
                _this.highlightColorElement.querySelector('#darkRedDiv').classList.add('e-color-selected');
            }
            else if (color === 'DarkYellow') {
                _this.highlightColorElement.querySelector('#darkYellowDiv').classList.add('e-color-selected');
            }
            else if (color === 'Gray50') {
                _this.highlightColorElement.querySelector('#gray50Div').classList.add('e-color-selected');
            }
            else if (color === 'Gray25') {
                _this.highlightColorElement.querySelector('#gray25Div').classList.add('e-color-selected');
            }
            else if (color === 'Black') {
                _this.highlightColorElement.querySelector('#blackDiv').classList.add('e-color-selected');
            }
            else if (color === 'Blue') {
                _this.highlightColorElement.querySelector('#blueDiv').classList.add('e-color-selected');
            }
        };
        this.removeSelectedColorDiv = function () {
            _this.highlightColorElement.querySelector('#noColorDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#yellowDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#brightGreenDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#turquoiseDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#hotPinkDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#redDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#darkBlueDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#tealDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#greenDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#violetDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#darkRedDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#darkYellowDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#gray50Div').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#gray25Div').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#blackDiv').classList.remove('e-color-selected');
        };
        this.applyHighlightColor = function (color) {
            _this.appliedHighlightColor = color;
            var hgltColor = _this.getHighLightColor(color);
            _this.documentEditor.selection.characterFormat.highlightColor = hgltColor;
        };
        this.getHighLightColor = function (color) {
            switch (color) {
                case 'rgb(255, 255, 0)':
                    return 'Yellow';
                case 'rgb(0, 255, 0)':
                    return 'BrightGreen';
                case 'rgb(0, 255, 255)':
                    return 'Turquoise';
                case 'rgb(255, 0, 255)':
                    return 'Pink';
                case 'rgb(0, 0, 255)':
                    return 'Blue';
                case 'rgb(255, 0, 0)':
                    return 'Red';
                case 'rgb(0, 0, 128)':
                    return 'DarkBlue';
                case 'rgb(0, 128, 128)':
                    return 'Teal';
                case 'rgb(0, 128, 0)':
                    return 'Green';
                case 'rgb(128, 0, 128)':
                    return 'Violet';
                case 'rgb(128, 0, 0)':
                    return 'DarkRed';
                case 'rgb(128, 128, 0)':
                    return 'DarkYellow';
                case 'rgb(128, 128, 128)':
                    return 'Gray50';
                case 'rgb(192, 192, 192)':
                    return 'Gray25';
                case 'rgb(0, 0, 0)':
                    return 'Black';
                default:
                    return 'NoColor';
            }
        };
        this.createFontColorPicker = function (id, width, divElement, toolTipText) {
            var inputElement = ej2_base_1.createElement('input', { id: id, attrs: { 'type': 'color' } });
            inputElement.style.width = width + 'px';
            divElement.appendChild(inputElement);
            _this.fontColorInputElement = new ej2_inputs_1.ColorPicker({ value: '#000000', showButtons: true }, inputElement);
            _this.fontColorInputElement.element.parentElement.setAttribute('title', toolTipText);
            return inputElement;
        };
        this.boldAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleBold();
            }
        };
        this.italicAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleItalic();
            }
        };
        this.underlineAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleUnderline('Single');
            }
        };
        this.strikethroughAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleStrikethrough();
            }
        };
        this.clearFormatAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.clearFormatting();
            }
        };
        this.subscriptAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleSubscript();
            }
        };
        this.superscriptAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleSuperscript();
            }
        };
        this.changeFontColor = function (arg) {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.selection) {
                _this.documentEditor.selection.characterFormat.fontColor = arg.currentValue.hex;
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.changeFontFamily = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.selection && _this.fontFamily.value !== '') {
                setTimeout(function () { _this.documentEditor.selection.characterFormat.fontFamily = _this.fontFamily.value; }, 10);
            }
        };
        this.changeFontSize = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.selection && _this.fontSize.value !== '') {
                setTimeout(function () { _this.documentEditor.selection.characterFormat.fontSize = _this.fontSize.value; }, 10);
            }
        };
        this.documentEditor = documentEditor;
    }
    Text.prototype.initializeTextPropertiesDiv = function (wholeDiv) {
        this.textProperties = wholeDiv;
        var element = 'font_properties';
        var textDiv = this.createDivTemplate(element + '_text', wholeDiv, 'padding:10px;border-bottom:0.5px solid #E0E0E0');
        var label = ej2_base_1.createElement('label', { className: 'e-de-prop-label' });
        label.innerHTML = 'Text';
        textDiv.appendChild(label);
        var fontDiv = this.createDivTemplate(element + '_sizeStyle', textDiv, 'display:inline-flex;');
        var fontFamilyDiv = this.createDivTemplate(element + '_fontFamilyDiv', fontDiv, 'margin-right:9px;');
        var fontFamily = ej2_base_1.createElement('input', {
            id: element + '_fontFamily',
            /* tslint:disable-next-line:max-line-length */
            styles: 'font-size: 12px;color: #000000;letter-spacing: 0.05px;padding-left:10px;', className: 'e-prop-font-style'
        });
        fontFamilyDiv.appendChild(fontFamily);
        this.createDropDownListForFamily(fontFamily);
        var fontSizeDiv = this.createDivTemplate(element + '_fontSizeDiv', fontDiv);
        var fontSize = ej2_base_1.createElement('input', {
            id: element + '_fontSize',
            styles: 'font-size: 12px;color: #000000;letter-spacing: 0.05px;padding-left:10px', innerHTML: 'type:number',
            className: 'e-prop-font-style',
        });
        fontSizeDiv.appendChild(fontSize);
        this.createDropDownListForSize(fontSize);
        var propertiesDiv = ej2_base_1.createElement('div', {
            id: element + '_properties',
            styles: 'display:inline-flex;margin-top:8px;height: 32px'
        });
        textDiv.appendChild(propertiesDiv);
        var leftDiv = ej2_base_1.createElement('div', {
            id: element + '_leftDiv',
            className: 'e-de-prop-div-left e-btn-group', styles: 'display:inline-flex;height:32px;width:163px'
        });
        propertiesDiv.appendChild(leftDiv);
        // tslint:disable-next-line:max-line-length
        this.bold = this.createButtonTemplate(element + '_bold', 'e-de-icon-Bold e-font-icons', leftDiv, 'e-de-prop-font-button', '40.5', 'Bold (Ctrl+B)');
        // tslint:disable-next-line:max-line-length
        this.italic = this.createButtonTemplate(element + '_italic', 'e-de-icon-Italic e-font-icons', leftDiv, 'e-de-prop-font-button', '40.5', 'Italic (Ctrl+I)');
        // tslint:disable-next-line:max-line-length
        this.underline = this.createButtonTemplate(element + '_underline', 'e-de-icon-Underline e-font-icons', leftDiv, 'e-de-prop-font-button', '40.5', 'Underline (Ctrl+U)');
        // tslint:disable-next-line:max-line-length
        this.strikethrough = this.createButtonTemplate(element + '_strikethrough', 'e-de-icon-Strikethrough e-font-icons', leftDiv, 'e-de-prop-font-last-button', '40.5', 'Strikethrough');
        // tslint:disable-next-line:max-line-length
        var rightDiv = ej2_base_1.createElement('div', { id: element + '_rightDiv', className: 'e-de-prop-div-right e-btn-group', styles: 'display:inline-flex;margin-left:8px' });
        propertiesDiv.appendChild(rightDiv);
        // tslint:disable-next-line:max-line-length
        this.superscript = this.createButtonTemplate(element + '_superscript', 'e-de-icon-Superscript e-font-icons', rightDiv, 'e-de-prop-font-button', '38.5', 'Superscript (Ctrl+Shift++)');
        // tslint:disable-next-line:max-line-length
        this.subscript = this.createButtonTemplate(element + '_subscript', 'e-de-icon-Subscript e-font-icons', rightDiv, 'e-de-prop-font-last-button', '38.5', 'Subscript (Ctrl+=)');
        // tslint:disable-next-line:max-line-length
        var leftDiv2 = ej2_base_1.createElement('div', { id: element + '_color', className: 'de-font-clr-picker e-de-prop-div-left', styles: 'display:inline-flex;margin-top:8px;height:32px' });
        textDiv.appendChild(leftDiv2);
        // tslint:disable-next-line:max-line-length
        this.fontColor = this.createFontColorPicker(element + '_textColor', 40.5, leftDiv2, 'Font color');
        leftDiv2.firstElementChild.lastElementChild.lastElementChild.firstChild.classList.add('e-de-icon-FontColor', 'e-font-icons');
        this.initializeHighlightColorElement();
        this.highlightColor = this.createHighlightColorSplitButton(element + '_highlightColor', 34.5, leftDiv2, 'Text highlight color');
        this.highlightColor.element.nextElementSibling.firstElementChild.classList.add('e-de-icon-HighlightColor');
        this.highlightColorInputElement = this.highlightColor.element.firstChild;
        // tslint:disable-next-line:max-line-length
        this.clearFormat = this.createButtonTemplate(element + '_clearFormat', 'e-de-icon-ClearAll e-font-icons', leftDiv2, 'e-de-prop-font-last-button', '40.5', 'Clear all formatting');
    };
    Text.prototype.initializeHighlightColorElement = function () {
        this.highlightColorElement = ej2_base_1.createElement('div', { id: 'highlight_color_ppty', styles: 'display:none' });
        var yellowDiv = this.createHightlighColorPickerDiv('#ffff00', 'yellowDiv');
        var brightGreenDiv = this.createHightlighColorPickerDiv('#00ff00', 'brightGreenDiv');
        var turquoiseDiv = this.createHightlighColorPickerDiv('#00ffff', 'turquoiseDiv');
        var hotPinkDiv = this.createHightlighColorPickerDiv('#ff00ff', 'hotPinkDiv');
        var blueDiv = this.createHightlighColorPickerDiv('#0000ff', 'blueDiv');
        var redDiv = this.createHightlighColorPickerDiv('#ff0000', 'redDiv');
        var darkBlueDiv = this.createHightlighColorPickerDiv('#000080', 'darkBlueDiv');
        var tealDiv = this.createHightlighColorPickerDiv('#008080', 'tealDiv');
        var greenDiv = this.createHightlighColorPickerDiv('#008000', 'greenDiv');
        var violetDiv = this.createHightlighColorPickerDiv('#800080', 'violetDiv');
        var darkRedDiv = this.createHightlighColorPickerDiv('#800000', 'darkRedDiv');
        var darkYellowDiv = this.createHightlighColorPickerDiv('#808000', 'darkYellowDiv');
        var gray50Div = this.createHightlighColorPickerDiv('#808080', 'gray50Div');
        var gray25Div = this.createHightlighColorPickerDiv('#c0c0c0', 'gray25Div');
        var blackDiv = this.createHightlighColorPickerDiv('#000000', 'blackDiv');
        var nocolor = ej2_base_1.createElement('div', { className: 'e-hglt-no-color' });
        this.highlightColorElement.appendChild(nocolor);
        // tslint:disable-next-line:max-line-length
        var nocolorDiv = ej2_base_1.createElement('div', { styles: 'width:24px;height:24px;background-color:#ffffff;margin:3px;', id: 'noColorDiv' });
        nocolor.appendChild(nocolorDiv);
        var nocolorDivValue = ej2_base_1.createElement('div', { innerHTML: 'No color', className: 'de-hglt-no-color' });
        nocolorDiv.appendChild(nocolorDivValue);
        yellowDiv.addEventListener('click', this.onHighLightColor);
        brightGreenDiv.addEventListener('click', this.onHighLightColor);
        turquoiseDiv.addEventListener('click', this.onHighLightColor);
        hotPinkDiv.addEventListener('click', this.onHighLightColor);
        blueDiv.addEventListener('click', this.onHighLightColor);
        redDiv.addEventListener('click', this.onHighLightColor);
        darkBlueDiv.addEventListener('click', this.onHighLightColor);
        tealDiv.addEventListener('click', this.onHighLightColor);
        greenDiv.addEventListener('click', this.onHighLightColor);
        violetDiv.addEventListener('click', this.onHighLightColor);
        darkRedDiv.addEventListener('click', this.onHighLightColor);
        darkYellowDiv.addEventListener('click', this.onHighLightColor);
        gray50Div.addEventListener('click', this.onHighLightColor);
        gray25Div.addEventListener('click', this.onHighLightColor);
        blackDiv.addEventListener('click', this.onHighLightColor);
        nocolor.addEventListener('click', this.onHighLightColor);
    };
    Text.prototype.createHightlighColorPickerDiv = function (backgroundColor, id) {
        var colorDiv = ej2_base_1.createElement('div', { className: 'e-de-hglt-btn', id: id });
        colorDiv.style.backgroundColor = backgroundColor;
        this.highlightColorElement.appendChild(colorDiv);
        return colorDiv;
    };
    Text.prototype.createDivTemplate = function (id, parentDiv, style) {
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
    // tslint:disable-next-line:max-line-length
    Text.prototype.createButtonTemplate = function (id, iconcss, div, buttonClass, width, toolTipText) {
        var buttonElement = ej2_base_1.createElement('Button', { id: id });
        buttonElement.style.width = width + 'px';
        buttonElement.style.height = 32 + 'px';
        div.appendChild(buttonElement);
        var btn = new ej2_buttons_1.Button({
            cssClass: buttonClass, iconCss: iconcss
        });
        btn.appendTo(buttonElement);
        buttonElement.setAttribute('title', toolTipText);
        return buttonElement;
    };
    /**
     * Adds file colot elements to parent div.
     */
    Text.prototype.createColorTypeInput = function (elemId) {
        var colorType = ej2_base_1.createElement('input', {
            id: elemId,
            attrs: { 'type': 'color' }, styles: 'position:fixed; left:-100em'
        });
        this.documentEditor.getDocumentEditorElement().parentElement.appendChild(colorType);
        return colorType;
    };
    Text.prototype.createDropDownListForSize = function (fontSelectElement) {
        var _this = this;
        var fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
        this.fontSize = new ej2_dropdowns_1.ComboBox({
            dataSource: fontSize, popupHeight: '180px',
            popupWidth: '78px', width: '78px',
            cssClass: 'e-de-prop-dropdown',
            allowCustom: true,
            showClearButton: false
        });
        this.fontSize.focus = function () { _this.isRetrieving = false; };
        this.fontSize.value = this.documentEditor.selection.characterFormat.fontSize.toString();
        this.fontSize.appendTo(fontSelectElement);
        this.fontSize.element.parentElement.setAttribute('title', 'Font Size');
    };
    Text.prototype.createDropDownListForFamily = function (fontSelectElement) {
        var _this = this;
        var fontStyle = [{ FontName: 'Algerian' }, { FontName: 'Arial' },
            { FontName: 'Calibri' }, { FontName: 'Cambria' }, { FontName: 'Cambria Math' }, { FontName: 'Candara' },
            { FontName: 'Courier New' }, { FontName: 'Georgia' }, { FontName: 'Impact' }, { FontName: 'Segoe Print' },
            { FontName: 'Segoe Script' }, { FontName: 'Segoe UI' }, { FontName: 'Symbol' },
            { FontName: 'Times New Roman' }, { FontName: 'Verdana' }, { FontName: 'Windings' }
        ];
        this.fontFamily = new ej2_dropdowns_1.ComboBox({
            dataSource: fontStyle,
            query: new ej2_data_1.Query().select(['FontName']),
            fields: { text: 'FontName', value: 'FontName' },
            popupHeight: '150px',
            popupWidth: '162px', width: '162px',
            cssClass: 'e-de-prop-dropdown',
            itemTemplate: '<span style="font-family: ${FontName};">${FontName}</span>',
            allowCustom: true,
            showClearButton: false
        });
        this.fontFamily.focus = function () { _this.isRetrieving = false; };
        this.fontFamily.appendTo(fontSelectElement);
        this.fontFamily.element.parentElement.setAttribute('title', 'Font');
    };
    Text.prototype.wireEvent = function () {
        var _this = this;
        this.fontFamily.addEventListener('change', function () { _this.changeFontFamily(); });
        this.fontSize.addEventListener('change', function () { _this.changeFontSize(); });
        this.bold.addEventListener('click', function () { _this.isRetrieving = false; _this.boldAction(); });
        this.italic.addEventListener('click', function () { _this.isRetrieving = false; _this.italicAction(); });
        this.underline.addEventListener('click', function () { _this.isRetrieving = false; _this.underlineAction(); });
        this.strikethrough.addEventListener('click', function () { _this.isRetrieving = false; _this.strikethroughAction(); });
        this.superscript.addEventListener('click', function () { _this.isRetrieving = false; _this.superscriptAction(); });
        this.subscript.addEventListener('click', function () { _this.isRetrieving = false; _this.subscriptAction(); });
        /* tslint:disable-next-line:max-line-length */
        this.fontColorInputElement.addEventListener('change', function (args) { _this.isRetrieving = false; _this.changeFontColor(args); });
        this.clearFormat.addEventListener('click', function () { _this.isRetrieving = false; _this.clearFormatAction(); });
    };
    Text.prototype.unwireEvents = function () {
        this.fontFamily.change = undefined;
        this.fontSize.change = undefined;
        this.bold.click = undefined;
        this.italic.click = undefined;
        this.underline.click = undefined;
        this.strikethrough.click = undefined;
        this.superscript.click = undefined;
        this.subscript.click = undefined;
        this.fontColorInputElement.change = undefined;
        this.highlightColorElement.click = undefined;
        this.highlightColor.click = undefined;
        this.clearFormat.click = undefined;
    };
    Text.prototype.onSelectionChange = function () {
        this.isRetrieving = true;
        if (this.documentEditor.selection) {
            //#region character format
            if (this.documentEditor.selection.characterFormat.fontFamily) {
                this.fontFamily.value = this.documentEditor.selection.characterFormat.fontFamily;
            }
            else {
                this.fontFamily.value = '';
            }
            if (this.documentEditor.selection.characterFormat.fontSize) {
                this.fontSize.value = this.documentEditor.selection.characterFormat.fontSize.toString();
            }
            else {
                this.fontSize.value = '';
            }
            if (this.documentEditor.selection.characterFormat.bold) {
                if (!this.bold.classList.contains('e-btn-toggle')) {
                    this.bold.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.bold.classList.contains('e-btn-toggle')) {
                    this.bold.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.italic) {
                if (!this.italic.classList.contains('e-btn-toggle')) {
                    this.italic.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.italic.classList.contains('e-btn-toggle')) {
                    this.italic.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.underline
                && this.documentEditor.selection.characterFormat.underline !== 'None') {
                if (!this.underline.classList.contains('e-btn-toggle')) {
                    this.underline.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.underline.classList.contains('e-btn-toggle')) {
                    this.underline.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.strikethrough
                && this.documentEditor.selection.characterFormat.strikethrough !== 'None') {
                if (!this.strikethrough.classList.contains('e-btn-toggle')) {
                    this.strikethrough.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.strikethrough.classList.contains('e-btn-toggle')) {
                    this.strikethrough.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.baselineAlignment
                && this.documentEditor.selection.characterFormat.baselineAlignment === 'Subscript') {
                if (!this.subscript.classList.contains('e-btn-toggle')) {
                    this.subscript.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.subscript.classList.contains('e-btn-toggle')) {
                    this.subscript.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.baselineAlignment
                && this.documentEditor.selection.characterFormat.baselineAlignment === 'Superscript') {
                if (!this.superscript.classList.contains('e-btn-toggle')) {
                    this.superscript.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.superscript.classList.contains('e-btn-toggle')) {
                    this.superscript.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.fontColor) {
                this.fontColorInputElement.value = this.documentEditor.selection.characterFormat.fontColor;
            }
            if (this.documentEditor.selection.characterFormat.highlightColor) {
                this.highlightColorInputElement.style.backgroundColor = this.appliedHighlightColor;
                this.applyHighlightColorAsBackground(this.documentEditor.selection.characterFormat.highlightColor);
            }
            //#endregion
        }
    };
    return Text;
}());
exports.Text = Text;
var Paragraph = (function () {
    function Paragraph(documentEditor) {
        var _this = this;
        this.isRetrieving = false;
        this.appliedBulletStyle = 'dot';
        this.appliedNumberingstyle = 'arabic';
        this.appliedLineSpacing = '';
        this.applyLastAppliedNumbering = function () {
            switch (_this.appliedNumberingstyle) {
                case 'arabic':
                    _this.numberedNumberDotClick();
                    break;
                case 'lowletter':
                    _this.numberedLowLetterClick();
                    break;
                case 'upletter':
                    _this.numberedUpLetterClick();
                    break;
                case 'lowroman':
                    _this.numberedLowRomanClick();
                    break;
                case 'uproman':
                    _this.numberedUpRomanClick();
                    break;
            }
        };
        this.applyLastAppliedBullet = function () {
            switch (_this.appliedBulletStyle) {
                case 'dot':
                    _this.bulletDotClick();
                    break;
                case 'circle':
                    _this.bulletCircleClick();
                    break;
                case 'square':
                    _this.bulletSquareClick();
                    break;
                case 'arrow':
                    _this.bulletArrowClick();
                    break;
                case 'tick':
                    _this.bulletTickClick();
                    break;
                case 'flower':
                    _this.bulletFlowerClick();
                    break;
            }
        };
        this.updateSelectedBulletListType = function (listText) {
            switch (listText) {
                case '\uf0b7':
                    _this.dotBullet.classList.add('de-list-item-selected');
                    break;
                case '\uf06f' + '\u0020':
                    _this.circleBullet.classList.add('de-list-item-selected');
                    break;
                case '\uf0a7':
                    _this.squareBullet.classList.add('de-list-item-selected');
                    break;
                case '\uf076':
                    _this.flowerBullet.classList.add('de-list-item-selected');
                    break;
                case '\uf0d8':
                    _this.arrowBullet.classList.add('de-list-item-selected');
                    break;
                case '\uf0fc':
                    _this.tickBullet.classList.add('de-list-item-selected');
                    break;
                default:
                    _this.noneBulletTag.classList.add('de-list-item-selected');
                    break;
            }
        };
        this.updateSelectedNumberedListType = function (listText) {
            switch (listText) {
                case '1.':
                    _this.numberList.classList.add('de-list-item-selected');
                    break;
                case 'I.':
                    _this.upRoman.classList.add('de-list-item-selected');
                    break;
                case 'A.':
                    _this.upLetter.classList.add('de-list-item-selected');
                    break;
                case 'a.':
                    _this.lowLetter.classList.add('de-list-item-selected');
                    break;
                case 'i.':
                    _this.lowRoman.classList.add('de-list-item-selected');
                    break;
                default:
                    _this.noneNumberTag.classList.add('de-list-item-selected');
                    break;
            }
        };
        this.removeSelectedList = function () {
            var className = 'de-list-item-selected';
            _this.noneNumberTag.classList.remove(className);
            _this.numberList.classList.remove(className);
            _this.lowLetter.classList.remove(className);
            _this.upLetter.classList.remove(className);
            _this.lowRoman.classList.remove(className);
            _this.upRoman.classList.remove(className);
            _this.noneBulletTag.classList.remove(className);
            _this.dotBullet.classList.remove(className);
            _this.circleBullet.classList.remove(className);
            _this.squareBullet.classList.remove(className);
            _this.flowerBullet.classList.remove(className);
            _this.arrowBullet.classList.remove(className);
            _this.tickBullet.classList.remove(className);
        };
        this.updateOptions = function (args) {
            _this.updateStyleNames();
            args.popup.element.getElementsByClassName('create-style-footer')[0].addEventListener('click', _this.createStyle);
        };
        this.closeStyleValue = function (args) {
            if (!ej2_base_1.isNullOrUndefined(_this.styleName)) {
                _this.style.value = _this.styleName;
                _this.style.dataBind();
            }
        };
        this.createStyle = function () {
            _this.style.hidePopup();
            if (!_this.documentEditor.isReadOnly) {
                _this.documentEditor.showDialog('Styles');
            }
        };
        this.leftAlignmentAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleTextAlignment('Left');
            }
        };
        this.lineSpacingAction = function (args) {
            if (_this.isRetrieving) {
                return;
            }
            var text = args.item.text;
            switch (text) {
                case 'Single':
                    _this.documentEditor.selection.paragraphFormat.lineSpacing = 1;
                    break;
                case '1.15':
                    _this.documentEditor.selection.paragraphFormat.lineSpacing = 1.15;
                    break;
                case '1.5':
                    _this.documentEditor.selection.paragraphFormat.lineSpacing = 1.5;
                    break;
                case 'Double':
                    _this.documentEditor.selection.paragraphFormat.lineSpacing = 2;
                    break;
            }
            setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
        };
        this.selectStyleValue = function (args) {
            if (_this.isRetrieving || !args.isInteracted) {
                return;
            }
            setTimeout(function () { _this.applyStyleValue(args); }, 10);
        };
        /* tslint:enable:no-any */
        this.rightAlignmentAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleTextAlignment('Right');
            }
        };
        this.centerAlignmentAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleTextAlignment('Center');
            }
        };
        this.justifyAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleTextAlignment('Justify');
            }
        };
        this.increaseIndentAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.increaseIndent();
            }
        };
        this.decreaseIndentAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.decreaseIndent();
            }
        };
        this.numberedNoneClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.documentEditor.editor.clearList();
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.numberedNumberDotClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedNumberingstyle = 'arabic';
                _this.documentEditor.editor.applyNumbering('%1.', 'Arabic');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.numberedUpRomanClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedNumberingstyle = 'uproman';
                _this.documentEditor.editor.applyNumbering('%1.', 'UpRoman');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.numberedUpLetterClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedNumberingstyle = 'upletter';
                _this.documentEditor.editor.applyNumbering('%1.', 'UpLetter');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.numberedLowLetterClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedNumberingstyle = 'lowletter';
                _this.documentEditor.editor.applyNumbering('%1.', 'LowLetter');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.numberedLowRomanClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedNumberingstyle = 'lowroman';
                _this.documentEditor.editor.applyNumbering('%1.', 'LowRoman');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletDotClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'dot';
                _this.documentEditor.editor.applyBullet('\uf0b7', 'Symbol');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletCircleClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'circle';
                _this.documentEditor.editor.applyBullet('\uf06f' + '\u0020', 'Symbol');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletSquareClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'square';
                _this.documentEditor.editor.applyBullet('\uf0a7', 'Wingdings');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletFlowerClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'flower';
                _this.documentEditor.editor.applyBullet('\uf076', 'Wingdings');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletArrowClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'arrow';
                _this.documentEditor.editor.applyBullet('\uf0d8', 'Wingdings');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletTickClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'tick';
                _this.documentEditor.editor.applyBullet('\uf0fc', 'Wingdings');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.documentEditor = documentEditor;
    }
    Paragraph.prototype.initializeParagraphPropertiesDiv = function (wholeDiv) {
        this.textProperties = wholeDiv;
        var element = 'font_properties';
        var paragraphDiv = this.createDivTemplate(element + '_paragraph', wholeDiv, 'padding:10px;');
        var label = ej2_base_1.createElement('label', { styles: 'width:26px;', className: 'e-de-prop-label' });
        label.innerHTML = 'Paragraph';
        paragraphDiv.appendChild(label);
        var styleDiv = this.createDivTemplate(element + '_styleDiv', paragraphDiv, 'margin-bottom: 8px;');
        // tslint:disable-next-line:max-line-length
        var styleSelect = ej2_base_1.createElement('input', { id: element + '_style', styles: 'width:248px;font-size: 12px;color: #000000;letter-spacing: 0.05px;padding-left:10px;' });
        styleDiv.appendChild(styleSelect);
        this.createStyleDropDownList(styleSelect);
        var indentWholeDiv = this.createDivTemplate(element + '_indentWholeDiv', paragraphDiv);
        indentWholeDiv.style.display = 'flex';
        // tslint:disable-next-line:max-line-length
        var indentDiv = this.createDivTemplate(element + '_indentDiv', indentWholeDiv, 'width:164px;height:32px;display:flex;');
        indentDiv.className = 'e-de-prop-div-left e-btn-group';
        // tslint:disable-next-line:max-line-length
        this.leftAlignment = this.createButtonTemplate(element + '_leftIndent', 'e-de-icon-AlignLeft e-font-icons', indentDiv, 'e-de-prop-indent-button', '40.5', 'Align left (Ctrl+L)');
        // tslint:disable-next-line:max-line-length
        this.centerAlignment = this.createButtonTemplate(element + '_centerIndent', 'e-de-icon-AlignCenter e-font-icons', indentDiv, 'e-de-prop-indent-button', '40.5', 'Center (Ctrl+E)');
        // tslint:disable-next-line:max-line-length
        this.rightAlignment = this.createButtonTemplate(element + '_rightIndent', 'e-de-icon-AlignRight e-font-icons', indentDiv, 'e-de-prop-indent-button', '40.5', 'Align right (Ctrl+R)');
        // tslint:disable-next-line:max-line-length
        this.justify = this.createButtonTemplate(element + '_justify', 'e-de-icon-Justify e-font-icons', indentDiv, 'e-de-prop-indent-last-button', '40.5', 'Justify (Ctrl+J)');
        var incDecIndentDiv = this.createDivTemplate(element + '_indentDiv', indentWholeDiv, 'width:75px;height:32px;display:flex;');
        incDecIndentDiv.className = 'e-de-prop-div-left e-btn-group';
        incDecIndentDiv.style.marginLeft = '8px';
        // tslint:disable-next-line:max-line-length
        this.decreaseIndent = this.createButtonTemplate(element + '_decreaseIndent', 'e-de-icon-DecreaseIndent e-font-icons', incDecIndentDiv, 'e-de-prop-indent-button', '37', 'Decrease indent');
        // tslint:disable-next-line:max-line-length
        this.increaseIndent = this.createButtonTemplate(element + '_increaseIndent', 'e-de-icon-IncreaseIndent e-font-icons', incDecIndentDiv, 'e-de-prop-indent-last-button', '37', 'Increase indent');
        var listDiv = this.createDivTemplate(element + '_listDiv', paragraphDiv, 'margin-top:8px;display:flex;');
        var lineHeight = ej2_base_1.createElement('button', { id: element + '_lineHeight' });
        listDiv.appendChild(lineHeight);
        this.lineSpacing = this.createLineSpacingDropdown(lineHeight);
        var listDropDown = this.createDivTemplate(element + '_listDropDiv', listDiv);
        listDropDown.className = 'de-split-button';
        listDropDown.style.paddingLeft = '10px';
        var bulletButton = ej2_base_1.createElement('button', { id: element + '_bullet' });
        listDropDown.appendChild(bulletButton);
        var numberingList = ej2_base_1.createElement('button', { id: element + '_numberingList' });
        listDropDown.appendChild(numberingList);
        this.createBulletListDropButton('e-de-icon-Bullets', bulletButton);
        this.createNumberListDropButton('e-de-icon-Numbering', numberingList);
    };
    Paragraph.prototype.createSeperator = function (parentDiv) {
        var seperator = ej2_base_1.createElement('div', { className: 'e-de-prop-vline' });
        parentDiv.appendChild(seperator);
    };
    Paragraph.prototype.createDivTemplate = function (id, parentDiv, style) {
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
    // tslint:disable-next-line:max-line-length
    Paragraph.prototype.createButtonTemplate = function (id, iconcss, div, buttonClass, width, toolTipText) {
        var buttonElement = ej2_base_1.createElement('Button', { id: id });
        buttonElement.style.width = width + 'px';
        buttonElement.style.height = 32 + 'px';
        div.appendChild(buttonElement);
        var btn = new ej2_buttons_1.Button({
            cssClass: buttonClass, iconCss: iconcss
        });
        btn.appendTo(buttonElement);
        buttonElement.setAttribute('title', toolTipText);
        return buttonElement;
    };
    Paragraph.prototype.createLineSpacingDropdown = function (button) {
        var _this = this;
        var items = [{
                text: 'Single'
            }, {
                text: '1.15'
            }, {
                text: '1.5'
            }, {
                text: 'Double'
            }];
        var dropdown = new ej2_splitbuttons_1.DropDownButton({
            items: items,
            iconCss: 'e-de-icon-LineSpacing',
            select: this.lineSpacingAction,
            cssClass: 'e-de-prop-splitbutton',
            beforeItemRender: function (args) {
                args.element.innerHTML = '<span></span>' + args.item.text;
                var span = args.element.children[0];
                if (args.item.text === _this.appliedLineSpacing) {
                    span.style.marginRight = '10px';
                    span.setAttribute('class', 'e-de-selected-item');
                }
                else {
                    args.element.children[0].style.marginRight = '25px';
                    args.element.children[0].classList.remove('e-de-selected-item');
                }
            }
        });
        dropdown.appendTo(button);
        button.setAttribute('title', 'Line spacing');
        return dropdown;
    };
    Paragraph.prototype.createNumberListDropButton = function (iconcss, button) {
        var _this = this;
        var div = ej2_base_1.createElement('div', { id: 'target', styles: 'width: 213px;height: auto;display:none' });
        var ulTag = ej2_base_1.createElement('ul', {
            styles: 'display: block; outline: 0px;',
            id: 'listMenu',
            className: 'ui-wfloating-menu ui-bullets-menu de-list-container de-list-thumbnail'
        });
        div.appendChild(ulTag);
        this.noneNumberTag = this.createNumberNoneListTag(ulTag);
        this.noneNumberTag.addEventListener('click', this.numberedNoneClick);
        this.numberList = this.createNumberListTag(ulTag, '1.', '2.', '3.');
        this.numberList.addEventListener('click', this.numberedNumberDotClick);
        this.lowLetter = this.createNumberListTag(ulTag, 'a.', 'b.', 'c.');
        this.lowLetter.addEventListener('click', this.numberedLowLetterClick);
        this.upLetter = this.createNumberListTag(ulTag, 'A.', 'B.', 'C.');
        this.upLetter.addEventListener('click', this.numberedUpLetterClick);
        this.lowRoman = this.createNumberListTag(ulTag, 'i.', 'ii.', 'iii.');
        this.lowRoman.addEventListener('click', this.numberedLowRomanClick);
        this.upRoman = this.createNumberListTag(ulTag, 'I.', 'II.', 'III.');
        this.upRoman.addEventListener('click', this.numberedUpRomanClick);
        var menuOptions = {
            target: div,
            iconCss: iconcss,
            cssClass: 'e-de-prop-splitbutton',
            beforeOpen: function () {
                _this.updateSelectedNumberedListType(_this.documentEditor.selection.paragraphFormat.listText);
                div.style.display = 'block';
            },
            beforeClose: function () {
                _this.removeSelectedList();
                div.style.display = 'none';
            }
        };
        var dropdown = new ej2_splitbuttons_1.SplitButton(menuOptions);
        dropdown.click = function () {
            _this.applyLastAppliedNumbering();
        };
        dropdown.appendTo(button);
        button.parentElement.setAttribute('title', 'Numbering');
    };
    Paragraph.prototype.createBulletListDropButton = function (iconcss, button) {
        var _this = this;
        var div = ej2_base_1.createElement('div', { id: 'bullet_list', styles: 'width: 198px;height: auto;display:none' });
        var ulTag = ej2_base_1.createElement('ul', {
            styles: 'display: block; outline: 0px;', id: 'listMenu',
            className: 'ui-wfloating-menu ui-bullets-menu de-list-container de-list-thumbnail'
        });
        div.appendChild(ulTag);
        this.noneBulletTag = this.createBulletListTag(ulTag, 'e-de-icon-bullet-none');
        this.noneBulletTag.addEventListener('click', this.numberedNoneClick);
        this.dotBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-dot');
        this.dotBullet.addEventListener('click', this.bulletDotClick);
        this.circleBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-circle');
        this.circleBullet.addEventListener('click', this.bulletCircleClick);
        this.squareBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-square');
        this.squareBullet.addEventListener('click', this.bulletSquareClick);
        this.flowerBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-flower');
        this.flowerBullet.addEventListener('click', this.bulletFlowerClick);
        this.arrowBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-arrow');
        this.arrowBullet.addEventListener('click', this.bulletArrowClick);
        this.tickBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-tick');
        this.tickBullet.addEventListener('click', this.bulletTickClick);
        var menuOptions = {
            target: div,
            iconCss: iconcss,
            cssClass: 'e-de-prop-splitbutton',
            beforeOpen: function () {
                _this.updateSelectedBulletListType(_this.documentEditor.selection.paragraphFormat.listText);
                div.style.display = 'block';
            },
            beforeClose: function () {
                _this.removeSelectedList();
                div.style.display = 'none';
            }
        };
        var dropdown = new ej2_splitbuttons_1.SplitButton(menuOptions);
        dropdown.click = function () {
            _this.applyLastAppliedBullet();
        };
        dropdown.appendTo(button);
        button.parentElement.setAttribute('title', 'Bullets');
    };
    Paragraph.prototype.createNumberListTag = function (ulTag, text1, text2, text3) {
        var liTag = ej2_base_1.createElement('li', {
            styles: 'display:block',
            className: 'ui-wfloating-menuitem ui-wfloating-menuitem-md de-list-items  de-list-item-size'
        });
        ulTag.appendChild(liTag);
        var innerHTML = '<div>' + text1 + '<span class="ui-list-line"></span></div><div>' + text2 + '<span class="ui-list-line">';
        innerHTML += '</span></div><div>' + text3 + '<span class="ui-list-line"> </span></div >';
        var liInnerDiv = ej2_base_1.createElement('div', {
            className: 'ui-list-header-presetmenu',
            id: 'ui-zlist0', innerHTML: innerHTML
        });
        liTag.appendChild(liInnerDiv);
        return liTag;
    };
    Paragraph.prototype.createNumberNoneListTag = function (ulTag) {
        var liTag = ej2_base_1.createElement('li', {
            styles: 'display:block;',
            className: 'ui-wfloating-menuitem ui-wfloating-menuitem-md de-list-items  de-list-item-size'
        });
        ulTag.appendChild(liTag);
        var innerHTML = '<div class="e-de-list-items-size"><span class="ui-bullets e-de-list-items-size"' +
            'style="display:table-cell; text-align: center; vertical-align:middle">None</span></div>';
        var liInnerDiv = ej2_base_1.createElement('div', {
            className: 'ui-list-header-presetmenu e-de-list-items-size',
            id: 'ui-zlist0', innerHTML: innerHTML
        });
        liTag.appendChild(liInnerDiv);
        return liTag;
    };
    Paragraph.prototype.createBulletListTag = function (ulTag, iconCss) {
        var liTag = ej2_base_1.createElement('li', {
            styles: 'display:block;',
            className: 'ui-wfloating-menuitem ui-wfloating-bullet-menuitem-md de-list-items  de-list-item-size'
        });
        ulTag.appendChild(liTag);
        var liInnerDiv = ej2_base_1.createElement('div', { className: 'ui-bullet-list-header-presetmenu', id: 'ui-zlist0' });
        var spanDiv = ej2_base_1.createElement('div');
        liInnerDiv.appendChild(spanDiv);
        var span = ej2_base_1.createElement('span', { className: iconCss });
        spanDiv.appendChild(span);
        liTag.appendChild(liInnerDiv);
        return liTag;
    };
    Paragraph.prototype.createStyleDropDownList = function (selectElement) {
        this.style = new ej2_dropdowns_1.DropDownList({
            dataSource: [{ StyleName: 'Normal', Class: 'e-font-icons e-edit-font' }],
            cssClass: 'e-de-prop-dropdown',
            query: new ej2_data_1.Query().select(['StyleName', 'Style']),
            fields: { text: 'StyleName', value: 'StyleName' },
            open: this.updateOptions,
            change: this.selectStyleValue,
            close: this.closeStyleValue,
            itemTemplate: '<span style="${Style}">${StyleName}</span>',
            footerTemplate: '<span class="create-style-footer">Manage Styles</span>'
        });
        this.style.appendTo(selectElement);
        selectElement.parentElement.setAttribute('title', 'Styles');
    };
    Paragraph.prototype.updateStyleNames = function () {
        /* tslint:disable:no-any */
        this.styleName = !ej2_base_1.isNullOrUndefined(this.style.itemData) ? this.style.itemData.StyleName : undefined;
        this.style.dataSource = this.constructStyleDropItems(this.documentEditor.getStyles('Paragraph'));
        this.style.dataBind();
        this.onSelectionChange();
    };
    Paragraph.prototype.constructStyleDropItems = function (styles) {
        var collection = [];
        for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
            var styleObj = styles_1[_i];
            var obj = {};
            obj.StyleName = styleObj.name;
            obj.Style = this.parseStyle(styleObj.style);
            collection.push(obj);
        }
        return collection;
    };
    Paragraph.prototype.parseStyle = function (style) {
        var domStyle = '';
        var styleObj = JSON.parse(style);
        var textDecoration = '';
        if (!ej2_base_1.isNullOrUndefined(styleObj.characterFormat.baselineAlignment) && styleObj.characterFormat.baselineAlignment !== 'Normal') {
            var vAlign = '';
            switch (styleObj.characterFormat.baselineAlignment) {
                case 'Superscript':
                    vAlign = 'super';
                    break;
                case 'Subscript':
                    vAlign = 'sub';
                    break;
            }
            if (vAlign.length > 1) {
                domStyle += 'vertical-align:' + vAlign + ';';
            }
        }
        if (!ej2_base_1.isNullOrUndefined(styleObj.characterFormat.underline) && styleObj.characterFormat.underline !== 'None') {
            textDecoration += 'underline ';
        }
        if (!ej2_base_1.isNullOrUndefined(styleObj.characterFormat.strikethrough) && styleObj.characterFormat.strikethrough !== 'None') {
            textDecoration += 'line-through ';
        }
        if (!ej2_base_1.isNullOrUndefined(styleObj.characterFormat.fontSize)) {
            domStyle += 'font-size:' + styleObj.characterFormat.fontSize + 'px;';
        }
        if (!ej2_base_1.isNullOrUndefined(styleObj.characterFormat.fontFamily)) {
            domStyle += 'font-family:' + styleObj.characterFormat.fontFamily + ';';
        }
        if (!ej2_base_1.isNullOrUndefined(styleObj.characterFormat.bold) && styleObj.characterFormat.bold) {
            domStyle += 'font-weight:bold;';
        }
        if (!ej2_base_1.isNullOrUndefined(styleObj.characterFormat.italic) && styleObj.characterFormat.italic) {
            domStyle += 'font-style:italic;';
        }
        if (!ej2_base_1.isNullOrUndefined(styleObj.characterFormat.fontColor)) {
            domStyle += 'color: ' + styleObj.characterFormat.fontColor + ';';
        }
        if (textDecoration.length > 1) {
            domStyle += 'text-decoration:' + textDecoration + ';';
        }
        return domStyle;
    };
    /* tslint:enable:no-any */
    Paragraph.prototype.wireEvent = function () {
        var _this = this;
        this.leftAlignment.addEventListener('click', function () { _this.leftAlignmentAction(); });
        this.rightAlignment.addEventListener('click', function () { _this.rightAlignmentAction(); });
        this.centerAlignment.addEventListener('click', function () { _this.centerAlignmentAction(); });
        this.justify.addEventListener('click', function () { _this.justifyAction(); });
        this.increaseIndent.addEventListener('click', function () { _this.increaseIndentAction(); });
        this.decreaseIndent.addEventListener('click', function () { _this.decreaseIndentAction(); });
        /* tslint:disable-next-line:max-line-length */
        this.lineSpacing.addEventListener('select', function (args) { _this.lineSpacingAction(args); });
    };
    Paragraph.prototype.unwireEvents = function () {
        this.leftAlignment.click = undefined;
        this.rightAlignment.click = undefined;
        this.centerAlignment.click = undefined;
        this.justify.click = undefined;
        this.increaseIndent.click = undefined;
        this.decreaseIndent.click = undefined;
        this.lineSpacing.select = undefined;
        this.style.select = undefined;
    };
    Paragraph.prototype.setLineSpacing = function () {
        var lineSpacing = this.documentEditor.selection.paragraphFormat.lineSpacing;
        if (lineSpacing === 1) {
            this.appliedLineSpacing = 'Single';
        }
        else if (lineSpacing === 1.15) {
            this.appliedLineSpacing = '1.15';
        }
        else if (lineSpacing === 1.5) {
            this.appliedLineSpacing = '1.5';
        }
        else if (lineSpacing === 2) {
            this.appliedLineSpacing = 'Double';
        }
        else {
            this.appliedLineSpacing = '';
        }
    };
    /* tslint:disable:no-any */
    Paragraph.prototype.applyStyleValue = function (args) {
        if (!this.documentEditor.isReadOnly && this.documentEditor.editor) {
            this.documentEditor.editor.applyStyle(args.itemData.StyleName);
        }
    };
    Paragraph.prototype.onSelectionChange = function () {
        this.isRetrieving = true;
        if (this.documentEditor.editor) {
            //#region paragraph format
            var style = this.documentEditor.selection.paragraphFormat.styleName;
            if (style) {
                this.style.value = style;
                this.style.dataBind();
            }
            else {
                this.style.value = '';
            }
            if (this.documentEditor.selection.paragraphFormat.textAlignment === 'Left') {
                if (!this.leftAlignment.classList.contains('e-btn-toggle')) {
                    this.leftAlignment.classList.add('e-btn-toggle');
                }
                if (this.rightAlignment.classList.contains('e-btn-toggle')) {
                    this.rightAlignment.classList.remove('e-btn-toggle');
                }
                if (this.centerAlignment.classList.contains('e-btn-toggle')) {
                    this.centerAlignment.classList.remove('e-btn-toggle');
                }
                if (this.justify.classList.contains('e-btn-toggle')) {
                    this.justify.classList.remove('e-btn-toggle');
                }
            }
            else if (this.documentEditor.selection.paragraphFormat.textAlignment === 'Right') {
                if (this.leftAlignment.classList.contains('e-btn-toggle')) {
                    this.leftAlignment.classList.remove('e-btn-toggle');
                }
                if (!this.rightAlignment.classList.contains('e-btn-toggle')) {
                    this.rightAlignment.classList.add('e-btn-toggle');
                }
                if (this.centerAlignment.classList.contains('e-btn-toggle')) {
                    this.centerAlignment.classList.remove('e-btn-toggle');
                }
                if (this.justify.classList.contains('e-btn-toggle')) {
                    this.justify.classList.remove('e-btn-toggle');
                }
            }
            else if (this.documentEditor.selection.paragraphFormat.textAlignment === 'Center') {
                if (this.leftAlignment.classList.contains('e-btn-toggle')) {
                    this.leftAlignment.classList.remove('e-btn-toggle');
                }
                if (this.rightAlignment.classList.contains('e-btn-toggle')) {
                    this.rightAlignment.classList.remove('e-btn-toggle');
                }
                if (!this.centerAlignment.classList.contains('e-btn-toggle')) {
                    this.centerAlignment.classList.add('e-btn-toggle');
                }
                if (this.justify.classList.contains('e-btn-toggle')) {
                    this.justify.classList.remove('e-btn-toggle');
                }
            }
            else if (this.documentEditor.selection.paragraphFormat.textAlignment === 'Justify') {
                if (this.leftAlignment.classList.contains('e-btn-toggle')) {
                    this.leftAlignment.classList.remove('e-btn-toggle');
                }
                if (this.rightAlignment.classList.contains('e-btn-toggle')) {
                    this.rightAlignment.classList.remove('e-btn-toggle');
                }
                if (this.centerAlignment.classList.contains('e-btn-toggle')) {
                    this.centerAlignment.classList.remove('e-btn-toggle');
                }
                if (!this.justify.classList.contains('e-btn-toggle')) {
                    this.justify.classList.add('e-btn-toggle');
                }
            }
            else if (this.documentEditor.selection.paragraphFormat.textAlignment === 'Justify') {
                if (this.leftAlignment.classList.contains('e-btn-toggle')) {
                    this.leftAlignment.classList.remove('e-btn-toggle');
                }
                if (this.rightAlignment.classList.contains('e-btn-toggle')) {
                    this.rightAlignment.classList.remove('e-btn-toggle');
                }
                if (this.centerAlignment.classList.contains('e-btn-toggle')) {
                    this.centerAlignment.classList.remove('e-btn-toggle');
                }
                if (!this.justify.classList.contains('e-btn-toggle')) {
                    this.justify.classList.add('e-btn-toggle');
                }
            }
            //#endregion
        }
        this.setLineSpacing();
        this.isRetrieving = false;
    };
    return Paragraph;
}());
exports.Paragraph = Paragraph;

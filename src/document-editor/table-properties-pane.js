"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_navigations_1 = require("@syncfusion/ej2-navigations");
var text_properties_pane_1 = require("./text-properties-pane");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var ej2_inputs_1 = require("@syncfusion/ej2-inputs");
/**
 * Represents table properties
 */
var TableProperties = (function () {
    function TableProperties(docEditor, imageProperty, textProperties) {
        var _this = this;
        this.isTopMarginApply = false;
        this.isRightMarginApply = false;
        this.isBottomMarginApply = false;
        this.isLeftMarginApply = false;
        this.borderColor = '#000000';
        this.initializeTablePropPane = function () {
            _this.tableProperties = ej2_base_1.createElement('div', { id: _this.elementId + '_tableProperties', styles: 'width:269px;' });
            _this.initFillColorDiv();
            _this.initBorderStylesDiv();
            _this.initCellDiv();
            _this.initInsertOrDelCell();
            _this.initCellMargin();
            _this.initAlignText();
            _this.addTablePropertyTab();
            // wire fnt property
            _this.wireEvent();
        };
        this.addTablePropertyTab = function () {
            // tslint:disable-next-line:max-line-length
            _this.element = ej2_base_1.createElement('div', { id: _this.elementId + '_propertyTabDiv', className: 'e-de-property-tab', styles: 'display:none;width:269px' });
            // tslint:disable-next-line:max-line-length
            var items = [{ header: { text: 'Table' }, content: _this.tableProperties }, { header: { text: 'Text' }, content: _this.tableTextProperties.element }];
            _this.propertiesTab = new ej2_navigations_1.Tab({ items: items, animation: { previous: { effect: 'None' }, next: { effect: 'None' } }, selected: _this.onTabSelection }, _this.element);
        };
        this.onTabSelection = function () {
            _this.documentEditor.resize();
        };
        this.wireEvent = function () {
            _this.shadingBtn.addEventListener('change', _this.changeBackgroundColor);
            // tslint:disable-next-line:max-line-length
            _this.borderBtn.addEventListener('change', function (args) { setTimeout(function () { _this.borderColor = args.currentValue.hex; _this.tableOutlineBorder.element.focus(); }, 10); });
            _this.tableOutlineBorder.element.addEventListener('click', _this.onOutlineBorder);
            _this.tableAllBorder.element.addEventListener('click', _this.onAllBorder);
            _this.tableCenterBorder.element.addEventListener('click', _this.onInsideBorder);
            _this.tableLeftBorder.element.addEventListener('click', _this.onLeftBorder);
            _this.tableCenterVerticalBorder.element.addEventListener('click', _this.onVerticalBorder);
            _this.tableRightBorder.element.addEventListener('click', _this.onRightBorder);
            _this.tableTopBorder.element.addEventListener('click', _this.onTopBorder);
            _this.tableCenterHorizontalBorder.element.addEventListener('click', _this.onHorizontalBorder);
            _this.tableBottomBorder.element.addEventListener('click', _this.onBottomBorder);
            _this.insertRowAbove.element.addEventListener('click', _this.onInsertRowAbove);
            _this.insertRowBelow.element.addEventListener('click', _this.onInsertRowBelow);
            _this.insertColumnLeft.element.addEventListener('click', _this.onInsertColumnLeft);
            _this.insertColumnRight.element.addEventListener('click', _this.onInsertColumnRight);
            _this.deleteRow.element.addEventListener('click', _this.onDeleteRow);
            _this.deleteColumn.element.addEventListener('click', _this.onDeleteColumn);
            _this.horizontalMerge.element.addEventListener('click', _this.onMergeCell);
            _this.alignTop.element.addEventListener('click', _this.applyAlignTop);
            _this.alignBottom.element.addEventListener('click', _this.applyAlignBottom);
            _this.alignCenterHorizontal.element.addEventListener('click', _this.applyAlignCenterHorizontal);
            _this.topMargin.element.addEventListener('click', function () { _this.isTopMarginApply = true; });
            _this.rightMargin.element.addEventListener('click', function () { _this.isRightMarginApply = true; });
            _this.leftMargin.element.addEventListener('click', function () { _this.isLeftMarginApply = true; });
            _this.bottomMargin.element.addEventListener('click', function () { _this.isBottomMarginApply = true; });
            _this.topMargin.element.addEventListener('keydown', _this.onTopMargin);
            _this.rightMargin.element.addEventListener('keydown', _this.onRightMargin);
            _this.leftMargin.element.addEventListener('keydown', _this.onLeftMargin);
            _this.bottomMargin.element.addEventListener('keydown', _this.onBottomMargin);
            _this.topMargin.element.addEventListener('blur', function () { _this.applyTopMargin(); _this.isTopMarginApply = false; });
            _this.rightMargin.element.addEventListener('blur', function () { _this.applyRightMargin(); _this.isRightMarginApply = false; });
            _this.leftMargin.element.addEventListener('blur', function () { _this.applyLeftMargin(); _this.isLeftMarginApply = false; });
            _this.bottomMargin.element.addEventListener('blur', function () { _this.applyBottomMargin(); _this.isBottomMarginApply = false; });
        };
        this.getBorder = function (border) {
            var lineWidth = (_this.borderSize.content.indexOf('No Border') >= 0) ? 0 : parseInt(_this.borderSize.content, 0);
            var linestyle = (lineWidth === 0) ? 'Cleared' : 'Single';
            var borderSettings = {
                type: border,
                borderColor: _this.borderColor,
                lineWidth: lineWidth,
                borderStyle: linestyle
            };
            return borderSettings;
        };
        this.onOutlineBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('OutsideBorders'));
        };
        this.onAllBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('AllBorders'));
        };
        this.onInsideBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('InsideBorders'));
        };
        this.onLeftBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('LeftBorder'));
        };
        this.onVerticalBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('InsideVerticalBorder'));
        };
        this.onRightBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('RightBorder'));
        };
        this.onTopBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('TopBorder'));
        };
        this.onHorizontalBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('InsideHorizontalBorder'));
        };
        this.onBottomBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('BottomBorder'));
        };
        this.onTopMargin = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyTopMargin(); _this.isTopMarginApply = false; }, 30);
            }
        };
        this.onBottomMargin = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyBottomMargin(); _this.isBottomMarginApply = false; }, 30);
            }
        };
        this.onLeftMargin = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyLeftMargin(); _this.isLeftMarginApply = false; }, 30);
            }
        };
        this.onRightMargin = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyRightMargin(); _this.isRightMarginApply = false; }, 30);
            }
        };
        this.applyTopMargin = function () {
            if (!_this.isTopMarginApply) {
                return;
            }
            _this.documentEditor.selection.cellFormat.topMargin = (_this.topMargin.value > _this.topMargin.max)
                ? _this.topMargin.max : _this.topMargin.value;
        };
        this.applyBottomMargin = function () {
            if (!_this.isBottomMarginApply) {
                return;
            }
            _this.documentEditor.selection.cellFormat.bottomMargin = (_this.bottomMargin.value > _this.bottomMargin.max)
                ? _this.bottomMargin.max : _this.bottomMargin.value;
        };
        this.applyLeftMargin = function () {
            if (!_this.isLeftMarginApply) {
                return;
            }
            _this.documentEditor.selection.cellFormat.leftMargin = (_this.leftMargin.value > _this.leftMargin.max)
                ? _this.leftMargin.max : _this.leftMargin.value;
        };
        this.applyRightMargin = function () {
            if (!_this.isRightMarginApply) {
                return;
            }
            _this.documentEditor.selection.cellFormat.rightMargin = (_this.rightMargin.value > _this.rightMargin.max)
                ? _this.rightMargin.max : _this.rightMargin.value;
        };
        this.applyAlignTop = function () {
            _this.documentEditor.selection.cellFormat.verticalAlignment = 'Top';
        };
        this.applyAlignBottom = function () {
            _this.documentEditor.selection.cellFormat.verticalAlignment = 'Bottom';
        };
        this.applyAlignCenterHorizontal = function () {
            _this.documentEditor.selection.cellFormat.verticalAlignment = 'Center';
        };
        this.onMergeCell = function () {
            _this.documentEditor.editor.mergeCells();
        };
        this.onInsertRowAbove = function () {
            _this.documentEditor.editor.insertRow(true);
        };
        this.onInsertRowBelow = function () {
            _this.documentEditor.editor.insertRow(false);
        };
        this.onInsertColumnLeft = function () {
            _this.documentEditor.editor.insertColumn(true);
        };
        this.onInsertColumnRight = function () {
            _this.documentEditor.editor.insertColumn(false);
        };
        this.onDeleteRow = function () {
            _this.documentEditor.editor.deleteRow();
        };
        this.onDeleteColumn = function () {
            _this.documentEditor.editor.deleteColumn();
        };
        this.onSelectionChange = function () {
            if (_this.documentEditor.selection) {
                if (_this.documentEditor.editor && _this.documentEditor.editor.canMergeCells()) {
                    _this.horizontalMerge.disabled = false;
                }
                else {
                    _this.horizontalMerge.disabled = true;
                }
                if (_this.documentEditor.selection.contextType === 'TableText' || _this.documentEditor.selection.contextType === 'TableImage') {
                    _this.shadingBtn.value = _this.documentEditor.selection.cellFormat.background;
                }
                // tslint:disable-next-line:max-line-length
                _this.topMargin.value = _this.documentEditor.selection.cellFormat.topMargin ? _this.documentEditor.selection.cellFormat.topMargin : 0;
                // tslint:disable-next-line:max-line-length
                _this.bottomMargin.value = _this.documentEditor.selection.cellFormat.bottomMargin ? _this.documentEditor.selection.cellFormat.bottomMargin : 0;
                // tslint:disable-next-line:max-line-length
                _this.rightMargin.value = _this.documentEditor.selection.cellFormat.rightMargin ? _this.documentEditor.selection.cellFormat.rightMargin : 0;
                // tslint:disable-next-line:max-line-length
                _this.leftMargin.value = _this.documentEditor.selection.cellFormat.leftMargin ? _this.documentEditor.selection.cellFormat.leftMargin : 0;
            }
        };
        this.changeBackgroundColor = function (args) {
            if (!_this.documentEditor.isReadOnly) {
                //Handle API for shading.
                _this.documentEditor.selection.cellFormat.background = args.currentValue.hex;
                setTimeout(function () { _this.documentEditor.focusIn(); }, 10);
            }
        };
        this.initFillColorDiv = function () {
            // tslint:disable-next-line:max-line-length
            var fillDiv = ej2_base_1.createElement('div', { id: _this.elementId + '_fillColorDiv', className: 'e-de-property-div-padding de-tbl-fill-clr' });
            _this.tableProperties.appendChild(fillDiv);
            var label = ej2_base_1.createElement('label', { className: 'e-de-prop-sub-label', styles: 'margin-left:6px;margin-right:8px' });
            label.textContent = 'Fill';
            fillDiv.appendChild(label);
            var buttonStyle = 'width:92px;display:inline-flex;padding:3px';
            // tslint:disable-next-line:max-line-length
            _this.shadingBtn = _this.createColorPickerTemplate(_this.elementId + '_tableShading', fillDiv, 'Fill color');
            // tslint:disable-next-line:max-line-length
            fillDiv.lastElementChild.lastElementChild.lastElementChild.firstChild.classList.add('e-de-icon-BackgroundColor', 'e-de-colorpicker-icons');
        };
        this.initBorderStylesDiv = function () {
            var borderStyleDiv = ej2_base_1.createElement('div', { className: 'e-de-property-div-padding' });
            _this.tableProperties.appendChild(borderStyleDiv);
            var label = ej2_base_1.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Border Style';
            borderStyleDiv.appendChild(label);
            // tslint:disable-next-line:max-line-length
            var parentDiv = ej2_base_1.createElement('div', { id: _this.elementId + '_borderStyleDiv', styles: 'display:inline-flex;margin-right:9px;margin-bottom:3px' });
            var styleDiv = ej2_base_1.createElement('div', { styles: 'width:120px;height:100px' });
            var div1 = ej2_base_1.createElement('div', { className: 'e-btn-group' });
            styleDiv.appendChild(div1);
            var div2 = ej2_base_1.createElement('div', { className: 'e-btn-group' });
            styleDiv.appendChild(div2);
            var div3 = ej2_base_1.createElement('div', { className: 'e-btn-group' });
            styleDiv.appendChild(div3);
            var btnStyle = 'width:' + 40 + 'px;height:' + 34 + 'px';
            // tslint:disable-next-line:max-line-length
            _this.tableOutlineBorder = _this.createButtonTemplate(_this.elementId + '_tableOutlineBorder', 'e-de-icon-OutsideBorder e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Outside borders');
            // tslint:disable-next-line:max-line-length
            _this.tableAllBorder = _this.createButtonTemplate(_this.elementId + '_tableAllBorder', 'e-de-icon-AllBorders e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'All borders');
            // tslint:disable-next-line:max-line-length
            _this.tableCenterBorder = _this.createButtonTemplate(_this.elementId + '_tableCenterBorder', 'e-de-icon-InsideBorders e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Inside borders');
            // tslint:disable-next-line:max-line-length
            _this.tableLeftBorder = _this.createButtonTemplate(_this.elementId + '_tableLeftBorder', 'e-de-icon-LeftBorders e-de-tableprop-icons', div2, 'e-de-prop-font-button', btnStyle, 'Left border');
            // tslint:disable-next-line:max-line-length
            _this.tableCenterVerticalBorder = _this.createButtonTemplate(_this.elementId + '_tableCenterVBorder', 'e-de-icon-InsideVerticalBorder e-de-tableprop-icons', div2, 'e-de-prop-font-button', btnStyle, 'Inside bertical border');
            // tslint:disable-next-line:max-line-length
            _this.tableRightBorder = _this.createButtonTemplate(_this.elementId + '_tableRightBorder', 'e-de-icon-RightBorder e-de-tableprop-icons', div2, 'e-de-prop-font-button', btnStyle, 'Right border');
            // tslint:disable-next-line:max-line-length
            _this.tableTopBorder = _this.createButtonTemplate(_this.elementId + '_tableTopBorder', 'e-de-icon-TopBorder e-de-tableprop-icons', div3, 'e-de-prop-font-button', btnStyle, 'Top border');
            // tslint:disable-next-line:max-line-length
            _this.tableCenterHorizontalBorder = _this.createButtonTemplate(_this.elementId + '_tableCenterHBorder', 'e-de-icon-InsideHorizondalBorder e-de-tableprop-icons', div3, 'e-de-prop-font-button', btnStyle, 'Inside horizontal border');
            // tslint:disable-next-line:max-line-length
            _this.tableBottomBorder = _this.createButtonTemplate(_this.elementId + '_tableBottomBorder', 'e-de-icon-BottomBorder e-de-tableprop-icons', div3, 'e-de-prop-font-button', btnStyle, 'Bottom border');
            parentDiv.appendChild(styleDiv);
            // tslint:disable-next-line:max-line-length
            var styleTypeDiv = ej2_base_1.createElement('div', { styles: 'width:120px;height:100px;padding-left:12px;', className: 'de-tbl-fill-clr' });
            _this.borderBtn = _this.createColorPickerTemplate(_this.elementId + '_tableBorderColor', styleTypeDiv, 'Border color');
            _this.borderBtn.value = '#000000';
            // tslint:disable-next-line:max-line-length
            styleTypeDiv.lastElementChild.lastElementChild.lastElementChild.firstChild.classList.add('e-de-icon-HighlightColor', 'e-de-colorpicker-icons');
            // tslint:disable-next-line:max-line-length
            var bordersizeButton = ej2_base_1.createElement('button', { id: _this.elementId + '_tableBorderSize', styles: 'width:120px;height:28px;margin-top:8px' });
            styleTypeDiv.appendChild(bordersizeButton);
            _this.borderSize = _this.createBorderSizeDropdown('e-de-icon-StrokeSize', bordersizeButton);
            parentDiv.appendChild(styleTypeDiv);
            _this.borderSizeColorElement = document.getElementsByClassName('e-de-border-width');
            borderStyleDiv.appendChild(parentDiv);
        };
        this.initCellDiv = function () {
            var cellDiv = ej2_base_1.createElement('div', { className: 'e-de-property-div-padding' });
            _this.tableProperties.appendChild(cellDiv);
            var label = ej2_base_1.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Cell';
            cellDiv.appendChild(label);
            var parentDiv = ej2_base_1.createElement('div');
            var btnStyle = 'width:' + 38 + 'px;height:' + 32 + 'px';
            // tslint:disable-next-line:max-line-length
            _this.horizontalMerge = _this.createButtonTemplate(_this.elementId + '_tableOutlineBorder', 'e-de-icon-Cell e-de-tableprop-icons', parentDiv, 'e-de-prop-font-button', btnStyle, 'Merge cells');
            //this.verticalMerge = this.createButtonTemplate(this.elementId + '_tableAllBorder', 'e-de-icon-merge-column e-de-tableprop-icons', parentDiv, 'e-de-prop-font-button', btnStyle, 'Vertical Merge');
            cellDiv.appendChild(parentDiv);
        };
        this.initInsertOrDelCell = function () {
            var tableOperationDiv = ej2_base_1.createElement('div', { className: 'e-de-property-div-padding' });
            _this.tableProperties.appendChild(tableOperationDiv);
            var label = ej2_base_1.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Insert / Delete';
            tableOperationDiv.appendChild(label);
            var parentDiv = ej2_base_1.createElement('div', { styles: 'display:inline-flex' });
            var div1 = ej2_base_1.createElement('div', { className: 'e-btn-group' });
            parentDiv.appendChild(div1);
            var div2 = ej2_base_1.createElement('div', { className: 'e-btn-group' });
            parentDiv.appendChild(div2);
            var btnStyle = 'width:' + 38 + 'px;height:' + 32 + 'px;';
            // tslint:disable-next-line:max-line-length
            _this.insertColumnLeft = _this.createButtonTemplate(_this.elementId + '_insertColumnLeft', 'e-de-icon-InsertLeft e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Insert columns to the left');
            _this.insertColumnRight = _this.createButtonTemplate(_this.elementId + '_insertColumnRight', 'e-de-icon-InsertRight e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Insert columns to the right');
            // tslint:disable-next-line:max-line-length
            _this.insertRowAbove = _this.createButtonTemplate(_this.elementId + '_insertRowAbove', 'e-de-icon-InsertAbove e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Insert rows above');
            _this.insertRowBelow = _this.createButtonTemplate(_this.elementId + '_insertRowBelow', 'e-de-icon-InsertBelow e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Insert rows below');
            // tslint:disable-next-line:max-line-length
            _this.deleteRow = _this.createButtonTemplate(_this.elementId + '_deleteRow', 'e-de-icon-DeleteRows e-de-tableprop-icons', div2, 'e-de-prop-font-button', btnStyle + 'margin-left:9px', 'Delete rows');
            _this.deleteColumn = _this.createButtonTemplate(_this.elementId + '_deleteColumn', 'e-de-icon-DeleteColumns e-de-tableprop-icons', div2, 'e-de-prop-font-button', btnStyle, 'Delete columns');
            tableOperationDiv.appendChild(parentDiv);
        };
        this.initCellMargin = function () {
            var cellMarginDiv = ej2_base_1.createElement('div', { className: 'e-de-property-div-padding e-de-cellmargin-text' });
            _this.tableProperties.appendChild(cellMarginDiv);
            var label = ej2_base_1.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Cell Margin';
            cellMarginDiv.appendChild(label);
            var parentDiv = ej2_base_1.createElement('div', { styles: 'height: 60px;display:inline-flex' });
            var textboxDivStyle = 'width:' + 50 + 'px';
            var textboxParentDivStyle = 'width:' + 50 + 'px;float:left;margin-right:' + 9 + 'px';
            // tslint:disable-next-line:max-line-length
            _this.topMargin = _this.createCellMarginTextBox('Top', _this.elementId + '_topMargin', parentDiv, textboxDivStyle, textboxParentDivStyle, 500, 'Top margin');
            // tslint:disable-next-line:max-line-length
            _this.bottomMargin = _this.createCellMarginTextBox('Bottom', _this.elementId + '_bottomMargin', parentDiv, textboxDivStyle, textboxParentDivStyle, 500, 'Bottom margin');
            // tslint:disable-next-line:max-line-length
            _this.leftMargin = _this.createCellMarginTextBox('Left', _this.elementId + '_leftMargin', parentDiv, textboxDivStyle, textboxParentDivStyle, 500, 'Left margin');
            // tslint:disable-next-line:max-line-length
            _this.rightMargin = _this.createCellMarginTextBox('Right', _this.elementId + '_rightMargin', parentDiv, textboxDivStyle, textboxParentDivStyle, 500, 'Right margin');
            cellMarginDiv.appendChild(parentDiv);
        };
        this.initAlignText = function () {
            var alignmentDiv = ej2_base_1.createElement('div', { className: 'e-de-property-div-padding', styles: 'border-bottom-width:0px' });
            _this.tableProperties.appendChild(alignmentDiv);
            var label = ej2_base_1.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Align Text';
            alignmentDiv.appendChild(label);
            var parentDiv = ej2_base_1.createElement('div', { styles: 'margin-bottom: 10px;' });
            var div = ej2_base_1.createElement('div', { className: 'e-btn-group' });
            parentDiv.appendChild(div);
            var btnStyle = 'width:' + 38 + 'px;height:' + 32 + 'px;';
            // tslint:disable-next-line:max-line-length
            _this.alignTop = _this.createButtonTemplate(_this.elementId + '_alignTop', 'e-de-icon-AlignTop e-de-tableprop-icons', div, 'e-de-prop-font-button', btnStyle, 'Align top');
            // tslint:disable-next-line:max-line-length
            // this.alignCenterVertical = this.createButtonTemplate(this.elementId + '_alignCenterVertical', 'e-de-icon-merge-column e-de-tableprop-icons', parentDiv, 'e-de-prop-font-button', btnStyle, 'Align Center Vertical');
            // tslint:disable-next-line:max-line-length
            // this.alignRight = this.createButtonTemplate(this.elementId + '_alignRight', 'e-de-icon-merge-column e-de-tableprop-icons', parentDiv, 'e-de-prop-font-button', btnStyle, 'Align Right');
            _this.alignBottom = _this.createButtonTemplate(_this.elementId + '_alignBottom', 'e-de-icon-AlignBottom e-de-tableprop-icons', div, 'e-de-prop-font-button', btnStyle, 'Align bottom');
            // tslint:disable-next-line:max-line-length
            // this.alignCenterHorizontal = this.createButtonTemplate(this.elementId + '_alignCenterHorizontal', 'e-de-icon-merge-column e-de-tableprop-icons', parentDiv, 'e-de-prop-font-button', btnStyle, 'Align Center Horizontal');
            _this.alignCenterHorizontal = _this.createButtonTemplate(_this.elementId + '_alignCenterHorizontal', 'e-de-icon-AlignCenterTable e-de-tableprop-icons', div, 'e-de-prop-font-button', btnStyle, 'Align center');
            _this.alignCenterHorizontal.addEventListener('click', _this.applyAlignCenterHorizontal);
            alignmentDiv.appendChild(parentDiv);
        };
        // tslint:disable-next-line:max-line-length
        this.createCellMarginTextBox = function (textboxLabel, textboxId, parentDiv, styles, parentStyle, maxValue, toolTipText) {
            var cellMarginParentDiv = ej2_base_1.createElement('div', { styles: parentStyle });
            var cellMarginLabel = ej2_base_1.createElement('label', { className: 'e-de-prop-sub-label' });
            cellMarginLabel.textContent = textboxLabel;
            cellMarginParentDiv.appendChild(cellMarginLabel);
            // tslint:disable-next-line:max-line-length
            var cellMarginTextbox = ej2_base_1.createElement('input', { className: 'e-textbox', id: textboxId, styles: styles });
            cellMarginParentDiv.appendChild(cellMarginTextbox);
            // tslint:disable-next-line:max-line-length
            var cellMarginNumericText = new ej2_inputs_1.NumericTextBox({ showSpinButton: false, min: 0, format: 'n0', max: maxValue }, cellMarginTextbox);
            parentDiv.appendChild(cellMarginParentDiv);
            cellMarginTextbox.setAttribute('title', toolTipText);
            return cellMarginNumericText;
        };
        this.createBorderSizeDropdown = function (iconcss, button) {
            var div = ej2_base_1.createElement('div', { id: 'borderSizeTarget', styles: 'display:none' });
            var ulTag = ej2_base_1.createElement('ul', {
                styles: 'display: block; outline: 0px; width: 120px; height: auto;',
                id: 'borderSizeListMenu'
            });
            div.appendChild(ulTag);
            var noneOption = _this.createDropdownOption(ulTag, 'No Border');
            noneOption.addEventListener('click', function () { _this.onBorderSizeChange('No Border'); });
            var oneOption = _this.createDropdownOption(ulTag, '1px');
            oneOption.addEventListener('click', function () { _this.onBorderSizeChange('1px'); });
            var oneHalfOption = _this.createDropdownOption(ulTag, '1.5px');
            oneHalfOption.addEventListener('click', function () { _this.onBorderSizeChange('1.5px'); });
            var twoOption = _this.createDropdownOption(ulTag, '2px');
            twoOption.addEventListener('click', function () { _this.onBorderSizeChange('2px'); });
            var threeOption = _this.createDropdownOption(ulTag, '3px');
            threeOption.addEventListener('click', function () { _this.onBorderSizeChange('3px'); });
            var fourOption = _this.createDropdownOption(ulTag, '4px');
            fourOption.addEventListener('click', function () { _this.onBorderSizeChange('4px'); });
            var fiveOption = _this.createDropdownOption(ulTag, '5px');
            fiveOption.addEventListener('click', function () { _this.onBorderSizeChange('5px'); });
            var menuOptions = {
                target: div,
                iconCss: iconcss,
                cssClass: 'e-de-prop-bordersize',
                content: '1.5px',
            };
            var dropdown = new ej2_splitbuttons_1.DropDownButton(menuOptions);
            dropdown.beforeOpen = function () {
                div.style.display = 'block';
                for (var i = 0; i < _this.borderSizeColorElement.length; i++) {
                    // tslint:disable-next-line:max-line-length
                    _this.borderSizeColorElement[i].style.borderBottomColor = _this.borderColor;
                }
            };
            dropdown.beforeClose = function () { div.style.display = 'none'; };
            dropdown.appendTo(button);
            dropdown.element.setAttribute('title', 'Border width');
            return dropdown;
        };
        this.onBorderSizeChange = function (value) {
            _this.borderSize.content = value;
            setTimeout(function () { _this.tableOutlineBorder.element.focus(); }, 10);
        };
        this.createDropdownOption = function (ulTag, text) {
            var liTag = ej2_base_1.createElement('li', {
                styles: 'display:block',
                className: 'ui-wfloating-menuitem ui-wfloating-menuitem-md de-list-items  de-list-item-size'
            });
            ulTag.appendChild(liTag);
            var innerHTML;
            if (text === 'No Border') {
                innerHTML = '<div>' + text + '</div>';
            }
            else if (text === '1.5px') {
                // tslint:disable-next-line:max-line-length
                innerHTML = '<div>' + text + '<span class="ui-list-line e-de-border-width"  style="margin-left:10px;border-bottom-width:' + text + ';border-bottom-color:' + _this.borderColor + '"' + '></span></div>';
            }
            else {
                // tslint:disable-next-line:max-line-length
                innerHTML = '<div>' + text + '<span class="ui-list-line e-de-border-width" style="margin-left:20px;border-bottom-width:' + text + ';border-bottom-color:' + _this.borderColor + '"' + '></span></div>';
            }
            var liInnerDiv = ej2_base_1.createElement('div', {
                className: 'ui-list-header-presetmenu',
                id: 'ui-zlist0', innerHTML: innerHTML
            });
            liTag.appendChild(liInnerDiv);
            return liTag;
        };
        // tslint:disable-next-line:max-line-length
        this.createDropDownBtn = function (id, styles, parentDiv, iconCss, content, items, target) {
            var buttonElement = ej2_base_1.createElement('button', { id: id, styles: styles });
            parentDiv.appendChild(buttonElement);
            // tslint:disable-next-line:max-line-length
            var dropDownBtn = new ej2_splitbuttons_1.DropDownButton({ iconCss: iconCss, content: content, cssClass: 'e-de-prop-splitbutton' }, buttonElement);
            if (items) {
                dropDownBtn.items = items;
            }
            if (target) {
                dropDownBtn.target = target;
            }
            return dropDownBtn;
        };
        this.createColorPickerTemplate = function (id, divElement, toolTipText) {
            var inputElement = ej2_base_1.createElement('input', { id: id });
            divElement.appendChild(inputElement);
            // tslint:disable-next-line:max-line-length
            var colorPicker = new ej2_inputs_1.ColorPicker({ showButtons: true, cssClass: 'e-de-prop-font-button e-de-prop-font-colorpicker' }, inputElement);
            inputElement.parentElement.setAttribute('title', toolTipText);
            return colorPicker;
        };
        this.showTableProperties = function (isShow) {
            if (isShow) {
                if (_this.prevContext !== _this.documentEditor.selection.contextType) {
                    _this.propertiesTab.selectedItem = 0;
                    _this.tableTextProperties.appliedHighlightColor = _this.textProperties.appliedHighlightColor;
                    _this.tableTextProperties.appliedBulletStyle = _this.textProperties.appliedBulletStyle;
                    _this.tableTextProperties.appliedNumberingStyle = _this.textProperties.appliedNumberingStyle;
                }
                _this.onSelectionChange();
                _this.tableTextProperties.onSelectionChange();
                _this.textProperties.appliedHighlightColor = _this.tableTextProperties.appliedHighlightColor;
                _this.textProperties.appliedBulletStyle = _this.tableTextProperties.appliedBulletStyle;
                _this.textProperties.appliedNumberingStyle = _this.tableTextProperties.appliedNumberingStyle;
            }
            if (!isShow && _this.element.style.display === 'none' || (isShow && _this.element.style.display === 'block')) {
                return;
            }
            _this.element.style.display = isShow ? 'block' : 'none';
            _this.documentEditor.resize();
            _this.prevContext = _this.documentEditor.selection.contextType;
        };
        this.documentEditor = docEditor;
        this.tableTextProperties = new text_properties_pane_1.TextProperties(docEditor, 'textProperties');
        this.imageProperty = imageProperty;
        this.elementId = this.documentEditor.element.id;
        this.initializeTablePropPane();
        this.prevContext = this.documentEditor.selection.contextType;
        this.textProperties = textProperties;
    }
    // tslint:disable-next-line:max-line-length
    TableProperties.prototype.createButtonTemplate = function (id, iconcss, div, buttonClass, styles, toolTipText, content, iconPos) {
        var buttonElement = ej2_base_1.createElement('Button', { id: id, styles: styles });
        div.appendChild(buttonElement);
        var btn = new ej2_buttons_1.Button({
            cssClass: buttonClass, iconCss: iconcss, iconPosition: (iconPos ? iconPos : 'Left'),
            content: content ? content : ''
        });
        btn.appendTo(buttonElement);
        buttonElement.setAttribute('title', toolTipText);
        return btn;
    };
    return TableProperties;
}());
exports.TableProperties = TableProperties;

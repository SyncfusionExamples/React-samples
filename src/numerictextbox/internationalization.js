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
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var numbers = require("../common/cldr-data/main/de/numbers.json");
var currencies = require("../common/cldr-data/main/de/currencies.json");
var zhNumbers = require("../common/cldr-data/main/zh/numbers.json");
var zhCurrencies = require("../common/cldr-data/main/zh/currencies.json");
var numberingSystems = require("../common/cldr-data/supplemental/numberingSystems.json");
var currencyData = require("../common/cldr-data/supplemental/currencyData.json");
require("./sample.css");
// Loading English, German and Chinese cultures
ej2_base_1.L10n.load({
    'en': {
        'numerictextbox': { incrementTitle: 'Increment value', decrementTitle: 'Decrement value' }
    },
    'de': {
        'numerictextbox': { incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert' }
    },
    'zh': {
        'numerictextbox': { incrementTitle: '增值', decrementTitle: '遞減值' }
    }
});
ej2_base_1.loadCldr(numbers, currencies, zhNumbers, zhCurrencies, numberingSystems, currencyData);
var Internationalization = (function (_super) {
    __extends(Internationalization, _super);
    function Internationalization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Internationalization.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: ' col-lg-8' },
                    React.createElement("div", { className: "content-wrapper format-wrapper sample-numeric", style: { width: '43%', marginBottom: '20px' } },
                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { locale: 'de', value: 10, placeholder: 'Geben Sie den Wert ein', ref: function (numeric) { return _this.numericInstance = numeric; }, floatLabelType: 'Always' }),
                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { format: 'p2', locale: 'de', value: 0.5, min: 0, max: 1, step: 0.01, placeholder: 'Geben Sie den Prozentsatz ein', ref: function (numeric) { return _this.percentInstance = numeric; }, floatLabelType: 'Always' }),
                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { format: 'c2', locale: 'de', value: 100, currency: 'EUR', placeholder: 'Geben Sie die Währung ein', ref: function (numeric) { return _this.currencyInstance = numeric; }, floatLabelType: 'Always' }))),
                React.createElement("div", { className: 'col-lg-4 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: "property", title: "Properties", className: 'property-panel-table', style: { width: '100%' } },
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '30%' } },
                                    React.createElement("div", null, "Culture")),
                                React.createElement("td", { style: { width: '70%', paddingRight: '10px' } },
                                    React.createElement("div", null,
                                        React.createElement("select", { id: "cultures", className: "form-control", onChange: this.changeLocale.bind(this) },
                                            React.createElement("option", { value: "de" }, "de"),
                                            React.createElement("option", { value: "zh" }, "zh"),
                                            React.createElement("option", { value: "en" }, "en"))))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the globalization support of the Numeric TextBox. Change the locale values from culture drop-down to change the currency symbol, decimal separator, and group separators format of Numeric TextBox.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The NumericTextBox comes with built-in internationalization support to adapt based on the culture. You can change the culture of the component using the ",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/numerictextbox/api-numericTextBoxComponent.html#locale-string", target: "_blank" }, "locale"),
                    " property, that format the currency symbol, decimal separator, and group separators."),
                React.createElement("p", null, "In this demo, NumericTextBox control renders with the German culture."),
                React.createElement("p", null,
                    "More information on the internationalization configuration can be found in the ",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/numerictextbox/internationalization.html", target: "_blank" }, "documentation section"),
                    "."))));
    };
    // While changing culture 'locale', 'currency' and 'placeholder' values will be modified.
    Internationalization.prototype.changeLocale = function () {
        var culture = document.getElementById('cultures').value;
        this.numericInstance.locale = culture;
        this.percentInstance.locale = culture;
        this.currencyInstance.locale = culture;
        if (culture === 'zh') {
            this.currencyInstance.currency = 'CNY';
            this.numericInstance.placeholder = '输入值';
            this.currencyInstance.placeholder = '输入货币';
            this.percentInstance.placeholder = '输入百分比';
        }
        else if (culture === 'de') {
            this.currencyInstance.currency = 'EUR';
            this.numericInstance.placeholder = 'Geben Sie den Wert ein';
            this.currencyInstance.placeholder = 'Geben Sie die Währung ein';
            this.percentInstance.placeholder = 'Geben Sie den Prozentsatz ein';
        }
        else {
            this.currencyInstance.currency = 'USD';
            this.numericInstance.placeholder = 'Enter the value';
            this.currencyInstance.placeholder = 'Enter the currency';
            this.percentInstance.placeholder = 'Enter the percentage';
        }
    };
    return Internationalization;
}(sample_base_1.SampleBase));
exports.Internationalization = Internationalization;

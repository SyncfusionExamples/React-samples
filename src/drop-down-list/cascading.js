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
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_data_1 = require("@syncfusion/ej2-data");
var sample_base_1 = require("../common/sample-base");
require("./cascading.css");
var Cascading = (function (_super) {
    __extends(Cascading, _super);
    function Cascading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //define the country DropDownList data
        _this.countryData = [
            { CountryName: 'Australia', CountryId: '2' },
            { CountryName: 'United States', CountryId: '1' }
        ];
        //define the state DropDownList data
        _this.stateData = [
            { StateName: 'New York', CountryId: '1', StateId: '101' },
            { StateName: 'Queensland', CountryId: '2', StateId: '104' },
            { StateName: 'Tasmania ', CountryId: '2', StateId: '105' },
            { StateName: 'Victoria', CountryId: '2', StateId: '106' },
            { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
            { StateName: 'Washington', CountryId: '1', StateId: '103' }
        ];
        //define the city DropDownList data
        _this.cityData = [
            { CityName: 'Aberdeen', StateId: '103', CityId: 207 },
            { CityName: 'Alexandria', StateId: '102', CityId: 204 },
            { CityName: 'Albany', StateId: '101', CityId: 201 },
            { CityName: 'Beacon ', StateId: '101', CityId: 202 },
            { CityName: 'Brisbane ', StateId: '104', CityId: 211 },
            { CityName: 'Cairns', StateId: '104', CityId: 212 },
            { CityName: 'Colville ', StateId: '103', CityId: 208 },
            { CityName: 'Devonport', StateId: '105', CityId: 215 },
            { CityName: 'Emporia', StateId: '102', CityId: 206 },
            { CityName: 'Geelong', StateId: '106', CityId: 218 },
            { CityName: 'Hampton ', StateId: '102', CityId: 205 },
            { CityName: 'Healesville ', StateId: '106', CityId: 217 },
            { CityName: 'Hobart', StateId: '105', CityId: 213 },
            { CityName: 'Launceston ', StateId: '105', CityId: 214 },
            { CityName: 'Lockport', StateId: '101', CityId: 203 },
            { CityName: 'Melbourne', StateId: '106', CityId: 216 },
            { CityName: 'Pasco', StateId: '103', CityId: 209 },
            { CityName: 'Townsville', StateId: '104', CityId: 210 }
        ];
        // maps the country column to fields property
        _this.countryFields = { value: 'CountryId', text: 'CountryName' };
        // maps the state column to fields property
        _this.stateFields = { value: 'StateId', text: 'StateName' };
        // maps the city column to fields property
        _this.cityFields = { text: 'CityName', value: 'CityId' };
        return _this;
    }
    Cascading.prototype.countryChange = function () {
        this.stateObj.enabled = true;
        // query the data source based on country DropDownList selected value
        var tempQuery = new ej2_data_1.Query().where('CountryId', 'equal', this.countryObj.value);
        this.stateObj.query = tempQuery;
        // clear the existing selection.
        this.stateObj.text = null;
        // bind the property changes to state DropDownList
        this.stateObj.dataBind();
        // clear the existing selection.
        this.cityObj.text = null;
        this.cityObj.enabled = false;
        // bind the property changes to city DropDownList
        this.cityObj.dataBind();
    };
    Cascading.prototype.stateChange = function () {
        this.cityObj.enabled = true;
        // query the data source based on state DropDownList selected value
        var tempQuery1 = new ej2_data_1.Query().where('StateId', 'equal', this.stateObj.value);
        this.cityObj.query = tempQuery1;
        // clear the existing selection.
        this.cityObj.text = null;
        // bind the property changes to city DropDownList
        this.cityObj.dataBind();
    };
    Cascading.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { id: 'cascade' },
                    React.createElement("div", { style: { paddingTop: '35px' } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "country", dataSource: this.countryData, ref: function (dropdownlist) { _this.countryObj = dropdownlist; }, fields: this.countryFields, popupHeight: "auto", change: this.countryChange.bind(this), placeholder: "Select a country" })),
                    React.createElement("div", { style: { paddingTop: '35px' } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "state", dataSource: this.stateData, ref: function (dropdownlist) { _this.stateObj = dropdownlist; }, fields: this.stateFields, popupHeight: "auto", change: this.stateChange.bind(this), enabled: false, placeholder: "Select a state" })),
                    React.createElement("div", { style: { paddingTop: '35px' } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "city", dataSource: this.cityData, ref: function (dropdownlist) { _this.cityObj = dropdownlist; }, fields: this.cityFields, enabled: false, popupHeight: "auto", placeholder: "Select a city" })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the cascading functionalities of the DropDownList. Choose a country from the countries DropDownList, then respective states will be loaded in the second DropDownList and the same has to be done between states and cities DropDownList.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "Cascading"),
                    " DropDownList is the series of DropDownList, where the value of one DropDownList depends on the another DropDownList value. This can be configured by using the ",
                    React.createElement("code", null, "change"),
                    " event of parent DropDownList. Within that change event handler, you should load the data to child DropDownList based on the selected value of parent DropDownList."),
                React.createElement("p", null, "In this sample, if a country is selected from countries DropDownList, the respective states will be loaded in the second DropDownList and the same has to be done between states and cities DropDownList."),
                React.createElement("p", null,
                    " More information on the Cascading feature configuration can be found in the",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/drop-down-list/how-to.html#configure-the-cascading-combobox", target: "_blank" }, " documentation section"),
                    "."))));
    };
    return Cascading;
}(sample_base_1.SampleBase));
exports.Cascading = Cascading;

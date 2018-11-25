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
var sample_base_1 = require("../common/sample-base");
var Fuse = require("fuse.js");
require("./custom-filtering.css");
var CustomFiltering = (function (_super) {
    __extends(CustomFiltering, _super);
    function CustomFiltering() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.booksData = [
            { BookName: 'Support Vector Machines Succinctly', BookID: 'BOOK1' }, { BookName: 'Scala Succinctly', BookID: 'BOOK2' },
            { BookName: 'Application Security in .NET Succinctly', BookID: 'BOOK3' }, { BookName: 'ASP.NET WebHooks Succinctly', BookID: 'BOOK4' },
            { BookName: 'Xamarin.Forms Succinctly', BookID: 'BOOK5' }, { BookName: 'Asynchronous Programming Succinctly', BookID: 'BOOK6' },
            { BookName: 'Java Succinctly Part 2', BookID: 'BOOK7' }, { BookName: 'Java Succinctly Part 1', BookID: 'BOOK8' },
            { BookName: 'PHP Succinctly', BookID: 'BOOK9' }, { BookName: 'Bing Maps V8 Succinctly', BookID: 'BOOK10' },
            { BookName: 'WPF Debugging and Performance Succinctly', BookID: 'BOOK11' }, { BookName: 'Go Web Development Succinctly', BookID: 'BOOK12' },
            { BookName: 'Go Succinctly', BookID: 'BOOK13' }, { BookName: 'More UWP Succinctly', BookID: 'BOOK14' },
            { BookName: 'UWP Succinctly', BookID: 'BOOK15' }, { BookName: 'LINQPad Succinctly', BookID: 'BOOK16' },
            { BookName: 'MongoDB 3 Succinctly', BookID: 'BOOK17' }, { BookName: 'R Programming Succinctly', BookID: 'BOOK18' },
            { BookName: 'Azure Cosmos DB and DocumentDB Succinctly', BookID: 'BOOK19' }, { BookName: 'Unity Game Development Succinctly', BookID: 'BOOK20' },
            { BookName: 'Aurelia Succinctly', BookID: 'BOOK21' }, { BookName: 'Microsoft Bot Framework Succinctly', BookID: 'BOOK22' },
            { BookName: 'ASP.NET Core Succinctly', BookID: 'BOOK23' }, { BookName: 'Twilio with C# Succinctly', BookID: 'BOOK24' },
            { BookName: 'Angular 2 Succinctly', BookID: 'BOOK25' }, { BookName: 'Visual Studio 2017 Succinctly', BookID: 'BOOK26' },
            { BookName: 'Camtasia Succinctly', BookID: 'BOOK27' }, { BookName: 'SQL Queries Succinctly', BookID: 'BOOK28' },
            { BookName: 'Keystone.js Succinctly', BookID: 'BOOK29' }, { BookName: 'Groovy Succinctly', BookID: 'BOOK30' },
            { BookName: 'SQL Server for C# Developers Succinctly', BookID: 'BOOK31' }, { BookName: 'Ubuntu Server Succinctly', BookID: 'BOOK32' },
            { BookName: 'Statistics Fundamentals Succinctly', BookID: 'BOOK33' }, { BookName: '.NET Core Succinctly', BookID: 'BOOK34' },
            { BookName: 'SOLID Principles Succinctly', BookID: 'BOOK35' }, { BookName: 'Node.js Succinctly', BookID: 'BOOK36' },
            { BookName: 'Customer Success for C# Developers Succinctly', BookID: 'BOOK37' }, { BookName: 'Data Capture and Extraction with C# Succinctly', BookID: 'BOOK38' },
            { BookName: 'Hadoop Succinctly', BookID: 'BOOK39' }, { BookName: 'SciPy Programming Succinctly', BookID: 'BOOK40' },
            { BookName: 'Hive Succinctly', BookID: 'BOOK41' }, { BookName: 'React.js Succinctly', BookID: 'BOOK42' },
            { BookName: 'ECMAScript 6 Succinctly', BookID: 'BOOK43' }, { BookName: 'GitHub Succinctly', BookID: 'BOOK44' },
            { BookName: 'Gulp Succinctly', BookID: 'BOOK45' }, { BookName: 'Visual Studio Code Succinctly', BookID: 'BOOK46' },
            { BookName: 'Object-Oriented Programming in C# Succinctly', BookID: 'BOOK47' }, { BookName: 'C# Code Contracts Succinctly', BookID: 'BOOK48' },
            { BookName: 'Leaflet.js Succinctly', BookID: 'BOOK49' }, { BookName: 'Delphi Succinctly', BookID: 'BOOK50' },
            { BookName: 'SQL on Azure Succinctly', BookID: 'BOOK51' }, { BookName: 'Web Servers Succinctly', BookID: 'BOOK52' },
            { BookName: 'ASP.NET Multitenant Applications Succinctly', BookID: 'BOOK53' }, { BookName: 'ASP.NET MVC Succinctly', BookID: 'BOOK54' },
            { BookName: 'Windows Azure Websites Succinctly', BookID: 'BOOK55' }, { BookName: 'Localization for .NET Succinctly', BookID: 'BOOK56' },
            { BookName: 'ASP.NET Web API Succinctly', BookID: 'BOOK57' }, { BookName: 'ASP.NET MVC 4 Mobile Websites Succinctly', BookID: 'BOOK58' },
            { BookName: 'jQuery Succinctly', BookID: 'BOOK59' }, { BookName: 'JavaScript Succinctly', BookID: 'BOOK60' },
        ];
        // maps the appropriate column to fields property
        _this.fields = { value: 'BookName' };
        return _this;
    }
    //Bind the filter event
    CustomFiltering.prototype.onFiltering = function (e) {
        var options = {
            keys: ['BookName'],
            includeMatches: true,
            findAllMatches: true
        };
        // create object from Fuse constructor
        var fuse = new Fuse(this.booksData, options);
        // store the search result data based on typed characters
        var result = fuse.search(e.text);
        var data = [];
        for (var i = 0; i < result.length; i++) {
            data.push(result[i].item);
        }
        // pass the filter data source to updateData method.
        e.updateData(data, null);
        var lists = document.getElementById('books_popup').querySelectorAll('.e-list-item');
        // For highlight the typed characters, pass the result data and list items to highlightSearch method.
        this.highlightSearch(lists, result);
    };
    CustomFiltering.prototype.highlightSearch = function (listItems, result) {
        if (result.length > 0) {
            for (var i = 0; i < listItems.length; i++) {
                var innerHTML = listItems[i].innerHTML;
                for (var j = result[i].matches[0].indices.length - 1; j >= 0; j--) {
                    var indexes = result[i].matches[0].indices[j];
                    innerHTML = innerHTML.substring(0, indexes[0]) + '<span class="e-highlight">' +
                        innerHTML.substring(indexes[0], (indexes[1] + 1)) + '</span>' + innerHTML.substring(indexes[1] + 1);
                    listItems[i].innerHTML = innerHTML;
                }
            }
        }
    };
    CustomFiltering.prototype.render = function () {
        return (React.createElement("div", { id: 'autocustom', className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { id: 'custom-filtering' },
                    React.createElement(ej2_react_dropdowns_1.AutoCompleteComponent, { id: "books", dataSource: this.booksData, filtering: this.onFiltering.bind(this), fields: this.fields, placeholder: "e.g. Node.js Succinctly" }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the custom filtering functionalities of the AutoComplete. You can choose an item from the suggestion list that filtered items based on approximate string matching technique.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    " The AutoComplete can be customized to showcase the suggestion list by using ",
                    React.createElement("code", null, "filtering"),
                    " event. In that, you can use your own libraries to filter the data and update it to AutoComplete suggestion list via ",
                    React.createElement("code", null, "updateData"),
                    " method."),
                React.createElement("p", null, "In this sample, used Fuse.js library for custom filtering of books data."),
                React.createElement("p", null,
                    "For more information about Fuse.js can be found in this ",
                    React.createElement("a", { href: "http://fusejs.io/", target: "_blank" }, " reference link"),
                    "."))));
    };
    return CustomFiltering;
}(sample_base_1.SampleBase));
exports.CustomFiltering = CustomFiltering;

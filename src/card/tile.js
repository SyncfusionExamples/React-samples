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
var ej2_base_1 = require("@syncfusion/ej2-base");
var data_source_1 = require("./data-source");
var ej2_dropdowns_1 = require("@syncfusion/ej2-dropdowns");
var ej2_data_1 = require("@syncfusion/ej2-data");
require("./card.component.css");
var templateStr = "<div class='e-card ${if(isHorizontal)} e-card-horizontal ${/if}'>${if(cardImage)}<div class='e-card-image' style='background-image:url(${cardImage.url})'>${if(cardImage.title)}<div class='e-card-title'>${cardImage.title}</div>${/if}</div>${/if}${if(cardTitle)}<div class='e-card-title'>${cardTitle}</div>${/if}${if(header_title||header_subtitle||header_img)}<div class='e-card-header'>${if(header_img)}<div class='e-card-header-image ${if(header_img.isRounded)} e-card-corner ${/if}' style='background-image:url(${header_img.url})'></div>${/if}${if(header_title||header_subtitle)}<div class='e-card-header-caption'>${if(header_title)}<div class='e-card-header-title'>${header_title}</div>${/if}${if(header_subtitle)}<div class='e-card-sub-title'>${header_subtitle}</div>${/if}</div>${/if}</div>${/if}${if(cardContent)}<div class='e-card-content'>${cardContent}</div>${/if}${if(card_action_btn)}<div class='e-card-actions ${if(card_action_btn.isVertical)} e-card-vertical ${/if}'>${for(action_btn of card_action_btn.action_btns)}${if(action_btn.tag==='a')}<a href='${action_btn.href}' target='${action_btn.target}' class='e-btn e-outline e-primary'>${action_btn.text}</a>${else}<button class='e-card-btn'>${action_btn.text}</button>${/if}${/for}</div>${/if}</div>";
var cardTemplateFn = ej2_base_1.compile(templateStr);
var card;
var cardEle;
var cardObj = data_source_1.cardBook;
var data = [];
var multiSelectData = [];
var searchData = [];
var searchValCount = 0;
var filterCategory = [{ Name: 'Client-Side', Code: 'client' }, { Name: 'Server-Side', Code: 'server' }, { Name: 'Front-End', Code: 'ui' }];
var emptyData = true;
/*  Initialize MultiSelect component */
var multiselectComp;
function cardRendering(cardObj) {
    var errorContent = document.querySelector('.tile_layout .row.error');
    if (cardObj.length > 0) {
        errorContent.style.display = 'none';
        cardObj.forEach(function (data, index) {
            card = cardTemplateFn(data);
            cardEle = document.getElementById('card_sample_' + (++index));
            if (cardEle) {
                cardEle.appendChild(card[0]);
            }
        });
    }
    else {
        errorContent.style.display = 'flex';
    }
}
/* Funtion for Destroying Cards */
function destroyAllCard() {
    var cards = document.querySelectorAll('.card-control-section .e-card');
    [].slice.call(cards).forEach(function (el) {
        ej2_base_1.detach(el);
    });
}
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile.prototype.rendereComplete = function () {
        var _this = this;
        multiselectComp = new ej2_dropdowns_1.MultiSelect({
            // set the local data to dataSource property
            dataSource: filterCategory,
            // map the appropriate columns to fields property
            fields: { text: 'Name', value: 'Code' },
            // set the placeholder to MultiSelect input element
            placeholder: 'Search by categories',
            select: this.multiSelectFun,
            removed: this.multiSelectRemove,
        });
        multiselectComp.appendTo('#local');
        cardRendering(cardObj);
        document.getElementById('search_Card').onkeyup = function (e) {
            if (e.code === 'Tab' || e.code === 'Escape' || e.code === 'ShiftLeft' || (e.code === 'Backspace' && emptyData)) {
                return;
            }
            var inputVal = e.target.value;
            inputVal.length === 0 ? emptyData = true : emptyData = false;
            _this.searchFilter(inputVal);
        };
    };
    /* Remove event function for multiSelect component */
    Tile.prototype.multiSelectRemove = function (e) {
        var cardDa = searchData.length > 0 ? searchData : (multiSelectData.length > 0 ? multiSelectData : cardObj);
        if (multiselectComp.value && multiselectComp.value.length === 0 && searchValCount === 0) {
            multiSelectData = cardDa;
            destroyAllCard();
            cardRendering(cardObj);
        }
        else if (multiselectComp.value.length === 0 && searchValCount > 0) {
            this.searchFilter(document.getElementById('search_Card').value);
        }
        else if (multiselectComp.value.length === 0) {
            destroyAllCard();
            multiSelectData = cardDa;
            cardRendering(cardDa);
        }
        else {
            var keywords = e.itemData.Code.split(',');
            var dublicate_1;
            keywords.forEach(function (key) {
                dublicate_1 = new ej2_data_1.DataManager(cardObj).executeLocal(new ej2_data_1.Query().where('cardImage.tag', 'Contains', key, true));
                dublicate_1.forEach(function (da) {
                    if (cardDa.indexOf(da) !== -1) {
                        cardDa.splice(cardDa.indexOf(da), 1);
                    }
                });
                multiSelectData = cardDa;
            });
            destroyAllCard();
            cardRendering(multiSelectData);
        }
    };
    Tile.prototype.multiSelectFun = function (e) {
        var keywords = e.itemData.Code.split(',');
        var dublicate;
        var cardDa = searchData.length > 0 ? searchData : cardObj;
        if (multiselectComp.value && multiselectComp.value.length === 0 && searchValCount === 0) {
            multiSelectData = [];
        }
        keywords.forEach(function (key) {
            dublicate = new ej2_data_1.DataManager(cardDa).executeLocal(new ej2_data_1.Query().where('cardImage.tag', 'Contains', key, true));
            if (dublicate.length === 0) {
                multiSelectData = [];
                destroyAllCard();
                return;
            }
            dublicate.forEach(function (da) {
                if (multiSelectData.indexOf(da) === -1) {
                    multiSelectData.push(da);
                }
            });
        });
        destroyAllCard();
        cardRendering(multiSelectData);
    };
    /* Function for Filtering Cards */
    Tile.prototype.searchFilter = function (key) {
        searchValCount = key.length;
        var predicate = new ej2_data_1.Predicate('cardContent', 'Contains', key, true);
        predicate = predicate.or('cardImage.title', 'Contains', key, true).or('header_title', 'Contains', key, true).or('header_subtitle', 'Contains', key, true);
        var cardDa = (multiSelectData.length > 0 && multiselectComp.value.length > 0) ? multiSelectData : cardObj;
        searchData = data = new ej2_data_1.DataManager(cardDa).executeLocal(new ej2_data_1.Query().where(predicate));
        destroyAllCard();
        cardRendering(data);
    };
    Tile.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section card-control-section tile_layout" },
                React.createElement("div", { className: "row filter" },
                    React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                        React.createElement("div", { className: "e-float-input" },
                            React.createElement("input", { type: "text", required: true, id: "search_Card" }),
                            React.createElement("span", { className: "e-float-line" }),
                            React.createElement("label", { className: "e-float-text", style: { fontSize: '14px' } }, "Enter text to search"))),
                    React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6 tile_search" },
                        React.createElement("input", { type: "text", id: "local" }))),
                React.createElement("div", { className: 'row e-card-layout', style: { textAlign: 'center' } },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "row error", style: { display: 'none', minHeight: '150px' } },
                            React.createElement("div", { className: "e-error-content", style: { margin: 'auto', height: 'inherit', fontSize: '18px', fontWeight: 500, color: 'inherit' } }, "No results found. Please try a different search.")),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_1', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_2', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_3', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_4', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_5', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_6', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_7', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_8', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_9', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_10', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_11', className: 'card_sample' })),
                        React.createElement("div", { className: "col-xs-6 col-sm-6 col-lg-6 col-md-6" },
                            React.createElement("div", { id: 'card_sample_12', className: 'card_sample' })))),
                React.createElement("div", { id: 'source_link' },
                    "Source: \u00A0",
                    React.createElement("a", { href: "https://www.syncfusion.com/ebooks/", target: '_blank' }, "https://www.syncfusion.com/ebooks"))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates filter and search of the ",
                    React.createElement("code", null, "card"),
                    " based on categories, and text containing the card. You can use search box to search cards, and you can filter choosing categories in multi-select component.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "Card is a small container in which user can show defined content in specific structure and it is flexible and extensible. This sample demonstrates to render the",
                    React.createElement("code", null, "Card"),
                    " Using",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/documentation/base/template-engine.html" }, " Template Engine"),
                    " and it can be filtered based on",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/documentation/data/getting-started.html" }, "data Manager"),
                    ".",
                    React.createElement("p", null,
                        " More information about Card can be found in this",
                        React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/documentation/card/getting-started.html" }, "documentation"),
                        " section. ")))));
    };
    return Tile;
}(sample_base_1.SampleBase));
exports.Tile = Tile;

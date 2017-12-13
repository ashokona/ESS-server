webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/components/electionforms/election-form-data/election-form-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-main1 { background: #113d5a; padding: 30px 0px; }\n.header-main1 h1 { margin: 0px; color: #fff; }\n.header-main1 h1 i { padding-right: 15px; }\n.table-main thead tr { background-color: rgba(0,60,93,0.75); }\n.table-main thead tr th { color: #fff; padding: 12px 15px; }\n.table-main tbody tr td { padding: 10px 15px; }\n.star-icon i { color: #F1BD2A; font-size: 18px; line-height: 22px; padding: 6px 0px; }\n.star-icon i.fa-question-circle { color: #113d5a; padding-left: 5px; }\n.date-main { padding: 9px 0px; }\n.date-main span { color: #fff; }\n.date-main .date-head { font-weight: bold; }\n.election-data-main { padding-bottom: 30px; }\n.election-btns {  padding: 30px 0px 15px 0px;  }\n/*.election-btns button { background-color: rgba(0,60,93,0.75) !important;\n    background-color: transparent;\n    margin-right: 10px;\n    padding: 6px 15px;\n    color: #fff;\n    border-radius: 5px; }\n .election-btns button:hover {\n \tbackground-color: rgba(0,60,93,1) !important;\n \tcolor: #fff;\n }*/\n .election-data-main { padding: 0px 15px 20px 15px; }\n .btn-type1 {\n      border-radius: 4px;\n    border: 2px solid #cdcdcd;\n    text-transform: uppercase;\n    transition: .3s ease-out;\n    padding: 13px 35px;\n    background-color: #fff !important;\n    color: #000;\n    font-size: 16px;\n }\n  .btn-type1:hover {  background-color: #cdcdcd !important; color: #fff; }\n  .btn-type2 {\n      border-radius: 4px;\n    border: 2px solid #2aa0ec;\n    text-transform: uppercase;\n    transition: .3s ease-out;\n    padding: 13px 35px;\n    background-color: #2aa0ec !important;\n    color: #fff;\n    font-size: 16px;\n }\n  .btn-type2:hover {  background-color: #212C5F !important; border: 2px solid #212C5F; color: #fff; }\n.election-btns-right .btn-type2 { margin-right: 15px; }\n.election-btns .col-sm-6 { padding: 0px; }\n .election-btns-right button {\n  float: right;\n }\n .election-btns button i { padding-right: 5px; }\n .election-general-info-head h4 { margin: 0px;\n    background: #486b85;\n    padding: 8px 15px;\n    color: #fff; }\n.election-form-body { padding: 0px; background: white;\n    padding: 15px 25px;\n    border-color: #cfdbe2 !important;\n    border-top-width: 3px !important;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n.election-form-body .col-sm-6 { padding: 0px 7.5px; }\n.election-general-info-body { padding: 20px 0px; }\n.election-general-info-body tbody td { padding: 15px 20px; }\n.election-general-info-body tbody td { border: 0px; }\n.election-general-info-body .table-striped tbody tr:nth-of-type(odd) td:first-child { border-right: 1px solid #fff; border-left: 1px solid #fff; }\n.election-general-info-body .table-striped tbody tr:nth-of-type(even) td:first-child { border-right: 1px solid #f9f9f9; border-left: 1px solid #f9f9f9; }\n.election-general-info-body .table-striped tbody tr:nth-of-type(even) td:last-child { border-right: 1px solid #f9f9f9; }\n.election-general-info-body .table-striped tbody tr:nth-of-type(odd) td:last-child { border-right: 1px solid #fff; }\n.election-general-info-body .table-bordered { border: 0px; }\n.election-form-body ul.nav-pills { padding: 10px 0px; }\n.election-form-body ul.nav-pills li a { background-color: transparent;\n    color: #000; padding: 0px; padding-bottom: 8px;\n    border-bottom: 2px solid #ddd !important;\n    font-size: 18px; border-radius: 0px;border: 0px; margin-right: 35px;}\n.election-form-body ul.nav-pills li.active a, .election-form-body ul.nav-pills li:hover a { border-bottom: 2px solid #113d5a !important;\n color: #113d5a; }\n.election-form-body ul.nav-tabs { border-bottom: 0px; }\n.nav-side-menu {\n  border-color: #cfdbe2 !important;\n    border-top-width: 3px !important;\n  overflow: auto;\n  font-size: 12px;\n  font-weight: 200;\n  background-color: #fff;\n  position: relative;\n  top: 0px;\n  width: 100%;\n  height: 100%; \n  color: #fff; border: 1px solid transparent;\n    border-radius: 4px; padding: 0px 15px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.nav-side-menu .brand {\n  background-color: transparent;\n  line-height: 50px;\n  display: block;\n  text-align: center;\n  font-size: 20px;\n   color: #113d5a;\n}\n.nav-side-menu .toggle-btn {\n  display: none;\n}\n.nav-side-menu ul,\n.nav-side-menu li {\n  list-style: none;\n  padding: 6px 0px;\n  margin: 0px;\n  line-height: 35px;\n  cursor: pointer;\n}\n.nav-side-menu ul :not(collapsed) .arrow:before,\n.nav-side-menu li :not(collapsed) .arrow:before {\n  font-family: FontAwesome;\n  content: \"\\F078\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n  float: right;\n}\n.nav-side-menu ul .active,\n.nav-side-menu li .active {\n  border-left: 3px solid #406a87;\n  background-color: #e0e0e03d;\n}\n.nav-side-menu ul .sub-menu li.active,\n.nav-side-menu li .sub-menu li.active {\n  color: #406a87;\n}\n.nav-side-menu ul .sub-menu li.active a,\n.nav-side-menu li .sub-menu li.active a {\n  color: #000;\n}\n.nav-side-menu ul .sub-menu li,\n.nav-side-menu li .sub-menu li {\n  background-color: #fff;\n  border: none;\n  line-height: 28px;\n  border-bottom: 1px solid #eaeaea;\n  margin-left: 0px;\n  color: #000;\n}\n.nav-side-menu ul .sub-menu li:hover,\n.nav-side-menu li .sub-menu li:hover {\n  background-color: #e0e0e03d;\n}\n.nav-side-menu ul .sub-menu li:before,\n.nav-side-menu li .sub-menu li:before {\n  font-family: FontAwesome;\n  content: \"\\F105\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.nav-side-menu li {\n  padding-left: 0px;\n  border-left: 0px solid #2e353d;\n  border-bottom: 1px solid #eaeaea;\n}\n.nav-side-menu li a {\n  text-decoration: none;\n  color: #000;\n}\n.nav-side-menu li a i {\n  padding-left: 10px;\n  width: 20px;\n  padding-right: 20px;\n}\n.nav-side-menu li:hover {\n  border-left: 3px solid #406a87;\n  background-color: #e0e0e03d;\n  transition: all 1s ease;\n}\n@media (max-width: 767px) {\n  .table tr th, .table tr td { padding: 10px; font-size: 13px; }\n  .election-btns { padding: 15px 0px; }\n  .election-btns-right { padding-top: 10px !important; }\n  .btn-type1, .btn-type2 { padding: 8px 14px; font-size: 14px; }\n  .election-data-main .col-sm-3 { padding: 0px; }\n  .election-form-body { padding: 15px; }\n  .election-form-body ul.nav { padding: 0px; }\n  .election-form-body ul.nav li { padding: 8px 0px; }\n  .election-form-body ul.nav li a { padding-bottom: 5px; font-size: 16px; }\n  .nav-side-menu {\n    position: relative;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .nav-side-menu .toggle-btn {\n    display: block;\n    cursor: pointer;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    z-index: 10 !important;\n    padding: 3px;\n    background-color: #ffffff;\n    color: #000;\n    width: 40px;\n    text-align: center;\n  }\n  .brand {\n    text-align: left !important;\n    font-size: 22px;\n    padding-left: 20px;\n    line-height: 50px !important;\n  }\n}\n@media (min-width: 768px) {\n  .nav-side-menu .menu-list .menu-content {\n    display: block;\n  }\n  .nav-side-menu, .election-form-body { \n    min-height: 650px;\n  }\n  .election-data-main .col-sm-3 { padding-left: 0px; }\n}\nbody {\n  margin: 0px;\n  padding: 0px;\n}\n\n@media only screen and (max-width: 1023px) and (min-width: 768px)  {\n.nav-side-menu { padding: 0px 10px; }\n.menu-list ul li { line-height: 25px; }\n.election-form-body ul.nav li { padding: 10px 0px; }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/electionforms/election-form-data/election-form-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row header-main1\">\n    <div class=\"container\">\n        <div class=\"col-sm-7\">\n            <h1><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Pre-Election Questionnaire</h1>\n            <p-breadcrumb [model]=\"items\"></p-breadcrumb>\n\n        </div>\n        <div class=\"date-main col-sm-5\">\n            <div class=\"col-sm-6\">\n                <span class=\"date-head\">Created Date : </span><span class=\"date-text\">01/11/2017</span>\n            </div>\n            <div class=\"col-sm-6\">\n                <span class=\"date-head\">Modified Date : </span><span class=\"date-text\">28/11/2017</span>\n            </div>\n        </div>\n\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row election-btns\">\n        <div class=\"election-btns-left col-sm-5\">\n            <button type=\"button\" class=\"btn btn-type1\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Go back</button>\n        </div>\n        <div class=\"election-btns-right col-sm-7\">\n            <button type=\"button\" class=\"btn btn-type1\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> Forms Guide</button>\n            <button type=\"button\" class=\"btn btn-type2\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i> Printable</button>\n        </div>\n        <!-- <div class=\"star-icon pull-right\">\n\t\t\t<span class=\"star-icons\">\n\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t<i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n\t\t</div> -->\n    </div>\n    <div class=\"row election-data-main\">\n        <div class=\"col-sm-3\">\n            <div class=\"nav-side-menu\">\n                <div class=\"brand\">Monitor</div>\n                <i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i>\n                <div class=\"menu-list\">\n                    <ul id=\"menu-content\" class=\"menu-content collapse out\">\n                        <li class=\"active\">\n                            <a>\n                                <i class=\"fa fa-dashboard fa-lg\"></i> Precision List (Done)\n                            </a>\n                        </li>\n                        <li data-toggle=\"collapse\" data-target=\"#products\" class=\"collapsed\">\n                            <a><i class=\"fa fa-gift fa-lg\"></i> Questions/Referenda <span class=\"arrow\"></span></a>\n                        </li>\n                        <ul class=\"sub-menu collapse\" id=\"products\">\n                            <li class=\"active\"><a>Submenu 1</a></li>\n                            <li><a>Submenu 2</a></li>\n                            <li><a>Submenu 3</a></li>\n                            <li><a>Submenu 4</a></li>\n                        </ul>\n                        <li data-toggle=\"collapse\" data-target=\"#service\" class=\"collapsed\">\n                            <a><i class=\"fa fa-globe fa-lg\"></i> Contents and Candidates (Done)</a>\n                        </li>\n                        <li data-toggle=\"collapse\" data-target=\"#new\" class=\"collapsed\">\n                            <a><i class=\"fa fa-car fa-lg\"></i> Ballot Assignment Chart</a>\n                        </li>\n                        <li>\n                            <a>\n                                <i class=\"fa fa-user fa-lg\"></i> M100 Programming\n                            </a>\n                        </li>\n                        <li>\n                            <a>\n                                <i class=\"fa fa-users fa-lg\"></i> iV0 Coding Specifications\n                            </a>\n                        </li>\n                        <li>\n                            <a>\n                                <i class=\"fa fa-users fa-lg\"></i> Balator Printing\n                            </a>\n                        </li>\n                        <li>\n                            <a>\n                                <i class=\"fa fa-users fa-lg\"></i> Pronunciation Guide/Waiver\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-9 election-form-body\">\n            <ul class=\"nav nav-tabs nav-pills\">\n                <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">General Information</a></li>\n                <li><a data-toggle=\"tab\" href=\"#menu1\">Shipping and Billing Information</a></li>\n                <li><a data-toggle=\"tab\" href=\"#menu2\">ES&S Service Requested</a></li>\n            </ul>\n            <div class=\"tab-content\">\n                <div id=\"home\" class=\"tab-pane fade in active\">\n                    <div class=\"election-general-info-body\">\n                        <table class=\"table table-bordered table-striped\">\n                            <tbody>\n                                <tr>\n                                    <td>Account</td>\n                                    <td>State of Indipendence</td>\n                                </tr>\n                                <tr>\n                                    <td>Contact</td>\n                                    <td>Greguson</td>\n                                </tr>\n                                <tr>\n                                    <td>Election Date</td>\n                                    <td>09/07/2017</td>\n                                </tr>\n                                <tr>\n                                    <td>Election Title</td>\n                                    <td>PRIMARY ELECTION</td>\n                                </tr>\n                                <tr>\n                                    <td>Election Type</td>\n                                    <td>City General</td>\n                                </tr>\n                                <tr>\n                                    <td>Election Day Time Polls Open</td>\n                                    <td>07:00</td>\n                                </tr>\n                                <tr>\n                                    <td>Election Day Time Polls Close</td>\n                                    <td>19:00</td>\n                                </tr>\n                                <tr>\n                                    <td>UOCAVA Date</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Public Test</td>\n                                    <td>09/07/2017</td>\n                                </tr>\n                                <tr>\n                                    <td>Pre Test</td>\n                                    <td>08/07/2017</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <div id=\"menu1\" class=\"tab-pane fade\">\n                    <div class=\"election-general-info-body\">\n                        <table class=\"table table-bordered table-striped\">\n                            <tbody>\n                                <tr>\n                                    <td>Coding Shipping</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Contact Info</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Coding Billing Contact</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Info</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Printing Shipping Contact Info</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Printing Shipping Contact Info</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Alternate Shipping Contact Info</td>\n                                    <td></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <div id=\"menu2\" class=\"tab-pane fade\">\n                    <div class=\"election-general-info-body\">\n                        <table class=\"table table-bordered table-striped\">\n                            <tbody>\n                                <tr>\n                                    <td>Paper Ballot Layout</td>\n                                    <td>Yes</td>\n                                </tr>\n                                <tr>\n                                    <td>PDF Extracts</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Publication Ballot</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Simple Ballot Modification</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Simple Ballot Instructions</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Printing</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Vote-By-Email</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Is this an all-mail election?</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Coding</td>\n                                    <td>Yes</td>\n                                </tr>\n                                <tr>\n                                    <td>Auto Files</td>\n                                    <td>Yes</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/components/electionforms/election-form-data/election-form-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectionFormDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectionFormDataComponent = (function () {
    function ElectionFormDataComponent() {
    }
    ElectionFormDataComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'home', url: '/' },
            { label: 'Election Forms', url: '/electionforms' },
            { label: 'Election Form Data' },
        ];
    };
    return ElectionFormDataComponent;
}());
ElectionFormDataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-election-form-data',
        template: __webpack_require__("../../../../../src/app/home/components/electionforms/election-form-data/election-form-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/electionforms/election-form-data/election-form-data.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ElectionFormDataComponent);

//# sourceMappingURL=election-form-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/electionforms/electionforms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-main1 { background: #113d5a; padding: 30px 0px; }\n.header-main1 h1 { margin: 0px; color: #fff; }\n.header-main1 h1 i { padding-right: 15px; }\n.table-main { padding: 30px 0px; }\n.election-table-main { padding: 20px 30px; background-color: #fff; }\n.election-table-main\n{\n  \tposition:relative;\n    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}\n.election-table-main:before, .election-table-main:after\n{\n\tcontent:\"\";\n    position:absolute; \n    z-index:-1;\n    box-shadow:0 0 20px rgba(0,0,0,0.8);\n    top:50%;\n    bottom:0;\n    left:10px;\n    right:10px;\n    border-radius:100px / 10px;\n} \n.election-table-main:after\n{\n\tright:10px; \n    left:auto;\n    -webkit-transform:skew(8deg) rotate(3deg); \n            transform:skew(8deg) rotate(3deg);\n}\n.election-table-main table tbody tr td, .election-table-main table thead tr th { border: 0px; }\n.election-table-starts .table { border: 0px; }\n.election-table-starts .table tbody tr:nth-of-type(odd) td:first-child { border-right: 1px solid #fff; }\n.election-table-starts .table tbody tr:nth-of-type(odd) td:last-child { border-left: 1px solid #fff; }\n.election-table-starts .table tbody tr:nth-of-type(even) td:first-child { border-right: 1px solid #f1f0f5; }\n.election-table-starts .table tbody tr:nth-of-type(even) td:last-child { border-left: 1px solid #f1f0f5; }\n.election-table-starts .table-striped>tbody>tr:nth-of-type(odd) {\n    background-color: #f1f0f5;\n}\n.table-search input, .table-search span { border: 0px;\n    box-shadow: none; background-color: transparent; font-style: italic;\n    border-bottom: 1px solid #ddd;\n    border-radius: 0px; }\n.election-table-main .table-search { padding: 15px 0px 15px 0px; }\n.table-main thead tr { background-color: transparent; }\n.table-main thead tr th { color: #113d5a; padding: 20px 15px; }\n.table-main tbody tr td { padding: 15px 15px; }\n.star-icon i { color: #F1BD2A; font-size: 18px; line-height: 22px; padding: 6px 0px; }\n.star-icons i { text-align: right; width: 100%; }\n\n\n@media only screen and (max-width: 767px) {\n.election-form-container { padding: 0px; }\n.table-main { padding: 10px 0px; }\n.election-table-main { padding: 0px 10px; }\n.election-table-main { overflow-x: auto; }\n.table-search { padding-bottom: 0px; }\n.election-table-starts .table tr th, .election-table-starts .table tr td { padding: 10px; font-size: 13px; }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/electionforms/electionforms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row header-main1\">\n    <div class=\"container\">\n        <h1><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>Election Forms</h1>\n        <p-breadcrumb [model]=\"items\"></p-breadcrumb>\n\n    </div>\n</div>\n<div class=\"election-form-container container\">\n    <div class=\"table-main\">\n        <div class=\"star-icon\">\n            <span class=\"star-icons\">\n\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n        </div>\n        <div class=\"election-table-main\">\n            <div class=\"table-search\">\n                <div class=\"input-group col-sm-12\">\n                    <input class=\"form-control my-0 py-1 grey-border\" type=\"text\" placeholder=\"Search for Election Type or Election Title\" aria-label=\"Search\">\n                    <span class=\"input-group-addon waves-effect grey lighten-3\" id=\"basic-addon1\"><a><i class=\"fa fa-search text-grey\" aria-hidden=\"true\"></i></a></span>\n                </div>\n            </div>\n            <div class=\"election-table-starts\">\n                <table class=\"table table-bordered table-striped\">\n                    <thead>\n                        <tr>\n                            <th>Election Date</th>\n                            <th>Election Type</th>\n                            <th>Election Title</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>09/07/2017</td>\n                            <td>City General</td>\n                            <td>Primary</td>\n                        </tr>\n                        <tr>\n                            <td>08/31/2017</td>\n                            <td>Primary</td>\n                            <td>Special</td>\n                        </tr>\n                        <tr>\n                            <td>09/07/2017</td>\n                            <td>Primary</td>\n                            <td>KME</td>\n                        </tr>\n                        <tr>\n                            <td>01/14/2017</td>\n                            <td>Special</td>\n                            <td>Paige & Sarah Training</td>\n                        </tr>\n                        <tr>\n                            <td>04/18/2017</td>\n                            <td>Other</td>\n                            <td>july@example.com</td>\n                        </tr>\n                        <tr>\n                            <td>03/11/2017</td>\n                            <td>Special</td>\n                            <td>2016 Judicial General Election</td>\n                        </tr>\n                        <tr>\n                            <td>09/16/2017</td>\n                            <td>City General</td>\n                            <td>Presidential Primary</td>\n                        </tr>\n                        <tr>\n                            <td>06/08/2017</td>\n                            <td>Special</td>\n                            <td>Special Election</td>\n                        </tr>\n                        <tr>\n                            <td>03/27/2017</td>\n                            <td>Other</td>\n                            <td>City General Election</td>\n                        </tr>\n                        <tr>\n                            <td>06/17/2017</td>\n                            <td>City General</td>\n                            <td>General</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/components/electionforms/electionforms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectionformsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectionformsComponent = (function () {
    function ElectionformsComponent() {
    }
    ElectionformsComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'home', url: '/' },
            { label: 'Election Forms' }
        ];
        // this.home = {icon: 'fa fa-home'};
    };
    return ElectionformsComponent;
}());
ElectionformsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-electionforms',
        template: __webpack_require__("../../../../../src/app/home/components/electionforms/electionforms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/electionforms/electionforms.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ElectionformsComponent);

//# sourceMappingURL=electionforms.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#first-slider .main-container {\n  padding: 0;\n}\n\n\n#first-slider .slide1 h3, #first-slider .slide2 h3, #first-slider .slide3 h3, #first-slider .slide4 h3{\n    color: #fff;\n    font-size: 30px;\n      text-transform: uppercase;\n      font-weight:700;\n}\n\n#first-slider .slide1 h4,#first-slider .slide2 h4,#first-slider .slide3 h4,#first-slider .slide4 h4{\n    color: #fff;\n    font-size: 30px;\n      text-transform: uppercase;\n      font-weight:700;\n}\n#first-slider .slide1 .text-left ,#first-slider .slide3 .text-left{\n    padding-left: 40px;\n}\n\n\n#first-slider .carousel-indicators {\n  bottom: 0;\n}\n#first-slider .carousel-control.right,\n#first-slider .carousel-control.left {\n  background-image: none;\n}\n#first-slider .carousel .item {\n  min-height: 500px; \n  height: 100%;\n  width:100%;\n}\n\n.carousel-inner .item .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n\n#first-slider h3{\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n#first-slider h4 {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n#first-slider h2 {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n}\n\n\n#first-slider .carousel-control {\n    width: 6%;\n        text-shadow: none;\n}\n\n\n#first-slider h1 {\n  text-align: center;  \n  margin-bottom: 30px;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n#first-slider .p {\n  padding-top: 125px;\n  text-align: center;\n}\n\n#first-slider .p a {\n  text-decoration: underline;\n}\n#first-slider .carousel-indicators li {\n    width: 14px;\n    height: 14px;\n    background-color: rgba(255,255,255,.4);\n  border:none;\n}\n#first-slider .carousel-indicators .active{\n    width: 16px;\n    height: 16px;\n    background-color: #fff;\n  border:none;\n}\n\n\n.carousel-fade .carousel-inner .item {\n  transition-property: opacity;\n}\n.carousel-fade .carousel-inner .item,\n.carousel-fade .carousel-inner .active.left,\n.carousel-fade .carousel-inner .active.right {\n  opacity: 0;\n}\n.carousel-fade .carousel-inner .active,\n.carousel-fade .carousel-inner .next.left,\n.carousel-fade .carousel-inner .prev.right {\n  opacity: 1;\n}\n.carousel-fade .carousel-inner .next,\n.carousel-fade .carousel-inner .prev,\n.carousel-fade .carousel-inner .active.left,\n.carousel-fade .carousel-inner .active.right {\n  left: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.carousel-fade .carousel-control {\n  z-index: 2;\n}\n\n.carousel-control .fa-angle-right, .carousel-control .fa-angle-left {\n    position: absolute;\n    top: 50%;\n    z-index: 5;\n    display: inline-block;\n}\n.carousel-control .fa-angle-left{\n    left: 50%;\n    width: 38px;\n    height: 38px;\n    margin-top: -15px;\n    font-size: 30px;\n    color: #fff;\n    border: 3px solid #ffffff;\n    border-radius: 53px;\n}\n.carousel-control .fa-angle-right{\n    right: 50%;\n    width: 38px;\n    height: 38px;\n    margin-top: -15px;\n    font-size: 30px;\n    color: #fff;\n    border: 3px solid #ffffff;\n    border-radius: 53px;\n}\n.carousel-control {\n    opacity: 1;\n    filter: alpha(opacity=100);\n}\n\n\n/********************************/\n/*       Slides backgrounds     */\n/********************************/\n#first-slider .slide1 {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/slide-1.jpg") + ");\n      background-size: cover;\n    background-repeat: no-repeat;\n}\n#first-slider .slide2 {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/slide-2.jpg") + ");\n      background-size: cover;\n    background-repeat: no-repeat;\n}\n#first-slider .slide3 {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/slide-1.jpg") + ");\n      background-size: cover;\n    background-repeat: no-repeat;\n}\n.home-main .container { margin: 0px auto; display: table; }\n.carousel-control i { border: 0px solid transparent !important ;\n    border-radius: 0px !important;\n    background: rgba(0,0,0,0.3); height: 32px !important; }\n.services-main { padding: 20px 0px; }\n.services-main h1, .services-main p { text-align: center; }\n.services-main h1 {     font-size: 40px;\n    line-height: 60px; }\n.box-icon { padding: 15px; }\n.box-icon i { font-size: 80px;\n    color: #337ab7; }\n.box-header { padding: 5px; }\n.box-header h5 a { font-size: 24px; line-height: 32px; }\n.links-main { padding: 15px 0px; }\n.row.range { margin-bottom: 30px; }\n\n\n.icon-box-vertical-sm {\n        margin-left: auto;\n        margin-right: auto;\n}\n\n.icon-box {\n    position: relative;\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    max-width: 400px;\n    padding: 35px 30px;\n    text-align: center;\n    cursor: default;\n}\n\n.icon-box:before,\n.icon-box:after {\n    content: '';\n    position: absolute;\n    width: calc(100% - 35px);\n    height: calc(100% - 35px);\n    border: 1px solid #e5e7e9;\n    pointer-events: none;\n    transition: .33s all ease;\n}\n\n.icon-box:before {\n    top: 0;\n    left: 0;\n    border-width: 1px 0 0 1px;\n}\n\n.icon-box:after {\n    bottom: 0;\n    right: 0;\n    border-width: 0 1px 1px 0;\n}\n\n.icon-box .divider {\n    max-width: 100%;\n    margin: 13px auto;\n    transition: .33s all ease;\n}\n\n.icon-box .box-top,\n.icon-box .box-body {\n    position: relative;\n    will-change: transform;\n    transition: .33s all ease;\n    -webkit-filter: blur(0);\n}\n\n.icon-box .box-top {\n    top: 0;\n}\n\n.icon-box .box-body {\n    max-width: 100%;\n}\n\n.icon-box .box-header {\n    bottom: 0;\n}\n\n.icon-box .box-icon {\n    min-height: 46px;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -ms-flex-direction: row;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.icon-box * + .box-header {\n    margin-top: 5px;\n}\n\n.icon-box.hover:before,\n.icon-box.hover:after,\n.icon-box:hover:before,\n.icon-box:hover:after {\n    width: 100%;\n    height: 100%;\n    border-color: #2aa0ec;\n}\n\n.icon-box.hover .box-top,\n.icon-box:hover .box-top {\n    -webkit-transform: translateY(-9px);\n    transform: translateY(-9px);\n}\n\n.icon-box.hover .box-body,\n.icon-box:hover .box-body {\n    -webkit-transform: translateY(9px);\n    transform: translateY(9px);\n}\n\n.icon-box.hover .divider,\n.icon-box:hover .divider {\n    width: 168px;\n}\n.divider {\n    width: 49px;\n    height: 2px;\n    margin-left: auto;\n    margin-right: auto;\n    background: #f28500;\n}\n\n.divider-fullwidth {\n    height: 1px;\n    width: 100%;\n}\n\n.divider-circle {\n    position: relative;\n    width: 100%;\n    height: 10px;\n}\n\n.divider-circle:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 10px;\n    height: 10px;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    border-radius: 50px;\n    background: #2aa0ec;\n}\n\n.divider-md {\n    height: 1px;\n    width: 119px;\n}\n\n* + .divider-circle {\n    margin-top: 32px;\n}\n@media only screen and (max-width: 767px) {\n.carousel-inner .item { min-height: 250px !important; }\n.carousel-inner .item .col-xs-5 img { width: 100%; }\n.carousel-inner .item .col-xs-7 { padding-left: 0px !important; padding-right: 0px !important; }\n.carousel-inner .item .col-xs-7 h3 { font-size: 20px !important; line-height: 24px; }\n.carousel-inner .item .col-xs-7 h4 { font-size: 18px !important; line-height: 24px; }\n.services-main h1 { font-size: 28px; line-height: 36px; margin: 0px; }\n.links-main { padding-top: 0px; }\n}\n\narticle{\n    cursor: pointer !important;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-main\">\n\t<div class=\"row\">\n\t\t<div id=\"first-slider\">\n\t\t\t<div id=\"carousel-example-generic\" class=\"carousel slide carousel-fade\">\n\t\t\t\t<!-- Indicators -->\n\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t<li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t<li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n\t\t\t\t\t<li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n\t\t\t\t</ol>\n\t\t\t\t<!-- Wrapper for slides -->\n\t\t\t\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t\t\t<!-- Item 1 -->\n\t\t\t\t\t<div class=\"item active slide1\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-3 text-right col-xs-5\">\n\t\t\t\t\t\t\t\t\t<img style=\"max-width: 200px;\" data-animation=\"animated zoomInLeft\" src=\"http://s20.postimg.org/pfmmo6qj1/window_domain.png\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-9 text-left col-xs-7\">\n\t\t\t\t\t\t\t\t\t<h3 data-animation=\"animated bounceInDown\">Add images, or even your logo!</h3>\n\t\t\t\t\t\t\t\t\t<h4 data-animation=\"animated bounceInUp\">Easily use stunning effects</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Item 2 -->\n\t\t\t\t\t<div class=\"item slide2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-7 text-left col-xs-7\">\n\t\t\t\t\t\t\t\t\t<h3 data-animation=\"animated bounceInDown\"> 50 animation options A beautiful</h3>\n\t\t\t\t\t\t\t\t\t<h4 data-animation=\"animated bounceInUp\">Create beautiful slideshows </h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-5 text-right col-xs-5\">\n\t\t\t\t\t\t\t\t\t<img style=\"max-width: 200px;\" data-animation=\"animated zoomInLeft\" src=\"http://s20.postimg.org/sp11uneml/rack_server_unlock.png\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Item 3 -->\n\t\t\t\t\t<div class=\"item slide3\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-5 text-left col-xs-5\">\n\t\t\t\t\t\t\t\t\t<img style=\"max-width: 200px;\" data-animation=\"animated zoomInLeft\" src=\"http://s20.postimg.org/eq8xvxeq5/globe_network.png\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7 text-right col-xs-7\">\n\t\t\t\t\t\t\t\t\t<h3 data-animation=\"animated bounceInDown\">Simple Bootstrap Carousel</h3>\n\t\t\t\t\t\t\t\t\t<h4 data-animation=\"animated bounceInUp\">Bootstrap Image Carousel Slider with Animate.css</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Wrapper for slides-->\n\t\t\t\t<a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t<i class=\"fa fa-angle-left\"></i><span class=\"sr-only\">Previous</span>\n\t\t\t\t</a>\n\t\t\t\t<a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t<i class=\"fa fa-angle-right\"></i><span class=\"sr-only\">Next</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row container services-main\">\n\t\t<h1>Our Services</h1>\n\t\t<p>We provide expert tax and advisory services to individuals and small businesses.</p>\n\t</div>\n\t<div class=\"row container links-main\">\n\t\t<div class=\"row range range-xs-center\">\n\t\t\t<div class=\"col-sm-4 height-fill\">\n\t\t\t\t<article class=\"icon-box\" [routerLink]=\"['/electionforms']\">\n\t\t\t\t\t<div class=\"box-top\">\n\t\t\t\t\t\t<div class=\"box-icon\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t<div class=\"divider\"></div>\n\t\t\t\t\t\t<div class=\"box-header\">\n\t\t\t\t\t\t\t<h5><a href=\"#\">Election Forms</a></h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</article>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4 height-fill offset-top-40 offset-sm-top-0\">\n\t\t\t\t<article class=\"icon-box\" [routerLink]=\"['']\">\n\t\t\t\t\t<div class=\"box-top\">\n\t\t\t\t\t\t<div class=\"box-icon\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t<div class=\"divider\"></div>\n\t\t\t\t\t\t<div class=\"box-header\">\n\t\t\t\t\t\t\t<h5><a href=\"#\">Submit RMA Forms</a></h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</article>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4 height-fill offset-top-40 offset-md-top-0\">\n\t\t\t\t<article class=\"icon-box\" [routerLink]=\"['']\">\n\t\t\t\t\t<div class=\"box-top\">\n\t\t\t\t\t\t<div class=\"box-icon\"><i class=\"fa fa-bus\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t<div class=\"divider\"></div>\n\t\t\t\t\t\t<div class=\"box-header\">\n\t\t\t\t\t\t\t<h5><a href=\"#\">Order Status</a></h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</article>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row range range-xs-center\">\n\t\t\t<div class=\"col-sm-4 col-sm-offset-2 height-fill\">\n\t\t\t\t<article class=\"icon-box\" [routerLink]=\"['']\">\n\t\t\t\t\t<div class=\"box-top\">\n\t\t\t\t\t\t<div class=\"box-icon\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t<div class=\"divider\"></div>\n\t\t\t\t\t\t<div class=\"box-header\">\n\t\t\t\t\t\t\t<h5><a href=\"#\">My Documents</a></h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</article>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4 height-fill offset-top-40 offset-sm-top-0\">\n\t\t\t\t<article class=\"icon-box\" [routerLink]=\"['']\">\n\t\t\t\t\t<div class=\"box-top\">\n\t\t\t\t\t\t<div class=\"box-icon\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t<div class=\"divider\"></div>\n\t\t\t\t\t\t<div class=\"box-header\">\n\t\t\t\t\t\t\t<h5><a>My Account</a></h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</article>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/home/components/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/my-account/my-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/my-account/my-account.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  my-account works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/my-account/my-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyAccountComponent = (function () {
    function MyAccountComponent() {
    }
    MyAccountComponent.prototype.ngOnInit = function () {
    };
    return MyAccountComponent;
}());
MyAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-account',
        template: __webpack_require__("../../../../../src/app/home/components/my-account/my-account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/my-account/my-account.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyAccountComponent);

//# sourceMappingURL=my-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/my-documents/my-documents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/my-documents/my-documents.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  my-documents works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/my-documents/my-documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyDocumentsComponent = (function () {
    function MyDocumentsComponent() {
    }
    MyDocumentsComponent.prototype.ngOnInit = function () {
    };
    return MyDocumentsComponent;
}());
MyDocumentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-documents',
        template: __webpack_require__("../../../../../src/app/home/components/my-documents/my-documents.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/my-documents/my-documents.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyDocumentsComponent);

//# sourceMappingURL=my-documents.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/order-status/order-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/order-status/order-status.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  order-status works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/order-status/order-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderStatusComponent = (function () {
    function OrderStatusComponent() {
    }
    OrderStatusComponent.prototype.ngOnInit = function () {
    };
    return OrderStatusComponent;
}());
OrderStatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-order-status',
        template: __webpack_require__("../../../../../src/app/home/components/order-status/order-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/order-status/order-status.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrderStatusComponent);

//# sourceMappingURL=order-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/submit-rmaforms/submit-rmaforms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/submit-rmaforms/submit-rmaforms.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  submit-rmaforms works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/submit-rmaforms/submit-rmaforms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitRmaformsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitRmaformsComponent = (function () {
    function SubmitRmaformsComponent() {
    }
    SubmitRmaformsComponent.prototype.ngOnInit = function () {
    };
    return SubmitRmaformsComponent;
}());
SubmitRmaformsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-submit-rmaforms',
        template: __webpack_require__("../../../../../src/app/home/components/submit-rmaforms/submit-rmaforms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/submit-rmaforms/submit-rmaforms.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubmitRmaformsComponent);

//# sourceMappingURL=submit-rmaforms.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__ = __webpack_require__("../../../../../src/app/home/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_electionforms_electionforms_component__ = __webpack_require__("../../../../../src/app/home/components/electionforms/electionforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_my_documents_my_documents_component__ = __webpack_require__("../../../../../src/app/home/components/my-documents/my-documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_my_account_my_account_component__ = __webpack_require__("../../../../../src/app/home/components/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_order_status_order_status_component__ = __webpack_require__("../../../../../src/app/home/components/order-status/order-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_submit_rmaforms_submit_rmaforms_component__ = __webpack_require__("../../../../../src/app/home/components/submit-rmaforms/submit-rmaforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_electionforms_election_form_data_election_form_data_component__ = __webpack_require__("../../../../../src/app/home/components/electionforms/election-form-data/election-form-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__["a" /* MainComponent */] },
            { path: 'electionforms', component: __WEBPACK_IMPORTED_MODULE_4__components_electionforms_electionforms_component__["a" /* ElectionformsComponent */] },
            { path: 'electionformdata', component: __WEBPACK_IMPORTED_MODULE_9__components_electionforms_election_form_data_election_form_data_component__["a" /* ElectionFormDataComponent */] },
            { path: 'mydocuments', component: __WEBPACK_IMPORTED_MODULE_5__components_my_documents_my_documents_component__["a" /* MyDocumentsComponent */] },
            { path: 'myaccount', component: __WEBPACK_IMPORTED_MODULE_6__components_my_account_my_account_component__["a" /* MyAccountComponent */] },
            { path: 'orderstatus', component: __WEBPACK_IMPORTED_MODULE_7__components_order_status_order_status_component__["a" /* OrderStatusComponent */] },
            { path: 'submitrmaforms', component: __WEBPACK_IMPORTED_MODULE_8__components_submit_rmaforms_submit_rmaforms_component__["a" /* SubmitRmaformsComponent */] }
        ]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_main_component__ = __webpack_require__("../../../../../src/app/home/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_electionforms_electionforms_component__ = __webpack_require__("../../../../../src/app/home/components/electionforms/electionforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_my_documents_my_documents_component__ = __webpack_require__("../../../../../src/app/home/components/my-documents/my-documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_my_account_my_account_component__ = __webpack_require__("../../../../../src/app/home/components/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_order_status_order_status_component__ = __webpack_require__("../../../../../src/app/home/components/order-status/order-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_submit_rmaforms_submit_rmaforms_component__ = __webpack_require__("../../../../../src/app/home/components/submit-rmaforms/submit-rmaforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_electionforms_election_form_data_election_form_data_component__ = __webpack_require__("../../../../../src/app/home/components/electionforms/election-form-data/election-form-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import {BreadcrumbModule,MenuItem} from 'primeng/primeng';
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_electionforms_electionforms_component__["a" /* ElectionformsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_my_documents_my_documents_component__["a" /* MyDocumentsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_my_account_my_account_component__["a" /* MyAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_order_status_order_status_component__["a" /* OrderStatusComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_submit_rmaforms_submit_rmaforms_component__["a" /* SubmitRmaformsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_electionforms_election_form_data_election_form_data_component__["a" /* ElectionFormDataComponent */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/assets/images/slide-1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide-1.f15facfb017aa103b80b.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/slide-2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide-2.8969d653f63fdb3245f7.jpg";

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-home></app-home>\n<app-about></app-about>\n<app-experience></app-experience>\n<!-- <app-education></app-education> \n<app-contact></app-contact>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/about/about.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/about/about.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"About\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-12\">\n        <h2 class=\"text-center\">About</h2>\n        <h4>I am a UI/UX Developer and Wordpress Developer. Had 7+ Years of experience. In my professional career had\n          worked over 500+ websites. Started my career as a HTML Developer in June 2010. As a Sr. UI/UX Developer my\n          main role is to take design files from project manager discuss about timeline and any specific need of client\n          and start work over to convert it in HTML, Wordpress or other framework as per client need with responsive and\n          browser compatible.</h4>\n        <h3>Languages, Frameworks & CMS :</h3>\n        <h4>html5, css3, jQuery, Javascript, Bootstrap, Material Design, Wordpress, OpenCart,\n          Magento, Shopify, MailChimp, HubSpot, Joomla, Codeignighter, ReactJs, GatsbyJs, Node.js,\n          Grunt, Gulp, Webpack, GIT, PageSpeedOptimization, Responsive Web App.</h4>\n\n        <h3>For Design:</h3>\n        <h4>Photoshop, Illustrator, InDesign, Figma, Sketch, XD, Photopea.</h4>\n\n        <h3>For Development:</h3>\n        <h4>Visual Studio Code, Sublime, NetBeans, Dreamweaver, Notepad, Notepad++.</h4>\n\n        <h3>For Communication:</h3>\n        <h4>Skype, Slack, Jira, ActiveCollab, HangOut, BaseCamp.</h4>\n\n        <h3>For Testing:</h3>\n        <h4>Chrome, Mozilla, IE, Edge, Safari, PageSpeedInsight, GTMatrix, WebPageTest, Real Devices.</h4>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/contact/contact.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/contact/contact.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"Contact\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-6\"></div>\n      <div class=\"col-12 col-sm-6\"></div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/education/education.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/education/education.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"Education\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-6\"></div>\n      <div class=\"col-12 col-sm-6\"></div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/experience/experience.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/experience/experience.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"Experience\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h2>Experience</h2>\n      </div>\n    </div>\n    <div *ngFor=\"let experience of experiences; let odd=odd; let even=even \" [ngClass]=\"{ odd: odd, even:even}\"\n      class=\"row\">\n      <div class=\"col-12 col-sm-6\">\n        <h4>Duration: <span>{{experience.duration.from.month}} {{experience.duration.from.year}}</span> To\n          <span>{{experience.duration.to.month}} {{experience.duration.to.year}}</span></h4>\n        <h3>Company: <span>{{experience.company}}</span></h3>\n        <h4>Designation: <span>{{experience.post}}</span></h4>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/header/header.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/header/header.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-sm navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a [ngx-scroll-to]=\"'#Home'\"><img src=\"assets/img/logo.png\" alt=\"dipak makwana logo\" /></a>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\"><a href=\"#Home\" class=\"nav-link\" [ngx-scroll-to]=\"'#Home'\">Home</a></li>\n        <li class=\"nav-item\"><a href=\"#About\" class=\"nav-link\" [ngx-scroll-to]=\"'#About'\">About</a></li>\n        <li class=\"nav-item\"><a href=\"#Experience\" class=\"nav-link\" [ngx-scroll-to]=\"'#Experience'\">Experience</a></li>\n        <!-- <li class=\"nav-item\"><a href=\"#Education\" class=\"nav-link\" [ngx-scroll-to]=\"'#Education'\">Education</a></li> -->\n        <!-- <li class=\"nav-item\"><a href=\"#Contact\" class=\"nav-link\" [ngx-scroll-to]=\"'#Contact'\">Contact</a></li> -->\n      </ul>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/home/home.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/home/home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"Home\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-12 col-sm-6\"><img class=\"img-fluid\" src=\"../../../assets/img/dipak-makwana.png\"\n          alt=\"dipak makwana profile picture\" /></div>\n      <div class=\"col-12 col-sm-6\">\n        <h4>Hi, My Name is</h4>\n        <h1>Dipak Makwana</h1>\n        <h2>UI/UX Developer and<br />Wordpress Developer</h2>\n      </div>\n    </div>\n  </div>\n  <a href=\"#About\" [ngx-scroll-to]=\"'#About'\"><img class=\"scroll-down\" src=\"../../../assets/img/scroll-down.png\"\n      alt=\"scroll down arrow\" /></a>\n</section>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'profile';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/experience/experience.component */ "./src/app/component/experience/experience.component.ts");
/* harmony import */ var _component_education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/education/education.component */ "./src/app/component/education/education.component.ts");
/* harmony import */ var _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/contact/contact.component */ "./src/app/component/contact/contact.component.ts");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/about/about.component */ "./src/app/component/about/about.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _component_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                _component_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
                _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _component_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/about/about.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/about/about.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#About {\r\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffca1c+0,d637cb+100 */\r\n  background: #ffca1c;\r\n  /* Old browsers */\r\n  /* FF3.6-15 */\r\n  /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(135deg, #ffca1c 0%, #d637cb 100%);\r\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffca1c', endColorstr='#d637cb', GradientType=1);\r\n  /* IE6-9 fallback on horizontal gradient */\r\n}\r\n\r\n#About .row {\r\n  min-height: calc(100vh - 60px);\r\n}\r\n\r\n#About h4, #About h2, #About h3 {\r\n  color: #101010;\r\n  font-weight: 300;\r\n}\r\n\r\n#About h3, #About h2 {\r\n  font-weight: 400;\r\n}\r\n\r\n#About h2 {\r\n  text-transform: uppercase;\r\n}\r\n\r\n#About h4 {\r\n  font-size: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpSEFBaUg7RUFDakgsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUVqQixhQUFhO0VBRWIsNEJBQTRCO0VBQzVCLDZEQUE2RDtFQUM3RCxxREFBcUQ7RUFDckQsbUhBQW1IO0VBQ25ILDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjQWJvdXQge1xyXG4gIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwczovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jZmZjYTFjKzAsZDYzN2NiKzEwMCAqL1xyXG4gIGJhY2tncm91bmQ6ICNmZmNhMWM7XHJcbiAgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZjYTFjIDAlLCAjZDYzN2NiIDEwMCUpO1xyXG4gIC8qIEZGMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZjYTFjIDAlLCAjZDYzN2NiIDEwMCUpO1xyXG4gIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmY2ExYyAwJSwgI2Q2MzdjYiAxMDAlKTtcclxuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmY2ExYycsIGVuZENvbG9yc3RyPScjZDYzN2NiJywgR3JhZGllbnRUeXBlPTEpO1xyXG4gIC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cclxufVxyXG5cclxuI0Fib3V0IC5yb3cge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxufVxyXG5cclxuI0Fib3V0IGg0LCAjQWJvdXQgaDIsICNBYm91dCBoMyB7XHJcbiAgY29sb3I6ICMxMDEwMTA7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuI0Fib3V0IGgzLCAjQWJvdXQgaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiNBYm91dCBoMiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuI0Fib3V0IGg0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/about/about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/component/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/component/contact/contact.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/contact/contact.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/contact/contact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/contact/contact.component.ts ***!
  \********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/component/contact/contact.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/component/education/education.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/education/education.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/education/education.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/education/education.component.ts ***!
  \************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/component/education/education.component.css")]
        })
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/component/experience/experience.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/experience/experience.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Experience {\r\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#3affca+5,ff7f3a+100 */\r\n  background: #3affca;\r\n  /* Old browsers */\r\n  /* FF3.6-15 */\r\n  /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(135deg, #3affca 5%, #ff7f3a 100%);\r\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3affca', endColorstr='#ff7f3a', GradientType=1);\r\n  /* IE6-9 fallback on horizontal gradient */\r\n}\r\n\r\n#Experience h2 {\r\n  color: #101010;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#Experience .container .row.even {\r\n  -webkit-box-direction: reverse!important;\r\n  flex-direction: row-reverse!important;\r\n}\r\n\r\n#Experience .container .row.odd {\r\n  text-align: right;\r\n}\r\n\r\n#Experience h3, #Experience h4 {\r\n  font-weight: 400;\r\n}\r\n\r\n#Experience h3 span, #Experience h4 span {\r\n  font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUhBQWlIO0VBQ2pILG1CQUFtQjtFQUNuQixpQkFBaUI7RUFFakIsYUFBYTtFQUViLDRCQUE0QjtFQUM1Qiw2REFBNkQ7RUFDN0QscURBQXFEO0VBQ3JELG1IQUFtSDtFQUNuSCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFFeEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0V4cGVyaWVuY2Uge1xyXG4gIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwczovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jM2FmZmNhKzUsZmY3ZjNhKzEwMCAqL1xyXG4gIGJhY2tncm91bmQ6ICMzYWZmY2E7XHJcbiAgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjM2FmZmNhIDUlLCAjZmY3ZjNhIDEwMCUpO1xyXG4gIC8qIEZGMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjM2FmZmNhIDUlLCAjZmY3ZjNhIDEwMCUpO1xyXG4gIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzNhZmZjYSA1JSwgI2ZmN2YzYSAxMDAlKTtcclxuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzNhZmZjYScsIGVuZENvbG9yc3RyPScjZmY3ZjNhJywgR3JhZGllbnRUeXBlPTEpO1xyXG4gIC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cclxufVxyXG5cclxuI0V4cGVyaWVuY2UgaDIge1xyXG4gIGNvbG9yOiAjMTAxMDEwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbiNFeHBlcmllbmNlIC5jb250YWluZXIgLnJvdy5ldmVuIHtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2UhaW1wb3J0YW50O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNFeHBlcmllbmNlIC5jb250YWluZXIgLnJvdy5vZGQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4jRXhwZXJpZW5jZSBoMywgI0V4cGVyaWVuY2UgaDQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiNFeHBlcmllbmNlIGgzIHNwYW4sICNFeHBlcmllbmNlIGg0IHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/experience/experience.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/experience/experience.component.ts ***!
  \**************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.experiences = [
            {
                company: "The Launch Engine",
                post: "Sr. Front End Developer",
                duration: {
                    from: {
                        month: "Aug",
                        year: "2018"
                    },
                    to: {
                        month: "Mar",
                        year: "2019"
                    }
                }
            },
            {
                company: "The Work Shore",
                post: "Sr. Front End Developer",
                duration: {
                    from: {
                        month: "Des",
                        year: "2017"
                    },
                    to: {
                        month: "Jun",
                        year: "2018"
                    }
                }
            },
            {
                company: "Techniexe infolab LLC",
                post: "Sr. Front End Developer",
                duration: {
                    from: {
                        month: "Apr",
                        year: "2017"
                    },
                    to: {
                        month: "Dec",
                        year: "2017"
                    }
                }
            },
            {
                company: "The Launch Engine",
                post: "Sr. Front End Developer",
                duration: {
                    from: {
                        month: "Mar",
                        year: "2016"
                    },
                    to: {
                        month: "Mar",
                        year: "2017"
                    }
                }
            },
            {
                company: "Glorywebs",
                post: "Sr. Front End Developer",
                duration: {
                    from: {
                        month: "Feb",
                        year: "2015"
                    },
                    to: {
                        month: "Mar",
                        year: "2016"
                    }
                }
            },
            {
                company: "Jomwebmedia",
                post: "Sr. Front End Developer",
                duration: {
                    from: {
                        month: "Feb",
                        year: "2011"
                    },
                    to: {
                        month: "Oct",
                        year: "2014"
                    }
                }
            },
            {
                company: "Protek Power",
                post: "HTML Developer",
                duration: {
                    from: {
                        month: "Jun",
                        year: "2010"
                    },
                    to: {
                        month: "Feb",
                        year: "2011"
                    }
                }
            }
        ];
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/component/experience/experience.component.css")]
        })
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  position: fixed;\r\n  z-index: 9999;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n}\r\n\r\nheader nav ul li a {\r\n  color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Home {\r\n  position: relative;\r\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#6cc96c+0,21bfef+100 */\r\n  background: #6cc96c;\r\n  /* Old browsers */\r\n  /* FF3.6-15 */\r\n  /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(135deg, #6cc96c 0%, #21bfef 100%);\r\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6cc96c', endColorstr='#21bfef', GradientType=1);\r\n  /* IE6-9 fallback on horizontal gradient */\r\n}\r\n\r\n#Home .row {\r\n  min-height: calc(100vh - 60px);\r\n}\r\n\r\n#Home h4, #Home h2, #Home h1 {\r\n  color: #101010;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#Home h1 {\r\n  font-weight: 400;\r\n  color: #0c0f82;\r\n}\r\n\r\n#Home .scroll-down {\r\n  position: absolute;\r\n  bottom: 30px;\r\n  left: 50%;\r\n  margin-left: -20px;\r\n  width: 40px;\r\n  -webkit-animation: bounce 2s infinite;\r\n  animation: bounce 2s infinite;\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n  0%, 20%, 50%, 80%, 100% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n  40% {\r\n    -webkit-transform: translateY(-30px);\r\n            transform: translateY(-30px);\r\n  }\r\n  60% {\r\n    -webkit-transform: translateY(-15px);\r\n            transform: translateY(-15px);\r\n  }\r\n}\r\n\r\n@keyframes bounce {\r\n  0%, 20%, 50%, 80%, 100% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n  40% {\r\n    -webkit-transform: translateY(-30px);\r\n            transform: translateY(-30px);\r\n  }\r\n  60% {\r\n    -webkit-transform: translateY(-15px);\r\n            transform: translateY(-15px);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlIQUFpSDtFQUNqSCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBRWpCLGFBQWE7RUFFYiw0QkFBNEI7RUFDNUIsNkRBQTZEO0VBQzdELHFEQUFxRDtFQUNyRCxtSEFBbUg7RUFDbkgsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQixXQUFXO0VBRVgscUNBQXFDO0VBQ3JDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5QjtBQUNGOztBQVZBO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjSG9tZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwczovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jNmNjOTZjKzAsMjFiZmVmKzEwMCAqL1xyXG4gIGJhY2tncm91bmQ6ICM2Y2M5NmM7XHJcbiAgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNmNjOTZjIDAlLCAjMjFiZmVmIDEwMCUpO1xyXG4gIC8qIEZGMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNmNjOTZjIDAlLCAjMjFiZmVmIDEwMCUpO1xyXG4gIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZjYzk2YyAwJSwgIzIxYmZlZiAxMDAlKTtcclxuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzZjYzk2YycsIGVuZENvbG9yc3RyPScjMjFiZmVmJywgR3JhZGllbnRUeXBlPTEpO1xyXG4gIC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cclxufVxyXG5cclxuI0hvbWUgLnJvdyB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG59XHJcblxyXG4jSG9tZSBoNCwgI0hvbWUgaDIsICNIb21lIGgxIHtcclxuICBjb2xvcjogIzEwMTAxMDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbiNIb21lIGgxIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjMGMwZjgyO1xyXG59XHJcblxyXG4jSG9tZSAuc2Nyb2xsLWRvd24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDMwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICB3aWR0aDogNDBweDtcclxuICAtbW96LWFuaW1hdGlvbjogYm91bmNlIDJzIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlIHtcclxuICAwJSwgMjAlLCA1MCUsIDgwJSwgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\profile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
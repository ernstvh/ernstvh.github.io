(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-tabView>\n  <p-tabPanel header=\"This Week\">\n    <app-overview></app-overview>\n  </p-tabPanel>\n  <p-tabPanel header=\"Gym Sessions\">\n    <app-sessions></app-sessions>\n  </p-tabPanel>\n  <p-tabPanel header=\"Stretches\">\n    <app-stretches></app-stretches>\n  </p-tabPanel>\n  <p-tabPanel header=\"Intervals\">\n    <app-intervals></app-intervals>\n  </p-tabPanel>\n  <p-tabPanel header=\"Exercises\">\n    <app-exercises></app-exercises>\n  </p-tabPanel>\n</p-tabView>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom .ui-scrollpanel-wrapper {\n  border-right: 9px solid #f4f4f4;\n}\n.custom .ui-scrollpanel-bar {\n  background-color: #1976d2;\n  opacity: 1;\n  transition: background-color 0.3s;\n}\n.custom .ui-scrollpanel-bar:hover {\n  background-color: #135ba1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvSEQvaG9tZS9lcm5zdC9Qcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL0ZpdG5lc3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7QURFQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FDQUY7QURHQTtFQUNFLHlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tIC51aS1zY3JvbGxwYW5lbC13cmFwcGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiA5cHggc29saWQgI2Y0ZjRmNDtcbn1cblxuLmN1c3RvbSAudWktc2Nyb2xscGFuZWwtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG59XG5cbi5jdXN0b20gLnVpLXNjcm9sbHBhbmVsLWJhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzViYTE7XG59XG4iLCIuY3VzdG9tIC51aS1zY3JvbGxwYW5lbC13cmFwcGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiA5cHggc29saWQgI2Y0ZjRmNDtcbn1cbi5jdXN0b20gLnVpLXNjcm9sbHBhbmVsLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cbi5jdXN0b20gLnVpLXNjcm9sbHBhbmVsLWJhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzViYTE7XG59XG4iXX0= */"

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
        this.title = 'Fitness';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/spinner */ "./node_modules/primeng/spinner.js");
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-embed-video/dist */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/virtualscroller */ "./node_modules/primeng/virtualscroller.js");
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _stretches_stretches_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stretches/stretches.component */ "./src/app/stretches/stretches.component.ts");
/* harmony import */ var _intervals_intervals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./intervals/intervals.component */ "./src/app/intervals/intervals.component.ts");
/* harmony import */ var _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exercises/exercises.component */ "./src/app/exercises/exercises.component.ts");
/* harmony import */ var _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sessions/sessions.component */ "./src/app/sessions/sessions.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _stretches_stretches_component__WEBPACK_IMPORTED_MODULE_12__["StretchesComponent"],
                _intervals_intervals_component__WEBPACK_IMPORTED_MODULE_13__["IntervalsComponent"],
                _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_14__["ExercisesComponent"],
                _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_15__["SessionsComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_16__["OverviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
                primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_11__["VirtualScrollerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ScrollPanelModule"],
                primeng_spinner__WEBPACK_IMPORTED_MODULE_7__["SpinnerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["LightboxModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SelectButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_9__["EmbedVideo"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/exercises/exercises.component.html":
/*!****************************************************!*\
  !*** ./src/app/exercises/exercises.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-scrollPanel [style]=\"{width:'100%', height:'600px'}\" styleClass=\"custom\">\n  <div class=\"p-grid\">\n    <div class=\"p-col-6\" *ngFor=\"let exercise of exercises\">\n      <p>{{exercise.name}}</p>\n      <img width=\"180\" [src]=\"exercise.video_img\">\n    </div>\n  </div>\n</p-scrollPanel>\n"

/***/ }),

/***/ "./src/app/exercises/exercises.component.less":
/*!****************************************************!*\
  !*** ./src/app/exercises/exercises.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaXNlcy9leGVyY2lzZXMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/exercises/exercises.component.ts":
/*!**************************************************!*\
  !*** ./src/app/exercises/exercises.component.ts ***!
  \**************************************************/
/*! exports provided: ExercisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesComponent", function() { return ExercisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_training_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/training-content.service */ "./src/app/services/training-content.service.ts");



var ExercisesComponent = /** @class */ (function () {
    function ExercisesComponent(trainingContentService) {
        this.trainingContentService = trainingContentService;
    }
    ExercisesComponent.prototype.ngOnInit = function () {
        this.images = this.trainingContentService.getExercises().map(function (e) {
            return {
                source: "http://img.youtube.com/vi/" + e.youtube_id + "/hqdefault.jpg",
                thumbnail: "http://img.youtube.com/vi/" + e.youtube_id + "/default.jpg",
                title: e.name
            };
        });
        this.exercises = this.trainingContentService.getExercises();
    };
    ExercisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exercises',
            template: __webpack_require__(/*! ./exercises.component.html */ "./src/app/exercises/exercises.component.html"),
            styles: [__webpack_require__(/*! ./exercises.component.less */ "./src/app/exercises/exercises.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_training_content_service__WEBPACK_IMPORTED_MODULE_2__["TrainingContentService"]])
    ], ExercisesComponent);
    return ExercisesComponent;
}());



/***/ }),

/***/ "./src/app/intervals/intervals.component.html":
/*!****************************************************!*\
  !*** ./src/app/intervals/intervals.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-grid\" *ngFor=\"let interval of intervals\">\n  <div class=\"p-col-6\">\n    <b>Month {{interval.month}}</b><br/>{{interval.details}}\n  </div>\n  <div class=\"p-col-6\">\n    <div class=\"p-grid\">\n      <div class=\"p-col-2\"></div>\n      <div class=\"p-col-2\">Wk</div>\n      <div class=\"p-col-2\">Rps</div>\n      <div class=\"p-col-3\">Work</div>\n      <div class=\"p-col-3\">Rest</div>\n    </div>\n    <div class=\"p-grid\" *ngFor=\"let session of interval.sessions\">\n      <div class=\"p-col-2\"></div>\n      <div class=\"p-col-2\">{{session.week}}</div>\n      <div class=\"p-col-2\">{{session.reps}}</div>\n      <div class=\"p-col-3\">{{session.work}}</div>\n      <div class=\"p-col-3\">{{session.rest}}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/intervals/intervals.component.less":
/*!****************************************************!*\
  !*** ./src/app/intervals/intervals.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVydmFscy9pbnRlcnZhbHMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/intervals/intervals.component.ts":
/*!**************************************************!*\
  !*** ./src/app/intervals/intervals.component.ts ***!
  \**************************************************/
/*! exports provided: IntervalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalsComponent", function() { return IntervalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_training_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/training-content.service */ "./src/app/services/training-content.service.ts");



var IntervalsComponent = /** @class */ (function () {
    function IntervalsComponent(trainingContentService) {
        this.trainingContentService = trainingContentService;
    }
    IntervalsComponent.prototype.ngOnInit = function () {
        this.intervals = this.trainingContentService.getIntervals();
    };
    IntervalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intervals',
            template: __webpack_require__(/*! ./intervals.component.html */ "./src/app/intervals/intervals.component.html"),
            styles: [__webpack_require__(/*! ./intervals.component.less */ "./src/app/intervals/intervals.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_training_content_service__WEBPACK_IMPORTED_MODULE_2__["TrainingContentService"]])
    ], IntervalsComponent);
    return IntervalsComponent;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-accordion [multiple]=\"true\">\n  <div>\n    <p-selectButton [options]=\"stages\" [(ngModel)]=\"selectedStage\"></p-selectButton>\n    <p-selectButton [options]=\"weeks\" [(ngModel)]=\"selectedWeek\"></p-selectButton>\n    <p-selectButton [options]=\"sessions\" [(ngModel)]=\"selectedSession\"></p-selectButton>\n  </div>\n  <p-accordionTab header=\"Intervals\">\n    {{intervalDetails()}}\n  </p-accordionTab>\n  <p-accordionTab header=\"Gym Sessions\">\n    {{sessionDetails()}}\n  </p-accordionTab>\n</p-accordion>\n"

/***/ }),

/***/ "./src/app/overview/overview.component.less":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_training_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/training-content.service */ "./src/app/services/training-content.service.ts");



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(trainingService) {
        this.trainingService = trainingService;
        this.stages = [
            { label: "Correct", value: "0", icon: 'fa fa-fw fa-cc-paypal' },
            { label: "Strength", value: "1", icon: 'fa fa-fw fa-cc-paypal' },
            { label: "Speed", value: "2", icon: 'fa fa-fw fa-cc-paypal' }
        ];
        this.weeks = [
            { label: "Week 1", value: "0", icon: 'fa fa-fw fa-cc-paypal' },
            { label: "Week 2", value: "1", icon: 'fa fa-fw fa-cc-paypal' },
            { label: "Week 3", value: "2", icon: 'fa fa-fw fa-cc-paypal' },
            { label: "Week 4", value: "3", icon: 'fa fa-fw fa-cc-paypal' }
        ];
        this.sessions = [
            { label: "Session 1", value: "0", icon: 'fa fa-fw fa-cc-paypal' },
            { label: "Session 2", value: "1", icon: 'fa fa-fw fa-cc-paypal' },
            { label: "Session 3", value: "2", icon: 'fa fa-fw fa-cc-paypal' }
        ];
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.selectedStage = "0";
        this.selectedWeek = "0";
        this.selectedSession = "0";
    };
    OverviewComponent.prototype.intervalDetails = function () {
        var details = this.trainingService.getInterval(+this.selectedStage, +this.selectedWeek);
        return "" + details.details;
    };
    OverviewComponent.prototype.sessionDetails = function () {
        return "A session";
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.less */ "./src/app/overview/overview.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_training_content_service__WEBPACK_IMPORTED_MODULE_2__["TrainingContentService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/services/training-content.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/training-content.service.ts ***!
  \******************************************************/
/*! exports provided: Exercise, Stretch, Interval, IntervalSession, GymStage, GymWeek, GymSession, GymExercise, TrainingContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise", function() { return Exercise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stretch", function() { return Stretch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return Interval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalSession", function() { return IntervalSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymStage", function() { return GymStage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymWeek", function() { return GymWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymSession", function() { return GymSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymExercise", function() { return GymExercise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingContentService", function() { return TrainingContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video/dist */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_stretches_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/stretches.json */ "./src/assets/stretches.json");
var _assets_stretches_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/stretches.json */ "./src/assets/stretches.json", 1);
/* harmony import */ var _assets_intervals_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/intervals.json */ "./src/assets/intervals.json");
var _assets_intervals_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/intervals.json */ "./src/assets/intervals.json", 1);
/* harmony import */ var _assets_gymplans_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/gymplans.json */ "./src/assets/gymplans.json");
var _assets_gymplans_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/gymplans.json */ "./src/assets/gymplans.json", 1);
/* harmony import */ var _assets_exercises_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/exercises.json */ "./src/assets/exercises.json");
var _assets_exercises_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/exercises.json */ "./src/assets/exercises.json", 1);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var Exercise = /** @class */ (function () {
    function Exercise(name, youtube_id) {
        this.name = name;
        this.youtube_id = youtube_id;
    }
    Exercise = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String])
    ], Exercise);
    return Exercise;
}());

var Stretch = /** @class */ (function () {
    function Stretch(name, sets, reps, youtube_id) {
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.youtube_id = youtube_id;
    }
    return Stretch;
}());

var Interval = /** @class */ (function () {
    function Interval(month, details, sessions) {
        this.month = month;
        this.details = details;
        this.sessions = sessions;
    }
    return Interval;
}());

var IntervalSession = /** @class */ (function () {
    function IntervalSession(week, reps, work, rest) {
        this.week = week;
        this.reps = reps;
        this.work = work;
        this.rest = rest;
    }
    return IntervalSession;
}());

var GymStage = /** @class */ (function () {
    function GymStage(stage, weeks) {
        this.stage = stage;
        this.weeks = weeks;
    }
    return GymStage;
}());

var GymWeek = /** @class */ (function () {
    function GymWeek(week, sessions) {
        this.week = week;
        this.sessions = sessions;
    }
    return GymWeek;
}());

var GymSession = /** @class */ (function () {
    function GymSession(stage, week, session, exercises) {
        this.stage = stage;
        this.week = week;
        this.session = session;
        this.exercises = exercises;
    }
    return GymSession;
}());

var GymExercise = /** @class */ (function () {
    function GymExercise(order, name, sets, rest, last_weight, current_weight, reps, time, description) {
        this.order = order;
        this.name = name;
        this.sets = sets;
        this.rest = rest;
        this.last_weight = last_weight;
        this.current_weight = current_weight;
        this.reps = reps;
        this.time = time;
        this.description = description;
    }
    return GymExercise;
}());

var TrainingContentService = /** @class */ (function () {
    function TrainingContentService(embedService, sanitizer) {
        this.embedService = embedService;
        this.sanitizer = sanitizer;
    }
    TrainingContentService.prototype.getStretches = function () {
        return _assets_stretches_json__WEBPACK_IMPORTED_MODULE_3__.map(function (s) { return new Stretch(s.name, s.sets, s.reps, s.youtube_id); });
        // this.sanitizer.bypassSecurityTrustResourceUrl(`https://img.youtube.com/vi/${s.youtube_id}/hqdefault.jpg`),
        // this.embedService.embed_youtube(s.youtube_id)));
    };
    TrainingContentService.prototype.getIntervals = function () {
        return _assets_intervals_json__WEBPACK_IMPORTED_MODULE_4__.map(function (s) { return new Interval(s.month, s.details, s.sessions.map(function (k) { return new IntervalSession(k.week, k.reps, k.work, k.rest); })); });
    };
    TrainingContentService.prototype.getExercises = function () {
        var e = _assets_exercises_json__WEBPACK_IMPORTED_MODULE_6__.map(function (e) { return new Exercise(e.name, e.youtube_id); });
        // this.embedService.embed_youtube(e.youtube_id),
        // this.sanitizer.bypassSecurityTrustResourceUrl(`http://img.youtube.com/vi/${e.youtube_id}/hqdefault.jpg`),
        // `http://youtu.be/${e.youtube_id}`,
        // this.sanitizer.bypassSecurityTrustResourceUrl(`http://youtube.com/embed/${e.youtube_id}`)));
        return e;
    };
    TrainingContentService.prototype.getGymSession = function (stage, week, session) {
        return this.getGymStages()[stage].weeks[week].sessions[session];
    };
    TrainingContentService.prototype.getInterval = function (stage, week) {
        var interval = this.getIntervals()[stage];
        var sessions = interval.sessions.filter(function (i) { return i.week == week; });
        return new Interval(interval.month, interval.details, sessions);
    };
    TrainingContentService.prototype.getGymStages = function () {
        var plans = _assets_gymplans_json__WEBPACK_IMPORTED_MODULE_5__;
        var stages = [];
        plans.map(function (plan) {
            var weeks = [];
            plan.weeks.map(function (week, i) {
                var sessions = [];
                week.map(function (w) {
                    var exercises = [];
                    plan.plans[w].map(function (group) {
                        group.exercises.map(function (exercise, j) {
                            exercises.push(new GymExercise("" + group.order + (j + 1), exercise.key, group.sets, j + 1 < group.exercises.length ? 0 : group.rest, 0, 0, exercise.do.reps, exercise.do.time, exercise.do.description));
                        });
                    });
                    sessions.push(new GymSession(plan.stage, i + 1, w + 1, exercises));
                });
                weeks.push(new GymWeek(i + 1, sessions));
            });
            stages.push(new GymStage(plan.stage, weeks));
        });
        return stages;
    };
    TrainingContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
    ], TrainingContentService);
    return TrainingContentService;
}());



/***/ }),

/***/ "./src/app/sessions/sessions.component.html":
/*!**************************************************!*\
  !*** ./src/app/sessions/sessions.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-scrollPanel [style]=\"{width:'100%', height:'600px'}\" styleClass=\"custom\">\n  <div *ngFor=\"let stage of stages\">\n    <h2>{{stage.stage}}</h2>\n    <div *ngFor=\"let week of stage.weeks\">\n      <div *ngFor=\"let session of week.sessions\">\n        <p-accordion>\n          <p-accordionTab header=\"Week {{week.week}} Session {{session.session}}\">\n            <div class=\"p-grid\">\n              <div class=\"p-col\">Exercise</div>\n              <div class=\"p-col-fixed\" style=\"width:100px\">Weight</div>\n            </div>\n            <div class=\"p-grid\" *ngFor=\"let exercise of session.exercises\">\n              <div class=\"p-col\">\n                <div>\n                  {{exercise.order}} {{exercise.name}}\n                  <!--<p-lightbox type=\"content\">-->\n                  <!--<a class=\"group\" href=\"\">{{exercise.name}}</a>-->\n                  <!--&lt;!&ndash;<div [innerHtml]=\"exercise.video_iframe\"></div>&ndash;&gt;-->\n                  <!--</p-lightbox>-->\n                </div>\n                <div>{{exercise.sets}}x {{exercise.reps[0]}}-{{exercise.reps[1]}}, {{exercise.rest}}s</div>\n              </div>\n              <div class=\"p-col-fixed\" style=\"width:100px\" >\n                <p-spinner size=\"3\" (value)=\"exercise.current_weight\" min=\"0\">{{exercise.current_weight}}</p-spinner>\n              </div>\n            </div>\n          </p-accordionTab>\n        </p-accordion>\n      </div>\n    </div>\n  </div>\n</p-scrollPanel>\n"

/***/ }),

/***/ "./src/app/sessions/sessions.component.less":
/*!**************************************************!*\
  !*** ./src/app/sessions/sessions.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb25zL3Nlc3Npb25zLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/sessions/sessions.component.ts":
/*!************************************************!*\
  !*** ./src/app/sessions/sessions.component.ts ***!
  \************************************************/
/*! exports provided: SessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsComponent", function() { return SessionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_training_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/training-content.service */ "./src/app/services/training-content.service.ts");



var SessionsComponent = /** @class */ (function () {
    function SessionsComponent(trainingContentService) {
        this.trainingContentService = trainingContentService;
    }
    SessionsComponent.prototype.ngOnInit = function () {
        this.stages = this.trainingContentService.getGymStages();
    };
    SessionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sessions',
            template: __webpack_require__(/*! ./sessions.component.html */ "./src/app/sessions/sessions.component.html"),
            styles: [__webpack_require__(/*! ./sessions.component.less */ "./src/app/sessions/sessions.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_training_content_service__WEBPACK_IMPORTED_MODULE_2__["TrainingContentService"]])
    ], SessionsComponent);
    return SessionsComponent;
}());



/***/ }),

/***/ "./src/app/stretches/stretches.component.html":
/*!****************************************************!*\
  !*** ./src/app/stretches/stretches.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-scrollPanel [style]=\"{width:'100%', height:'600px'}\" styleClass=\"custom\">\n  <div class=\"p-grid\">\n    <div class=\"p-col-6\" *ngFor=\"let stretch of stretches\">\n      <p>{{stretch.name}}</p>\n      <img width=\"180\" [src]=\"stretch.video_img\">\n    </div>\n  </div>\n</p-scrollPanel>\n"

/***/ }),

/***/ "./src/app/stretches/stretches.component.less":
/*!****************************************************!*\
  !*** ./src/app/stretches/stretches.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmV0Y2hlcy9zdHJldGNoZXMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/stretches/stretches.component.ts":
/*!**************************************************!*\
  !*** ./src/app/stretches/stretches.component.ts ***!
  \**************************************************/
/*! exports provided: StretchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StretchesComponent", function() { return StretchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_training_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/training-content.service */ "./src/app/services/training-content.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var StretchesComponent = /** @class */ (function () {
    function StretchesComponent(trainingContentService, sanitizer) {
        this.trainingContentService = trainingContentService;
        this.sanitizer = sanitizer;
    }
    StretchesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stretches = this.trainingContentService.getStretches().map(function (s) {
            return {
                "name": s.name,
                "reps": s.reps,
                "sets": s.sets,
                "video_img": _this.youtubify(s.youtube_id),
            };
        });
        // });
    };
    StretchesComponent.prototype.youtubify = function (id) {
        this.sanitizer.bypassSecurityTrustResourceUrl("http://img.youtube.com/vi/" + id + "/hqdefault.jpg");
    };
    StretchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stretches',
            template: __webpack_require__(/*! ./stretches.component.html */ "./src/app/stretches/stretches.component.html"),
            styles: [__webpack_require__(/*! ./stretches.component.less */ "./src/app/stretches/stretches.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_training_content_service__WEBPACK_IMPORTED_MODULE_2__["TrainingContentService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], StretchesComponent);
    return StretchesComponent;
}());



/***/ }),

/***/ "./src/assets/exercises.json":
/*!***********************************!*\
  !*** ./src/assets/exercises.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = [{"name":"Dumbbell Split Squat","youtube_id":"PNT_pxyk5aA"},{"name":"Lying Dumbbell Press","youtube_id":"umH_4qdwFiM"},{"name":"Single Leg Hamstring Curl","youtube_id":"s1--GeKJqf8"},{"name":"Seated Row Machine","youtube_id":"k8xQOVvqHW4"},{"name":"Dumbbell/Kettle bell Windmill","youtube_id":"aqaM5c0nyB8"},{"name":"Plank","youtube_id":"e3lji2W5BK0"},{"name":"Cable Woodchop High-Low","youtube_id":"ycxdxT55NYY"},{"name":"Single Leg Bodyweight Deadlift","youtube_id":"6ja-e178xQY"}];

/***/ }),

/***/ "./src/assets/gymplans.json":
/*!**********************************!*\
  !*** ./src/assets/gymplans.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"stage":"Correct","weeks":[[0,1,2],[0,1,2],[3,4,5],[3,4,5]],"plans":[[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Dumbbell Split Squat","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Lying Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Single Leg Hamstring Curl","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Seated Row Machine","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Dumbbell/Kettlebell Windmill","do":{"reps":[12,15],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Plank","do":{"reps":[],"description":"as long as possible","time":-1}},{"key":"Cable Woodchop High-Low","do":{"reps":[12,15],"description":"","time":-1}}]},{"order":"E","sets":3,"rest":60,"exercises":[{"key":"Single Leg Bodyweight Deadlift","do":{"reps":[15,20],"description":"","time":-1}}]}],[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Step Up","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Kneeling Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Dumbbell Romanian Deadlift","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Lateral Pull Down","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Standing Cable Rear Delt Flyes","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Single Leg Bosu Balance","do":{"reps":[],"description":"as long as possible","time":30}}]}],[{"order":"A","sets":5,"rest":120,"exercises":[{"key":"Dumbbell Squat","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Seated Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Step Up","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Incline Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Plank","do":{"reps":[],"description":"as long as possible","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Ankle Directional Hops","do":{"reps":[],"description":"around the clock","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Double Leg Balance On Bosu","do":{"reps":[],"description":"","time":60}}]}],[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Single Leg Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"45deg Incline Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Glute Thrust","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Bench Dumbbell Row","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Kneeling Static Cable Press","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Ball Roll Outs","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Cable Woodchop Low-High","do":{"reps":[12,15],"description":"","time":-1}}]},{"order":"E","sets":3,"rest":60,"exercises":[{"key":"Bodyweight Single Leg Deadlift On Bosu","do":{"reps":[15,20],"description":"","time":-1}}]}],[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Side Step Up","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Split Stance Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Dumbbell Romanian Deadlift","do":{"reps":[10,15],"description":"","time":-1}},{"key":"Lateral Pull Down","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Dumbbell Bench Rear Delt Flyes","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Plank Knee Tucks On Ball","do":{"reps":[15,20],"description":"","time":-1}},{"key":"Elbow Knee Crunches","do":{"reps":[12,15],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Kneel On Gym Ball","do":{"reps":[],"description":"","time":60}}]}],[{"order":"A","sets":5,"rest":120,"exercises":[{"key":"Lunges With Twist","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Press Ups","do":{"reps":[15,25],"description":"","time":-1}},{"key":"Dumbbell Clean Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Wall Sit","do":{"reps":[],"description":"as long as possible","time":-1}},{"key":"Press Up Position Plank","do":{"reps":[],"description":"as long as possible","time":-1}}]},{"order":"B","sets":3,"rest":30,"exercises":[{"key":"Hop Onto Bosu","do":{"reps":[],"description":"around the clock","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Double Leg Balance On Bosu","do":{"reps":[],"description":"","time":60}}]}]]},{"stage":"Strength","weeks":[[0,1,2],[0,1,2],[3,4,5],[3,4,5]],"plans":[[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Dumbbell Split Squat","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Lying Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Single Leg Hamstring Curl","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Seated Row Machine","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Dumbbell/Kettlebell Windmill","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Plank","do":{"reps":[],"description":"as long as possible","time":-1}},{"key":"Cable Woodchop High-Low","do":{"reps":[12,15],"description":"","time":-1}}]},{"order":"E","sets":3,"rest":60,"exercises":[{"key":"Single Leg Bodyweight Deadlift","do":{"reps":[15,20],"description":"","time":-1}}]}],[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Step Up","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Kneeling Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Dumbbell Romanian Deadlift","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Lateral Pull Down","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Standing Cable Rear Delt Flyes","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Single Leg Bosu Balance","do":{"reps":[],"description":"","time":30}}]}],[{"order":"A","sets":5,"rest":120,"exercises":[{"key":"Dumbbell Squat","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Seated Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Step Up","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Incline Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Plank","do":{"reps":[],"description":"as long as possible","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Ankle Directional Hops","do":{"reps":[],"description":"around the clock","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Double Leg Balance On Bosu","do":{"reps":[],"description":"","time":60}}]}],[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Single Leg Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"45deg Incline Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Glute Thrust","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Bench Dumbbell Row","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Kneeling Static Cable Press","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Ball Roll Outs","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Cable Woodchop Low-High","do":{"reps":[12,15],"description":"","time":-1}}]},{"order":"E","sets":3,"rest":60,"exercises":[{"key":"Bodyweight Single Leg Deadlift On Bosu","do":{"reps":[15,20],"description":"","time":-1}}]}],[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Side Step Up","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Split Stance Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Dumbbell Romanian Deadlift","do":{"reps":[10,15],"description":"","time":-1}},{"key":"Lateral Pull Down","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Dumbbell Bench Rear Delt Flyes","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Plank Knee Tucks On Ball","do":{"reps":[15,20],"description":"","time":-1}},{"key":"Elbow Knee Crunches","do":{"reps":[12,15],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Kneel On Gym Ball","do":{"reps":[],"description":"","time":60}}]}],[{"order":"A","sets":5,"rest":120,"exercises":[{"key":"Lunges With Twist","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Press Ups","do":{"reps":[15,25],"description":"","time":-1}},{"key":"Dumbbell Clean Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Wall Sit","do":{"reps":[],"description":"as long as possible","time":-1}},{"key":"Press Up Position Plank","do":{"reps":[],"description":"as long as possible","time":-1}}]},{"order":"B","sets":3,"rest":30,"exercises":[{"key":"Hop Onto Bosu","do":{"reps":[],"description":"around the clock","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Double Leg Balance On Bosu","do":{"reps":[],"description":"","time":60}}]}]]},{"stage":"Speed","weeks":[[0,1,2],[0,1,2],[3,4,5],[3,4,5]],"plans":[[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Dumbbell Split Squat","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Lying Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Single Leg Hamstring Curl","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Seated Row Machine","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Dumbbell/Kettlebell Windmill","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Plank","do":{"reps":[],"description":"as long as possible","time":-1}},{"key":"Cable Woodchop High-Low","do":{"reps":[12,15],"description":"","time":-1}}]},{"order":"E","sets":3,"rest":60,"exercises":[{"key":"Single Leg Bodyweight Deadlift","do":{"reps":[15,20],"description":"","time":-1}}]}],[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Step Up","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Kneeling Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Dumbbell Romanian Deadlift","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Lateral Pull Down","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Standing Cable Rear Delt Flyes","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Single Leg Bosu Balance","do":{"reps":[],"description":"","time":30}}]}],[{"order":"A","sets":5,"rest":120,"exercises":[{"key":"Dumbbell Squat","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Seated Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Step Up","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Incline Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Plank","do":{"reps":[],"description":"as long as possible","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Ankle Directional Hops","do":{"reps":[],"description":"around the clock","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Double Leg Balance On Bosu","do":{"reps":[],"description":"","time":60}}]}],[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Single Leg Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"45deg Incline Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Glute Thrust","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Bench Dumbbell Row","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Kneeling Static Cable Press","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Ball Roll Outs","do":{"reps":[12,15],"description":"","time":-1}},{"key":"Cable Woodchop Low-High","do":{"reps":[12,15],"description":"","time":-1}}]},{"order":"E","sets":3,"rest":60,"exercises":[{"key":"Bodyweight Single Leg Deadlift On Bosu","do":{"reps":[15,20],"description":"","time":-1}}]}],[{"order":"A","sets":3,"rest":90,"exercises":[{"key":"Side Step Up","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Split Stance Dumbbell Press","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"B","sets":3,"rest":90,"exercises":[{"key":"Dumbbell Romanian Deadlift","do":{"reps":[10,15],"description":"","time":-1}},{"key":"Lateral Pull Down","do":{"reps":[10,12],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Dumbbell Bench Rear Delt Flyes","do":{"reps":[15,20],"description":"","time":-1}}]},{"order":"D","sets":3,"rest":60,"exercises":[{"key":"Plank Knee Tucks On Ball","do":{"reps":[15,20],"description":"","time":-1}},{"key":"Elbow Knee Crunches","do":{"reps":[12,15],"description":"","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Kneel On Gym Ball","do":{"reps":[],"description":"","time":60}}]}],[{"order":"A","sets":5,"rest":120,"exercises":[{"key":"Lunges With Twist","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Press Ups","do":{"reps":[15,25],"description":"","time":-1}},{"key":"Dumbbell Clean Press","do":{"reps":[10,12],"description":"","time":-1}},{"key":"Wall Sit","do":{"reps":[],"description":"as long as possible","time":-1}},{"key":"Press Up Position Plank","do":{"reps":[],"description":"as long as possible","time":-1}}]},{"order":"B","sets":3,"rest":30,"exercises":[{"key":"Hop Onto Bosu","do":{"reps":[],"description":"around the clock","time":-1}}]},{"order":"C","sets":3,"rest":60,"exercises":[{"key":"Double Leg Balance On Bosu","do":{"reps":[],"description":"","time":60}}]}]]}];

/***/ }),

/***/ "./src/assets/intervals.json":
/*!***********************************!*\
  !*** ./src/assets/intervals.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"month":1,"details":"Medium resistance/gearing at 100 rpm for the work period and low resistance at 60 rpm for the rest period.","sessions":[{"week":1,"reps":6,"work":120,"rest":180},{"week":2,"reps":7,"work":120,"rest":180},{"week":3,"reps":8,"work":120,"rest":180},{"week":4,"reps":9,"work":120,"rest":180}]},{"month":2,"details":"Really high resistance/gearing at 60rpm for the work period and low-medium resistance at 60-80 rpm for the rest period.","sessions":[{"week":1,"reps":8,"work":60,"rest":120},{"week":2,"reps":8,"work":60,"rest":120},{"week":3,"reps":10,"work":60,"rest":120},{"week":4,"reps":10,"work":60,"rest":120}]},{"month":3,"details":"Medium resistance/gearing at 120-200 rpm (as fast as your legs can possibly go) for the work period and low resistance at 60-80 rpm for the rest period.","sessions":[{"week":1,"reps":8,"work":45,"rest":90},{"week":2,"reps":10,"work":45,"rest":90},{"week":3,"reps":12,"work":45,"rest":90},{"week":4,"reps":14,"work":45,"rest":90}]}];

/***/ }),

/***/ "./src/assets/stretches.json":
/*!***********************************!*\
  !*** ./src/assets/stretches.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = [{"name":"Overhead Squat","sets":10,"reps":10,"youtube_id":"MLn4aIfuu_k"},{"name":"Prone Shoulder Press","sets":10,"reps":10,"youtube_id":"LQ3DugTAOo8"},{"name":"Yoga Calf Stretch","sets":10,"reps":10,"youtube_id":"c-P7pXL2uGY"},{"name":"Chest/Lat Stretch","sets":10,"reps":10,"youtube_id":"EjAwxLwbeOw"},{"name":"Hip Flexor 3D Stretch","sets":10,"reps":10,"youtube_id":"UlJ4WEyF22Q"},{"name":"Adductor Stretch","sets":10,"reps":10,"youtube_id":"eRKKTuWCvCw"},{"name":"Lumbar Stretch","sets":10,"reps":10,"youtube_id":"P8QxN1qUut0"},{"name":"Quad Stretch","sets":10,"reps":10,"youtube_id":"DcWdpKRxT5k"},{"name":"Hamstring 3D Stretch","sets":10,"reps":10,"youtube_id":"mrvdsscJzkw"},{"name":"Calf 3D Stretch","sets":10,"reps":10,"youtube_id":"hZupW4TgiXw"}];

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

module.exports = __webpack_require__(/*! /mnt/HD/home/ernst/Projects/WebstormProjects/Fitness/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
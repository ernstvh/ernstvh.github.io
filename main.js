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

module.exports = "\n<p-tabView>\n  <p-tabPanel header=\"This Week\">\n    <p-accordion [multiple]=\"true\">\n      <p-accordionTab header=\"Stretches\">\n        Content 1\n      </p-accordionTab>\n      <p-accordionTab header=\"Intervals\">\n        Content 1\n      </p-accordionTab>\n      <p-accordionTab header=\"Gym Sessions\">\n        Content 1\n      </p-accordionTab>\n    </p-accordion>\n  </p-tabPanel>\n  <p-tabPanel header=\"Stretches\">\n    <p-table [value]=\"stretches\">\n      <ng-template pTemplate=\"ḧeader\">\n        <tr>\n          <th>Correctives</th>\n          <th>Sets</th>\n          <th>Reps</th>\n        </tr>\n      </ng-template>\n\n      <ng-template pTemplate=\"body\" let-stretch>\n        <tr>\n          <td>{{stretch.name}}<div [innerHtml]=\"stretch.video_iframe\"></div></td>\n          <td>{{stretch.sets}}</td>\n          <td>{{stretch.reps}}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </p-tabPanel>\n  <p-tabPanel header=\"Intervals\">\n    <p-table [value]=\"intervals\">\n      <ng-template pTemplate=\"ḧeader\">\n        <tr>\n          <th>Session</th>\n          <th>Weeks</th>\n        </tr>\n      </ng-template>\n\n      <ng-template pTemplate=\"body\" let-interval>\n        <tr>\n          <td><b>Month {{interval.month}}</b><br/>{{interval.details}}</td>\n          <td>\n            <p-table [value]=\"interval.sessions\">\n              <ng-template pTemplate=\"header\">\n              <tr>\n                <th>Week</th>\n                <th>Reps</th>\n                <th>Work</th>\n                <th>Rest</th>\n              </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-week>\n              <tr>\n                <td>Week {{week.week}}</td>\n                <td>{{week.reps}}</td>\n                <td>{{week.work}}</td>\n                <td>{{week.rest}}</td>\n              </tr>\n            </ng-template>\n          </p-table>\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </p-tabPanel>\n  <p-tabPanel header=\"Gym Sessions\">\n    <p-accordion *ngFor=\"let stage of stages\">\n      <p-accordionTab header=\"{{stage.stage}}\">\n        <p-accordion *ngFor=\"let week of stage.weeks\">\n          <p-accordionTab header=\"Week {{week.week}}\">\n            <p-accordion *ngFor=\"let session of week.sessions\">\n              <p-accordionTab header=\"Session {{session.session}}\">\n                <p-table [value]=\"session.exercises\">\n                  <ng-template pTemplate=\"header\">\n                    <tr>\n                      <th>Exercises</th>\n                      <th>Weight</th>\n                      <th>Sets & Reps</th>\n                      <th>Rest</th>\n                    </tr>\n                  </ng-template>\n                  <ng-template pTemplate=\"body\" let-exercise>\n                    <tr>\n                      <td>{{exercise.order}} <a href=\"\">{{exercise.name}}</a></td>\n                      <td>last {{exercise.last_weight}} current {{exercise.current_weight}}</td>\n                      <td>{{exercise.sets}}x {{exercise.reps[0]}}-{{exercise.reps[1]}}</td>\n                      <td>{{exercise.rest}}s</td>\n                    </tr>\n                  </ng-template>\n                </p-table>\n              </p-accordionTab>\n            </p-accordion>\n          </p-accordionTab>\n        </p-accordion>\n      </p-accordionTab>\n    </p-accordion>\n  </p-tabPanel>\n  <p-tabPanel header=\"Exercises\">\n    <p-table [value]=\"exercises\">\n      <ng-template pTemplate=\"ḧeader\">\n        <tr>\n          <th>Name</th>\n        </tr>\n      </ng-template>\n\n      <ng-template pTemplate=\"body\" let-exercise>\n        <tr>\n          <td>{{exercise.name}}<div [innerHtml]=\"exercise.video_iframe\"></div></td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </p-tabPanel>\n</p-tabView>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
/* harmony import */ var _services_training_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/training-content.service */ "./src/app/services/training-content.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(trainingContentService) {
        this.trainingContentService = trainingContentService;
        this.title = 'Fitness';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.stretches = this.trainingContentService.getStretches();
        this.intervals = this.trainingContentService.getIntervals();
        this.stages = this.trainingContentService.getGymStages();
        this.exercises = this.trainingContentService.getExercises();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_training_content_service__WEBPACK_IMPORTED_MODULE_2__["TrainingContentService"]])
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
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-embed-video/dist */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_8__["EmbedVideo"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/training-content.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/training-content.service.ts ***!
  \******************************************************/
/*! exports provided: Stretch, Interval, Exercise, IntervalSession, GymStage, GymWeek, GymSession, GymExercise, TrainingContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stretch", function() { return Stretch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return Interval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise", function() { return Exercise; });
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







var Stretch = /** @class */ (function () {
    function Stretch(name, sets, reps, video_iframe) {
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.video_iframe = video_iframe;
    }
    Stretch = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, Number, Number, Object])
    ], Stretch);
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

var Exercise = /** @class */ (function () {
    function Exercise(name, video_iframe, img_tag, video_link) {
        this.name = name;
        this.video_iframe = video_iframe;
        this.img_tag = img_tag;
        this.video_link = video_link;
    }
    return Exercise;
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
    function TrainingContentService(embedService) {
        this.embedService = embedService;
    }
    TrainingContentService.prototype.getStretches = function () {
        var _this = this;
        return _assets_stretches_json__WEBPACK_IMPORTED_MODULE_3__.map(function (s) { return new Stretch(s.name, s.sets, s.reps, _this.embedService.embed_youtube(s.youtube_id)); });
        // return [
        //   new Stretch('Overhead Squat', 1, 10, this.embedService.embed_youtube("MLn4aIfuu_k")),
        //   new Stretch('Prone Shoulder Press', 1, 10, this.embedService.embed_youtube("LQ3DugTAOo8"))
        // ]
    };
    TrainingContentService.prototype.getIntervals = function () {
        return _assets_intervals_json__WEBPACK_IMPORTED_MODULE_4__.map(function (s) { return new Interval(s.month, s.details, s.sessions.map(function (k) { return new IntervalSession(k.week, k.reps, k.work, k.rest); })); });
    };
    TrainingContentService.prototype.getExercises = function () {
        var _this = this;
        var e = _assets_exercises_json__WEBPACK_IMPORTED_MODULE_6__.map(function (e) { return new Exercise(e.name, _this.embedService.embed_youtube(e.youtube_id), "http://img.youtube.com/vi/" + e.youtube_id + "/default.jpg", "http://youtu.be/" + e.youtube_id); });
        console.log(e);
        return e;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video_dist__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"]])
    ], TrainingContentService);
    return TrainingContentService;
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

module.exports = [{"month":1,"details":"Medium resistance/gearing at 100 rpm for the work period and low resistance at 60 rpm for the rest period.","sessions":[{"week":1,"reps":6,"work":120,"rest":180},{"week":2,"reps":7,"work":120,"rest":180},{"week":3,"reps":8,"work":120,"rest":180},{"week":4,"reps":9,"work":120,"rest":180}]},{"month":2,"details":"Really high resistance/gearing at 60rpm for the work period and low-medium resistance at 60-80 rpm for the rest period.","sessions":[{"week":1,"reps":8,"work":60,"rest":120},{"week":2,"reps":8,"work":60,"rest":120},{"week":3,"reps":10,"work":60,"rest":120},{"week":4,"reps":10,"work":60,"rest":120}]},{"month":3,"details":"Medium resistance/gearing at 120-200 rpm (as fast as your legs can possibly go) for the work period and low resistance at 60-80 rpm for the rest period.","sessions":[{"week":1,"reps":8,"work":45,"rest":90},{"week":2,"reps":10,"work":45,"rest":90},{"week":3,"reps":12,"work":45,"rest":90},{"week":4,"reps":14,"work":45,"rest":190}]}];

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
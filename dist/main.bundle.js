webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* WidgetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/**
 * Created by sesha on 7/26/17.
 */















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userId/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
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
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"update()\" #f=\"ngForm\">\n  <header>\n    <div class=\"row\">\n      <div class=\"col-xs-1\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\" class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n      </div>\n      <div class=\"col-md-3 hidden-sm hidden-xs\">\n        <span class=\"\">Pages</span>\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page', 'new']\"\n           class=\"white\">\n          <span class=\"pull-right glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n      <div class=\"col-xs-11 col-md-8\">\n        Edit Page\n        <button type=\"submit\"\n                class=\"pull-right white btn\"\n                [disabled]=\"!f.valid\"><span class=\"pull-right glyphicon glyphicon-check\"></span></button>\n      </div>\n    </div>\n  </header>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4 hidden-sm hidden-xs\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n            <a [routerLink]=\"['/user', userId, 'website', wid, 'page', page._id, 'widget']\">{{page.name}}</a>\n            <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', wid, 'page', page._id]\">\n              <span class=\"glyphicon glyphicon-edit\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-xs-12 col-md-8\">\n        <label class=\"label\"\n               for=\"name\">\n          Name\n        </label>\n        <input type=\"text\"\n               id=\"name\"\n               name=\"name\"\n               [(ngModel)]=\"name\"\n               class=\"form-control\"\n               placeholder=\"Name\" />\n        <label for=\"description\"\n               class=\"label\">\n          Description\n        </label>\n        <textarea class=\"form-control\"\n                  id=\"description\"\n                  rows=\"3\"\n                  name=\"description\"\n                  [(ngModel)]=\"description\"\n                  placeholder=\"Description\">\n        </textarea>\n        <a (click)=\"delete()\" class=\"btn btn-danger btn-block\">\n          Delete\n        </a>\n      </div>\n    </div>\n  </div>\n</form>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = (function () {
    function PageEditComponent(pageService, activatedRoute, userService, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.pages = [{}];
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.page = this.pageService.findPageById(this.pid);
        this.pages = this.pageService.findPageByWebsiteId(this.wid);
        this.name = this.page.name;
        this.description = this.page.description;
    };
    PageEditComponent.prototype.update = function () {
        this.page["name"] = this.pageEditForm.value.name;
        this.page["description"] = this.pageEditForm.value.description;
        this.pageService.updatePage(this.pid, this.page);
        this.router.navigate(['user/' + this.userId, 'website', this.wid, 'page']);
    };
    PageEditComponent.prototype.delete = function () {
        this.pageService.deletePage(this.pid);
        this.router.navigate(['user/' + this.userId, 'website', this.wid, 'page']);
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "pageEditForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PageEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <a [routerLink]=\"['/user', userId, 'website']\" class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n  Pages\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', 'new']\" class=\"white\"><span class=\"pull-right glyphicon glyphicon-plus\"></span></a>\n</header>\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          Name\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Description\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          Owner\n        </div>\n        <div class=\"col-xs-3\">\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', page._id, 'widget']\">{{page.name}} </a>\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          {{page.description}}\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          {{user.username}}\n        </div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', wid, 'page', page._id]\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageListComponent = (function () {
    function PageListComponent(activatedRoute, userService, pageService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.pageService = pageService;
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.pages = this.pageService.findPageByWebsiteId(this.wid);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"create()\" #f=\"ngForm\">\n  <header>\n    <div class=\"row\">\n      <div class=\"col-xs-1\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\"\n           class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n      </div>\n      <div class=\"col-md-3 hidden-sm hidden-xs\">\n        Pages\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page', 'new']\"\n           class=\"white\"><span class=\"pull-right glyphicon glyphicon-plus\"></span></a>\n      </div>\n      <div class=\"col-xs-11 col-md-8\">\n        New Page\n        <button type=\"submit\"\n                class=\"pull-right white btn\"\n                [disabled]=\"!f.valid\"><span class=\"pull-right glyphicon glyphicon-check\"></span></button>\n      </div>\n    </div>\n  </header>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4 hidden-sm hidden-xs\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n            <a [routerLink]=\"['/user', userId, 'website', wid, 'page', page._id, 'widget']\">{{page.name}}</a>\n            <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', wid, 'page', page._id]\">\n              <span class=\"glyphicon glyphicon-edit\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-xs-12 col-md-8\">\n        <label class=\"label\"\n               for=\"name\">\n          Name\n        </label>\n        <input type=\"text\"\n               id=\"name\"\n               name=\"name\"\n               ngModel\n               required\n               #name=\"ngModel\"\n               class=\"form-control\"\n               placeholder=\"Name\" />\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n            Please enter Name!\n          </span>\n        <label for=\"description\"\n               class=\"label\">\n          Description\n        </label>\n        <textarea class=\"form-control\"\n                  id=\"description\"\n                  rows=\"3\"\n                  name=\"description\"\n                  #description=\"ngModel\"\n                  ngModel\n                  required\n                  placeholder=\"Description\"></textarea>\n        <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n            Please enter description!\n          </span>\n      </div>\n    </div>\n  </div>\n</form>\n<footer>\n  <a href=\"../user/profile.html\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageNewComponent = (function () {
    function PageNewComponent(activatedRoute, userService, router, pageService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.pageService = pageService;
        this.pages = [{}];
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.pages = this.pageService.findPageByWebsiteId(this.wid);
    };
    PageNewComponent.prototype.create = function () {
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var page = {
            name: this.name,
            description: this.description
        };
        this.page = this.pageService.createPage(this.wid, page);
        this.router.navigate(['user/', this.userId, 'website', this.wid, 'page']);
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _e || Object])
], PageNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input type=\"text\"\n           name=\"username\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"\n           placeholder=\"Username\" />\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input type=\"password\"\n           name=\"password\"\n           ngModel\n           #password=\"ngModel\"\n           required\n           class=\"form-control\"\n           placeholder=\"Password\" />\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n\n    <a [routerLink]= \"['/register']\" class=\"btn btn-success btn-block\">Register</a>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid Username/Password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            this.router.navigate(['user/' + user._id]);
        }
        else {
            this.errorFlag = true;
        }
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"update()\" #f=\"ngForm\">\n<header>\n  Profile\n  <button type=\"submit\"\n          class=\"pull-right white btn\"\n          [disabled]=\"!f.valid\"><span class=\"pull-right glyphicon glyphicon-check\"></span></button>\n</header>\n<div class=\"container-fluid profile clearfix\">\n  <label for=\"username\" class=\"label\">Username</label>\n  <input type=\"text\"\n         id=\"username\"\n         name=\"username\"\n         [(ngModel)]=\"username\"\n         class=\"form-control\" />\n\n  <label for=\"email\" class=\"label\">Email</label>\n  <input type=\"email\"\n         id=\"email\"\n         name=\"email\"\n         [(ngModel)]=\"email\"\n         class=\"form-control\" />\n\n  <label for=\"first_name\" class=\"label\">First Name</label>\n  <input type=\"text\"\n         id=\"first_name\"\n         name=\"first_name\"\n         [(ngModel)]=\"first_name\"\n         class=\"form-control\" />\n\n  <label for=\"last_name\" class=\"label\">Last Name</label>\n  <input type=\"text\"\n         id=\"last_name\"\n         name=\"last_name\"\n         [(ngModel)]=\"last_name\"\n         class=\"form-control\" />\n\n  <a [routerLink]=\"['/user', userId, 'website']\" class=\"btn btn-primary btn-block\">Websites</a>\n\n  <a [routerLink]= \"['/login']\" class=\"btn btn-danger btn-block\">Logout</a>\n</div>\n</form>\n<footer>\n  <a [routerLink]= \"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.username = this.user['username'];
        this.last_name = this.user['lastName'];
        this.first_name = this.user['firstName'];
        this.email = this.user['email'];
    };
    ProfileComponent.prototype.update = function () {
        this.user["username"] = this.profileForm.value.username;
        this.user["email"] = this.profileForm.value.email;
        this.user["firstName"] = this.profileForm.value.first_name;
        this.user["lastName"] = this.profileForm.value.last_name;
        this.userService.updateUser(this.userId, this.user);
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Register</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n    <input type=\"text\"\n           name=\"username\"\n           ngModel\n           required\n           #username=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"Username\" />\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input type=\"password\"\n           name=\"password\"\n           ngModel\n           required\n           #password=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"Password\" />\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter Password!\n    </span>\n\n    <input type=\"password\"\n           ngModel\n           required\n           name=\"verifyPassword\"\n           #verifyPassword=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"Verify Password\" />\n    <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n      Please enter Verification password!\n    </span>\n\n    <input type=\"text\"\n           ngModel\n           required\n           name=\"firstName\"\n           #firstName=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"First Name\" />\n    <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n      Please enter First Name!\n    </span>\n\n    <input type=\"text\"\n           ngModel\n           required\n           name=\"lastName\"\n           #lastName=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"Last Name\" />\n    <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n      Please enter Last Name!\n    </span>\n\n    <input type=\"email\"\n           ngModel\n           required\n           name=\"email\"\n           #email=\"ngModel\"\n           class=\"form-control\"\n           placeholder=\"Email\" />\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please enter Email!\n    </span>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n    <a [routerLink]= \"['/login']\"\n       class=\"btn btn-danger btn-block\">\n      Cancel\n    </a>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        this.lastName = this.registerForm.value.lastName;
        this.firstName = this.registerForm.value.firstName;
        this.email = this.registerForm.value.email;
        var user = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        };
        var savedUser = this.userService.createUser(user);
        this.router.navigate(['user/' + savedUser._id]);
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"update()\" #f=\"ngForm\">\n  <header>\n    <div class=\"row\">\n      <div class=\"col-xs-1\">\n        <a [routerLink]=\"['/user', userId, 'website']\" class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n      </div>\n      <div class=\"col-md-3 hidden-sm hidden-xs\">\n        Websites\n        <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"white\"><span class=\"pull-right glyphicon glyphicon-plus\"></span></a>\n      </div>\n      <div class=\"col-xs-11 col-md-8\">\n        Edit Website\n        <button type=\"submit\"\n                class=\"pull-right white btn\"\n                [disabled]=\"!f.valid\"><span class=\"pull-right glyphicon glyphicon-check\"></span></button>\n      </div>\n    </div>\n  </header>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4 hidden-sm hidden-xs\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let websiteItem of websites\">\n            <a [routerLink]=\"['/user', userId, 'website', websiteItem._id, 'page']\">{{websiteItem.name}}</a>\n            <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', websiteItem._id]\">\n              <span class=\"glyphicon glyphicon-edit\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-xs-12 col-md-8\">\n        <label class=\"label\"\n               for=\"name\">\n          Name\n        </label>\n        <input type=\"text\"\n               id=\"name\"\n               name=\"name\"\n               [(ngModel)]=\"name\"\n               class=\"form-control\"\n               placeholder=\"Name\" />\n        <label for=\"description\"\n               class=\"label\">\n          Description\n        </label>\n        <textarea class=\"form-control\"\n                  id=\"description\"\n                  rows=\"3\"\n                  name=\"description\"\n                  [(ngModel)]=\"description\"\n                  placeholder=\"Description\">\n        </textarea>\n        <a (click)=\"delete()\" class=\"btn btn-danger btn-block\">\n          Delete\n        </a>\n      </div>\n    </div>\n  </div>\n</form>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(webService, activatedRoute, userService, router) {
        this.webService = webService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.website = this.webService.findWebsiteById(this.wid);
        this.websites = this.webService.findWebsitesByUser(this.userId);
        this.name = this.website.name;
        this.description = this.website.description;
    };
    WebsiteEditComponent.prototype.update = function () {
        this.website["name"] = this.websiteEditForm.value.name;
        this.website["description"] = this.websiteEditForm.value.description;
        this.webService.updateWebsite(this.wid, this.website);
        this.router.navigate(['user/' + this.userId, 'website']);
    };
    WebsiteEditComponent.prototype.delete = function () {
        this.webService.deleteWebsite(this.wid);
        this.router.navigate(['user/' + this.userId, 'website']);
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "websiteEditForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <a [routerLink]=\"['/user', userId]\" class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n  Websites\n  <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"white\"><span class=\"pull-right glyphicon glyphicon-plus\"></span></a>\n</header>\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          Name\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Description\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          Owner\n        </div>\n        <div class=\"col-xs-3\">\n        </div>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/user', userId, 'website', website._id, 'page']\">{{website.name}}</a>\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n         {{website.description}}\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          {{user.username}}\n        </div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', website._id]\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteListComponent = (function () {
    function WebsiteListComponent(webService, activatedRoute, userService) {
        this.webService = webService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.websites = this.webService.findWebsitesByUser(this.userId);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"create()\" #f=\"ngForm\">\n  <header>\n    <div class=\"row\">\n      <div class=\"col-xs-1\">\n        <a [routerLink]=\"['/user', userId, 'website']\" class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n      </div>\n      <div class=\"col-md-3 hidden-sm hidden-xs\">\n        Websites\n        <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"white\"><span class=\"pull-right glyphicon glyphicon-plus\"></span></a>\n      </div>\n      <div class=\"col-xs-11 col-md-8\">\n        New Website\n        <button type=\"submit\"\n                class=\"pull-right white btn\"\n                [disabled]=\"!f.valid\"><span class=\"pull-right glyphicon glyphicon-check\"></span></button>\n      </div>\n    </div>\n  </header>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4 hidden-sm hidden-xs\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n            <a [routerLink]=\"['/user', userId, 'website', website._id, 'page']\">{{website.name}}</a>\n            <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', website._id]\">\n              <span class=\"glyphicon glyphicon-edit\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n        <div class=\"col-xs-12 col-md-8\">\n          <label class=\"label\"\n                 for=\"name\">\n            Name\n          </label>\n          <input type=\"text\"\n                 id=\"name\"\n                 name=\"name\"\n                 ngModel\n                 required\n                 #name=\"ngModel\"\n                 class=\"form-control\"\n                 placeholder=\"Name\" />\n          <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n            Please enter Name!\n          </span>\n          <label for=\"description\"\n                 class=\"label\">\n            Description\n          </label>\n          <textarea class=\"form-control\"\n                    id=\"description\"\n                    rows=\"3\"\n                    name=\"description\"\n                    #description=\"ngModel\"\n                    ngModel\n                    required\n                    placeholder=\"Description\"></textarea>\n          <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n            Please enter description!\n          </span>\n        </div>\n    </div>\n  </div>\n</form>\n<footer>\n  <a [routerLink]=\"['/user', userId]\" class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(webService, activatedRoute, userService, router) {
        this.webService = webService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.websites = this.webService.findWebsitesByUser(this.userId);
    };
    WebsiteNewComponent.prototype.create = function () {
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var website = {
            name: this.name,
            description: this.description
        };
        this.website = this.webService.createWebsite(this.userId, website);
        this.router.navigate(['user/' + this.userId, 'website']);
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Choose Widget\n</header>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\">\n    <a (click)=\"create('HEADING')\">\n      Header\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:\">\n      Label\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a (click)=\"create('HTML')\">\n      Html\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:\">\n      Text Input\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:\">\n      Link\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:l\">\n      Button\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a (click)=\"create('IMAGE')\">\n      Image\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a (click)=\"create('YOUTUBE')\">\n      Youtube\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:\">\n      Data Table\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:\">\n      Repeater\n    </a>\n  </li>\n</ul>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(activatedRoute, userService, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.pid = params['pid'];
            _this.wid = params['wid'];
        });
    };
    WidgetChooserComponent.prototype.create = function (type) {
        var widget = {
            widgetType: type
        };
        this.widget = this.widgetService.createWidget(this.pid, widget);
        this.router.navigate([
            'user/',
            this.userId,
            'website',
            this.wid,
            'page',
            this.pid,
            'widget',
            this.widget._id
        ]);
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _d || Object])
], WidgetChooserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Edit Widget\n\n  <a (click)=\"update()\"\n     [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"pull-right white\">\n    <span class=\"pull-right glyphicon glyphicon-check\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"textHeader\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textHeader\"\n             name=\"textHeader\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textHeader\"\n             placeholder=\"Home Page\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"sizeHeader\">\n        Size\n      </label>\n      <input [(ngModel)]=\"sizeHeader\"\n             required\n             name=\"sizeHeader\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"sizeHeader\"\n             placeholder=\"3\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"delete()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            _this.textHeader = _this.widget['text'];
            _this.sizeHeader = _this.widget['size'];
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        this.widget['widgetType'] = 'HEADING';
        this.widget['text'] = this.textHeader;
        this.widget['size'] = this.sizeHeader;
        this.widgetService.updateWidget(this.wgid, this.widget);
    };
    WidgetHeaderComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetHeaderComponent);

var _a, _b;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Edit Widget\n  <a (click)=\"update()\"\n     [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"pull-right white\">\n    <span class=\"pull-right glyphicon glyphicon-check\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"textHeader\">\n        Text\n      </label>\n      <input [(ngModel)]=\"text\"\n             name=\"textHeader\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textHeader\"\n             placeholder=\"Home Page\">\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"delete()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            _this.text = _this.widget['text'];
        });
    };
    WidgetHtmlComponent.prototype.update = function () {
        this.widget['widgetType'] = 'HTML';
        this.widget['text'] = this.text;
        this.widgetService.updateWidget(this.wgid, this.widget);
    };
    WidgetHtmlComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetHtmlComponent);

var _a, _b;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Edit Widget\n  <a (click)=\"update()\"\n     [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"pull-right white\">\n    <span class=\"pull-right glyphicon glyphicon-check\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"url\">\n        URL\n      </label>\n      <input [(ngModel)]=\"url\"\n             name=\"url\"\n             required\n             type=\"url\"\n             required\n             class=\"form-control\"\n             id=\"url\"\n             placeholder=\"http://image.com/image.jpeg\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"width\">\n        Width\n      </label>\n      <input [(ngModel)]=\"width\"\n             name=\"width\"\n             required\n             type=\"text\"\n             required\n             class=\"form-control\"\n             id=\"width\"\n             placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"delete()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            _this.width = _this.widget['width'];
            _this.url = _this.widget['url'];
        });
    };
    WidgetImageComponent.prototype.update = function () {
        this.widget['widgetType'] = 'IMAGE';
        this.widget['width'] = this.width;
        this.widget['url'] = this.url;
        this.widgetService.updateWidget(this.wgid, this.widget);
    };
    WidgetImageComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetImageComponent);

var _a, _b;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Edit Widget\n  <a (click)=\"update()\"\n     [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"pull-right white\">\n    <span class=\"pull-right glyphicon glyphicon-check\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"url\">\n        URL\n      </label>\n      <input [(ngModel)]=\"url\"\n             name=\"url\"\n             required\n             type=\"url\"\n             required\n             class=\"form-control\"\n             id=\"url\"\n             placeholder=\"http://youtube.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"width\">\n        Width\n      </label>\n      <input [(ngModel)]=\"width\"\n             name=\"width\"\n             required\n             type=\"text\"\n             required\n             class=\"form-control\"\n             id=\"width\"\n             placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"delete()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            _this.width = _this.widget['width'];
            _this.url = _this.widget['url'];
        });
    };
    WidgetYoutubeComponent.prototype.update = function () {
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['width'] = this.width;
        this.widget['url'] = this.url;
        this.widgetService.updateWidget(this.wgid, this.widget);
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetYoutubeComponent);

var _a, _b;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Widgets\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', 'new']\"\n     class=\"white\">\n    <span class=\"pull-right glyphicon glyphicon-plus\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\">\n  <div class=\"aj-widget\" *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.widgetType\">\n\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div class=\"widget-settings\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-list\"></span>\n        </div>\n        <h3>{{widget.text}}</h3>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <div class=\"widget-settings\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-list\"></span>\n        </div>\n        <div [innerHtml]=\"widget.text\"></div>\n      </div>\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"widget-settings\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-list\"></span>\n        </div>\n        <img class=\"content\" src={{widget.url}} [style.width]=\"widget.width\" />\n      </div>\n\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"widget-settings\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-list\"></span>\n        </div>\n        <iframe class=\"content\"\n                height=\"415\"\n                [style.width]=\"widget.width\"\n                [src]=\"sanitizer.bypassSecurityTrustResourceUrl(widget.url)\"\n                frameborder=\"0\"\n                allowfullscreen>\n\n        </iframe>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <span class=\"glyphicon glyphicon-play\"></span>\n  <span class=\"glyphicon glyphicon-eye-open\"></span>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetListComponent = (function () {
    function WidgetListComponent(activatedRoute, userService, widgetService, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.widgetService = widgetService;
        this.sanitizer = sanitizer;
        this.widgets = [{}];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var PageService = (function () {
    function PageService() {
        this.pages = [
            { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
        ];
        this.api = {
            'createPage': this.createPage,
            'findPageById': this.findPageById,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage,
            'findPageIndexById': this.findPageIndexById
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page._id = Math.floor(Math.random() * 10000).toString();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.findPageIndexById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return x;
            }
        }
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var result = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                result.push(this.pages[x]);
            }
        }
        return result;
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var index = this.findPageIndexById(pageId);
        this.pages[index] = page;
    };
    PageService.prototype.deletePage = function (pageId) {
        var index = this.findPageIndexById(pageId);
        this.pages.splice(index, 1);
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var UserService = (function () {
    function UserService() {
        this.users = [{ _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@alice.com' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@gmail.com' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', email: 'charly@gmail.com' },
            { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jose@gmail.com' }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserIndexById': this.findUserIndexById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'findUserByCredentials': this.findUserByCredentials
        };
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.floor(Math.random() * 10000).toString();
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserIndexById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return x;
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        var index = this.findUserIndexById(userId);
        this.users[index] = user;
    };
    UserService.prototype.deleteUser = function (userId) {
        var index = this.findUserIndexById(userId);
        this.users.splice(index, 1);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var user = this.findUserByUsername(username);
        if (user && user.password === password) {
            return user;
        }
        else {
            return null;
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsiteById': this.findWebsiteById,
            'findWebsitesByUser': this.findWebsitesByUser,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite,
            'findWebsiteIndexById': this.findWebsiteIndexById
        };
    }
    WebsiteService.prototype.createWebsite = function (userID, website) {
        website._id = Math.floor(Math.random() * 10000).toString();
        website.developerId = userID;
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.findWebsiteIndexById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return x;
            }
        }
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var results = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                results.push(this.websites[x]);
            }
        }
        return results;
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var index = this.findWebsiteIndexById(websiteId);
        this.websites[index] = website;
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var index = this.findWebsiteIndexById(websiteId);
        this.websites.splice(index, 1);
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
                'url': 'http://lorempixel.com/400/200/' },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
                'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E' },
            { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetById': this.findWidgetById,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget,
            'findWidgetIndexById': this.findWidgetIndexById
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.floor(Math.random() * 10000).toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.findWidgetIndexById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return x;
            }
        }
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var results = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                results.push(this.widgets[x]);
            }
        }
        return results;
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var index = this.findWidgetIndexById(widgetId);
        this.widgets[index] = widget;
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var index = this.
            findWidgetIndexById(widgetId);
        this.widgets.splice(index, 1);
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
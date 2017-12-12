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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_list_sortable_directive__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
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
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_list_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_34__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_25__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_28__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_29__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_30__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_35__services_flickr_service_client__["a" /* FlickrService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");

















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'user/:userId', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuard */]] },
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
    { path: 'user/:userId/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] }
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

module.exports = "<div class=\"home\">\n  <div class=\"white\">\n    <div class=\"main-image\">\n      <img class=\"self\" src=\"../../../assets/images/abhishek.jpg\">\n    </div>\n    <div class=\"text-center text-white\">\n      <h1>Abhishek Jain</h1>\n      <h3>CS5610 - Web Development</h3>\n    </div>\n  </div>\n</div>\n\n<div class=\"container h-container\">\n  <div>\n    <h2 class=\"about\">About Me</h2>\n    <p class=\"text\">My name is Abhishek Jain.\n      Currently, I am pursuing Masters of Science in Computer Science at Northeastern University.\n      I have 4+ years of experience as senior software engineer.\n      I have worked on couple of E-commerce Web applications which were built on Ruby on Rails and reactJS.\n    </p>\n  </div>\n  <div>\n    <h2 class=\"about m-t-2\">Education and Work Experience</h2>\n    <ul class=\"list-group hidden-md hidden-lg\">\n      <li class=\"list-group-item\">\n        04 August 2008 - Undergraduate\n      </li>\n      <li class=\"list-group-item\">\n        17 July 2012 - First day at VinSol\n      </li>\n      <li class=\"list-group-item\">\n        09 November 2015 - First day at BigBinary\n      </li>\n      <li class=\"list-group-item\">\n        09 January 2017 - Masters at Northeastern University\n      </li>\n    </ul>\n    <div class=\"Timeline hidden-xs hidden-sm\">\n      <svg height=\"5\" width=\"200\">\n        <line x1=\"0\" y1=\"0\" x2=\"200\" y2=\"0\" style=\"stroke:#004165;stroke-width:5\" />\n        Sorry, your browser does not support inline SVG.\n      </svg>\n\n      <div class=\"event1\">\n        <div class=\"event1Bubble\">\n          <div class=\"eventTime\">\n            <div class=\"DayDigit\">04</div>\n            <div class=\"Day\">\n              Moday\n              <div class=\"MonthYear\">August 2008</div>\n            </div>\n          </div>\n          <div class=\"eventTitle\">Undergraduate</div>\n        </div>\n        <div class=\"eventAuthor\"></div>\n        <svg height=\"20\" width=\"20\">\n          <circle cx=\"10\" cy=\"11\" r=\"5\" fill=\"#004165\" />\n        </svg>\n        <div class=\"time\">9 : 00 AM</div>\n      </div>\n\n      <svg height=\"5\" width=\"300\">\n        <line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" style=\"stroke:#004165;stroke-width:5\" />\n        Sorry, your browser does not support inline SVG.\n      </svg>\n\n      <div class=\"event2\">\n\n        <div class=\"event2Bubble\">\n          <div class=\"eventTime\">\n            <div class=\"DayDigit\">17</div>\n            <div class=\"Day\">\n              Thursday\n              <div class=\"MonthYear\">July 2012</div>\n            </div>\n          </div>\n          <div class=\"eventTitle\">First day at VinSol</div>\n        </div>\n        <div class=\"event2Author\"></div>\n        <svg height=\"20\" width=\"20\">\n          <circle cx=\"10\" cy=\"11\" r=\"5\" fill=\"#004165\" />\n        </svg>\n        <div class=\"time2\">10 : 00 AM</div>\n      </div>\n\n      <svg height=\"5\" width=\"300\">\n        <line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" style=\"stroke:#004165;stroke-width:5\" />\n        Sorry, your browser does not support inline SVG.\n      </svg>\n\n      <div class=\"event3\">\n\n        <div class=\"event2Bubble\">\n          <div class=\"eventTime\">\n            <div class=\"DayDigit\">09</div>\n            <div class=\"Day\">\n              Monday\n              <div class=\"MonthYear\">November 2015</div>\n            </div>\n          </div>\n          <div class=\"eventTitle\">First day at BigBinary</div>\n        </div>\n        <div class=\"event2Author\"></div>\n        <svg height=\"20\" width=\"20\">\n          <circle cx=\"10\" cy=\"11\" r=\"5\" fill=\"#004165\" />\n        </svg>\n        <div class=\"time2\">10 : 00 AM</div>\n      </div>\n\n      <svg height=\"5\" width=\"300\">\n        <line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" style=\"stroke:#004165;stroke-width:5\" />\n        Sorry, your browser does not support inline SVG.\n      </svg>\n\n      <div class=\"event4\">\n\n        <div class=\"event2Bubble\">\n          <div class=\"eventTime\">\n            <div class=\"DayDigit\">09</div>\n            <div class=\"Day\">\n              Monday\n              <div class=\"MonthYear\">January 2017</div>\n            </div>\n          </div>\n          <div class=\"eventTitle\">Masters at Northeastern</div>\n        </div>\n        <div class=\"event2Author\"></div>\n        <svg height=\"20\" width=\"20\">\n          <circle cx=\"10\" cy=\"11\" r=\"5\" fill=\"#004165\" />\n        </svg>\n        <div class=\"time2\">10 : 00 AM</div>\n      </div>\n\n      <svg height=\"5\" width=\"300\">\n        <line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" style=\"stroke:#004165;stroke-width:5\" />\n        Sorry, your browser does not support inline SVG.\n      </svg>\n\n      <div class=\"now\">\n        NOW\n      </div>\n\n\n      <svg height=\"5\" width=\"150\">\n        <line x1=\"0\" y1=\"0\" x2=\"150\" y2=\"0\" style=\"stroke:rgba(162, 164, 163, 0.37);stroke-width:5\" />\n        Sorry, your browser does not support inline SVG.\n      </svg>\n      <div class=\"event5 futureGray \">\n        <div class=\"event1Bubble futureOpacity\">\n          <div class=\"eventTime\">\n            <div class=\"DayDigit\">16</div>\n            <div class=\"Day\">\n              Tuesday\n              <div class=\"MonthYear\">Jan 2018</div>\n            </div>\n          </div>\n          <div class=\"eventTitle\">Starting Co-op</div>\n        </div>\n        <svg height=\"20\" width=\"20\">\n          <circle cx=\"10\" cy=\"11\" r=\"5\" fill=\"rgba(162, 164, 163, 0.37)\" />\n        </svg>\n      </div>\n      <svg height=\"5\" width=\"50\">\n        <line x1=\"0\" y1=\"0\" x2=\"50\" y2=\"0\" style=\"stroke:#004165;stroke-width:5\" />\n      </svg>\n      <svg height=\"20\" width=\"42\">\n        <line x1=\"1\" y1=\"0\" x2=\"1\" y2=\"20\" style=\"stroke:#004165;stroke-width:2\" />\n        <circle cx=\"11\" cy=\"10\" r=\"3\" fill=\"#004165\" />\n        <circle cx=\"21\" cy=\"10\" r=\"3\" fill=\"#004165\" />\n        <circle cx=\"31\" cy=\"10\" r=\"3\" fill=\"#004165\" />\n        <line x1=\"41\" y1=\"0\" x2=\"41\" y2=\"20\" style=\"stroke:#004165;stroke-width:2\" />\n      </svg>\n    </div>\n    <div>\n      <h2 class=\"about\">My Projects</h2>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-4\">\n          <a href=\"https://www.konga.com/\">\n            <img class=\"self-small\" src=\"https://s3.amazonaws.com/vinsol-cms/cms-assets/system/asset_versions/attachments/000/001/190/original/VINSOL_PROD_IMAGES_Konga_1.jpg?1477396457\">\n          </a>\n        </div>\n        <div class=\"col-xs-12 col-sm-4\">\n          <a href=\"http://vinsol.com/fetoru\">\n            <img class=\"self-small\" src=\"https://s3.amazonaws.com/vinsol-cms/cms-assets/system/asset_versions/attachments/000/001/276/original/fetoru_screen1.jpg?1477477660\">\n          </a>\n        </div>\n        <div class=\"col-xs-12 col-sm-4\">\n          <a href=\"https://www.dealdey.com/\">\n            <img class=\"self-small\" src=\"https://s3.amazonaws.com/vinsol-cms/cms-assets/system/asset_versions/attachments/000/001/275/original/VINSOL_PROD_IMAGES_DealDey_1.jpg?147747754\">\n          </a>\n        </div>\n      </div>\n    </div>\n    <div>\n      <h2 class=\"about\">Course Links</h2>\n      <nav class=\"text-center\">\n        <ul class=\"work\">\n          <li>\n            <a href=\"https://food-spot.herokuapp.com/\">\n              <img src=\"https://matlabprojects.org/wp-content/uploads/2015/02/DSP-Project-250x250.jpg\" >\n              <span>Project</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://jain-abhishek-webdev.herokuapp.com/login\">\n              <img src=\"https://3.imimg.com/data3/OB/ML/MY-4288251/embedded-engineering-250x250.jpg\">\n              <span>Assignment</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://github.com/abhishekjain16\">\n              <img src=\"https://cacm.acm.org/system/assets/0002/8759/092117_Getty_Large-Scale-Study1.large.jpg?1506007488&1506007487\">\n              <span>GitHub</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <div>\n      <h2 class=\"about\">Technical Skills</h2>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-6\">\n          <ul class=\"list-group skills\">\n            <li class=\"list-group-item\">Ruby</li>\n            <li class=\"list-group-item\">Rails</li>\n            <li class=\"list-group-item\">Java</li>\n            <li class=\"list-group-item\">Python</li>\n            <li class=\"list-group-item\">JavaScript</li>\n            <li class=\"list-group-item\">Jquery</li>\n          </ul>\n        </div>\n        <div class=\"col-xs-12 col-md-6\">\n          <ul class=\"list-group skills\">\n            <li class=\"list-group-item\">NodeJS</li>\n            <li class=\"list-group-item\">Angular</li>\n            <li class=\"list-group-item\">ReactJS</li>\n            <li class=\"list-group-item\">BackboneJS</li>\n            <li class=\"list-group-item\">MongoDB</li>\n            <li class=\"list-group-item\">MySql</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div>\n      <h2 class=\"about\">Contact Me</h2>\n      <h4 class=\"text-center text-primary\"><span class=\"glyphicon glyphicon-envelope\"></span> jain.ab@husky.neu.edu</h4>\n      <h4 class=\"text-center text-primary\"><span class=\"glyphicon glyphicon-phone\"></span> 617--642-1376</h4>\n      <h4 class=\"text-center text-primary\"><a href=\"https://github.com/abhishekjain16\"><span class=\"fa fa-github\">GitHub</span></a></h4>\n      <h4 class=\"text-center text-primary\"><a href=\"https://twitter.com/abhi_jain1610\"><span class=\"fa fa-twitter\"></span>Twitter</a></h4>\n    </div>\n  </div>\n</div>\n\n"

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
        this.page = {};
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
        this.pageService.findPageById(this.pid)
            .subscribe(function (page) {
            _this.name = page.name;
            _this.description = page.description;
        });
        this.pageService.findPageByWebsiteId(this.wid)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        this.page['name'] = this.pageEditForm.value.name;
        this.page['description'] = this.pageEditForm.value.description;
        this.pageService.updatePage(this.pid, this.page)
            .subscribe(function (page) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page']);
        });
    };
    PageEditComponent.prototype.delete = function () {
        var _this = this;
        this.pageService.deletePage(this.pid)
            .subscribe(function (page) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page']);
        });
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "<header>\n  <a [routerLink]=\"['/user', userId, 'website']\" class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n  Pages\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', 'new']\" class=\"white\"><span class=\"pull-right glyphicon glyphicon-plus\"></span></a>\n</header>\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          Name\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Description\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          Owner\n        </div>\n        <div class=\"col-xs-3\">\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', page._id, 'widget']\">{{page.name}} </a>\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          {{page.description}}\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          {{username}}\n        </div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', wid, 'page', page._id]\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

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
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.username = user.username;
        });
        this.pageService.findPageByWebsiteId(this.wid)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
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
        this.pageService.findPageByWebsiteId(this.wid)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageNewComponent.prototype.create = function () {
        var _this = this;
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var page = {
            name: this.name,
            description: this.description
        };
        this.page = this.pageService.createPage(this.wid, page)
            .subscribe(function (page) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.wid, 'page']);
        });
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input type=\"text\"\n           name=\"username\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"\n           placeholder=\"Username\" />\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input type=\"password\"\n           name=\"password\"\n           ngModel\n           #password=\"ngModel\"\n           required\n           class=\"form-control\"\n           placeholder=\"Password\" />\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n\n    <a [routerLink]= \"['/register']\" class=\"btn btn-success btn-block\">Register</a>\n    <!--<a href=\"http://localhost:3000/auth/facebook\" class=\"btn btn-primary btn-block\">-->\n      <!--<span class=\"fa fa-facebook\"></span>-->\n      <!--Facebook-->\n    <!--</a>-->\n    <a href=\"https://jain-abhishek-webdev.herokuapp.com/auth/facebook\" class=\"btn btn-primary btn-block\">\n      <span class=\"fa fa-facebook\"></span>\n      Facebook\n    </a>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid Username/Password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (data) {
            _this.sharedService.user = data;
            _this.router.navigate(['/user', data._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
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

module.exports = "<form (ngSubmit) = \"update()\" #f=\"ngForm\">\n<header>\n  Profile\n  <button type=\"submit\"\n          class=\"pull-right white btn\"\n          [disabled]=\"!f.valid\"><span class=\"pull-right glyphicon glyphicon-check\"></span></button>\n</header>\n<div class=\"container-fluid profile clearfix\">\n  <label for=\"username\" class=\"label\">Username</label>\n  <input type=\"text\"\n         id=\"username\"\n         name=\"username\"\n         [(ngModel)]=\"username\"\n         class=\"form-control\" />\n\n  <label for=\"email\" class=\"label\">Email</label>\n  <input type=\"email\"\n         id=\"email\"\n         name=\"email\"\n         [(ngModel)]=\"email\"\n         class=\"form-control\" />\n\n  <label for=\"first_name\" class=\"label\">First Name</label>\n  <input type=\"text\"\n         id=\"first_name\"\n         name=\"first_name\"\n         [(ngModel)]=\"first_name\"\n         class=\"form-control\" />\n\n  <label for=\"last_name\" class=\"label\">Last Name</label>\n  <input type=\"text\"\n         id=\"last_name\"\n         name=\"last_name\"\n         [(ngModel)]=\"last_name\"\n         class=\"form-control\" />\n\n  <a [routerLink]=\"['/user', userId, 'website']\" class=\"btn btn-primary btn-block\">Websites</a>\n\n  <a (click)=\"logout()\" class=\"btn btn-danger btn-block\">Logout</a>\n</div>\n</form>\n<footer>\n  <a [routerLink]= \"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
    function ProfileComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // this.activatedRoute.params
        //   .subscribe(
        //     (params: any) => {
        //       this.userId = params['userId'];
        //     }
        //   );
        this.user = this.sharedService.user;
        if (this.user) {
            this.errorFlag = false;
            this.username = this.user['username'];
            this.last_name = this.user['lastName'];
            this.first_name = this.user['firstName'];
            this.email = this.user['email'];
            this.userId = this.user['_id'];
        }
        else {
            this.errorFlag = true;
        }
        // this.userService.findUserById(this.userId)
        //   .subscribe(
        //     (user: any) => {
        //       this.errorFlag = false;
        //       this.username = user['username'];
        //       this.last_name = user['lastName'];
        //       this.first_name = user['firstName'];
        //       this.email = user['email'];
        //     },
        //     (error: any) => {
        //       this.errorFlag = true;
        //     }
        //   );
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.user["username"] = this.profileForm.value.username;
        this.user["email"] = this.profileForm.value.email;
        this.user["firstName"] = this.profileForm.value.first_name;
        this.user["lastName"] = this.profileForm.value.last_name;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.username = user['username'];
            _this.last_name = user['lastName'];
            _this.first_name = user['firstName'];
            _this.email = user['email'];
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
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
        var _this = this;
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
        this.userService.createUser(user)
            .subscribe(function (newUser) {
            _this.errorFlag = false;
            _this.router.navigate(['/profile']);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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
        this.website = {};
        this.websites = [{}];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
        });
        this.webService.findWebsiteById(this.wid)
            .subscribe(function (website) {
            _this.name = website.name;
            _this.description = website.description;
        });
        this.webService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        this.website['name'] = this.websiteEditForm.value.name;
        this.website['description'] = this.websiteEditForm.value.description;
        this.webService.updateWebsite(this.wid, this.website)
            .subscribe(function (website) {
            _this.router.navigate(['user/' + _this.userId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.delete = function () {
        var _this = this;
        this.webService.deleteWebsite(this.wid)
            .subscribe(function (website) {
            _this.router.navigate(['user/' + _this.userId, 'website']);
        });
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "<header>\n  <a [routerLink]=\"['/user', userId]\" class=\"white\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n  Websites\n  <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"white\"><span class=\"pull-right glyphicon glyphicon-plus\"></span></a>\n</header>\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          Name\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n          Description\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          Owner\n        </div>\n        <div class=\"col-xs-3\">\n        </div>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/user', userId, 'website', website._id, 'page']\">{{website.name}}</a>\n        </div>\n        <div class=\"col-md-3 hidden-sm hidden-xs\">\n         {{website.description}}\n        </div>\n        <div class=\"col-sm-3 col-md-3 hidden-xs\">\n          {{username}}\n        </div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', website._id]\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

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
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.username = user.username;
        });
        this.webService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
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
        this.webService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var website = {
            name: this.name,
            description: this.description
        };
        this.website = this.webService.createWebsite(this.userId, website)
            .subscribe(function (new_website) {
            _this.router.navigate(['user/' + _this.userId, 'website']);
        });
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Choose Widget\n</header>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\">\n    <a (click)=\"create('HEADING')\">\n      Header\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:\">\n      Label\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a (click)=\"create('HTML')\">\n      Html\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a (click)=\"create('TEXT')\">\n      Text Input\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:\">\n      Link\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:l\">\n      Button\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a (click)=\"create('IMAGE')\">\n      Image\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a (click)=\"create('YOUTUBE')\">\n      Youtube\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:\">\n      Data Table\n    </a>\n  </li>\n  <li class=\"list-group-item\">\n    <a href=\"javascript:\">\n      Repeater\n    </a>\n  </li>\n</ul>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

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
        this.widgetService.findWidgetsByPageId(this.pid)
            .subscribe(function (widgets) {
            _this.size = widgets.length;
        });
    };
    WidgetChooserComponent.prototype.create = function (type) {
        var _this = this;
        var widget = {
            widgetType: type,
            position: this.size
        };
        this.widget = this.widgetService.createWidget(this.pid, widget)
            .subscribe(function (new_widget) {
            _this.router.navigate([
                'user/',
                _this.userId,
                'website',
                _this.wid,
                'page',
                _this.pid,
                'widget',
                new_widget._id
            ]);
        });
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

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n</div>\n"

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
        this.widget = {};
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
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

module.exports = "\n<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Edit Widget\n\n  <a (click)=\"update()\"\n     class=\"pull-right white\">\n    <span class=\"pull-right glyphicon glyphicon-check\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"textHeader\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textHeader\"\n             name=\"textHeader\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textHeader\"\n             placeholder=\"Home Page\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"sizeHeader\">\n        Size\n      </label>\n      <input [(ngModel)]=\"sizeHeader\"\n             required\n             name=\"sizeHeader\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"sizeHeader\"\n             placeholder=\"3\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"delete()\"\n         class=\"btn btn-danger btn-block \">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

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
    function WidgetHeaderComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
        this.widgets = [{}];
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.textHeader = widget['text'];
                _this.sizeHeader = widget['size'];
            });
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        this.widget['widgetType'] = 'HEADING';
        this.widget['text'] = this.textHeader;
        this.widget['size'] = this.sizeHeader;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
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

module.exports = "\n<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Edit Widget\n  <a (click)=\"update()\"\n     class=\"pull-right white\">\n    <span class=\"pull-right glyphicon glyphicon-check\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label>\n        Text\n      </label>\n      <quill-editor [(ngModel)]=\"text\" name=\"text\"></quill-editor>\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"delete()\"\n         class=\"btn btn-danger btn-block\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

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
    function WidgetHtmlComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
        this.widgets = [{}];
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.text = widget['text'];
            });
        });
    };
    WidgetHtmlComponent.prototype.update = function () {
        var _this = this;
        this.widget['widgetType'] = 'HTML';
        this.widget['text'] = this.text;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n            <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n                <span class=\"glyphicon glyphicon-search\"></span>\n            </a>\n        </span>\n  </div>\n\n  <div class=\"row\">\n    <div *ngFor = \"let photo of photos['photo']\"\n         class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(photo)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_s.jpg']\"/>\n      <p></p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute, sharedService) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch userId from shared service
        this.userId = this.sharedService.user['_id'];
        // fetch userId, pageId and websiteId from url
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            websiteId: this.websiteId,
            _page: this.pageId,
            url: url
        };
        this.widgetService
            .updateWidget(this.widgetId, widget)
            .subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget']);
            }
            else {
                _this.error = false;
            }
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=flickr-image-search.component.js.map

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

module.exports = "<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Edit Widget\n  <a (click)=\"update()\"\n     class=\"pull-right white\">\n    <span class=\"pull-right glyphicon glyphicon-check\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\">\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <div class=\"form-group\">\n      <label>\n        Upload Image\n      </label>\n      <input name=\"myFile\" type=\"file\" class=\"form-control\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"width\">\n        Width\n      </label>\n      <input [(ngModel)]=\"width\"\n             name=\"width\"\n             required\n             type=\"text\"\n             required\n             class=\"form-control\"\n             id=\"width\"\n             placeholder=\"100%\">\n    </div>\n    <input  name=\"widgetId\" value=\"{{wgid}}\"   style=\"display: none\"/>\n    <input  name=\"websiteId\" value=\"{{wid}}\"   style=\"display: none\"/>\n    <input  name=\"pageId\" value=\"{{pid}}\"   style=\"display: none\"/>\n    <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    <br/>\n    <div class=\"form-group\">\n      <a class=\"btn btn-primary btn-block \"\n         [routerLink]=\"['/user/'+ userId +'/website/'+wid+'/page/'+pid+'/widget/'+wgid+'/flickr']\" >Flickr\n      </a>\n      <a (click)=\"delete()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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




var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
        this.widgets = [{}];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.width = widget['width'];
                _this.url = widget['url'];
            });
        });
    };
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        this.widget['widgetType'] = 'IMAGE';
        this.widget['width'] = this.width;
        this.widget['url'] = this.url;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetImageComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Edit Widget\n  <a (click)=\"update()\"\n     class=\"pull-right white\">\n    <span class=\"pull-right glyphicon glyphicon-check\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label>\n        Text\n      </label>\n      <input [(ngModel)]=\"text\"\n             class=\"form-control\"\n             name=\"text\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label>\n        Rows\n      </label>\n      <input [(ngModel)]=\"rows\" class=\"form-control\" type=\"number\" name=\"rows\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"name\"\n             placeholder=\"Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Placeholder</label>\n      <input [(ngModel)]=\"placeholder\" class=\"form-control\" name=\"placeholder\" required/>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\"\n             readonly\n             value=\"Formatted\"\n             class=\"form-control\"/>\n      <span class=\"input-group-addon\">\n         <input [(ngModel)]=\"formatted\"\n                type=\"checkbox\"\n                name=\"formatted\"/>\n     </span>\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"delete()\"\n         class=\"btn btn-danger btn-block \">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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




var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.widgets = [{}];
        this.widget = {};
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.rows = widget['rows'];
                _this.text = widget['text'];
                _this.placeholder = widget['placeholder'];
                _this.formatted = widget['formatted'];
                _this.name = widget['name'];
            });
        });
    };
    WidgetTextComponent.prototype.update = function () {
        var _this = this;
        this.widget['widgetType'] = 'TEXT';
        this.widget['rows'] = this.rows;
        this.widget['text'] = this.text;
        this.widget['name'] = this.name;
        this.widget['formatted'] = this.formatted;
        this.widget['placeholder'] = this.placeholder;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetTextComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

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

module.exports = "\n<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Edit Widget\n  <a (click)=\"update()\"\n     class=\"pull-right white\">\n    <span class=\"pull-right glyphicon glyphicon-check\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"url\">\n        URL\n      </label>\n      <input [(ngModel)]=\"url\"\n             name=\"url\"\n             required\n             type=\"url\"\n             required\n             class=\"form-control\"\n             id=\"url\"\n             placeholder=\"http://youtube.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"width\">\n        Width\n      </label>\n      <input [(ngModel)]=\"width\"\n             name=\"width\"\n             required\n             type=\"text\"\n             required\n             class=\"form-control\"\n             id=\"width\"\n             placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"delete()\"\n         class=\"btn btn-danger btn-block \">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n<footer>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

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
    function WidgetYoutubeComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
        this.widgets = [{}];
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.width = widget['width'];
                _this.url = widget['url'];
            });
        });
    };
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['width'] = this.width;
        this.widget['url'] = this.url;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
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

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  Widgets\n  <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', 'new']\"\n     class=\"white\">\n    <span class=\"pull-right glyphicon glyphicon-plus\"></span>\n  </a>\n</header>\n<div class=\"container-fluid\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <div class=\"aj-widget\" *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.widgetType\">\n\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div class=\"widget-settings\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-list\"></span>\n        </div>\n        <h3>{{widget.text}}</h3>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <div class=\"widget-settings\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-list\"></span>\n        </div>\n        <div [innerHtml]=\"widget.text\"></div>\n      </div>\n\n      <div *ngSwitchCase=\"'TEXT'\">\n        <div class=\"widget-settings\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-list\"></span>\n        </div>\n        <div *ngIf=\"widget.formatted\">\n          <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n        </div>\n        <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n               placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n        <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                  rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                  class=\"form-control\">{{widget.text}}</textarea>\n\n      </div>\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"widget-settings\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-list\"></span>\n        </div>\n        <img [src] = \"widget.url\" [style.width]=\"widget.width\" />\n        <!--<img class=\"content\" src={{widget.url}} [style.width]=\"widget.width\" />-->\n      </div>\n\n      <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n        <div class=\"widget-settings\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-list\"></span>\n        </div>\n        <iframe class=\"content\"\n                [style.width]=\"widget.width\"\n                [src]=\"sanitizer.bypassSecurityTrustResourceUrl(widget.url)\"\n                frameborder=\"0\"\n                allowfullscreen>\n\n        </iframe>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <span class=\"glyphicon glyphicon-play\"></span>\n  <span class=\"glyphicon glyphicon-eye-open\"></span>\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"white\">\n    <span class=\"glyphicon glyphicon-user pull-right\"></span>\n  </a>\n</footer>\n"

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
        this.widgetService.findWidgetsByPageId(this.pid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
            .subscribe(function (data) { return console.log(data); });
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

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
        this.key = '682dd55c71b85060d09a7f38d60568a0';
        this.secret = '5050e2c36670ed6a';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this.http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])() // needed as we're injecting Http service into this service
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
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




// injecting service into module
var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPage': this.createPage,
            'findPageById': this.findPageById,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page.websiteId = websiteId;
        return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this.http.put(this.baseUrl + '/api/page/' + pageId, page)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'findUserByCredentials': this.findUserByCredentials
        };
    }
    UserService.prototype.createUser = function (user) {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/user/', user, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedin', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
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




// injecting service into module
var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsiteById': this.findWebsiteById,
            'findWebsitesByUser': this.findWebsitesByUser,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userID, website) {
        website.developerId = userID;
        return this.http.post(this.baseUrl + '/api/user/' + userID + '/website', website)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this.http.put(this.baseUrl + '/api/website/' + websiteId, website)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
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




// injecting service into module
var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetById': this.findWidgetById,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget.pageId = pageId;
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this.http.delete(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex;
        return this.http.put(url, '')
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'https://jain-abhishek-webdev.herokuapp.com',
    baseFrontUrl: 'https://jain-abhishek-webdev.herokuapp.com'
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
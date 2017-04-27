webpackJsonp([1,5],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(391),
        styles: [__webpack_require__(353)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_payment_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = (function () {
    function PaymentComponent(paymentService, toastr, vcr) {
        this.paymentService = paymentService;
        this.toastr = toastr;
        this.message = 'Please use the form below to pay:';
        this.isError = false;
        this.isPaid = false;
        this.amount = 12;
        this.creditCardNumber = '4111 1111 1111 1111';
        this.expirationDate = '10/2019';
        this.showForm = true;
        this.toastr.setRootViewContainerRef(vcr);
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.toastr.success('You are awesome!', 'Success!');
    };
    PaymentComponent.prototype.processPayment = function () {
        var _this = this;
        var data = { amount: this.amount, creditCardNumber: this.creditCardNumber, expirationDate: this.expirationDate };
        this.paymentService.processPayment(data).subscribe(function (response) {
            console.log(response);
            if (response.message)
                _this.toastr.error(JSON.stringify(response.message), 'error');
            else
                _this.toastr.success('Card: ' + JSON.stringify(response.creditCards[0]), 'Payment Successful');
        });
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__(395),
        styles: [__webpack_require__(357)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_payment_service__["a" /* PaymentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], PaymentComponent);

var _a, _b, _c;
//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetsComponent = (function () {
    function WidgetsComponent() {
    }
    WidgetsComponent.prototype.ngOnInit = function () {
    };
    return WidgetsComponent;
}());
WidgetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(403),
        styles: [__webpack_require__(365)]
    }),
    __metadata("design:paramtypes", [])
], WidgetsComponent);

//# sourceMappingURL=widgets.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_braintree_web_client__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_braintree_web_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_braintree_web_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentService = (function () {
    function PaymentService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    PaymentService.prototype.getToken = function () {
        return this.http.post('/api/v1/token', this.options).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    PaymentService.prototype.processPayment = function (cardDetails) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.getToken().subscribe(function (response) {
                __WEBPACK_IMPORTED_MODULE_3_braintree_web_client__["create"]({
                    authorization: response.client_token
                }, function (err, instance) {
                    if (err)
                        observer.error(err);
                    else
                        _this.processCard(instance, cardDetails).subscribe(function (r) { observer.next(r); });
                });
            });
        });
    };
    PaymentService.prototype.processCard = function (instance, cardDetails) {
        var data = {
            creditCard: {
                number: cardDetails.creditCardNumber,
                cvv: cardDetails.cvv,
                expirationDate: cardDetails.expirationDate,
                billingAddress: {
                    postalCode: '13519'
                },
                options: {
                    validate: true
                }
            }
        };
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            instance.request({
                endpoint: 'payment_methods/credit_cards',
                method: 'post',
                data: data
            }, function (err, resp) {
                observer.next(resp);
                observer.error(err);
            });
        });
    };
    PaymentService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.statusText);
    };
    return PaymentService;
}());
PaymentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PaymentService);

var _a;
//# sourceMappingURL=payment.service.js.map

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 237;


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_i18n_provider__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(86);





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_i18n_provider__["a" /* getTranslationProviders */])().then(function (providers) {
    var options = { providers: providers };
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */], options);
});
// platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__responsive_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(resService) {
        this.resService = resService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.resService.adaptToScreenSize();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(390),
        styles: [__webpack_require__(352)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_masonry__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_side_nav_side_nav_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_site_site_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widgets_widgets_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__responsive_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_shared_loader_loader_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_shared_module_module_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_notification_popup_notification_popup_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_messages_messages_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_settings_settings_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_side_panel_side_panel_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_tour_tour_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_payment_payment_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_payment_service__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_side_nav_side_nav_component__["a" /* SideNavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_site_site_component__["a" /* SiteComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_widgets_widgets_component__["a" /* WidgetsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_shared_loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_shared_module_module_component__["a" /* ModuleComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_notification_popup_notification_popup_component__["a" /* NotificationPopupComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_side_panel_side_panel_component__["a" /* SidePanelComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_tour_tour_component__["a" /* TourComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_payment_payment_component__["a" /* PaymentComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_masonry__["a" /* MasonryModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbCollapseModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__responsive_service__["a" /* ResponsiveService */],
            __WEBPACK_IMPORTED_MODULE_25__services_payment_service__["a" /* PaymentService */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["d" /* NgbTooltipConfig */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__responsive_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(rend, responsiveService) {
        this.rend = rend;
        this.responsiveService = responsiveService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.supportedLanguages = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].supportedLanguages;
        var localLanguage = localStorage.getItem('locale');
        this.selectedLanguage = this.supportedLanguages.find(function (x) { return x.code == localLanguage; });
        if (!this.selectedLanguage)
            this.selectedLanguage = this.supportedLanguages.find(function (p) { return p.code == __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].locale; });
    };
    HeaderComponent.prototype.languageChanged = function (value) {
        localStorage.setItem('locale', value);
        location.reload();
    };
    HeaderComponent.prototype.searchClick = function () {
        this.showSearch = !this.showSearch;
        //TODO focus does not work
        //this.searchInput.nativeElement.focus();
        //console.log(this.searchInput);
        //this.searchInput.nativeElement.value ="dfa";
        //this.rend.invoke
        //document.getElementById('main-search-input').focus();
        this.searchInput.nativeElement.focus();
    };
    HeaderComponent.prototype.navOpenClick = function () {
        this.responsiveService.navOpen = !this.responsiveService.navOpen;
        this.responsiveService.adaptToScreenSize();
    };
    HeaderComponent.prototype.toggleNotificationPopup = function () {
        this.responsiveService.headerPopup == 'notifications' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'notifications';
    };
    HeaderComponent.prototype.toggleMessagePopup = function () {
        this.responsiveService.headerPopup == 'messages' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'messages';
    };
    HeaderComponent.prototype.toggleSidePanel = function () {
        this.responsiveService.headerPopup == 'side-panel' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'side-panel';
    };
    HeaderComponent.prototype.toggleSettingsPopup = function () {
        this.responsiveService.headerPopup == 'settings' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'settings';
    };
    HeaderComponent.prototype.toggleProfilePopup = function () {
        this.responsiveService.headerPopup == 'profile' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'profile';
    };
    HeaderComponent.prototype.toggleLanguagePopup = function () {
        this.responsiveService.headerPopup == 'language' ? this.responsiveService.headerPopup = '' : this.responsiveService.headerPopup = 'language';
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputSearch'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], HeaderComponent.prototype, "searchInput", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(392),
        styles: [__webpack_require__(354)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__(164);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_widgets_component__ = __webpack_require__(166);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__widgets_widgets_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment_component__ = __webpack_require__(165);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__payment_payment_component__["a"]; });
/**
 * Created by wajidkhilji on 12/04/2017.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(393),
        styles: [__webpack_require__(355)]
    }),
    __metadata("design:paramtypes", [])
], MessagesComponent);

//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__responsive_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationPopupComponent = (function () {
    function NotificationPopupComponent(resService) {
        this.resService = resService;
    }
    NotificationPopupComponent.prototype.ngOnInit = function () {
    };
    return NotificationPopupComponent;
}());
NotificationPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification-popup',
        template: __webpack_require__(394),
        styles: [__webpack_require__(356)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */]) === "function" && _a || Object])
], NotificationPopupComponent);

var _a;
//# sourceMappingURL=notification-popup.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(396),
        styles: [__webpack_require__(358)]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
        this.variant = this.variant || 1;
    };
    return LoaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('variant'),
    __metadata("design:type", Number)
], LoaderComponent.prototype, "variant", void 0);
LoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(397),
        styles: [__webpack_require__(359)]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuleComponent = (function () {
    function ModuleComponent() {
        this.wrapperClass = '';
        this.moduleClass = '';
        this.contentClass = '';
        this.title = '';
        this.meta = '';
        this.controls = true;
        this.collapsed = false;
    }
    ModuleComponent.prototype.ngOnInit = function () {
        ///TODO Component card does not animates.
        //jQuery(this.el.nativeElement).sortable();
    };
    ModuleComponent.prototype.collapseModule = function () {
        this.collapsed = !this.collapsed;
    };
    ModuleComponent.prototype.closeModule = function () {
        jQuery(this.el.nativeElement).hide('slow');
    };
    return ModuleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModuleComponent.prototype, "wrapperClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModuleComponent.prototype, "moduleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModuleComponent.prototype, "contentClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModuleComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModuleComponent.prototype, "meta", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ModuleComponent.prototype, "controls", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ModuleComponent.prototype, "collapsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('moduleElement'),
    __metadata("design:type", Object)
], ModuleComponent.prototype, "el", void 0);
ModuleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-module',
        template: __webpack_require__(398),
        styles: [__webpack_require__(360)],
    }),
    __metadata("design:paramtypes", [])
], ModuleComponent);

//# sourceMappingURL=module.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavComponent = (function () {
    function SideNavComponent() {
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.ngAfterViewInit = function () {
        (jQuery('#menu')).metisMenu();
    };
    return SideNavComponent;
}());
SideNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-nav',
        template: __webpack_require__(399),
        styles: [__webpack_require__(361)]
    }),
    __metadata("design:paramtypes", [])
], SideNavComponent);

//# sourceMappingURL=side-nav.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__responsive_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidePanelComponent = (function () {
    function SidePanelComponent(responsiveService) {
        this.responsiveService = responsiveService;
    }
    SidePanelComponent.prototype.ngOnInit = function () {
    };
    SidePanelComponent.prototype.close = function () {
        this.responsiveService.headerPopup = '';
    };
    return SidePanelComponent;
}());
SidePanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-panel',
        template: __webpack_require__(400),
        styles: [__webpack_require__(362)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */]) === "function" && _a || Object])
], SidePanelComponent);

var _a;
//# sourceMappingURL=side-panel.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteComponent = (function () {
    function SiteComponent() {
    }
    SiteComponent.prototype.ngOnInit = function () {
    };
    return SiteComponent;
}());
SiteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-site',
        template: __webpack_require__(401),
        styles: [__webpack_require__(363)]
    }),
    __metadata("design:paramtypes", [])
], SiteComponent);

//# sourceMappingURL=site.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TourComponent = (function () {
    function TourComponent() {
        this.tutorial = false;
        this.tour = new Shepherd.Tour({
            defaults: {
                showCancelLink: true,
                classes: 'shepherd-theme-arrows'
            }
        });
    }
    TourComponent.prototype.ngOnInit = function () {
        this.tour.addStep('welcome', {
            text: ['Welcome! This is a guided tour example which you can use in your projects.'],
            attachTo: '.tour-trigger bottom',
            buttons: [
                {
                    text: 'Exit',
                    classes: 'shepherd-button-secondary',
                    action: this.tour.cancel
                }, {
                    text: 'Next',
                    action: this.tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        this.tour.addStep('dashboards', {
            title: 'Dashboards',
            text: 'Dashboard examples designed for specific use cases to show you the power of the template. We will add more dashboard designs in the future as well!',
            attachTo: '.nav-dashboards right',
            buttons: [
                {
                    text: 'Back',
                    classes: 'shepherd-button-secondary',
                    action: this.tour.back
                }, {
                    text: 'Next',
                    action: this.tour.next
                }
            ]
        });
        this.tour.addStep('Widgets', {
            title: 'Widgets',
            text: 'Check out the various widgets you can use in your projects.',
            attachTo: '.nav-widgets right',
            buttons: [
                {
                    text: 'Back',
                    classes: 'shepherd-button-secondary',
                    action: this.tour.back
                }, {
                    text: 'Next',
                    action: this.tour.next
                }
            ]
        });
        this.tour.addStep('app-pages', {
            title: 'App Pages',
            text: 'Discover the useful app pages. They are based on real-world use cases too.',
            attachTo: '.nav-forms right',
            buttons: [
                {
                    text: 'Back',
                    classes: 'shepherd-button-secondary',
                    action: this.tour.back
                }, {
                    text: 'Done',
                    action: this.tour.next
                }
            ]
        });
        this.tour.on('complete', this.handleShepherdEvent);
        this.tour.on('cancel', this.handleShepherdEvent);
    };
    TourComponent.prototype.ngOnChanges = function () {
        this.tutorial ? this.tour.start() : this.tour.cancel();
    };
    TourComponent.prototype.handleShepherdEvent = function () {
        var _this = this;
        setTimeout(function () {
            _this.tutorial = false;
        }, 300);
    };
    return TourComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TourComponent.prototype, "tutorial", void 0);
TourComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tour',
        template: __webpack_require__(402),
        styles: [__webpack_require__(364)]
    }),
    __metadata("design:paramtypes", [])
], TourComponent);

//# sourceMappingURL=tour.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__(86);
/* harmony export (immutable) */ __webpack_exports__["a"] = getTranslationProviders;
/**
 * Created by wajidkhilji on 20/04/2017.
 */



function getTranslationProviders() {
    // Get the locale id from the global
    var langStore = localStorage.getItem('locale');
    var locale = langStore ? langStore : __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].locale;
    // return no providers if fail to get translation file for locale
    var noProviders = [];
    // No locale or U.S. English: no translation providers
    if (!locale || locale === __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].locale) {
        return Promise.resolve(noProviders);
    }
    // Ex: 'locale/messages.fr.xlf`
    var translationFile = "/src/locale/messages." + locale + ".xlf";
    return getTranslations(translationFile)
        .then(function (translations) { return [
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TRANSLATIONS"], useValue: translations },
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TRANSLATIONS_FORMAT"], useValue: 'xlf' },
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: locale }
    ]; })
        .catch(function () { return noProviders; }); // ignore if file not found
}
function getTranslations(file) {
    // changes Start here
    var text = "";
    var fileRequest = new XMLHttpRequest();
    fileRequest.onreadystatechange = function () {
        if (fileRequest.readyState === 4) {
            if (fileRequest.status === 200 || fileRequest.status == 0) {
                text = fileRequest.responseText;
            }
        }
    };
    fileRequest.onerror = function (err) {
        console.log(err);
    };
    fileRequest.open("GET", file, false);
    fileRequest.send();
    var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(text);
    return observable.toPromise();
}
//# sourceMappingURL=i18n.provider.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });

var appRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["a" /* DashboardComponent */] },
    { path: 'widgets', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["b" /* WidgetsComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["c" /* PaymentComponent */] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsiveService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponsiveService = (function () {
    function ResponsiveService() {
        this.headerPopup = '';
    }
    ResponsiveService.prototype.ngOnInit = function () {
    };
    ResponsiveService.prototype.adaptToScreenSize = function () {
        var _this = this;
        jQuery(window).bind('resize', function () { _this.resize(); });
        this.resize();
    };
    ResponsiveService.prototype.resize = function () {
        this.compact = jQuery(window).width() <= 1200;
        this.mobile = jQuery(window).width() <= 768;
    };
    return ResponsiveService;
}());
ResponsiveService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ResponsiveService);

//# sourceMappingURL=responsive.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<body class=\"theme-1 \"  [class.compact]=\"resService.compact\" [class.mobile]=\"resService.mobile\" [class.nav-toggled]=\"resService.navOpen\" >\n  <app-site></app-site>\n</body>\n"

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper view\">\n  <div class=\"container-fluid\">\n    <h2 class=\"view-title\">Dashboard</h2>\n\n    <app-module [wrapperClass]=\"'col-lg-4 col-md-6 col-sm-12 col-xs-12'\" *ngFor=\"let n of [1,2,3,4,5,6,7,8,9,10,11,12]\" [title]=\"'Module ' + n\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lectus arcu. Morbi non vestibulum leo. Curabitur facilisis lectus lobortis massa dapibus semper. Sed elementum orci felis, ac maximus massa tincidunt a. In hac habitasse platea dictumst. Ut ligula nulla, tincidunt vitae metus quis, aliquet convallis purus. In tristique magna nec tellus luctus maximus. Aliquam suscipit ultricies dui. Sed rhoncus felis massa, eu faucibus ligula maximus at.\n\n      <!--define footers like this-->\n      <div class=\"module-footer\">\n        <ul class=\"utilities list-inline\">\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Copy\"><i class=\"fa fa-files-o\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Edit\"><i class=\"fa fa-pencil\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Favourite\"><i class=\"fa fa-star\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Archive\"><i class=\"fa fa-archive\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Delete\"><i class=\"fa fa-trash\"></i></a></li>\n        </ul>\n      </div>\n    </app-module>\n\n    <div class=\"draggable-column col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n      <app-module [title]=\"'tst'\" [wrapperClass]=\"'module-draggable'\" >\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lectus arcu. Morbi non vestibulum leo. Curabitur facilisis lectus lobortis massa dapibus semper. Sed elementum orci felis, ac maximus massa tincidunt a. In hac habitasse platea dictumst. Ut ligula nulla, tincidunt vitae metus quis, aliquet convallis purus. In tristique magna nec tellus luctus maximus. Aliquam suscipit ultricies dui. Sed rhoncus felis massa, eu faucibus ligula maximus at.\n      </app-module>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<!--TODO Tool tip does not work  -->\n<div class=\"header\">\n  <div class=\"branding float-left\">\n    <h1 class=\"logo text-center\">\n      <a href=\"index.html\">\n        <img class=\"logo-icon\" src=\"assets/images/logo-icon.svg\" alt=\"icon\" />\n        <span class=\"nav-label\">\n\t\t\t\t\t\t\t<span class=\"highlight\" i18n>App </span>Kit\n\t\t\t\t\t\t</span>\n      </a>\n    </h1>\n  </div>\n  <div class=\"topbar\">\n      <button class=\"main-nav-toggle\" type=\"button\" (click)=\"navOpenClick()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <i class=\"icon fa fa-caret-left\"></i>\n    </button>\n    <div class=\"search-container\">\n      <form id=\"main-search\" class=\"main-search\">\n        <i id=\"main-search-toggle\" class=\"fa fa-search icon\" (click)=\"searchClick()\"></i>\n        <div id=\"main-search-input-wrapper\" class=\"main-search-input-wrapper\" [hidden]=\"!showSearch\">\n          <input type=\"text\" id=\"main-search-input\" class=\"main-search-input form-control\" placeholder=\"Search...\" #inputSearch>\n\n          <span id=\"clear-search\" aria-hidden=\"true\" class=\"fs1 icon icon_close_alt2 clear-search\"></span>\n        </div>\n      </form>\n    </div>\n    <div class=\"navbar-tools\">\n      <div class=\"utilities-container\">\n        <div class=\"utilities\">\n\n\n          <div class=\"item item-more\" [class.open]=\"responsiveService.headerPopup == 'language'\">\n            <div class=\"dropdown-toggle\" id=\"dropdownMenu-language\" aria-expanded=\"true\" role=\"button\" (click)=\"toggleLanguagePopup()\">\n              <span class=\"sr-only\">Languages</span>\n              <span class=\"flag-icon flag-icon-{{selectedLanguage.code}}\" tooltip-placement=\"bottom\" uib-tooltip=\"Languages\"></span>\n              <i class=\"fa fa-caret-down\"></i>\n            </div>\n            <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu-language\">\n              <span class=\"arrow\"></span>\n              <h4 class=\"title\">Languages</h4>\n\n              <ul class=\"more-list\">\n\n                <li *ngFor=\"let language of supportedLanguages\" value=\"{{language.code}}\"  >\n                  <a role=\"menuitem\" (click)=\"languageChanged(language.code)\" >\n                    <span class=\"flag-icon flag-icon-{{language.code}}\"></span>\n                    <br>{{language.name}}\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"item item-tour hidden-xs tour-trigger\" tooltip-placement=\"bottom\" uib-tooltip=\"Guided Tour\" (click)=\"responsiveService.headerPopup = ''; tutorial = !tutorial\" ><span class=\"sr-only\">App Tour</span><span class=\"pe-icon pe-7s-info icon\"></span></div>\n          <app-tour [tutorial]=\"tutorial\" ></app-tour>\n          <div class=\"item item-side-panel\">\n            <i id=\"side-panel-toggle\" class=\"side-panel-toggle panel-hide icon fa fa-signal\" tooltip-placement=\"bottom\" uib-tooltip=\"Activities\" (click)=\"toggleSidePanel()\" ><span class=\"badge badge-circle badge-warning\">8</span></i>\n            <div id=\"side-panel\" class=\"side-panel\" [class.side-panel-open]=\"responsiveService.headerPopup == 'side-panel'\">\n              <app-side-panel></app-side-panel>\n            </div>\n          </div>\n\n          <div class=\"item item-notifications \"  [class.open]=\"responsiveService.headerPopup == 'notifications'\">\n            <div class=\"dropdown-toggle\" id=\"dropdownMenu-notifications\" aria-expanded=\"true\" role=\"button\" (click)=\"toggleNotificationPopup()\">\n              <span class=\"sr-only\">Notifications</span>\n              <span class=\"pe-icon pe-7s-bell icon\" tooltip-placement=\"bottom\" uib-tooltip=\"Notifiations\"></span><span class=\"badge badge-circle badge-danger\">3</span>\n            </div>\n            <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu-notifications\">\n              <app-notification-popup></app-notification-popup>\n            </div>\n          </div>\n\n          <div class=\"item item-messages dropdown \" [class.open]=\"responsiveService.headerPopup == 'messages'\">\n            <div class=\"dropdown-toggle\" id=\"dropdownMenu-messages\" aria-expanded=\"true\" role=\"button\" (click)=\"toggleMessagePopup()\">\n              <span class=\"sr-only\">Messages</span>\n              <span class=\"pe-icon pe-7s-mail icon\" tooltip-placement=\"bottom\" tooltip=\"Messages\"></span><span class=\"badge badge-circle badge-success\">5</span>\n            </div>\n            <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu-messages\">\n              <app-messages></app-messages>\n            </div>\n          </div>\n          <div class=\"item item-more\" [class.open]=\"responsiveService.headerPopup == 'settings'\">\n            <div class=\"dropdown-toggle\" id=\"dropdownMenu-more\" aria-expanded=\"true\" role=\"button\" (click)=\"toggleSettingsPopup()\">\n              <span class=\"sr-only\">More</span>\n              <span aria-hidden=\"true\" class=\"fs1 icon icon_grid-3x3\"  ngbTooltip=\"Settings &amp; Tools\"></span>\n            </div>\n            <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu-more\">\n              <app-settings></app-settings>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"user-container dropdown\" [class.open]=\"responsiveService.headerPopup == 'profile'\">\n        <div class=\"dropdown-toggle\" id=\"dropdownMenu-user\" aria-expanded=\"true\" role=\"button\" (click)=\"toggleProfilePopup()\">\n          <img src=\"assets/images/profiles/profile-3.png\" alt=\"\" />\n          <i class=\"fa fa-caret-down\"></i>\n        </div>\n        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu-user\" >\n          <li><span class=\"arrow\"></span><a role=\"menuitem\" href=\"user-profile.html\"><span class=\"pe-icon pe-7s-user icon\"></span>My Account</a></li>\n          <li><a role=\"menuitem\" href=\"pricing.html\"><span class=\"pe-icon pe-7s-paper-plane icon\"></span>Upgrade Plan</a></li>\n          <li><a role=\"menuitem\" href=\"login.html\"><span class=\"pe-icon pe-7s-power icon\"></span>Sign Out</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "\n  <span class=\"arrow\"></span>\n  <div class=\"message-items no-overflow\">\n    <div class=\"item media\">\n      <div class=\"media-left profile\">\n        <img class=\"profile\" src=\"assets/images/profiles/profile-7.png\" alt=\"\" />\n      </div>\n      <div class=\"media-body\">\n        <a href=\"#\">\n          <span class=\"sender display-block\">Julia Arnold</span>\n          <span class=\"message-title display-block\">Great News</span>\n          <span class=\"excerpt display-block\">\"Hey Becky, thanks for doing this natoque penatibus et magnis dis parturient montes...\"</span>\n        </a>\n      </div>\n      <div class=\"meta\">\n        Apr 6\n      </div>\n    </div>\n    <div class=\"item media\">\n      <div class=\"media-left profile\">\n        <img class=\"profile\" src=\"assets/images/profiles/profile-1.png\" alt=\"\" />\n      </div>\n      <div class=\"media-body\">\n        <a href=\"#\">\n          <span class=\"sender display-block\">Ken Davison</span>\n          <span class=\"message-title display-block\">RE: Help Needed</span>\n          <span class=\"excerpt display-block\">\"No problem. I can help with the luctus est eu ullamcorper laoreet...\"</span>\n        </a>\n      </div>\n      <div class=\"meta\">\n        Apr 2\n      </div>\n    </div>\n    <div class=\"item media\">\n      <div class=\"media-left profile\">\n        <img class=\"profile\" src=\"assets/images/profiles/profile-4.png\" alt=\"\" />\n      </div>\n      <div class=\"media-body\">\n        <a href=\"#\">\n          <span class=\"sender display-block\">Ryan Baker</span>\n          <span class=\"message-title display-block\">RE: UX resources for Nike</span>\n          <span class=\"excerpt display-block\">\"Hi Becky, can you send me the wireframes? I need the finalised version...\"</span>\n        </a>\n      </div>\n      <div class=\"meta\">\n        Mar 28\n      </div>\n    </div>\n    <div class=\"item media\">\n      <div class=\"media-left profile\">\n        <img class=\"profile\" src=\"assets/images/profiles/profile-5.png\" alt=\"\" />\n      </div>\n      <div class=\"media-body\">\n        <a href=\"#\">\n          <span class=\"sender display-block\">Sarah West</span>\n          <span class=\"message-title display-block\">Hello!</span>\n          <span class=\"excerpt display-block\">\"Hello there, lorem ipsum dolor sit amet, consectetur adipiscing elit duis luctus...\"</span>\n        </a>\n      </div>\n      <div class=\"meta\">\n        Mar 25\n      </div>\n    </div>\n    <div class=\"item media\">\n      <div class=\"media-left profile\">\n        <img class=\"profile\" src=\"assets/images/profiles/profile-6.png\" alt=\"\" />\n      </div>\n      <div class=\"media-body\">\n        <a href=\"#\">\n          <span class=\"sender display-block\">Carl Wilson</span>\n          <span class=\"message-title display-block\">RE: Design Resource</span>\n          <span class=\"excerpt display-block\">\"Hi, Phasellus cursus libero quis ante commodo lobortis duis ac ante...\"</span>\n        </a>\n      </div>\n      <div class=\"meta\">\n        Mar 25\n      </div>\n    </div>\n  </div>\n  <div class=\"dropdown-footer\">\n    <a href=\"user-messages.html\">View all messages</a>\n  </div>\n"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<span class=\"arrow\"></span>\n<div class=\"notification-items no-overflow\">\n  <div class=\"item media\">\n    <div class=\"media-left profile\">\n      <img src=\"assets/images/profiles/profile-8.png\" alt=\"\" />\n    </div>\n    <div class=\"media-body\">\n      <a href=\"#\">\n        <span class=\"name\">Albert E</span> <span class=\"action\">replied to your comment</span> on \"Maecenas tempus adipiscing consectetur adipiscing elit...\"\n      </a>\n    </div>\n    <div class=\"meta\">\n      2h ago\n    </div>\n  </div>\n  <div class=\"item media\">\n    <div class=\"media-left profile\">\n      <img src=\"assets/images/profiles/profile-7.png\" alt=\"\" />\n    </div>\n    <div class=\"media-body\">\n      <a href=\"#\">\n        <span class=\"name\">Julia A</span> <span class=\"action\">sent you a message</span> \"Hey Becky, thanks for doing this natoque penatibus et magnis dis parturient montes...\"\n      </a>\n    </div>\n    <div class=\"meta\">\n      1d ago\n    </div>\n  </div>\n  <div class=\"item media\">\n    <div class=\"media-left profile\">\n      <img src=\"assets/images/profiles/profile-2.png\" alt=\"\" />\n    </div>\n    <div class=\"media-body\">\n      <a href=\"#\">\n        <span class=\"name\">Rachel W</span> <span class=\"action\">shared a file with you</span> \"UX mocks for Nike\"\n      </a>\n    </div>\n    <div class=\"meta\">\n      3d ago\n    </div>\n  </div>\n</div>\n<div class=\"dropdown-footer\">\n  <a href=\"#\">View all notifications</a>\n</div>\n"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper view\">\n  <div class=\"container-fluid\">\n    <h2 class=\"view-title\">Dashboard</h2>\n\n\n\n      <app-module [title]=\"'payment'\" [wrapperClass]=\"'col-lg-4 col-md-6 col-sm-12 col-xs-12'\" >\n        <form name=\"payment\" (ngSubmit)=\"processPayment()\" *ngIf=\"showForm\">\n\n          <div id=\"error-message\"></div>\n\n\n            <label class=\"control-label\" for=\"amount\">Amount (X.XX)</label>\n            <input class=\"form-control\" type=\"number\" name=\"amount\" id=\"amount\" [(ngModel)]=\"amount\"/>\n\n\n            <label class=\"control-label\" for=\"card-number\">Credit Card Number (XXXX XXXX XXXX XXXX)</label>\n            <input class=\"form-control\" type=\"text\" name=\"cardNumber\" id=\"card-number\" [(ngModel)]=\"creditCardNumber\"/>\n\n\n            <label class=\"control-label\" for=\"expiration-date\">Expiration Date (MM/YY)</label>\n            <input class=\"form-control\" type=\"text\" id=\"expiration-date\" name=\"expirationDate\" [(ngModel)]=\"expirationDate\"/>\n          <br>\n          <button class=\"btn btn-success pull-right\" type=\"submit\">Pay Now</button>\n        </form>\n\n        <div class=\"module-footer\">\n          <ul class=\"utilities list-inline\">\n            <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Copy\"><i class=\"fa fa-files-o\"></i></a></li>\n            <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Edit\"><i class=\"fa fa-pencil\"></i></a></li>\n            <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Favourite\"><i class=\"fa fa-star\"></i></a></li>\n            <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Archive\"><i class=\"fa fa-archive\"></i></a></li>\n            <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Delete\"><i class=\"fa fa-trash\"></i></a></li>\n          </ul>\n        </div>\n      </app-module>\n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<span class=\"arrow\"></span>\n<h4 class=\"title\">Settings &amp; Tools</h4>\n<ul class=\"more-list\">\n  <li><a role=\"menuitem\" href=\"user-settings.html\"><span class=\"pe-icon pe-7s-config icon\"></span><br>Settings</a></li>\n  <li><a role=\"menuitem\" href=\"user-billing.html\"><span class=\"pe-icon pe-7s-wallet icon\"></span><br>Billing</a></li>\n  <li><a role=\"menuitem\" href=\"user-drive.html\"><span class=\"pe-icon pe-7s-pendrive icon\"></span><br>Drive</a></li>\n  <li><a role=\"menuitem\" href=\"user-messages.html\"><span class=\"pe-icon pe-7s-chat icon\"></span><br>Messages</a></li>\n  <li><a role=\"menuitem\" href=\"user-reminders.html\"><span class=\"pe-icon pe-7s-clock icon\"></span><br>Reminders</a></li>\n\n  <li><a role=\"menuitem\" href=\"help.html\"><span class=\"pe-icon pe-7s-help2 icon\"></span><br>Help</a></li>\n</ul>\n"

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<span>\n\t<div class=\"loader-wrapper loader-wrapper-1\" *ngIf=\"variant == 1\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"spinner-container container1\">\n\t\t\t\t<div class=\"circle1\"></div>\n\t\t\t\t<div class=\"circle2\"></div>\n\t\t\t\t<div class=\"circle3\"></div>\n\t\t\t\t<div class=\"circle4\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"spinner-container container2\">\n\t\t\t\t<div class=\"circle1\"></div>\n\t\t\t\t<div class=\"circle2\"></div>\n\t\t\t\t<div class=\"circle3\"></div>\n\t\t\t\t<div class=\"circle4\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"spinner-container container3\">\n\t\t\t\t<div class=\"circle1\"></div>\n\t\t\t\t<div class=\"circle2\"></div>\n\t\t\t\t<div class=\"circle3\"></div>\n\t\t\t\t<div class=\"circle4\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-2\" *ngIf=\"variant == 2\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"dot1\"></div>\n\t\t\t<div class=\"dot2\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-3\" *ngIf=\"variant == 3\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"bounce1\"></div>\n\t\t\t<div class=\"bounce2\"></div>\n\t\t\t<div class=\"bounce3\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-4\" *ngIf=\"variant == 4\">\n\t\t<div class=\"spinner\"></div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-5\"  *ngIf=\"variant == 5\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"rect1\"></div>\n\t\t\t<div class=\"rect2\"></div>\n\t\t\t<div class=\"rect3\"></div>\n\t\t\t<div class=\"rect4\"></div>\n\t\t\t<div class=\"rect5\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-6\"  *ngIf=\"variant == 6\">\n\t\t<div class=\"spinner\"></div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-7\"  *ngIf=\"variant == 7\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"double-bounce1\"></div>\n\t\t\t<div class=\"double-bounce2\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-8\"  *ngIf=\"variant == 8\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"cube1\"></div>\n\t\t\t<div class=\"cube2\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-default\" *ngIf=\"variant == 9\">\n\t\t<div class=\"loader-default-inner\">\n\t\t\t<div class=\"img-container\">\n\t\t\t\t<img src=\"assets/images/loaders/ajax-loader-1.gif\" alt=\"\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-default\" *ngIf=\"variant == 10\">\n\t\t<div class=\"loader-default-inner\">\n\t\t\t<div class=\"img-container\">\n\t\t\t\t<img src=\"assets/images/loaders/ajax-loader-2.gif\" alt=\"\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-default\" *ngIf=\"variant == 11\">\n\t\t<div class=\"loader-default-inner\">\n\t\t\t<div class=\"img-container\">\n\t\t\t\t<img src=\"assets/images/loaders/ajax-loader-3.gif\" alt=\"\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-default\" *ngIf=\"variant == 12\">\n\t\t<div class=\"loader-default-inner\">\n\t\t\t<div class=\"img-container\">\n\t\t\t\t<img src=\"assets/images/loaders/ajax-loader-4.gif\" alt=\"\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</span>\n"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"module-wrapper {{ wrapperClass }}\" #moduleElement>\n  <section class=\"module {{ moduleClass }}\" [class.collapsed]=\"{ 'collapsed':collapsed }\">\n    <div class=\"module-inner\">\n      <div class=\"module-heading\" *ngIf=\"title || meta\">\n        <h3 class=\"module-title\">\n          {{ title }}\n        </h3><div class=\"meta\" *ngIf=\"meta\">\n        {{ meta }}\n      </div>\n        <ul class=\"actions list-inline\" *ngIf=\"controls || showMore\">\n          <li class=\"more-link\" *ngIf=\"showMore\">\n            <span ngTransclude=\"more\"></span>\n          </li>\n          <li>\n            <a class=\"collapse-module\" (click)=\"collapseModule($event)\">\n              <span class=\"icon {{collapsed? 'arrow_carrot-up' : 'arrow_carrot-down'}} \" aria-hidden=\"true\"></span>\n            </a>\n          </li>\n          <li>\n            <a class=\"close-module\" (click)=\"closeModule($event)\">\n              <span class=\"icon icon_close\" aria-hidden=\"true\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"module-content\" [ngbCollapse]=\"collapsed\">\n        <div class=\"module-content-inner {{ contentClass }}\">\n          <ng-content class=\"grid\"  #contentItem>\n\n          </ng-content>\n        </div>\n      </div>\n      <div class=\"module-footer\" *ngIf=\"showFooter\">\n        <ng-content select=\"module-footer\">\n\n        </ng-content>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-nav-wrapper\" >\n  <nav id=\"main-nav\" class=\"main-nav\">\n    <ul class=\"metismenu\" id=\"menu\">\n\n      <li  class=\"nav-dashboards\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a [routerLink]=\"['dashboard']\" >\n          <span aria-hidden=\"true\" class=\"icon icon_house_alt\"></span>\n          <span class=\"nav-label\">Dashboard</span>\n          <span class=\"badge badge-primary\">1</span>\n        </a>\n      </li>\n\n      <li  class=\"nav-widgets \" routerLinkActive=\"active\">\n        <a [routerLink]=\"['widgets']\" >\n          <span aria-hidden=\"true\" class=\"icon icon_drawer_alt\"></span>\n          <span class=\"nav-label\">Widgets</span>\n          <span class=\"badge badge-info\">12</span>\n        </a>\n      </li>\n\n      <li  class=\"nav-payment \" routerLinkActive=\"active\">\n        <a [routerLink]=\"['payment']\" >\n          <span aria-hidden=\"true\" class=\"icon icon_balance\"></span>\n          <span class=\"nav-label\">Payment</span>\n          <span class=\"badge badge-circle\">0</span>\n        </a>\n      </li>\n\n      <li  class=\" \">\n        <a href=\"#\">\n          <span aria-hidden=\"true\" class=\"icon icon_table\"></span>\n          <span class=\"nav-label\">Tables</span>\n          <span class=\"fa arrow\"></span>\n        </a>\n        <ul class=\"sub-menu\">\n          <li  class=\" \" routerLinkActive=\"active\">\n            <a [routerLink]=\"['tables']\">\n              <span class=\"nav-label\">Basic</span>\n            </a>\n          </li>\n          <li  class=\" \">\n            <a href=\"#\">\n              <span class=\"nav-label\">Datatables</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n\n      <li  class=\"nav-forms\" >\n        <a href=\"#\">\n          <span aria-hidden=\"true\" class=\"icon icon_pencil-edit\"></span>\n          <span class=\"nav-label\">Forms</span>\n          <span class=\"fa arrow\"></span>\n        </a>\n        <ul class=\"sub-menu\">\n          <li  class=\" \" >\n            <a >\n              <span class=\"nav-label\">Basic</span>\n            </a>\n          </li>\n          <li  class=\" \">\n            <a href=\"#\">\n              <span class=\"nav-label\">Validation</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n\n      <li role=\"presentation\" class=\"divider \">\n      </li>\n      <li  class=\" \">\n        <a href=\"help.html\">\n          <span aria-hidden=\"true\" class=\"icon icon_lifesaver\"></span>\n          <span class=\"nav-label\">Help</span>\n          <span class=\"label label-new\">NEW</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = "<div class=\"side-panel-inner\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\"><span aria-hidden=\"true\">&times;</span></button>\n  <h4 class=\"title text-center\"><i class=\"fa fa-signal\"></i>Activities</h4>\n  <div class=\"items-wrapper\">\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <button class=\"icon-container btn btn-warning btn-circle\">\n          <i class=\"icon fa fa-flag\"></i>\n        </button>\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <strong>We have increased your storage to 10GB for Free!</strong>\n        </div>\n        <div class=\"excerpt\">\n          System notification\n        </div>\n        <div class=\"time-stamp\">5 days ago</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <img class=\"user-profile\" src=\"assets/images/profiles/profile-20.png\" alt=\"\" />\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"member.html\">David Thomson</a> followed you.\n        </div>\n        <div class=\"excerpt\">\n          <div class=\"role\">Full-Stack Developer</div>\n          <div class=\"folowers\"><span>12 Projects</span> | <span class=\"folowers\">43 Followers</span></div>\n        </div>\n        <div class=\"time-stamp\">3 mins ago</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <button class=\"icon-container btn btn-danger btn-circle\">\n          <i class=\"icon fa fa-heart\"></i>\n        </button>\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"#\">Julie Wu</a> favourited your post.\n        </div>\n        <div class=\"excerpt\">\n          <div class=\"quote-text\"><em>\"Love your new design! Keep up the great work...\"</em></div>\n        </div>\n        <div class=\"time-stamp\">1 week ago</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <img class=\"user-profile\" src=\"assets/images/profiles/profile-15.png\" alt=\"\" />\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"#\">Julie Wu</a> followed you.\n        </div>\n        <div class=\"excerpt\">\n          <div class=\"role\">Product Designer</div>\n          <div class=\"folowers\"><span>3 Projects</span> | <span class=\"folowers\">8 Followers</span></div>\n        </div>\n        <div class=\"time-stamp\">2 weeks ago</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <button class=\"icon-container btn btn-info btn-circle\">\n          <i class=\"icon fa fa-at\"></i>\n        </button>\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"#\">James Lee</a> mentioned you on <a href=\"#\">Project Lorem</a>.\n        </div>\n        <div class=\"excerpt\">\n          <div class=\"quote-text\"><em>\"Looks cool @Rebecca White\"</em></div>\n        </div>\n        <div class=\"time-stamp\">2 weeks ago</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <button class=\"icon-container btn btn-success btn-circle\">\n          <i class=\"icon fa fa-commenting\"></i>\n        </button>\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"#\">Chris Adams</a> commented on <a href=\"#\">Discussion Lorem</a>.\n        </div>\n        <div class=\"excerpt\">\n          <div class=\"quote-text\"><em>\"Can we improve the review process? At the moment consectetuer adipiscing elit...\"</em></div>\n        </div>\n        <div class=\"time-stamp\">Jan 10, 2016</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <button class=\"icon-container btn btn-pink btn-circle\">\n          <i class=\"icon fa fa-thumbs-up\"></i>\n        </button>\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"#\">Kat Schultz</a> liked your discussion <a href=\"#\">Discussion Lorem</a>.\n        </div>\n        <div class=\"time-stamp\">Jan 8, 2016</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-side-nav></app-side-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper view\">\n  <div class=\"container-fluid\">\n    <h2 class=\"view-title\">Widgets</h2>\n\n\n      <app-module [wrapperClass]=\"'col-lg-4 col-md-6 col-sm-12 col-xs-12'\" *ngFor=\"let n of [1,2,3,4,5,6,7,8,9,10,11,12]\" [title]=\"'Module ' + n\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lectus arcu. Morbi non vestibulum leo. Curabitur facilisis lectus lobortis massa dapibus semper. Sed elementum orci felis, ac maximus massa tincidunt a. In hac habitasse platea dictumst. Ut ligula nulla, tincidunt vitae metus quis, aliquet convallis purus. In tristique magna nec tellus luctus maximus. Aliquam suscipit ultricies dui. Sed rhoncus felis massa, eu faucibus ligula maximus at.\n        <app-loader [variant]=\"n\"></app-loader>\n      </app-module>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(238);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    locale: 'en',
    supportedLanguages: [
        { id: 1, name: 'English', code: 'en' },
        { id: 2, name: 'Español', code: 'es' },
        { id: 3, name: 'French', code: 'fr' }
    ]
};
//# sourceMappingURL=environment.js.map

/***/ })

},[677]);
//# sourceMappingURL=main.bundle.js.map
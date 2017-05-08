webpackJsonp([1,5],{

/***/ 173:
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
        template: __webpack_require__(421),
        styles: [__webpack_require__(379)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__responsive_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(90);
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
        template: __webpack_require__(422),
        styles: [__webpack_require__(380)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 175:
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
        template: __webpack_require__(423),
        styles: [__webpack_require__(381)]
    }),
    __metadata("design:paramtypes", [])
], MessagesComponent);

//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__responsive_service__ = __webpack_require__(41);
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
        template: __webpack_require__(424),
        styles: [__webpack_require__(382)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */]) === "function" && _a || Object])
], NotificationPopupComponent);

var _a;
//# sourceMappingURL=notification-popup.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_payment_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(211);
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
        this.cvvNumber = 123;
        this.showForm = true;
        this.loaded = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.toastr.success('You are awesome!', 'Success!');
    };
    PaymentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.processPaypal();
        this.processPaymentWithHostedFields();
        setTimeout(function () { _this.loaded = true; }, 3000);
    };
    PaymentComponent.prototype.processPayment = function () {
        var _this = this;
        console.log(this.cvvNumber);
        var data = { amount: this.amount, creditCardNumber: this.creditCardNumber, expirationDate: this.expirationDate, cvv: this.cvvNumber };
        this.paymentService.processCard(data).subscribe(function (response) {
            console.log(response);
            _this.toastr.success('Card: ' + JSON.stringify(response.creditCards[0]), 'Payment Successful');
        }, function (e) { _this.toastr.error(e.message); console.log(e); });
    };
    PaymentComponent.prototype.processPaypal = function () {
        var _this = this;
        this.paymentService.processPaypal(this.el, this.amount).subscribe(function (response) {
            console.log(response);
            _this.toastr.success('PayPal: ' + JSON.stringify(response), 'PayPal Successful');
        }, function (e) { _this.toastr.error(e.message); console.log(e); });
    };
    PaymentComponent.prototype.processPaymentWithHostedFields = function () {
        var _this = this;
        this.paymentService.processPaymentWithHostedFields(this.cardForm, this.submitButtonForm).subscribe(function (response) {
            console.log(response);
            _this.toastr.success('Card: ' + JSON.stringify(response), 'Payment Successful');
        }, function (e) { _this.toastr.error(e.message); console.log(e); });
    };
    return PaymentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('payPalButton'),
    __metadata("design:type", Object)
], PaymentComponent.prototype, "el", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cardForm'),
    __metadata("design:type", Object)
], PaymentComponent.prototype, "cardForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('submitButtonForm'),
    __metadata("design:type", Object)
], PaymentComponent.prototype, "submitButtonForm", void 0);
PaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__(425),
        styles: [__webpack_require__(377)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_payment_service__["a" /* PaymentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], PaymentComponent);

var _a, _b, _c;
//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ 178:
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
        template: __webpack_require__(426),
        styles: [__webpack_require__(383)]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 179:
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
        template: __webpack_require__(427),
        styles: [__webpack_require__(384)]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ 180:
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
        template: __webpack_require__(428),
        styles: [__webpack_require__(385)],
    }),
    __metadata("design:paramtypes", [])
], ModuleComponent);

//# sourceMappingURL=module.component.js.map

/***/ }),

/***/ 181:
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
        template: __webpack_require__(429),
        styles: [__webpack_require__(386)]
    }),
    __metadata("design:paramtypes", [])
], SideNavComponent);

//# sourceMappingURL=side-nav.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__responsive_service__ = __webpack_require__(41);
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
        template: __webpack_require__(430),
        styles: [__webpack_require__(387)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */]) === "function" && _a || Object])
], SidePanelComponent);

var _a;
//# sourceMappingURL=side-panel.component.js.map

/***/ }),

/***/ 183:
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
        template: __webpack_require__(431),
        styles: [__webpack_require__(388)]
    }),
    __metadata("design:paramtypes", [])
], SiteComponent);

//# sourceMappingURL=site.component.js.map

/***/ }),

/***/ 184:
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
        template: __webpack_require__(432),
        styles: [__webpack_require__(389)]
    }),
    __metadata("design:paramtypes", [])
], TourComponent);

//# sourceMappingURL=tour.component.js.map

/***/ }),

/***/ 185:
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
        template: __webpack_require__(433),
        styles: [__webpack_require__(390)]
    }),
    __metadata("design:paramtypes", [])
], WidgetsComponent);

//# sourceMappingURL=widgets.component.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_braintree_web_client__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_braintree_web_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_braintree_web_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_braintree_web_hosted_fields__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_braintree_web_hosted_fields___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_braintree_web_hosted_fields__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_braintree_web_paypal_checkout__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_braintree_web_paypal_checkout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_braintree_web_paypal_checkout__);
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
        this.loadScript();
    }
    PaymentService.prototype.processCard = function (cardDetails) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.getToken().subscribe(function (response) { return _this.brainTreeCreate(response, observer, cardDetails); }, function (error2) { return observer.error(error2); });
        });
    };
    PaymentService.prototype.processPaypal = function (el, amount) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.getToken().subscribe(function (response) {
                __WEBPACK_IMPORTED_MODULE_3_braintree_web_client__["create"]({
                    authorization: response.client_token
                }, function (err, instance) {
                    if (err)
                        observer.error(err);
                    else {
                        __WEBPACK_IMPORTED_MODULE_5_braintree_web_paypal_checkout__["create"]({ client: instance }, function (err, paypalInstance) {
                            if (err)
                                observer.error(err);
                            else {
                                _this.paypalCreateButton(paypalInstance, instance, amount, el, observer);
                            }
                        });
                    }
                });
            }, function (error2) { return observer.error(error2); });
        });
    };
    PaymentService.prototype.processPaymentWithHostedFields = function (form, submitButtonForm) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.getToken().subscribe(function (response) {
                __WEBPACK_IMPORTED_MODULE_3_braintree_web_client__["create"]({ authorization: response.client_token }, function (err, instance) {
                    if (err)
                        observer.error(err);
                    else {
                        __WEBPACK_IMPORTED_MODULE_4_braintree_web_hosted_fields__["create"]({
                            client: instance,
                            style: {
                                'input': {
                                    'color': '#282c37',
                                    'font-size': '16px',
                                    'transition': 'color 0.1s',
                                    'line-height': '3'
                                },
                                // Style the text of an invalid input
                                'input.invalid': {
                                    'color': '#E53A40'
                                },
                                // placeholder styles need to be individually adjusted
                                '::-webkit-input-placeholder': {
                                    'color': 'rgba(0,0,0,0.6)'
                                },
                                ':-moz-placeholder': {
                                    'color': 'rgba(0,0,0,0.6)'
                                },
                                '::-moz-placeholder': {
                                    'color': 'rgba(0,0,0,0.6)'
                                },
                                ':-ms-input-placeholder': {
                                    'color': 'rgba(0,0,0,0.6)'
                                }
                            },
                            fields: {
                                number: {
                                    selector: '#card-number',
                                    placeholder: '1111 1111 1111 1111'
                                },
                                cvv: {
                                    selector: '#cvv',
                                    placeholder: '123'
                                },
                                expirationDate: {
                                    selector: '#expiration-date',
                                    placeholder: '10 / 2019'
                                }
                            }
                        }, function (err, hostedFieldsInstance) {
                            if (err)
                                observer.error(err);
                            else {
                                hostedFieldsInstance.on('validityChange', function (event) {
                                    var formvalid = Object.keys(event.fields).every(function (key) {
                                        return event.fields[key].isValid;
                                    });
                                    if (formvalid)
                                        jQuery('#button-pay').addClass('show-button');
                                    else
                                        jQuery('#button-pay').removeClass('show-button');
                                });
                                hostedFieldsInstance.on('empty', function (event) {
                                    jQuery('header').removeClass('header-slide');
                                    jQuery('#card-image').removeClass();
                                    jQuery(form.nativeElement).removeClass();
                                });
                                hostedFieldsInstance.on('cardTypeChange', function (event) {
                                    // Change card bg depending on card type
                                    if (event.cards.length === 1) {
                                        jQuery(form.nativeElement).removeClass().addClass(event.cards[0].type);
                                        jQuery('#card-image').removeClass().addClass(event.cards[0].type);
                                        jQuery('header').addClass('header-slide');
                                        // Change the CVV length for AmericanExpress cards
                                        if (event.cards[0].code.size === 4) {
                                            hostedFieldsInstance.setAttribute({
                                                field: 'cvv',
                                                attribute: 'placeholder',
                                                value: '1234'
                                            });
                                        }
                                    }
                                    else {
                                        hostedFieldsInstance.setAttribute({
                                            field: 'cvv',
                                            attribute: 'placeholder',
                                            value: '123'
                                        });
                                    }
                                });
                                submitButtonForm.nativeElement.addEventListener('click', function (event) {
                                    event.preventDefault();
                                    hostedFieldsInstance.tokenize(function (err, payload) {
                                        if (err)
                                            observer.error(err);
                                        else
                                            observer.next(payload);
                                    });
                                }, false);
                            }
                        });
                    }
                });
            }, function (error2) { return observer.error(error2); });
        });
    };
    PaymentService.prototype.loadScript = function () {
        var node = document.createElement('script');
        node.src = 'https://www.paypalobjects.com/api/checkout.js';
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        node.setAttribute('data-version-4', '');
        node.setAttribute('data-log-level', 'error');
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    PaymentService.prototype.getToken = function () {
        return this.http.post('/api/v1/token', this.options).map(function (response) {
            return response.json();
        }, function (error2) {
            return error2;
        });
    };
    PaymentService.prototype.brainTreeCreate = function (response, observer, cardDetails) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_braintree_web_client__["create"]({
            authorization: response.client_token
        }, function (err, instance) {
            if (err)
                observer.error(err);
            else
                _this.processCardPayment(instance, cardDetails)
                    .subscribe(function (r) { return observer.next(r); }, function (e) { return observer.error(e); });
        });
    };
    PaymentService.prototype.processCardPayment = function (instance, cardDetails) {
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
                if (err)
                    observer.error(err);
                observer.next(resp);
            });
        });
    };
    PaymentService.prototype.paypalCreateButton = function (paypalInstance, instance, amount, el, observer) {
        // console.log(paypalCheckout.render);
        // console.log(paypalLib.render);
        paypal.Button.render({
            env: 'sandbox',
            payment: function () {
                return paypalInstance.createPayment({
                    flow: 'checkout',
                    amount: amount,
                    currency: 'USD',
                    locale: 'en_US',
                    enableShippingAddress: true,
                    shippingAddressEditable: false,
                    shippingAddressOverride: {
                        recipientName: 'Scruff McGruff',
                        line1: '1234 Main St.',
                        line2: 'Unit 1',
                        city: 'Chicago',
                        countryCode: 'US',
                        postalCode: '60652',
                        state: 'IL',
                        phone: '123.456.7890'
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return paypalInstance.tokenizePayment(data)
                    .then(function (payload) {
                    observer.next(payload);
                });
            },
            onCancel: function (data) {
                observer.next(data);
            },
            onError: function (err) {
                observer.error(err);
            }
        }, el.nativeElement);
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

/***/ 256:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 256;


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_i18n_provider__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(90);





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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__responsive_service__ = __webpack_require__(41);
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
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.resService.adaptToScreenSize();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(420),
        styles: [__webpack_require__(378)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__responsive_service__["a" /* ResponsiveService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_masonry__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_side_nav_side_nav_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_site_site_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widgets_widgets_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__responsive_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_shared_loader_loader_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_shared_module_module_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_notification_popup_notification_popup_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_messages_messages_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_settings_settings_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_side_panel_side_panel_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_tour_tour_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_payment_payment_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_payment_service__ = __webpack_require__(186);
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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__(173);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_widgets_component__ = __webpack_require__(185);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__widgets_widgets_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment_component__ = __webpack_require__(177);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__payment_payment_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__site_site_component__ = __webpack_require__(183);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(174);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__side_nav_side_nav_component__ = __webpack_require__(181);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tour_tour_component__ = __webpack_require__(184);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__side_panel_side_panel_component__ = __webpack_require__(182);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notification_popup_notification_popup_component__ = __webpack_require__(176);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_settings_component__ = __webpack_require__(178);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__messages_messages_component__ = __webpack_require__(175);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_module_module_component__ = __webpack_require__(180);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_loader_loader_component__ = __webpack_require__(179);
/* unused harmony namespace reexport */
/**
 * Created by wajidkhilji on 12/04/2017.
 */













//# sourceMappingURL=index.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__(90);
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__(279);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });

var appRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["a" /* DashboardComponent */] },
    { path: 'widgets', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["b" /* WidgetsComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["c" /* PaymentComponent */] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/*--------------------\nShared Variables\n--------------------*/\n/*--------------------\nGeneral\n--------------------*/\nhtml,\nbody {\n  font-size: 100%;\n  height: 100%;\n  color: #282c37;\n  font-family: sans-serif;\n  padding: 0;\n  margin: 0; }\n\nheader {\n  z-index: 2;\n  -webkit-transform: translate(0, 5.5em);\n          transform: translate(0, 5.5em);\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease; }\n  header.header-slide {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\nh1 {\n  font-weight: 100;\n  font-size: 1.4em;\n  display: block; }\n\n.form-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #EEE;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1em solid #fff;\n  box-sizing: border-box;\n  position: relative; }\n  @media (max-width: 476px) {\n    .form-container {\n      border: none; } }\n\n.cardinfo-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.bg-illustration {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 0; }\n  .bg-illustration svg {\n    width: 100%; }\n\n.card-shape, #my-sample-form.visa, #my-sample-form.master-card, #my-sample-form.maestro, #my-sample-form.american-express, #my-sample-form.discover, #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\n  border-radius: 6px;\n  padding: 2em 2em 1em; }\n  @media (max-width: 476px) {\n    .card-shape, #my-sample-form.visa, #my-sample-form.master-card, #my-sample-form.maestro, #my-sample-form.american-express, #my-sample-form.discover, #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\n      padding: 2em 1.5em 1em; } }\n\n#my-sample-form {\n  background-color: #FFF;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);\n  padding: 8em 3em 2em;\n  width: 20em;\n  margin-bottom: 2em;\n  -webkit-transition: all 600ms cubic-bezier(0.2, 1.3, 0.7, 1);\n  transition: all 600ms cubic-bezier(0.2, 1.3, 0.7, 1);\n  -webkit-animation: cardIntro 500ms cubic-bezier(0.2, 1.3, 0.7, 1);\n          animation: cardIntro 500ms cubic-bezier(0.2, 1.3, 0.7, 1);\n  z-index: 1; }\n  #my-sample-form:hover {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06); }\n  @media (max-width: 476px) {\n    #my-sample-form {\n      box-sizing: border-box;\n      padding: 7em 2em 2em;\n      width: 100%; } }\n  #my-sample-form.visa {\n    color: #fff;\n    background-color: #0D4AA2; }\n  #my-sample-form.master-card {\n    color: #fff;\n    background-color: #363636;\n    background: -webkit-linear-gradient(335deg, #d82332, #d82332 50%, #f1ad3d 50%, #f1ad3d);\n    background: linear-gradient(115deg, #d82332, #d82332 50%, #f1ad3d 50%, #f1ad3d); }\n  #my-sample-form.maestro {\n    color: #fff;\n    background-color: #363636;\n    background: -webkit-linear-gradient(335deg, #009ddd, #009ddd 50%, #ed1c2e 50%, #ed1c2e);\n    background: linear-gradient(115deg, #009ddd, #009ddd 50%, #ed1c2e 50%, #ed1c2e); }\n  #my-sample-form.american-express {\n    color: #fff;\n    background-color: #007CC3; }\n  #my-sample-form.discover {\n    color: #fff;\n    background-color: #ff6000;\n    background: -webkit-linear-gradient(#d14310, #f7961e);\n    background: linear-gradient(#d14310, #f7961e); }\n  #my-sample-form.unionpay, #my-sample-form.jcb, #my-sample-form.diners-club {\n    color: #fff;\n    background-color: #363636; }\n\n.cardinfo-label {\n  display: block;\n  font-size: 11px;\n  margin-bottom: 0.5em;\n  text-transform: uppercase; }\n\n.cardinfo-exp-date {\n  margin-right: 1em;\n  width: 100%; }\n\n.cardinfo-cvv {\n  width: 100%; }\n\n#button-pay {\n  cursor: pointer;\n  width: 16em;\n  font-size: 15px;\n  border: 0;\n  padding: 1.2em 1em;\n  color: #fff;\n  background: #282c37;\n  border-radius: 4px;\n  z-index: 0;\n  -webkit-transform: translateY(-100px);\n          transform: translateY(-100px);\n  -webkit-transition: all 500ms cubic-bezier(0.2, 1.3, 0.7, 1);\n  transition: all 500ms cubic-bezier(0.2, 1.3, 0.7, 1);\n  opacity: 0;\n  -webkit-appearance: none; }\n  #button-pay:hover {\n    background: #535b72; }\n  #button-pay:active {\n    -webkit-animation: cardIntro 200ms cubic-bezier(0.2, 1.3, 0.7, 1);\n            animation: cardIntro 200ms cubic-bezier(0.2, 1.3, 0.7, 1); }\n  #button-pay.show-button {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; }\n\n.cardinfo-card-number {\n  position: relative; }\n\n#card-image {\n  position: absolute;\n  top: 2em;\n  right: 1em;\n  width: 44px;\n  height: 28px;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/346994/card_sprite.png);\n  background-size: 86px 458px;\n  border-radius: 4px;\n  background-position: -100px 0;\n  background-repeat: no-repeat;\n  margin-bottom: 1em; }\n  #card-image.visa {\n    background-position: 0 -398px; }\n  #card-image.master-card {\n    background-position: 0 -281px; }\n  #card-image.american-express {\n    background-position: 0 -370px; }\n  #card-image.discover {\n    background-position: 0 -163px; }\n  #card-image.maestro {\n    background-position: 0 -251px; }\n  #card-image.jcb {\n    background-position: 0 -221px; }\n  #card-image.diners-club {\n    background-position: 0 -133px; }\n\n/*--------------------\nInputs\n--------------------*/\n.input-wrapper {\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.86);\n  height: 2.75em;\n  border: 1px solid #eee;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);\n  padding: 5px 10px;\n  margin-bottom: 1em; }\n\n.cardinfo-card-number,\n.cardinfo-exp-date,\n.cardinfo-cvv {\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s; }\n\n.braintree-hosted-fields-focused {\n  border-color: #5db6e8; }\n\n.braintree-hosted-fields-invalid {\n  border-color: #E53A40;\n  -webkit-animation: shake 500ms cubic-bezier(0.2, 1.3, 0.7, 1) both;\n          animation: shake 500ms cubic-bezier(0.2, 1.3, 0.7, 1) both;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n/*--------------------\nAnimations\n--------------------*/\n@-webkit-keyframes cardIntro {\n  0% {\n    -webkit-transform: scale(0.8) translate(0, 0);\n            transform: scale(0.8) translate(0, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1) translate(0, 0);\n            transform: scale(1) translate(0, 0);\n    opacity: 1; } }\n@keyframes cardIntro {\n  0% {\n    -webkit-transform: scale(0.8) translate(0, 0);\n            transform: scale(0.8) translate(0, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1) translate(0, 0);\n            transform: scale(1) translate(0, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0); }\n  20%,\n  80% {\n    -webkit-transform: translate3d(1px, 0, 0);\n            transform: translate3d(1px, 0, 0); }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-3px, 0, 0);\n            transform: translate3d(-3px, 0, 0); }\n  40%,\n  60% {\n    -webkit-transform: translate3d(3px, 0, 0);\n            transform: translate3d(3px, 0, 0); } }\n\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0); }\n  20%,\n  80% {\n    -webkit-transform: translate3d(1px, 0, 0);\n            transform: translate3d(1px, 0, 0); }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-3px, 0, 0);\n            transform: translate3d(-3px, 0, 0); }\n  40%,\n  60% {\n    -webkit-transform: translate3d(3px, 0, 0);\n            transform: translate3d(3px, 0, 0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 41:
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

/***/ 420:
/***/ (function(module, exports) {

module.exports = "<body class=\"theme-1 \"  [class.compact]=\"resService.compact\" [class.mobile]=\"resService.mobile\" [class.nav-toggled]=\"resService.navOpen\" >\n  <app-site></app-site>\n</body>\n"

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper view\">\n  <div class=\"container-fluid\">\n    <h2 class=\"view-title\">Dashboard</h2>\n\n    <app-module [wrapperClass]=\"'col-lg-4 col-md-6 col-sm-12 col-xs-12'\" *ngFor=\"let n of [1,2,3,4,5,6,7,8,9,10,11,12]\" [title]=\"'Module ' + n\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lectus arcu. Morbi non vestibulum leo. Curabitur facilisis lectus lobortis massa dapibus semper. Sed elementum orci felis, ac maximus massa tincidunt a. In hac habitasse platea dictumst. Ut ligula nulla, tincidunt vitae metus quis, aliquet convallis purus. In tristique magna nec tellus luctus maximus. Aliquam suscipit ultricies dui. Sed rhoncus felis massa, eu faucibus ligula maximus at.\n\n      <!--define footers like this-->\n      <div class=\"module-footer\">\n        <ul class=\"utilities list-inline\">\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Copy\"><i class=\"fa fa-files-o\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Edit\"><i class=\"fa fa-pencil\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Favourite\"><i class=\"fa fa-star\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Archive\"><i class=\"fa fa-archive\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Delete\"><i class=\"fa fa-trash\"></i></a></li>\n        </ul>\n      </div>\n    </app-module>\n\n    <div class=\"draggable-column col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n      <app-module [title]=\"'tst'\" [wrapperClass]=\"'module-draggable'\" >\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lectus arcu. Morbi non vestibulum leo. Curabitur facilisis lectus lobortis massa dapibus semper. Sed elementum orci felis, ac maximus massa tincidunt a. In hac habitasse platea dictumst. Ut ligula nulla, tincidunt vitae metus quis, aliquet convallis purus. In tristique magna nec tellus luctus maximus. Aliquam suscipit ultricies dui. Sed rhoncus felis massa, eu faucibus ligula maximus at.\n      </app-module>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports = "<!--TODO Tool tip does not work  -->\n<div class=\"header\">\n  <div class=\"branding float-left\">\n    <h1 class=\"logo text-center\">\n      <a href=\"index.html\">\n        <img class=\"logo-icon\" src=\"assets/images/logo-icon.svg\" alt=\"icon\" />\n        <span class=\"nav-label\">\n\t\t\t\t\t\t\t<span class=\"highlight\" i18n>App </span>Kit\n\t\t\t\t\t\t</span>\n      </a>\n    </h1>\n  </div>\n  <div class=\"topbar\">\n      <button class=\"main-nav-toggle\" type=\"button\" (click)=\"navOpenClick()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <i class=\"icon fa fa-caret-left\"></i>\n    </button>\n    <div class=\"search-container\">\n      <form id=\"main-search\" class=\"main-search\">\n        <i id=\"main-search-toggle\" class=\"fa fa-search icon\" (click)=\"searchClick()\"></i>\n        <div id=\"main-search-input-wrapper\" class=\"main-search-input-wrapper\" [hidden]=\"!showSearch\">\n          <input type=\"text\" id=\"main-search-input\" class=\"main-search-input form-control\" placeholder=\"Search...\" #inputSearch>\n\n          <span id=\"clear-search\" aria-hidden=\"true\" class=\"fs1 icon icon_close_alt2 clear-search\"></span>\n        </div>\n      </form>\n    </div>\n    <div class=\"navbar-tools\">\n      <div class=\"utilities-container\">\n        <div class=\"utilities\">\n\n\n          <div class=\"item item-more\" [class.open]=\"responsiveService.headerPopup == 'language'\">\n            <div class=\"dropdown-toggle\" id=\"dropdownMenu-language\" aria-expanded=\"true\" role=\"button\" (click)=\"toggleLanguagePopup()\">\n              <span class=\"sr-only\">Languages</span>\n              <span class=\"flag-icon flag-icon-{{selectedLanguage.code}}\" tooltip-placement=\"bottom\" uib-tooltip=\"Languages\"></span>\n              <i class=\"fa fa-caret-down\"></i>\n            </div>\n            <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu-language\">\n              <span class=\"arrow\"></span>\n              <h4 class=\"title\">Languages</h4>\n\n              <ul class=\"more-list\">\n\n                <li *ngFor=\"let language of supportedLanguages\" value=\"{{language.code}}\"  >\n                  <a role=\"menuitem\" (click)=\"languageChanged(language.code)\" >\n                    <span class=\"flag-icon flag-icon-{{language.code}}\"></span>\n                    <br>{{language.name}}\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"item item-tour hidden-xs tour-trigger\" tooltip-placement=\"bottom\" uib-tooltip=\"Guided Tour\" (click)=\"responsiveService.headerPopup = ''; tutorial = !tutorial\" ><span class=\"sr-only\">App Tour</span><span class=\"pe-icon pe-7s-info icon\"></span></div>\n          <app-tour [tutorial]=\"tutorial\" ></app-tour>\n          <div class=\"item item-side-panel\">\n            <i id=\"side-panel-toggle\" class=\"side-panel-toggle panel-hide icon fa fa-signal\" tooltip-placement=\"bottom\" uib-tooltip=\"Activities\" (click)=\"toggleSidePanel()\" ><span class=\"badge badge-circle badge-warning\">8</span></i>\n            <div id=\"side-panel\" class=\"side-panel\" [class.side-panel-open]=\"responsiveService.headerPopup == 'side-panel'\">\n              <app-side-panel></app-side-panel>\n            </div>\n          </div>\n\n          <div class=\"item item-notifications \"  [class.open]=\"responsiveService.headerPopup == 'notifications'\">\n            <div class=\"dropdown-toggle\" id=\"dropdownMenu-notifications\" aria-expanded=\"true\" role=\"button\" (click)=\"toggleNotificationPopup()\">\n              <span class=\"sr-only\">Notifications</span>\n              <span class=\"pe-icon pe-7s-bell icon\" tooltip-placement=\"bottom\" uib-tooltip=\"Notifiations\"></span><span class=\"badge badge-circle badge-danger\">3</span>\n            </div>\n            <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu-notifications\">\n              <app-notification-popup></app-notification-popup>\n            </div>\n          </div>\n\n          <div class=\"item item-messages dropdown \" [class.open]=\"responsiveService.headerPopup == 'messages'\">\n            <div class=\"dropdown-toggle\" id=\"dropdownMenu-messages\" aria-expanded=\"true\" role=\"button\" (click)=\"toggleMessagePopup()\">\n              <span class=\"sr-only\">Messages</span>\n              <span class=\"pe-icon pe-7s-mail icon\" tooltip-placement=\"bottom\" tooltip=\"Messages\"></span><span class=\"badge badge-circle badge-success\">5</span>\n            </div>\n            <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu-messages\">\n              <app-messages></app-messages>\n            </div>\n          </div>\n          <div class=\"item item-more\" [class.open]=\"responsiveService.headerPopup == 'settings'\">\n            <div class=\"dropdown-toggle\" id=\"dropdownMenu-more\" aria-expanded=\"true\" role=\"button\" (click)=\"toggleSettingsPopup()\">\n              <span class=\"sr-only\">More</span>\n              <span aria-hidden=\"true\" class=\"fs1 icon icon_grid-3x3\"  ngbTooltip=\"Settings &amp; Tools\"></span>\n            </div>\n            <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu-more\">\n              <app-settings></app-settings>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"user-container dropdown\" [class.open]=\"responsiveService.headerPopup == 'profile'\">\n        <div class=\"dropdown-toggle\" id=\"dropdownMenu-user\" aria-expanded=\"true\" role=\"button\" (click)=\"toggleProfilePopup()\">\n          <img src=\"assets/images/profiles/profile-3.png\" alt=\"\" />\n          <i class=\"fa fa-caret-down\"></i>\n        </div>\n        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu-user\" >\n          <li><span class=\"arrow\"></span><a role=\"menuitem\" href=\"user-profile.html\"><span class=\"pe-icon pe-7s-user icon\"></span>My Account</a></li>\n          <li><a role=\"menuitem\" href=\"pricing.html\"><span class=\"pe-icon pe-7s-paper-plane icon\"></span>Upgrade Plan</a></li>\n          <li><a role=\"menuitem\" href=\"login.html\"><span class=\"pe-icon pe-7s-power icon\"></span>Sign Out</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports = "\n  <span class=\"arrow\"></span>\n  <div class=\"message-items no-overflow\">\n    <div class=\"item media\">\n      <div class=\"media-left profile\">\n        <img class=\"profile\" src=\"assets/images/profiles/profile-7.png\" alt=\"\" />\n      </div>\n      <div class=\"media-body\">\n        <a href=\"#\">\n          <span class=\"sender display-block\">Julia Arnold</span>\n          <span class=\"message-title display-block\">Great News</span>\n          <span class=\"excerpt display-block\">\"Hey Becky, thanks for doing this natoque penatibus et magnis dis parturient montes...\"</span>\n        </a>\n      </div>\n      <div class=\"meta\">\n        Apr 6\n      </div>\n    </div>\n    <div class=\"item media\">\n      <div class=\"media-left profile\">\n        <img class=\"profile\" src=\"assets/images/profiles/profile-1.png\" alt=\"\" />\n      </div>\n      <div class=\"media-body\">\n        <a href=\"#\">\n          <span class=\"sender display-block\">Ken Davison</span>\n          <span class=\"message-title display-block\">RE: Help Needed</span>\n          <span class=\"excerpt display-block\">\"No problem. I can help with the luctus est eu ullamcorper laoreet...\"</span>\n        </a>\n      </div>\n      <div class=\"meta\">\n        Apr 2\n      </div>\n    </div>\n    <div class=\"item media\">\n      <div class=\"media-left profile\">\n        <img class=\"profile\" src=\"assets/images/profiles/profile-4.png\" alt=\"\" />\n      </div>\n      <div class=\"media-body\">\n        <a href=\"#\">\n          <span class=\"sender display-block\">Ryan Baker</span>\n          <span class=\"message-title display-block\">RE: UX resources for Nike</span>\n          <span class=\"excerpt display-block\">\"Hi Becky, can you send me the wireframes? I need the finalised version...\"</span>\n        </a>\n      </div>\n      <div class=\"meta\">\n        Mar 28\n      </div>\n    </div>\n    <div class=\"item media\">\n      <div class=\"media-left profile\">\n        <img class=\"profile\" src=\"assets/images/profiles/profile-5.png\" alt=\"\" />\n      </div>\n      <div class=\"media-body\">\n        <a href=\"#\">\n          <span class=\"sender display-block\">Sarah West</span>\n          <span class=\"message-title display-block\">Hello!</span>\n          <span class=\"excerpt display-block\">\"Hello there, lorem ipsum dolor sit amet, consectetur adipiscing elit duis luctus...\"</span>\n        </a>\n      </div>\n      <div class=\"meta\">\n        Mar 25\n      </div>\n    </div>\n    <div class=\"item media\">\n      <div class=\"media-left profile\">\n        <img class=\"profile\" src=\"assets/images/profiles/profile-6.png\" alt=\"\" />\n      </div>\n      <div class=\"media-body\">\n        <a href=\"#\">\n          <span class=\"sender display-block\">Carl Wilson</span>\n          <span class=\"message-title display-block\">RE: Design Resource</span>\n          <span class=\"excerpt display-block\">\"Hi, Phasellus cursus libero quis ante commodo lobortis duis ac ante...\"</span>\n        </a>\n      </div>\n      <div class=\"meta\">\n        Mar 25\n      </div>\n    </div>\n  </div>\n  <div class=\"dropdown-footer\">\n    <a href=\"user-messages.html\">View all messages</a>\n  </div>\n"

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = "<span class=\"arrow\"></span>\n<div class=\"notification-items no-overflow\">\n  <div class=\"item media\">\n    <div class=\"media-left profile\">\n      <img src=\"assets/images/profiles/profile-8.png\" alt=\"\" />\n    </div>\n    <div class=\"media-body\">\n      <a href=\"#\">\n        <span class=\"name\">Albert E</span> <span class=\"action\">replied to your comment</span> on \"Maecenas tempus adipiscing consectetur adipiscing elit...\"\n      </a>\n    </div>\n    <div class=\"meta\">\n      2h ago\n    </div>\n  </div>\n  <div class=\"item media\">\n    <div class=\"media-left profile\">\n      <img src=\"assets/images/profiles/profile-7.png\" alt=\"\" />\n    </div>\n    <div class=\"media-body\">\n      <a href=\"#\">\n        <span class=\"name\">Julia A</span> <span class=\"action\">sent you a message</span> \"Hey Becky, thanks for doing this natoque penatibus et magnis dis parturient montes...\"\n      </a>\n    </div>\n    <div class=\"meta\">\n      1d ago\n    </div>\n  </div>\n  <div class=\"item media\">\n    <div class=\"media-left profile\">\n      <img src=\"assets/images/profiles/profile-2.png\" alt=\"\" />\n    </div>\n    <div class=\"media-body\">\n      <a href=\"#\">\n        <span class=\"name\">Rachel W</span> <span class=\"action\">shared a file with you</span> \"UX mocks for Nike\"\n      </a>\n    </div>\n    <div class=\"meta\">\n      3d ago\n    </div>\n  </div>\n</div>\n<div class=\"dropdown-footer\">\n  <a href=\"#\">View all notifications</a>\n</div>\n"

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = "<!-- Add animations on Braintree Hosted Fields events -->\n\n<!-- Card numbers\n4111 1111 1111 1111: Visa\n5555 5555 5555 4444: MasterCard\n3714 496353 98431: American Express\n-->\n\n<!--[if IE 9]>\n<style>\n\n  header {\n    margin-top: 1em;\n    text-align: center;\n  }\n\n  #my-sample-form {\n    margin: 0 auto;\n    padding-top: 2em;\n  }\n\n  .bg-illustration {\n    z-index: -1;\n  }\n\n  #button-pay {\n    margin: 1em auto 0;\n    display: block;\n  }\n\n  .cardinfo-exp-date, .cardinfo-cvv {\n    width: 45%;\n    float: left;\n  }\n\n  .cardinfo-wrapper {\n    overflow: hidden;\n  }\n\n</style>\n<![endif]-->\n\n<div class=\"content-wrapper view\">\n  <div class=\"container-fluid\">\n    <h2 class=\"view-title\">Payments</h2>\n\n\n\n      <app-module [title]=\"'Credit Cards'\" [wrapperClass]=\"'col-lg-4 col-md-6 col-sm-12 col-xs-12'\" >\n        <app-loader [variant]=\"4\" [hidden]=\"loaded\"></app-loader>\n        <form name=\"payment\" (ngSubmit)=\"processPayment()\" *ngIf=\"showForm\">\n\n          <div id=\"error-message\"></div>\n\n\n            <label class=\"control-label\" for=\"amount\">Amount (X.XX)</label>\n            <input class=\"form-control\" type=\"number\" name=\"amount\" id=\"amount\" [(ngModel)]=\"amount\"/>\n\n\n            <label class=\"control-label\" for=\"creditCardNumber\">Credit Card Number (XXXX XXXX XXXX XXXX)</label>\n            <input class=\"form-control\" type=\"text\" name=\"cardNumber\" id=\"creditCardNumber\" [(ngModel)]=\"creditCardNumber\"/>\n\n            <label class=\"control-label\" for=\"cvvNumber\">CVV Number</label>\n            <input class=\"form-control\" type=\"text\" id=\"cvvNumber\" name=\"cvvNumber\" [(ngModel)]=\"cvvNumber\" maxlength=\"4\" value=\"123\"/>\n\n\n            <label class=\"control-label\" for=\"expirationDate\">Expiration Date (MM/YY)</label>\n            <input class=\"form-control\" type=\"text\" id=\"expirationDate\" name=\"expirationDate\" [(ngModel)]=\"expirationDate\"/>\n          <br>\n          <button class=\"btn btn-success pull-right\" type=\"submit\">Pay Now</button>\n        </form>\n\n        <div class=\"module-footer\">\n          <ul class=\"utilities list-inline\">\n            <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Copy\"><i class=\"fa fa-files-o\"></i></a></li>\n            <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Edit\"><i class=\"fa fa-pencil\"></i></a></li>\n            <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Favourite\"><i class=\"fa fa-star\"></i></a></li>\n            <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Archive\"><i class=\"fa fa-archive\"></i></a></li>\n            <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Delete\"><i class=\"fa fa-trash\"></i></a></li>\n          </ul>\n        </div>\n      </app-module>\n\n    <app-module [title]=\"'PayPal'\" [wrapperClass]=\"'col-lg-4 col-md-6 col-sm-12 col-xs-12'\" >\n      <div class=\"row\">\n        <label class=\"control-label\" for=\"amount\">Amount (X.XX)</label>\n        <input class=\"form-control\" type=\"number\" name=\"amount\"  [(ngModel)]=\"amount\"/>\n      </div>\n      <br>\n      <div class=\"row pull-right\">\n        <button (click)=\"processPaypal()\" #payPalButton class=\"btn btn-default\"></button>\n      </div>\n\n      <div class=\"module-footer\">\n        <ul class=\"utilities list-inline\">\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Copy\"><i class=\"fa fa-files-o\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Edit\"><i class=\"fa fa-pencil\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Favourite\"><i class=\"fa fa-star\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Archive\"><i class=\"fa fa-archive\"></i></a></li>\n          <li><a href=\"#\" tooltip-placement=\"top\" uib-tooltip=\"Delete\"><i class=\"fa fa-trash\"></i></a></li>\n        </ul>\n      </div>\n\n    </app-module>\n\n    <app-module [title]=\"'Card payment animated'\" [wrapperClass]=\"'col-lg-4 col-md-6 col-sm-12 col-xs-12'\">\n      <div class=\"form-container\">\n        <div class=\"bg-illustration\">\n          <svg width=\"801\" height=\"570\" viewBox=\"0 0 801 570\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M695.15 540.43c-20.954 6.55-43.243 8.226-64.932 4.89 26.065-11.507 55.1-15.426 83.328-12.16-6.065 2.907-12.257 5.35-18.397 7.27m-74.984-158.957c-21.38 10.4-43.668 18.945-66.534 25.507-10.876 3.124-21.884 5.796-32.982 8.01-9.54 1.897-19.777 4.24-29.407 1.474-3.74-1.074-7.995-3.277-9.628-7.045-1.683-3.892 5.25-9.335 7.905-12.03 7.204-7.305 15.39-13.605 24.186-18.898 17.312-10.42 36.777-16.946 56.58-20.74 29.96-5.74 61.745-5.98 91.927.11-13.534 8.686-27.587 16.578-42.047 23.61M500.756 239.7c-33.755 25.25-73.15 43.654-114.53 52.324-3.04.637-17.404 1.327-11.22-4.79 4.484-4.435 9.366-8.456 14.522-12.093 8.946-6.313 18.65-11.5 28.616-16.02 22.272-10.1 45.856-17.684 69.6-23.497 8.246-2.02 16.557-3.784 24.91-5.325-3.887 3.23-7.85 6.372-11.9 9.402M342.55 48.914c-6.185 9.275-13.586 17.906-21.198 26.05-29.246 31.28-66.41 55.228-107.156 68.748-9.036 2.998-18.98 6.006-28.552 3.737-3.216-.762-9.808-3.368-10.36-7.234-.303-2.117 2.287-5.23 3.342-6.96 1.356-2.23 2.805-4.4 4.337-6.514 12.736-17.588 30.818-30.666 49.696-41.077 34.208-18.862 71.874-31.495 110.664-37.96-.256.404-.51.81-.774 1.21m457.74 519.678c-22.864-19.48-51.17-31.804-80.733-36.312 9.67-5.095 18.695-11.365 26.732-18.812 14.05-13.024 24.878-30.252 26.41-49.644 1.64-20.754-7.21-41.398-19.804-57.542-20.985-26.902-53.498-42.06-86.39-49.197 2.876-1.887 5.738-3.798 8.565-5.757 17.06-11.824 34.41-25.288 44.125-44.053 8.667-16.737 10.507-38.63-.855-54.614-10.888-15.32-30.21-21.3-47.887-24.643-46.346-8.764-94.712-8.922-141.317-2.16-3.577.522-7.144 1.098-10.71 1.703 10.422-9.04 20.23-18.78 29.26-29.202 16.158-18.658 32.707-40.726 35.14-66.04 4.776-49.667-50.926-71.248-90.198-80.87-47.635-11.67-97.6-13.463-146.025-5.768 3.113-5.434 5.273-11.288 4.97-17.58-.47-9.854-7.347-18.123-15.74-22.784-11.377-6.32-25.098-5.845-37.625-4.418-23.028 2.626-45.735 8-67.582 15.672-43.49 15.276-83.362 39.604-118.428 69.25-36.16 30.574-67.404 66.832-93.41 106.278-6.348 9.625-12.37 19.457-18.1 29.46-.54.945.923 1.796 1.463.85 40.29-70.35 96.604-133.587 166.986-175.18C203.47 26.94 241.14 12.15 280.516 5.18c20.895-3.7 51.86-9.495 65.6 11.7 6.22 9.6 3.576 20.047-1.766 29.143-3.298.545-6.592 1.134-9.876 1.768-26.202 5.052-51.843 12.94-76.305 23.567-22.525 9.788-44.832 21.706-62.735 38.713-8.42 8-15.773 17.185-21.18 27.47-3.763 7.16 9.64 11.647 14.766 12.153 10.566 1.042 20.932-2.625 30.718-6.102 11.48-4.08 22.666-8.986 33.446-14.64 21.505-11.28 41.417-25.57 58.974-42.3 9.075-8.65 17.512-17.96 25.207-27.844 2.79-3.58 5.756-7.41 8.263-11.483 52.33-8.38 106.617-5.535 157.177 8.53 36.682 10.207 84.046 32.95 78.09 78.475-3.09 23.603-18.427 44.218-33.538 61.828-9.847 11.478-20.625 22.164-32.15 31.976-19.287 3.427-38.35 8.103-57.007 14.06-21.474 6.853-43.19 14.898-62.414 26.797-8.93 5.53-17.205 12.008-24.462 19.596-.195.202-.327.543-.22.82 3.423 8.837 16.933 4.033 23.404 2.455 11.922-2.908 23.653-6.584 35.105-10.975 22.774-8.73 44.46-20.26 64.415-34.24 7.58-5.31 14.908-10.972 21.96-16.955 39.06-6.903 79.05-8.58 118.555-4.88 21.537 2.018 45.684 4.04 65.153 14.28 9.745 5.127 18.006 12.924 21.967 23.337 3.86 10.146 3.67 21.456.824 31.83-6.102 22.25-24.29 38.393-42.392 51.46-5.212 3.767-10.53 7.39-15.925 10.896-1.224-.252-2.445-.517-3.667-.746-37.45-7.026-77.88-5.438-114.235 6.232-18.002 5.78-35.216 14.388-49.737 26.545-3.65 3.057-7.115 6.33-10.362 9.806-1.567 1.678-3.082 3.4-4.54 5.17-.875 1.064-2.49 2.35-2.57 3.775-.143 2.517 2.89 5.763 4.637 7.185 2.58 2.103 5.815 3.312 9.048 3.995 8.508 1.8 17.07.216 25.46-1.39 11.114-2.13 22.14-4.725 33.04-7.77 21.866-6.106 43.222-14.027 63.787-23.626 17.12-7.99 33.678-17.172 49.527-27.44 7.98 1.705 15.85 3.83 23.528 6.446 36.767 12.53 71.948 39.044 81.216 78.46 9.36 39.803-19.35 71.52-53.047 88.572-16.7-2.21-33.75-1.943-50.4.943-13.49 2.337-26.584 6.463-38.99 12.215-.637.294-.498 1.417.203 1.54 30.05 5.212 62.45.816 89.935-12.918 16.66 2.28 32.98 7.053 48.18 14.26 12.224 5.798 23.625 13.16 33.912 21.924.824.7 2.028-.486 1.197-1.193\" fill=\"#FFF\" fill-rule=\"evenodd\"/></svg>\n\n        </div>\n\n        <header>\n          <h1>Payment Method</h1>\n        </header>\n\n        <form id=\"my-sample-form\" class=\"scale-down\" #cardForm>\n          <div class=\"cardinfo-card-number\">\n            <label class=\"cardinfo-label\" for=\"card-number\">Card Number</label>\n            <div class='input-wrapper' id=\"card-number\"></div>\n            <div id=\"card-image\"></div>\n          </div>\n\n          <div class=\"cardinfo-wrapper\">\n            <div class=\"cardinfo-exp-date\">\n              <label class=\"cardinfo-label\" for=\"expiration-date\">Valid Thru</label>\n              <div class='input-wrapper' id=\"expiration-date\"></div>\n            </div>\n\n            <div class=\"cardinfo-cvv\">\n              <label class=\"cardinfo-label\" for=\"cvv\">CVV</label>\n              <div class='input-wrapper' id=\"cvv\"></div>\n            </div>\n          </div>\n        </form>\n\n        <input id=\"button-pay\" type=\"submit\" value=\"Continue\" #submitButtonForm />\n      </div>\n    </app-module>\n\n\n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "<span class=\"arrow\"></span>\n<h4 class=\"title\">Settings &amp; Tools</h4>\n<ul class=\"more-list\">\n  <li><a role=\"menuitem\" href=\"user-settings.html\"><span class=\"pe-icon pe-7s-config icon\"></span><br>Settings</a></li>\n  <li><a role=\"menuitem\" href=\"user-billing.html\"><span class=\"pe-icon pe-7s-wallet icon\"></span><br>Billing</a></li>\n  <li><a role=\"menuitem\" href=\"user-drive.html\"><span class=\"pe-icon pe-7s-pendrive icon\"></span><br>Drive</a></li>\n  <li><a role=\"menuitem\" href=\"user-messages.html\"><span class=\"pe-icon pe-7s-chat icon\"></span><br>Messages</a></li>\n  <li><a role=\"menuitem\" href=\"user-reminders.html\"><span class=\"pe-icon pe-7s-clock icon\"></span><br>Reminders</a></li>\n\n  <li><a role=\"menuitem\" href=\"help.html\"><span class=\"pe-icon pe-7s-help2 icon\"></span><br>Help</a></li>\n</ul>\n"

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports = "<span>\n\t<div class=\"loader-wrapper loader-wrapper-1\" *ngIf=\"variant == 1\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"spinner-container container1\">\n\t\t\t\t<div class=\"circle1\"></div>\n\t\t\t\t<div class=\"circle2\"></div>\n\t\t\t\t<div class=\"circle3\"></div>\n\t\t\t\t<div class=\"circle4\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"spinner-container container2\">\n\t\t\t\t<div class=\"circle1\"></div>\n\t\t\t\t<div class=\"circle2\"></div>\n\t\t\t\t<div class=\"circle3\"></div>\n\t\t\t\t<div class=\"circle4\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"spinner-container container3\">\n\t\t\t\t<div class=\"circle1\"></div>\n\t\t\t\t<div class=\"circle2\"></div>\n\t\t\t\t<div class=\"circle3\"></div>\n\t\t\t\t<div class=\"circle4\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-2\" *ngIf=\"variant == 2\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"dot1\"></div>\n\t\t\t<div class=\"dot2\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-3\" *ngIf=\"variant == 3\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"bounce1\"></div>\n\t\t\t<div class=\"bounce2\"></div>\n\t\t\t<div class=\"bounce3\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-4\" *ngIf=\"variant == 4\">\n\t\t<div class=\"spinner\"></div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-5\"  *ngIf=\"variant == 5\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"rect1\"></div>\n\t\t\t<div class=\"rect2\"></div>\n\t\t\t<div class=\"rect3\"></div>\n\t\t\t<div class=\"rect4\"></div>\n\t\t\t<div class=\"rect5\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-6\"  *ngIf=\"variant == 6\">\n\t\t<div class=\"spinner\"></div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-7\"  *ngIf=\"variant == 7\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"double-bounce1\"></div>\n\t\t\t<div class=\"double-bounce2\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-wrapper loader-wrapper-8\"  *ngIf=\"variant == 8\">\n\t\t<div class=\"spinner\">\n\t\t\t<div class=\"cube1\"></div>\n\t\t\t<div class=\"cube2\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-default\" *ngIf=\"variant == 9\">\n\t\t<div class=\"loader-default-inner\">\n\t\t\t<div class=\"img-container\">\n\t\t\t\t<img src=\"assets/images/loaders/ajax-loader-1.gif\" alt=\"\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-default\" *ngIf=\"variant == 10\">\n\t\t<div class=\"loader-default-inner\">\n\t\t\t<div class=\"img-container\">\n\t\t\t\t<img src=\"assets/images/loaders/ajax-loader-2.gif\" alt=\"\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-default\" *ngIf=\"variant == 11\">\n\t\t<div class=\"loader-default-inner\">\n\t\t\t<div class=\"img-container\">\n\t\t\t\t<img src=\"assets/images/loaders/ajax-loader-3.gif\" alt=\"\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"loader-default\" *ngIf=\"variant == 12\">\n\t\t<div class=\"loader-default-inner\">\n\t\t\t<div class=\"img-container\">\n\t\t\t\t<img src=\"assets/images/loaders/ajax-loader-4.gif\" alt=\"\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</span>\n"

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"module-wrapper {{ wrapperClass }}\" #moduleElement>\n  <section class=\"module {{ moduleClass }}\" [class.collapsed]=\"{ 'collapsed':collapsed }\">\n    <div class=\"module-inner\">\n      <div class=\"module-heading\" *ngIf=\"title || meta\">\n        <h3 class=\"module-title\">\n          {{ title }}\n        </h3><div class=\"meta\" *ngIf=\"meta\">\n        {{ meta }}\n      </div>\n        <ul class=\"actions list-inline\" *ngIf=\"controls || showMore\">\n          <li class=\"more-link\" *ngIf=\"showMore\">\n            <span ngTransclude=\"more\"></span>\n          </li>\n          <li>\n            <a class=\"collapse-module\" (click)=\"collapseModule($event)\">\n              <span class=\"icon {{collapsed? 'arrow_carrot-up' : 'arrow_carrot-down'}} \" aria-hidden=\"true\"></span>\n            </a>\n          </li>\n          <li>\n            <a class=\"close-module\" (click)=\"closeModule($event)\">\n              <span class=\"icon icon_close\" aria-hidden=\"true\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"module-content\" [ngbCollapse]=\"collapsed\">\n        <div class=\"module-content-inner {{ contentClass }}\">\n          <ng-content class=\"grid\"  #contentItem>\n\n          </ng-content>\n        </div>\n      </div>\n      <div class=\"module-footer\" *ngIf=\"showFooter\">\n        <ng-content select=\"module-footer\">\n\n        </ng-content>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-nav-wrapper\" >\n  <nav id=\"main-nav\" class=\"main-nav\">\n    <ul class=\"metismenu\" id=\"menu\">\n\n      <li  class=\"nav-dashboards\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a [routerLink]=\"['dashboard']\" >\n          <span aria-hidden=\"true\" class=\"icon icon_house_alt\"></span>\n          <span class=\"nav-label\">Dashboard</span>\n          <span class=\"badge badge-primary\">1</span>\n        </a>\n      </li>\n\n      <li  class=\"nav-widgets \" routerLinkActive=\"active\">\n        <a [routerLink]=\"['widgets']\" >\n          <span aria-hidden=\"true\" class=\"icon icon_drawer_alt\"></span>\n          <span class=\"nav-label\">Widgets</span>\n          <span class=\"badge badge-info\">12</span>\n        </a>\n      </li>\n\n      <li  class=\"nav-payment \" routerLinkActive=\"active\">\n        <a [routerLink]=\"['payment']\" >\n          <span aria-hidden=\"true\" class=\"icon icon_balance\"></span>\n          <span class=\"nav-label\">Payment</span>\n          <span class=\"badge badge-circle\">0</span>\n        </a>\n      </li>\n\n      <li  class=\" \">\n        <a href=\"#\">\n          <span aria-hidden=\"true\" class=\"icon icon_table\"></span>\n          <span class=\"nav-label\">Tables</span>\n          <span class=\"fa arrow\"></span>\n        </a>\n        <ul class=\"sub-menu\">\n          <li  class=\" \" routerLinkActive=\"active\">\n            <a [routerLink]=\"['tables']\">\n              <span class=\"nav-label\">Basic</span>\n            </a>\n          </li>\n          <li  class=\" \">\n            <a href=\"#\">\n              <span class=\"nav-label\">Datatables</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n\n      <li  class=\"nav-forms\" >\n        <a href=\"#\">\n          <span aria-hidden=\"true\" class=\"icon icon_pencil-edit\"></span>\n          <span class=\"nav-label\">Forms</span>\n          <span class=\"fa arrow\"></span>\n        </a>\n        <ul class=\"sub-menu\">\n          <li  class=\" \" >\n            <a >\n              <span class=\"nav-label\">Basic</span>\n            </a>\n          </li>\n          <li  class=\" \">\n            <a href=\"#\">\n              <span class=\"nav-label\">Validation</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n\n      <li role=\"presentation\" class=\"divider \">\n      </li>\n      <li  class=\" \">\n        <a href=\"help.html\">\n          <span aria-hidden=\"true\" class=\"icon icon_lifesaver\"></span>\n          <span class=\"nav-label\">Help</span>\n          <span class=\"label label-new\">NEW</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

module.exports = "<div class=\"side-panel-inner\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\"><span aria-hidden=\"true\">&times;</span></button>\n  <h4 class=\"title text-center\"><i class=\"fa fa-signal\"></i>Activities</h4>\n  <div class=\"items-wrapper\">\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <button class=\"icon-container btn btn-warning btn-circle\">\n          <i class=\"icon fa fa-flag\"></i>\n        </button>\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <strong>We have increased your storage to 10GB for Free!</strong>\n        </div>\n        <div class=\"excerpt\">\n          System notification\n        </div>\n        <div class=\"time-stamp\">5 days ago</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <img class=\"user-profile\" src=\"assets/images/profiles/profile-20.png\" alt=\"\" />\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"member.html\">David Thomson</a> followed you.\n        </div>\n        <div class=\"excerpt\">\n          <div class=\"role\">Full-Stack Developer</div>\n          <div class=\"folowers\"><span>12 Projects</span> | <span class=\"folowers\">43 Followers</span></div>\n        </div>\n        <div class=\"time-stamp\">3 mins ago</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <button class=\"icon-container btn btn-danger btn-circle\">\n          <i class=\"icon fa fa-heart\"></i>\n        </button>\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"#\">Julie Wu</a> favourited your post.\n        </div>\n        <div class=\"excerpt\">\n          <div class=\"quote-text\"><em>\"Love your new design! Keep up the great work...\"</em></div>\n        </div>\n        <div class=\"time-stamp\">1 week ago</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <img class=\"user-profile\" src=\"assets/images/profiles/profile-15.png\" alt=\"\" />\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"#\">Julie Wu</a> followed you.\n        </div>\n        <div class=\"excerpt\">\n          <div class=\"role\">Product Designer</div>\n          <div class=\"folowers\"><span>3 Projects</span> | <span class=\"folowers\">8 Followers</span></div>\n        </div>\n        <div class=\"time-stamp\">2 weeks ago</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <button class=\"icon-container btn btn-info btn-circle\">\n          <i class=\"icon fa fa-at\"></i>\n        </button>\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"#\">James Lee</a> mentioned you on <a href=\"#\">Project Lorem</a>.\n        </div>\n        <div class=\"excerpt\">\n          <div class=\"quote-text\"><em>\"Looks cool @Rebecca White\"</em></div>\n        </div>\n        <div class=\"time-stamp\">2 weeks ago</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <button class=\"icon-container btn btn-success btn-circle\">\n          <i class=\"icon fa fa-commenting\"></i>\n        </button>\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"#\">Chris Adams</a> commented on <a href=\"#\">Discussion Lorem</a>.\n        </div>\n        <div class=\"excerpt\">\n          <div class=\"quote-text\"><em>\"Can we improve the review process? At the moment consectetuer adipiscing elit...\"</em></div>\n        </div>\n        <div class=\"time-stamp\">Jan 10, 2016</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"symbol-holder\">\n        <button class=\"icon-container btn btn-pink btn-circle\">\n          <i class=\"icon fa fa-thumbs-up\"></i>\n        </button>\n      </div>\n      <div class=\"content-holder\">\n        <div class=\"subject-line\">\n          <a class=\"name\" href=\"#\">Kat Schultz</a> liked your discussion <a href=\"#\">Discussion Lorem</a>.\n        </div>\n        <div class=\"time-stamp\">Jan 8, 2016</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-side-nav></app-side-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper view\">\n  <div class=\"container-fluid\">\n    <h2 class=\"view-title\">Widgets</h2>\n\n\n      <app-module [wrapperClass]=\"'col-lg-4 col-md-6 col-sm-12 col-xs-12'\" *ngFor=\"let n of [1,2,3,4,5,6,7,8,9,10,11,12]\" [title]=\"'Module ' + n\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lectus arcu. Morbi non vestibulum leo. Curabitur facilisis lectus lobortis massa dapibus semper. Sed elementum orci felis, ac maximus massa tincidunt a. In hac habitasse platea dictumst. Ut ligula nulla, tincidunt vitae metus quis, aliquet convallis purus. In tristique magna nec tellus luctus maximus. Aliquam suscipit ultricies dui. Sed rhoncus felis massa, eu faucibus ligula maximus at.\n        <app-loader [variant]=\"n\"></app-loader>\n      </app-module>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(257);


/***/ }),

/***/ 90:
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

},[707]);
//# sourceMappingURL=main.bundle.js.map
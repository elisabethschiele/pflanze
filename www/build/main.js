webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_new__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regal_regal__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statistiken_statistiken__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__statistiken_statistiken__["a" /* StatistikenPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__regal_regal__["a" /* RegalPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__new_new__["a" /* NewPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Statistiken" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Regal" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Neu" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewPage = /** @class */ (function () {
    function NewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new',template:/*ion-inline-start:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/new/new.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Neue Pflanze\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/new/new.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], NewPage);
    return NewPage;
}());

//# sourceMappingURL=new.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegalPage = /** @class */ (function () {
    function RegalPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.Data = [{ "ID": "1", "Name": "Aloe vera", "botanischerName": "Aloe vera", "Benzol": "1", "Formaldehyd": "65", "Trichlorethen": "0", "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "2", "Name": "Goldfruchtpalme", "botanischerName": "Dypsis lutescens", "Benzol": null, "Formaldehyd": "0.01", "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "3", "Name": "Bambuspalme", "botanischerName": "Chamaedorea seifrizii", "Benzol": null, "Formaldehyd": "3.196", "Trichlorethen": "688", "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "4", "Name": "Banane", "botanischerName": "Musa Oriana", "Benzol": null, "Formaldehyd": "488", "Trichlorethen": null, "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "10", "Name": "Elephant ear philodendron", "botanischerName": "Philodendron domesticum", "Benzol": null, "Formaldehyd": "416", "Trichlorethen": null, "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "11", "Name": "Barbera daisy", "botanischerName": "Gerbera jamesonii", "Benzol": "4.486", "Formaldehyd": "0.01", "Trichlorethen": "1.66", "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "13", "Name": "Boston fern", "botanischerName": "Nephrolepis exaltata 'Bostoniensis'", "Benzol": null, "Formaldehyd": "1.863", "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "14", "Name": "Chinese evergreen ", "botanischerName": "Aglaonema modestum", "Benzol": "604", "Formaldehyd": "183", "Trichlorethen": "0", "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "15", "Name": "Cornstalk dracaena", "botanischerName": "Dracaena fragrans 'Massangeana'", "Benzol": "0.01", "Formaldehyd": "938", "Trichlorethen": "421", "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "16", "Name": "English ivy", "botanischerName": "Hedera helix", "Benzol": "579", "Formaldehyd": "761", "Trichlorethen": "298", "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "17", "Name": "Dendrobium orchids ", "botanischerName": "Dendrobium spp.", "Benzol": null, "Formaldehyd": null, "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "18", "Name": "Devil's ivy, Pothos plant ", "botanischerName": "Epipremnum aureum", "Benzol": "0.01", "Formaldehyd": "0.01", "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "20", "Name": "Florist's chrysanthemum", "botanischerName": "Chrysanthemum morifolium", "Benzol": "3205", "Formaldehyd": "1450", "Trichlorethen": "0.01", "Xylole_Toluol": "1", "Ammoniak": "1", "Toxic": null, "Bild": null }, { "ID": "21", "Name": "Heartleaf philodendron", "botanischerName": "Philodendron cordatum", "Benzol": null, "Formaldehyd": "353", "Trichlorethen": null, "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "22", "Name": "Dumb canes ", "botanischerName": "Dieffenbachia spp.", "Benzol": null, "Formaldehyd": null, "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "24", "Name": "Dwarf date palm ", "botanischerName": "Phoenix roebelenii", "Benzol": null, "Formaldehyd": "1.385", "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "25", "Name": "Janet Craig", "botanischerName": "Dracaena deremensis \"Janet Craig\"", "Benzol": "1.082", "Formaldehyd": "1.699", "Trichlorethen": "764", "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "26", "Name": "Red-edged dracaena ", "botanischerName": "Dracaena marginata", "Benzol": "1.264", "Formaldehyd": "853", "Trichlorethen": "1.137", "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "27", "Name": "Rubber plant ", "botanischerName": "Ficus elastica", "Benzol": null, "Formaldehyd": "0.01", "Trichlorethen": null, "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "28", "Name": "Selloum philodendron", "botanischerName": "Philodendron bipinnatifidum", "Benzol": null, "Formaldehyd": "361", "Trichlorethen": null, "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "29", "Name": "Spider plant ", "botanischerName": "Chlorophytum comosum", "Benzol": null, "Formaldehyd": "560", "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": null, "Bild": null }, { "ID": "30", "Name": "Kimberley queen fern ", "botanischerName": "Nephrolepis obliterata", "Benzol": null, "Formaldehyd": "1.328", "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": null, "Toxic": null, "Bild": null }, { "ID": "31", "Name": "Variegated snake plant", "botanischerName": "Sansevieria trifasciata 'Laurentii'", "Benzol": "1196", "Formaldehyd": "1.304", "Trichlorethen": "405", "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": "1", "Bild": null }, { "ID": "33", "Name": "Warneckei ", "botanischerName": "Dracaena deremensis \"Warneckei\"", "Benzol": "1.63", "Formaldehyd": "760", "Trichlorethen": "573", "Xylole_Toluol": "0", "Ammoniak": "0", "Toxic": "1", "Bild": null }, { "ID": "34", "Name": "King of hearts", "botanischerName": "Homalomena wallisii", "Benzol": null, "Formaldehyd": null, "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": "1", "Bild": null }, { "ID": "35", "Name": "Weeping fig ", "botanischerName": "Ficus benjamina", "Benzol": null, "Formaldehyd": "94", "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": "1", "Bild": null }, { "ID": "36", "Name": "Moth orchids", "botanischerName": "Phalaenopsis spp.", "Benzol": null, "Formaldehyd": null, "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": "0", "Bild": null }, { "ID": "37", "Name": "Moth orchids", "botanischerName": "Phalaenopsis spp.", "Benzol": null, "Formaldehyd": null, "Trichlorethen": null, "Xylole_Toluol": "1", "Ammoniak": "0", "Toxic": "0", "Bild": null }, { "ID": "38", "Name": "Peace lily", "botanischerName": "Spathiphyllum 'Mauna Loa'", "Benzol": "1.725", "Formaldehyd": "674", "Trichlorethen": "1.128", "Xylole_Toluol": "1", "Ammoniak": "1", "Toxic": "1", "Bild": null }];
    }
    RegalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regal',template:/*ion-inline-start:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/regal/regal.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div class="Title">Mein Blumenregal</div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n  <ion-grid class="aussen">\n    <ion-row>\n      <ion-col *ngFor ="let data of Data" class="plant">\n        <img class="img.fluid" src="/assets/imgs/cactus.jpg">\n        <div class="PlantName">\n          {{data.Name}}\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/regal/regal.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], RegalPage);
    return RegalPage;
    var _a;
}());

//# sourceMappingURL=regal.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatistikenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatistikenPage = /** @class */ (function () {
    function StatistikenPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    StatistikenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistiken',template:/*ion-inline-start:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/statistiken/statistiken.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Statistiken</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Statistiken von den Pflanzen</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/statistiken/statistiken.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], StatistikenPage);
    return StatistikenPage;
}());

//# sourceMappingURL=statistiken.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_regal_regal__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_new__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_statistiken_statistiken__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_regal_regal__["a" /* RegalPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_statistiken_statistiken__["a" /* StatistikenPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_regal_regal__["a" /* RegalPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_statistiken_statistiken__["a" /* StatistikenPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/elisabeth/Documents/GitHub/pflanze/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/elisabeth/Documents/GitHub/pflanze/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map
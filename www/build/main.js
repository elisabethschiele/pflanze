webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_new__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regal_regal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statistiken_statistiken__ = __webpack_require__(203);
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
    //tab4Root = Kontakt
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__statistiken_statistiken__["a" /* StatistikenPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__regal_regal__["a" /* RegalPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__new_new__["a" /* NewPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Statistiken" tabIcon="analytics"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Regal" tabIcon="leaf"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Neu" tabIcon="add"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
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
    function NewPage(navCtrl, restProvider, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.searchTerm = '';
        this.getPflanzen();
    }
    NewPage.prototype.getPflanzen = function () {
        var _this = this;
        this.restProvider.getData().then(function (data) {
            _this.items = data;
            console.log(_this.items);
            _this.setFilteredItems();
        });
    };
    NewPage.prototype.setFilteredItems = function () {
        this.filteredItems = this.filterItems(this.searchTerm);
    };
    NewPage.prototype.filterItems = function (searchTerm) {
        return this.items.filter(function (item) {
            return item.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    NewPage.prototype.addPlant = function (item) {
        var _this = this;
        //this.storage.set('pflanze', "Efeu");
        this.storage.get('pflanze').then(function (val) {
            /*console.log('pflanze', JSON.parse(val));
            this.a = Array(val);
            console.log(item);
            console.log(this.a);*/
            //console.log(item);
            //console.log(val);
            var a = {};
            if (val != null) {
                a = (JSON.stringify(item) + "," + val);
            }
            else {
                a = JSON.stringify(item);
            }
            _this.storage.set('pflanze', a);
            console.log(a);
        });
        this.presentNewPlantAlert(item);
    };
    NewPage.prototype.presentNewPlantAlert = function (item) {
        var alert = this.alertCtrl.create({
            title: item.Name + ' wurde zu deinen Pflanzen hinzugefügt'
        });
        alert.present();
    };
    NewPage.prototype.deleteAllClicked = function () {
        this.presentDeleteAllAlert();
    };
    NewPage.prototype.presentDeleteAllAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Möchtest du alle Daten löschen ?',
            buttons: [
                {
                    text: 'Ja',
                    handler: function () {
                        _this.deleteAll();
                    }
                },
                {
                    text: 'Nein'
                }
            ]
        });
        alert.present();
    };
    NewPage.prototype.deleteAll = function () {
        var _this = this;
        console.log('loeschen');
        this.storage.remove('pflanze').then(function (val) {
            _this.storage.get('pflanze').then(function (val2) {
                //console.log(JSON.stringify(val2));
                if (val2 == '')
                    console.log('leer');
            });
        });
    };
    NewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new',template:/*ion-inline-start:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/new/new.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div class="myTitle">\n        Neue Pflanze\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list-header>\n      <div class="SubTitle">\n        Lege hier deine Pflanze an\n      </div>\n    </ion-list-header>\n    <ion-searchbar\n      [(ngModel)]="searchTerm"\n      (ionInput)="setFilteredItems()">\n    </ion-searchbar>\n\n    <ion-list>\n\n        <button ion-button class="Auswahl" *ngFor="let item of filteredItems" (click)="addPlant(item)">\n          {{item.Name}}\n        </button>\n    \n      </ion-list>\n      <button ion-button color = "danger" (click)="deleteAllClicked()">Alle löschen</button>\n</ion-content>\n'/*ion-inline-end:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/new/new.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewPage);
    return NewPage;
}());

//# sourceMappingURL=new.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiURL = 'http://beringen.odenwilusenz.ch:8099/api/getAll.php';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiURL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
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
    //console.log(typeof Data);
    //  Data = [{"ID":"1","Name":"Aloe vera","botanischerName":"Aloe vera","Benzol":"1","Formaldehyd":"65","Trichlorethen":"0","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"aloeVera.jpg"},{"ID":"2","Name":"Goldfruchtpalme","botanischerName":"Dypsis lutescens","Benzol":null,"Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"dypsisLutescens.jpg"},{"ID":"3","Name":"Bambuspalme","botanischerName":"Chamaedorea seifrizii","Benzol":null,"Formaldehyd":"3.196","Trichlorethen":"688","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"chamaedoreaSeifrizii.jpg"},{"ID":"4","Name":"Banane","botanischerName":"Musa Oriana","Benzol":null,"Formaldehyd":"488","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":"0","Bild":"musaOriana.jpg"},{"ID":"10","Name":"Philodendron domesticum","botanischerName":"Philodendron domesticum","Benzol":null,"Formaldehyd":"416","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"philodendronDomesticum.jpg"},{"ID":"11","Name":"Gerbera jamesonii","botanischerName":"Gerbera jamesonii","Benzol":"4.486","Formaldehyd":"0.01","Trichlorethen":"1.66","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"0","Bild":"gerberaJamesonii.jpg"},{"ID":"13","Name":"Nephrolepis exaltata","botanischerName":"Nephrolepis exaltata 'Bostoniensis'","Benzol":null,"Formaldehyd":"1.863","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"nephrolepisExaltataB.jpg"},{"ID":"14","Name":"Chinesischer immergr\u00fcn","botanischerName":"Aglaonema modestum","Benzol":"604","Formaldehyd":"183","Trichlorethen":"0","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"aglaonemaModestum.jpg"},{"ID":"15","Name":"Dracaena fragrans ","botanischerName":"Dracaena fragrans 'Massangeana'","Benzol":"0.01","Formaldehyd":"938","Trichlorethen":"421","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"dracaenaFragransM.jpg"},{"ID":"16","Name":"Gemeiner Efeu","botanischerName":"Hedera helix","Benzol":"579","Formaldehyd":"761","Trichlorethen":"298","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"hederaHelix.jpg"},{"ID":"17","Name":"Dendrobium","botanischerName":"Dendrobium spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"dendrobiumSpp.jpg"},{"ID":"18","Name":"Efeutute","botanischerName":"Epipremnum aureum","Benzol":"0.01","Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"epipremnumAureum.jpg"},{"ID":"20","Name":"Garten-Chrysantheme","botanischerName":"Chrysanthemum morifolium","Benzol":"3.205","Formaldehyd":"1.45","Trichlorethen":"0.01","Xylole_Toluol":"1","Ammoniak":"1","Toxic":"1","Bild":"chrysanthemumMorifolium.jpg"},{"ID":"21","Name":"Philodendron cordatum","botanischerName":"Philodendron cordatum","Benzol":null,"Formaldehyd":"353","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"philodendronCordatum.jpg"},{"ID":"22","Name":"Dieffenbachien","botanischerName":"Dieffenbachia spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"dieffenbachiaSpp.jpg"},{"ID":"24","Name":"Zwerg-Dattelpalme","botanischerName":"Phoenix roebelenii","Benzol":null,"Formaldehyd":"1.385","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"phoenixRoebelenii.jpg"},{"ID":"25","Name":"Janet Craig","botanischerName":"Dracaena deremensis \"Janet Craig\"","Benzol":"1.082","Formaldehyd":"1.699","Trichlorethen":"764","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"dracaenaDeremensisJC.jpg"},{"ID":"26","Name":"Gerandeter Drachenbaum","botanischerName":"Dracaena marginata","Benzol":"1.264","Formaldehyd":"853","Trichlorethen":"1.137","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"dracaenaMarginata.JPG"},{"ID":"27","Name":"Gummibaum","botanischerName":"Ficus elastica","Benzol":null,"Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"ficusElastica.jpg"},{"ID":"28","Name":"Philodendron bipinnatifidum","botanischerName":"Philodendron bipinnatifidum","Benzol":null,"Formaldehyd":"361","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"philodendronBipinnatifidum.jpg"},{"ID":"29","Name":"gr\u00fcnlilie","botanischerName":"Chlorophytum comosum","Benzol":null,"Formaldehyd":"560","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"chlorophytumComosum.jpg"},{"ID":"30","Name":"Nephrolepis obliterata","botanischerName":"Nephrolepis obliterata","Benzol":null,"Formaldehyd":"1.328","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"nephrolepisObliterata.png"},{"ID":"31","Name":"Sansevieria trifasciata","botanischerName":"Sansevieria trifasciata 'Laurentii'","Benzol":"1196","Formaldehyd":"1.304","Trichlorethen":"405","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"sansevieriaTrifasciataL.jpg"},{"ID":"33","Name":"Warneckei ","botanischerName":"Dracaena deremensis \"Warneckii\"","Benzol":"1.63","Formaldehyd":"760","Trichlorethen":"573","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":"dracaenaDeremensisW.jpg"},{"ID":"34","Name":"Homalomena wallisii","botanischerName":"Homalomena wallisii","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"homalomenaWallisii.jpg"},{"ID":"35","Name":"Birkenfeige","botanischerName":"Ficus benjamina","Benzol":null,"Formaldehyd":"94","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":"ficusBenjamina.jpg"},{"ID":"37","Name":"Phalaenopsis","botanischerName":"Phalaenopsis spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":"phalaenopsisSpp.jpg"},{"ID":"38","Name":"Spathiphyllum","botanischerName":"Spathiphyllum 'Mauna Loa'","Benzol":"1.725","Formaldehyd":"674","Trichlorethen":"1.128","Xylole_Toluol":"1","Ammoniak":"1","Toxic":"1","Bild":"spathiphyllumML"}];
    function RegalPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.Data = [];
        //this.getPflanzen();
    }
    RegalPage.prototype.getPflanzen = function () {
        var _this = this;
        this.storage.get('pflanze').then(function (data) {
            //console.log("["+data+"]");
            console.log(data);
            if (data == null) {
                console.log("string empty");
                _this.Data = null;
            }
            else {
                console.log("geparst");
                _this.Data = JSON.parse("[" + data + "]");
            }
        });
    };
    RegalPage.prototype.ionViewDidEnter = function () {
        this.getPflanzen();
    };
    RegalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regal',template:/*ion-inline-start:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/regal/regal.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div class="myTitle">\n        Mein Blumenregal\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n  <ion-grid class="aussen">\n    <ion-row>\n      <ion-col *ngFor ="let data of Data" class="plant">\n        <img class="img" src="http://beringen.odenwilusenz.ch:8099/img/{{data.Bild}}">\n        <div class="PlantName">\n          {{data.Name}}\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/regal/regal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], RegalPage);
    return RegalPage;
}());

//# sourceMappingURL=regal.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatistikenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
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
    /*Data =[{"ID":"1","Name":"Aloe vera","botanischerName":"Aloe vera","Benzol":"1","Formaldehyd":"65","Trichlorethen":"0","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"2","Name":"Goldfruchtpalme","botanischerName":"Dypsis lutescens","Benzol":null,"Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"3","Name":"Bambuspalme","botanischerName":"Chamaedorea seifrizii","Benzol":null,"Formaldehyd":"3.196","Trichlorethen":"688","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":null},{"ID":"4","Name":"Banane","botanischerName":"Musa Oriana","Benzol":null,"Formaldehyd":"488","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"10","Name":"Elephant ear philodendron","botanischerName":"Philodendron domesticum","Benzol":null,"Formaldehyd":"416","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"11","Name":"Barbera daisy","botanischerName":"Gerbera jamesonii","Benzol":"4.486","Formaldehyd":"0.01","Trichlorethen":"1.66","Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"13","Name":"Boston fern","botanischerName":"Nephrolepis exaltata 'Bostoniensis'","Benzol":null,"Formaldehyd":"1.863","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"14","Name":"Chinesischer immergr\u00fcn","botanischerName":"Aglaonema modestum","Benzol":"604","Formaldehyd":"183","Trichlorethen":"0","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"15","Name":"Cornstalk dracaena","botanischerName":"Dracaena fragrans 'Massangeana'","Benzol":"0.01","Formaldehyd":"938","Trichlorethen":"421","Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"16","Name":"English ivy","botanischerName":"Hedera helix","Benzol":"579","Formaldehyd":"761","Trichlorethen":"298","Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"17","Name":"Dendrobium","botanischerName":"Dendrobium spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":null},{"ID":"18","Name":"Devil's ivy, Pothos plant ","botanischerName":"Epipremnum aureum","Benzol":"0.01","Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"20","Name":"Garten-Chrysantheme","botanischerName":"Chrysanthemum morifolium","Benzol":"3.205","Formaldehyd":"1.45","Trichlorethen":"0.01","Xylole_Toluol":"1","Ammoniak":"1","Toxic":"1","Bild":null},{"ID":"21","Name":"Heartleaf philodendron","botanischerName":"Philodendron cordatum","Benzol":null,"Formaldehyd":"353","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"22","Name":"Dieffenbachien","botanischerName":"Dieffenbachia spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"24","Name":"Dwarf date palm ","botanischerName":"Phoenix roebelenii","Benzol":null,"Formaldehyd":"1.385","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"25","Name":"Janet Craig","botanischerName":"Dracaena deremensis \"Janet Craig\"","Benzol":"1.082","Formaldehyd":"1.699","Trichlorethen":"764","Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"26","Name":"Red-edged dracaena ","botanischerName":"Dracaena marginata","Benzol":"1.264","Formaldehyd":"853","Trichlorethen":"1.137","Xylole_Toluol":"1","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"27","Name":"Rubber plant ","botanischerName":"Ficus elastica","Benzol":null,"Formaldehyd":"0.01","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"28","Name":"Selloum philodendron","botanischerName":"Philodendron bipinnatifidum","Benzol":null,"Formaldehyd":"361","Trichlorethen":null,"Xylole_Toluol":"0","Ammoniak":"0","Toxic":null,"Bild":null},{"ID":"29","Name":"gr\u00fcnlilie","botanischerName":"Chlorophytum comosum","Benzol":null,"Formaldehyd":"560","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":null},{"ID":"30","Name":"Kimberley queen fern ","botanischerName":"Nephrolepis obliterata","Benzol":null,"Formaldehyd":"1.328","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":null,"Toxic":null,"Bild":null},{"ID":"31","Name":"Variegated snake plant","botanischerName":"Sansevieria trifasciata 'Laurentii'","Benzol":"1196","Formaldehyd":"1.304","Trichlorethen":"405","Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"33","Name":"Warneckei ","botanischerName":"Dracaena deremensis \"Warneckei\"","Benzol":"1.63","Formaldehyd":"760","Trichlorethen":"573","Xylole_Toluol":"0","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"34","Name":"King of hearts","botanischerName":"Homalomena wallisii","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"35","Name":"Weeping fig ","botanischerName":"Ficus benjamina","Benzol":null,"Formaldehyd":"94","Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"1","Bild":null},{"ID":"36","Name":"Moth orchids","botanischerName":"Phalaenopsis spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":null},{"ID":"37","Name":"Moth orchids","botanischerName":"Phalaenopsis spp.","Benzol":null,"Formaldehyd":null,"Trichlorethen":null,"Xylole_Toluol":"1","Ammoniak":"0","Toxic":"0","Bild":null},{"ID":"38","Name":"Peace lily","botanischerName":"Spathiphyllum 'Mauna Loa'","Benzol":"1.725","Formaldehyd":"674","Trichlorethen":"1.128","Xylole_Toluol":"1","Ammoniak":"1","Toxic":"1","Bild":null}];*/
    function StatistikenPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    StatistikenPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('onViewLoad');
        this.storage.get('pflanze').then(function (data) {
            //console.log("["+data+"]");
            console.log(data);
            if (data == null) {
                console.log("string empty");
                _this.Data = null;
            }
            else {
                console.log("geparst");
                _this.Data = JSON.parse("[" + data + "]");
            }
            _this.temp = _this.sum_benzol_formaldehyd_trichlorethen();
            _this.sum = _this.is_toxic();
            _this.auto = _this.temp / 2500;
        });
    };
    StatistikenPage.prototype.sum_benzol_formaldehyd_trichlorethen = function () {
        var sum = 0;
        console.log(this.Data);
        if (this.Data != null) {
            for (var i = 0; i < this.Data.length; i++) {
                if (this.Data[i]["Benzol"] != null) {
                    sum += Number(this.Data[i]["Benzol"]);
                }
                if (this.Data[i]["Formaldehyd"] != null) {
                    sum += Number(this.Data[i]["Formaldehyd"]);
                }
                if (this.Data[i]["Trichlorethen"] != null) {
                    sum += Number(this.Data[i]["Trichlorethen"]);
                }
            }
        }
        var temp = Number(sum).toFixed(4);
        return temp;
    };
    StatistikenPage.prototype.is_toxic = function () {
        var sum = 0;
        if (this.Data != null) {
            for (var i = 0; i < this.Data.length; i++) {
                if (this.Data[i]["Toxic"] != null)
                    sum += Number(this.Data[i]["Toxic"]);
            }
            return ((sum == 0) ? "Nein" : "Ja");
        }
        else {
            return "Nein";
        }
    };
    StatistikenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistiken',template:/*ion-inline-start:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/statistiken/statistiken.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div class="myTitle">\n        Statistiken\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="test">\n  	<p>\n  	   Schädlich für Menschen und alle anderen Tiere, Tödlich für Babys: <span class="zahl"> {{sum}} </span> <br>\n       Microgramme die pro Stunde von deiner/n Pflanzen gefiltert werden: <span class="zahl"> {{temp}} </span> <br>\n       Du hast schon <span class="zahl"> {{auto}} </span> Stunden die Abgase deines Autos gefiltert.\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/elisabeth/Documents/GitHub/pflanze/src/pages/statistiken/statistiken.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], StatistikenPage);
    return StatistikenPage;
}());

//# sourceMappingURL=statistiken.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_regal_regal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_new__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_statistiken_statistiken__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(50);
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
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_regal_regal__["a" /* RegalPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_statistiken_statistiken__["a" /* StatistikenPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__["a" /* RestProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map
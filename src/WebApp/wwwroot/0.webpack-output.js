webpackJsonp([0],{

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(43);
var ng2_bootstrap_1 = __webpack_require__(10);
var about_routing_module_1 = __webpack_require__(38);
var about_component_1 = __webpack_require__(37);
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            declarations: [
                about_component_1.AboutComponent
            ],
            imports: [
                common_1.CommonModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                about_routing_module_1.AboutRoutingModule
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;


/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(39)
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(9);
var about_component_1 = __webpack_require__(37);
var routes = [
    { path: '', component: about_component_1.AboutComponent }
];
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());
exports.AboutRoutingModule = AboutRoutingModule;


/***/ },

/***/ 39:
/***/ function(module, exports) {

module.exports = "<h1>About</h1>\r\n<p>This is a lazy loaded module.</p>";

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(20);

/***/ }

});
//# sourceMappingURL=0.map
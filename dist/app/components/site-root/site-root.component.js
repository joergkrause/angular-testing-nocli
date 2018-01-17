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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SiteRoot = /** @class */ (function () {
    function SiteRoot(router) {
        this.router = router;
        this.tabsMenu = new Array();
    }
    SiteRoot.prototype.ngOnInit = function () {
        var _this = this;
        this.router
            .config
            .filter(function (route) { return route.path; })
            .forEach(function (r) { return _this.tabsMenu.push({ title: r.data['title'], path: r.path }); });
    };
    SiteRoot = __decorate([
        core_1.Component({
            selector: 'site-root',
            template: "<h1>Hallo Angular</h1> <hs-tabs> <hs-tab *ngFor=\"let tab of tabsMenu\" [title]=\"tab.title\" [path]=\"tab.path\"></hs-tab> </hs-tabs> <router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SiteRoot);
    return SiteRoot;
}());
exports.SiteRoot = SiteRoot;

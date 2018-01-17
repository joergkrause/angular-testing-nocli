"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var cmp = require("./components/index");
var router_config_1 = require("./configurations/router.config");
var widgets_module_1 = require("./widgets/widgets.module");
var site_home_component_1 = require("./components/site-home/site-home.component");
var user_service_1 = require("./services/user.service");
var site_test_component_1 = require("./components/site-test/site-test.component");
var locStrat = { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [cmp.SiteRoot, cmp.SiteDataComponent, site_home_component_1.SiteHomeComponent, site_test_component_1.SiteTestComponent],
            imports: [platform_browser_1.BrowserModule, http_1.HttpClientModule, router_1.RouterModule.forRoot(router_config_1.routesConfig), widgets_module_1.WidgetsModule],
            providers: [locStrat, user_service_1.UserService],
            bootstrap: [cmp.SiteRoot]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

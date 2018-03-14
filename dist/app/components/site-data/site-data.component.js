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
var emitter_service_1 = require("../../services/emitter.service");
var Actions = require("../../configurations/service.actions");
var user_service_1 = require("../../services/user.service");
var SiteDataComponent = /** @class */ (function () {
    function SiteDataComponent(userService) {
        this.userService = userService;
    }
    SiteDataComponent.prototype.ngOnInit = function () {
        this.values = this.userService.getUsers(); //.subscribe(data => this.values = data);
    };
    SiteDataComponent.prototype.select = function (item) {
        emitter_service_1.EmitterService.get(Actions.CURRENT_USER).emit(item);
    };
    SiteDataComponent.prototype.showPhone = function (value) {
        emitter_service_1.EmitterService.get(Actions.SHOW_PHONE).emit(value);
    };
    SiteDataComponent = __decorate([
        core_1.Component({
            selector: 'site-data',
            template: "<p> Our Data: </p> <ul *ngIf=\"values\" #list> <li *ngFor=\"let item of values | async\"> <button class=\"btn btn-sm btn-info\" (click)=\"select(item)\">Select {{ item }}</button> </li> </ul> <form novalidate spellcheck=\"false\"> <div class=\"form-group\"> <label>Some Phone Number:</label> <input #phone required type=\"tel\" class=\"form-control\" /> <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"showPhone(phone.value)\">Show Value</button> </div> </form>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], SiteDataComponent);
    return SiteDataComponent;
}());
exports.SiteDataComponent = SiteDataComponent;

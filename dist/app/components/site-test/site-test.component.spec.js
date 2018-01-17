"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var site_test_component_1 = require("./site-test.component");
describe('SiteTestComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [site_test_component_1.SiteTestComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(site_test_component_1.SiteTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should show "Hallo Test" in paragraph', function () {
        var debugElement = fixture.debugElement;
        fixture.detectChanges();
        var para = debugElement.query(platform_browser_1.By.css('p#test')).nativeElement;
        expect(para.textContent).toContain('Hallo Test');
    });
});

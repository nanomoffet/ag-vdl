(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
	(factory((global['ag-vdl'] = {}),global.ng.core,global.ng.common,global.ng.platformBrowser));
}(this, (function (exports,core,common,platformBrowser) { 'use strict';

var HeaderComponent = /** @class */ (function () {
    /**
     * @param {?} sanitizer
     */
    function HeaderComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.getStyle = function () {
        var /** @type {?} */ style = "\n      color: " + this.config.color + ";\n      font-size: " + this.config.size + ";\n      text-align: " + this.config.align + ";\n    ";
        console.log(style);
        var /** @type {?} */ safeStyle = this.sanitizer.bypassSecurityTrustStyle(style);
        return safeStyle;
    };
    return HeaderComponent;
}());
HeaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'vdl-header',
                template: "\n    <h1 [style]=\"getStyle()\">\n      <ng-content></ng-content>\n    </h1>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = function () { return [
    { type: platformBrowser.DomSanitizer, },
]; };
HeaderComponent.propDecorators = {
    'config': [{ type: core.Input },],
};
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    return TestModule;
}());
TestModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [HeaderComponent],
                exports: [
                    HeaderComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TestModule.ctorParameters = function () { return []; };

exports.TestModule = TestModule;
exports.ɵa = HeaderComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ag-vdl.umd.js.map

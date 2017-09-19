import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
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
    { type: Component, args: [{
                selector: 'vdl-header',
                template: "\n    <h1 [style]=\"getStyle()\">\n      <ng-content></ng-content>\n    </h1>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = function () { return [
    { type: DomSanitizer, },
]; };
HeaderComponent.propDecorators = {
    'config': [{ type: Input },],
};
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    return TestModule;
}());
TestModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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
/**
 * Generated bundle index. Do not edit.
 */
export { TestModule, HeaderComponent as ɵa };
//# sourceMappingURL=ag-vdl.es5.js.map

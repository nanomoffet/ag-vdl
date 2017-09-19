import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

class HeaderComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    getStyle() {
        const /** @type {?} */ style = `
      color: ${this.config.color};
      font-size: ${this.config.size};
      text-align: ${this.config.align};
    `;
        console.log(style);
        const /** @type {?} */ safeStyle = this.sanitizer.bypassSecurityTrustStyle(style);
        return safeStyle;
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'vdl-header',
                template: `
    <h1 [style]="getStyle()">
      <ng-content></ng-content>
    </h1>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = () => [
    { type: DomSanitizer, },
];
HeaderComponent.propDecorators = {
    'config': [{ type: Input },],
};

class TestModule {
}
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
TestModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { TestModule, HeaderComponent as ɵa };
//# sourceMappingURL=ag-vdl.js.map

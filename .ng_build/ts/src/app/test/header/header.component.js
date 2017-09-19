import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class HeaderComponent {
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
function HeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    HeaderComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HeaderComponent.ctorParameters;
    /** @type {?} */
    HeaderComponent.propDecorators;
    /** @type {?} */
    HeaderComponent.prototype.config;
    /** @type {?} */
    HeaderComponent.prototype.sanitizer;
}
//# sourceMappingURL=header.component.js.map